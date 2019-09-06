import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon, { Type } from '../icon';
import { IProps, HTMLDivProps } from '../utils/props'
import './style/index.less';

export type IconFun = (item: ITreeData, node?: { isOpen?: boolean, noChild?: boolean, openKeys?: ITreeProps['openKeys'], selectedKeys?: ITreeProps['selectedKeys'] }) => React.ReactElement;

export interface ITreeProps extends IProps, HTMLDivProps {
  icon?: Type | IconFun;
  data?: ITreeData[];
  openKeys?: ITreeData['key'][];
  selectedKeys?: ITreeData['key'][];
  defaultExpandAll?: boolean;
  /**
   * 是否自动展开父节点
   */
  autoExpandParent?: boolean;
  /**
   * 是否展示连接线
   */
  showLine?: boolean;
  iconAnimation?: boolean;
  isSelected?: boolean;
  /**
   * 子节点受父节点控制设置 `true`，需要配合 `multiple` 参数使用。
   */
  checkStrictly?: boolean;
  /**
   * 支持点选多个节点
   */
  multiple?: boolean;
  renderTitle?: (item: ITreeData, node?: { selected?: boolean, noChild?: boolean, isHalfChecked?: boolean, openKeys?: ITreeProps['openKeys'], selectedKeys?: ITreeProps['selectedKeys'] }) => React.ReactElement;
  onExpand?: (key: ITreeData['key'], expanded: boolean, item: ITreeData, evn: React.MouseEvent<HTMLElement>) => void;
  onSelected?: (keys: ITreeData['key'][], key: ITreeData['key'], selected: boolean, item: ITreeData, evn: React.MouseEvent<HTMLElement>) => void;
}

export interface ITreeData {
  label?: React.ReactNode;
  children?: ITreeData[];
  key?: string | number;
  [keyName: string]: any;
}

export interface ITreeState {
  openKeys?: ITreeData['key'][];
  selectedKeys?: ITreeData['key'][];
  halfCheckedKeys?: ITreeData['key'][];
}

const noop = () => undefined;

/**
 * a contains b
 * @param {Array} a
 * @param {Array} b
 */
const isContained = (a: any[], b: any[]) => {
  if (!(a instanceof Array) || !(b instanceof Array)) return false;
  if (a.length < b.length) return false;
  const aStr = a.toString();
  for (let i = 0, len = b.length; i < len; i += 1) {
    if (aStr.indexOf(b[i]) === -1) return false;
  }
  return true;
};

const getChildKeys = (childs: ITreeData[] = [], result: ITreeData['key'][] = []): ITreeData['key'][] => {
  childs.forEach((item) => {
    result.push(item.key as string | number);
    if (item.children && item.children.length > 0) {
      result = result.concat(getChildKeys(item.children));
    }
  });
  return result;
};

const getParentKeys = (childs: ITreeData = {}, result: ITreeData['key'][] = []) => {
  if (childs.key) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentKeys(childs.parent, result);
  }
  return result;
};

const getParentSelectKeys = (childs: ITreeData = {}, selectedKeys: ITreeData['key'][] = [], result: ITreeData['key'][] = []) => {
  if (childs.key && childs.children && isContained(selectedKeys, getChildKeys(childs.children))) {
    result.push(childs.key);
    if (childs.parent && !childs.parent.parent) {
      if (isContained(selectedKeys, getChildKeys(childs.children))) {
        selectedKeys = selectedKeys.concat(result);
      }
      if (isContained(selectedKeys, getChildKeys(childs.parent.children))) {
        result.push(childs.parent.key);
      }
    }
  }
  if (childs.parent) {
    result = getParentSelectKeys(childs.parent, selectedKeys, result);
  }
  return result;
};

export default class Tree extends React.Component<ITreeProps, ITreeState> {
  public static defaultProps: ITreeProps = {
    prefixCls: 'w-tree',
    icon: 'caret-right',
    data: [],
    openKeys: [],
    selectedKeys: [],
    defaultExpandAll: false,
    showLine: false,
    iconAnimation: true,
    isSelected: true,
    checkStrictly: false,
    multiple: false,
    onExpand: noop,
    onSelected: noop,
  }
  constructor(props: ITreeProps) {
    super(props);
    this.state = {
      openKeys: props.openKeys || [],
      selectedKeys: props.selectedKeys || [],
      halfCheckedKeys: props.selectedKeys || [],
    };
  }
  componentDidMount() {
    const { defaultExpandAll, selectedKeys, data } = this.props;
    const openKeys = getChildKeys(data);
    if (defaultExpandAll) {
      this.setState({ openKeys });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: ITreeProps) {
    if (nextProps.openKeys !== this.props.openKeys) {
      this.setState({ openKeys: nextProps.openKeys });
    }
    if (nextProps.selectedKeys !== this.props.selectedKeys) {
      this.setState({ selectedKeys: nextProps.selectedKeys });
    }
  }
  onItemSelected(item: ITreeData, evn: React.MouseEvent<HTMLElement>) {
    const { onSelected, multiple, checkStrictly } = this.props;
    let selKeys = [...this.state.selectedKeys as ITreeData['key'][]];

    const findKey = selKeys.find(v => v === item.key);
    let selected = false;
    if (!findKey) {
      selected = true;
      selKeys.push(item.key);
    } else {
      selKeys = selKeys.filter(v => v !== item.key);
    }
    if (checkStrictly) {
      if (!findKey) {
        selKeys = selKeys.concat(getChildKeys(item.children).filter(val => selKeys.indexOf(val) === -1));
        selKeys = selKeys.concat(getParentSelectKeys(item, selKeys));
        selKeys = Array.from(new Set(selKeys)); // Remove duplicates.
      } else {
        selKeys = selKeys.filter(val => getChildKeys(item.children).indexOf(val) === -1);
        selKeys = selKeys.filter(val => getParentKeys(item.parent).indexOf(val) === -1);
      }
    }
    if (!multiple) {
      selKeys = !findKey ? [item.key] : [];
    }
    this.setState({ selectedKeys: selKeys }, () => {
      onSelected && onSelected(selKeys, item.key, selected, item, evn);
    });
  }
  onExit = (node: HTMLElement) => {
    node.style.height = `${node.scrollHeight}px`;
  }
  onExiting = (node: HTMLElement) => {
    node.style.height = '1px';
  }
  onEnter = (node: HTMLElement, isAppearing: boolean) => {
    node.style.height = '1px';
  }
  onEntering = (node: HTMLElement, isAppearing: boolean) => {
    node.style.height = `${node.scrollHeight}px`;
  }
  onEntered = (node: HTMLElement, isAppearing: boolean) => {
    node.style.height = 'initial';
  }
  onItemClick(item: ITreeData, evn: React.MouseEvent<HTMLElement>) {
    if (!item.children) {
      return;
    }
    const { onExpand } = this.props;
    const { openKeys } = this.state;
    let currentKeys = [...openKeys as ITreeData['key'][]];
    const key = currentKeys.find(v => v === item.key);
    const cls = evn.currentTarget.className.replace(/(\s)open/g, '');
    let expanded = false;
    if (!key && item.key) {
      currentKeys.push(item.key);
      evn.currentTarget.className = classnames(cls, 'open');
      expanded = true;
    } else {
      currentKeys = currentKeys.filter(v => v !== item.key);
      evn.currentTarget.className = cls;
    }
    this.setState({ openKeys: currentKeys }, () => {
      onExpand && onExpand(item.key, expanded, item, evn);
    });
  }
  renderTreeNode(data: ITreeData[], level: number, parent?: ITreeData) {
    const { prefixCls, renderTitle, icon, iconAnimation, isSelected } = this.props;
    const { openKeys, selectedKeys } = this.state;
    let isOpen = false;

    if (parent && parent.key) {
      isOpen = !!(openKeys && openKeys.indexOf(parent.key) > -1);
    }
    return (
      <CSSTransition
        classNames={prefixCls}
        in={isOpen}
        timeout={200}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onEntering={this.onEntering}
      >
        <ul
          className={classnames({
            [`${prefixCls}-open`]: level !== 1 && isOpen,
            [`${prefixCls}-close`]: level !== 1 && !isOpen,
          })}
        >
          {data.map((item, idx: number) => {
            item.parent = parent;
            const selected = !!(selectedKeys && selectedKeys.indexOf(item.key) > -1);
            const noChild = !item.children;
            const itemIsOpen = openKeys && openKeys.indexOf(item.key) > -1 && !!item.children;
            const iconItem = typeof icon === 'function' ? icon(item, { isOpen: !!itemIsOpen, noChild, openKeys, selectedKeys }) : icon;
            const childKeys = noChild ? [] : getChildKeys(item.children);
            const checkedKeys = selectedKeys ? selectedKeys.filter(key => childKeys.indexOf(key) > -1) : [];
            const isHalfChecked = checkedKeys.length > 0 && childKeys.length !== checkedKeys.length;
            return (
              <li key={idx}>
                <div className={classnames(`${prefixCls}-label`)}>
                  <span className={`${prefixCls}-switcher`} onClick={this.onItemClick.bind(this, item)}>
                    <Icon
                      type={iconItem || 'caret-right'}
                      className={classnames({
                        [`${prefixCls}-switcher-noop`]: typeof icon === 'function',
                        'no-child': noChild,
                        'no-animation': !iconAnimation,
                        open: itemIsOpen,
                      })}
                    />
                  </span>
                  <div
                    onClick={this.onItemSelected.bind(this, item)}
                    className={classnames(`${prefixCls}-title`, {
                      selected: selected && isSelected,
                      disabled: item.disabled,
                    })}
                  >
                    {renderTitle ? renderTitle(item, { selected, noChild, openKeys, isHalfChecked, selectedKeys }) : <span>{item.label}</span>}
                  </div>
                </div>
                {item.children && this.renderTreeNode(item.children, level + 1, item)}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    );
  }
  render() {
    const { prefixCls, className, icon, data, openKeys, selectedKeys, isSelected, autoExpandParent, defaultExpandAll, checkStrictly, showLine, iconAnimation, renderTitle, onExpand, onSelected, ...elementProps } = this.props;
    const cls = classnames(className, prefixCls, { [`${prefixCls}-line`]: showLine });
    return (
      <div className={cls} {...elementProps}>
        {this.renderTreeNode(data as ITreeData[], 1)}
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';

const noop = () => undefined;

/**
 * a contains b
 * @param {Array} a
 * @param {Array} b
 */
const isContained = (a, b) => {
  if (!(a instanceof Array) || !(b instanceof Array)) return false;
  if (a.length < b.length) return false;
  const aStr = a.toString();
  for (let i = 0, len = b.length; i < len; i += 1) {
    if (aStr.indexOf(b[i]) === -1) return false;
  }
  return true;
};

const getChildKeys = (childs = [], result = []) => {
  childs.forEach((item) => {
    result.push(item.key);
    if (item.children && item.children.length > 0) {
      result = result.concat(getChildKeys(item.children));
    }
  });
  return result;
};

const getParentKeys = (childs = {}, result = []) => {
  if (childs.key) {
    result.push(childs.key);
  }
  if (childs.parent) {
    result = getParentKeys(childs.parent, result);
  }
  return result;
};

const getParentSelectKeys = (childs = {}, selectedKeys = [], result = []) => {
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

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: props.openKeys || [],
      selectedKeys: props.selectedKeys || [],
    };
  }
  componentDidMount() {
    const { defaultExpandAll, data } = this.props;
    const openKeys = getChildKeys(data);
    if (defaultExpandAll) {
      this.setState({ openKeys });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.openKeys !== this.props.openKeys) {
      this.setState({ openKeys: nextProps.openKeys });
    }
    if (nextProps.selectedKeys !== this.props.selectedKeys) {
      this.setState({ selectedKeys: nextProps.selectedKeys });
    }
  }
  onItemSelected(item, evn) {
    const { onSelected, multiple, checkStrictly } = this.props;
    let { selectedKeys } = this.state;
    const findKey = selectedKeys.find(v => v === item.key);
    let selected = false;
    if (!findKey) {
      selected = true;
      selectedKeys.push(item.key);
    } else {
      selectedKeys = selectedKeys.filter(v => v !== item.key);
    }
    if (checkStrictly) {
      if (!findKey) {
        selectedKeys = selectedKeys.concat(getChildKeys(item.children).filter(val => selectedKeys.indexOf(val) === -1));
        selectedKeys = selectedKeys.concat(getParentSelectKeys(item, selectedKeys));
        selectedKeys = Array.from(new Set(selectedKeys)); // Remove duplicates.
      } else {
        selectedKeys = selectedKeys.filter(val => getChildKeys(item.children).indexOf(val) === -1);
        selectedKeys = selectedKeys.filter(val => getParentKeys(item.parent).indexOf(val) === -1);
      }
    }
    if (!multiple) {
      selectedKeys = !findKey ? [item.key] : [];
    }
    this.setState({ selectedKeys }, () => {
      onSelected(selectedKeys, item.key, selected, item, evn);
    });
  }
  onItemClick(item, evn) {
    const { onExpand } = this.props;
    let { openKeys } = this.state;
    const key = openKeys.find(v => v === item.key);
    const cls = evn.currentTarget.className.replace(/(\s)open/g, '');
    let expanded = false;
    if (!key) {
      openKeys.push(item.key);
      evn.currentTarget.className = classnames(cls, 'open');
      expanded = true;
    } else {
      openKeys = openKeys.filter(v => v !== item.key);
      evn.currentTarget.className = cls;
    }
    this.setState({ openKeys }, () => {
      onExpand(item.key, expanded, item, evn);
    });
  }
  renderTreeNode(data, level, parent) {
    const { prefixCls, renderTitle, icon, iconAnimation } = this.props;
    const { openKeys, selectedKeys } = this.state;
    let isOpen = false;

    if (parent) {
      isOpen = openKeys.indexOf(parent.key) > -1;
    }
    return (
      <ul
        className={classnames({
          [`${prefixCls}-open`]: level !== 1 && isOpen,
          [`${prefixCls}-close`]: level !== 1 && !isOpen,
        })}
      >
        {data.map((item, idx) => {
          item.parent = parent;
          const selected = selectedKeys.indexOf(item.key) > -1;
          const noChild = !item.children;
          const itemIsOpen = openKeys.indexOf(item.key) > -1;
          const iconItem = typeof icon === 'function' ? icon(item, itemIsOpen, noChild) : icon;
          return (
            <li key={idx}>
              <div className={classnames(`${prefixCls}-label`)}>
                <Icon
                  type={iconItem || 'caret-right'}
                  onClick={this.onItemClick.bind(this, item)}
                  className={classnames({ 'no-child': noChild, 'no-animation': !iconAnimation, open: itemIsOpen })}
                />
                <div
                  onClick={this.onItemSelected.bind(this, item)}
                  className={classnames(`${prefixCls}-title`, { selected })}
                >
                  {renderTitle ? renderTitle(item, selected, noChild) : <span>{item.label}</span>}
                </div>
              </div>
              {item.children && this.renderTreeNode(item.children, level + 1, item)}
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    const { prefixCls, className, icon, data, openKeys, selectedKeys, autoExpandParent, defaultExpandAll, checkStrictly, showLine, iconAnimation, renderTitle, onExpand, onSelected, ...elementProps } = this.props;
    const cls = classnames(className, `${prefixCls}`, { [`${prefixCls}-line`]: showLine });
    return (
      <div className={cls} {...elementProps}>
        {this.renderTreeNode(data, 1)}
      </div>
    );
  }
}

Tree.propTypes = {
  prefixCls: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  data: PropTypes.array,
  openKeys: PropTypes.array,
  selectedKeys: PropTypes.array,
  defaultExpandAll: PropTypes.bool,
  showLine: PropTypes.bool,
  iconAnimation: PropTypes.bool,
  checkStrictly: PropTypes.bool,
  multiple: PropTypes.bool,
  renderTitle: PropTypes.func,
  onExpand: PropTypes.func,
  onSelected: PropTypes.func,
};

Tree.defaultProps = {
  prefixCls: 'w-tree',
  icon: 'caret-right',
  data: [],
  openKeys: [],
  selectedKeys: [],
  defaultExpandAll: false,
  showLine: false,
  iconAnimation: true,
  checkStrictly: false,
  multiple: false,
  onExpand: noop,
  onSelected: noop,
};

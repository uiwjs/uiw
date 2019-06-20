import React from 'react';
import classnames from 'classnames';
import Panel from './Panel';
import { IProps, HTMLDivProps } from '../utils/props';
import './style/index.less';

export interface ICollapseProps extends IProps {
  accordion?: boolean;
  activeKey?: string | string[];
  bordered?: boolean;
  showArrow?: boolean;
  onChange?: (activeKey: string[] | React.MouseEvent<HTMLDivElement>) => void;
}

export interface ICollapseState {
  activeKey: string[];
}

function toArray(activeKey: ICollapseProps['activeKey']) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

export default class Collapse extends React.Component<ICollapseProps & HTMLDivProps, ICollapseState> {
  public static defaultProps: ICollapseProps = {
    prefixCls: 'w-collapse',
    accordion: false,
    showArrow: true,
  }
  static Panel = Panel;
  constructor(props: ICollapseProps & HTMLDivProps) {
    super(props);
    this.state = {
      activeKey: toArray(props.activeKey),
    };
  }
  componentWillReceiveProps(nextProps: ICollapseProps) {
    if (nextProps.activeKey !== this.props.activeKey) {
      this.setState({ activeKey: toArray(nextProps.activeKey) });
    }
  }
  onItemClick(key: string) {
    const { onChange } = this.props;
    let activeKey: string[] = this.state.activeKey;
    if (this.props.accordion) {
      activeKey = activeKey[0] === key ? [] : [key];
    } else {
      activeKey = [...activeKey];
      const index = activeKey.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        activeKey.splice(index, 1);
      } else {
        activeKey.push(key);
      }
    }
    this.setState({ activeKey }, () => {
      onChange && onChange(activeKey);
    });
  }
  render() {
    const { prefixCls, className, children, accordion, bordered, showArrow, activeKey, onChange, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, {
      'w-noborder': bordered,
    });
    return (
      <div className={cls} {...resetProps}>
        {React.Children.map(children, (child: any, index) => {
          // 如果没有密钥提供，请使用面板顺序作为默认密钥
          const key = child.key || String(index);
          const { disabled } = child.props;
          let isActive = false;
          if (accordion) { // 手风琴模式下默认选择第一个
            isActive = this.state.activeKey[0] === key;
          } else {
            isActive = this.state.activeKey.indexOf(key) > -1;
          }
          const childProps = {
            prefixCls,
            isActive,
            disabled,
            showArrow,
            onItemClick: disabled ? () => { } : () => this.onItemClick(key),
            ...child.props,
          };
          return React.cloneElement(child, childProps);
        })}
      </div>
    );
  }
}

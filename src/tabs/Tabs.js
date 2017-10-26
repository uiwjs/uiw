import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Icon from '../icon';

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: props.children,
      activeKey: props.activeKey,
      isFirstMount: true,
      slideStyle: {
        width: 0,
        left: 0
      }
    }
  }
  componentDidMount() {
    this.updateFirstMount()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isFirstMount !== prevState.isFirstMount) {
      this.calcSlideStyle()

    }
  }
  updateFirstMount() {
    this.setState({
      isFirstMount: false
    })
  }
  calcSlideStyle() {
    if (!this.tabsBar.length) return;
    const { activeKey } = this.state;
    let children = this.state.children instanceof Array ? this.state.children : [this.state.children];
    let style = {}
    let left = 0;
    children.every((item, idx) => {
      let elm = this.tabsBar[idx];
      if (item.key === activeKey) {
        style.width = elm.clientWidth;
        return false;
      } else {
        left += elm.clientWidth
        return true;
      }
    })
    style.left = left;
    this.setState({ slideStyle: style })
  }
  onTabREmove(item, idx, e) {
    let { children, activeKey } = this.state;
    const { onTabRemove } = this.props;
    let state = {};
    state.children = [...children]
    e.stopPropagation();
    state.children.splice(idx, 1);

    if (item.key === activeKey && state.children.length > 0) {
      state.activeKey = state.children[0].key;
    }
    this.setState({ ...state }, () => {
      onTabRemove(item, idx, e);
    });
  }
  onTabClick(item, key, e) {
    const { onTabClick } = this.props;
    if (item.props.disabled) return;
    this.setState({
      activeKey: key
    }, () => {
      this.calcSlideStyle(key);
      onTabClick(item, key, e)
    })
  }
  render() {
    const { prefixCls, className, position, type, sequence, onTabClick, closable, onTabRemove, ...other } = this.props;
    const { activeKey, children, slideStyle } = this.state;
    const cls = this.classNames(prefixCls, className, {
      [`${prefixCls}-${position}`]: position,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-vertical`]: position === 'left' || position === 'right',
    })
    // 寄存Dom节点实体
    this.tabsBar = [];
    delete other.activeKey;
    let Line = (type === 'line' && (position === 'top' || position === 'bottom')) && <div style={slideStyle} className={this.classNames(`${prefixCls}-slide`)}></div>;

    return (
      <div className={cls} {...other}>
        <div className={`${prefixCls}-bar`}>
          <div className={`${prefixCls}-nav`}>
            {
              React.Children.map(children, (item, idx) => {
                const { label, disabled } = item.props;
                return (
                  <Transition in={true}>
                    <div ref={(elm) => elm && this.tabsBar.push(elm)} className={this.classNames(`${prefixCls}-tab`, {
                      'w-disabled': disabled,
                      'w-active': item.key === activeKey,
                      'w-closable': closable
                    })} onClick={this.onTabClick.bind(this, item, item.key)}>
                      {label}
                      {item.props.closable !== false && closable && <Icon type="close" onClick={this.onTabREmove.bind(this, item, idx)} />}
                    </div>
                  </Transition>
                );
              })
            }
            {Line}
          </div>
        </div>
        <div ref='tabcon' className={`${prefixCls}-content`}>
          {
            React.Children.map(children, item => {
              const { key, props } = item;
              return (
                <Transition in={key === activeKey} sequence={props.sequence ? props.sequence : sequence} mountOnEnter={false} unmountOnExit={false}>
                  <div ref={(elm) => {
                    if (elm && key === activeKey) {
                      // 设置内容高度
                      let timer = setTimeout(() => {
                        clearTimeout(timer)
                        this.refs.tabcon.style.height = elm.clientHeight + 'px';
                      })
                    }
                  }} className={this.classNames(`${prefixCls}-pane`, {
                    'w-disabled': props.disabled,
                  })}> {props.children} </div>
                </Transition>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  prefixCls: PropTypes.string,
  sequence: PropTypes.string,
  type: PropTypes.oneOf(['line', 'card']),
  activeKey: PropTypes.string, // 当前激活 tab 面板的 key
  onTabClick: PropTypes.func,   // tab 被点击的回调
  onTabRemove: PropTypes.func,   // tab 被点击的回调
  disabled: PropTypes.bool,
  closable: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
}

Tabs.defaultProps = {
  prefixCls: 'w-tabs',
  sequence: 'fadeIn',
  type: 'line',
  disabled: false,
  closable: false,
  position: 'top',
  onTabClick() { },
  onTabRemove() { }
}

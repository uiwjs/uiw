import React from 'react';
import { Component, PropTypes } from '../utils/';
import Notification from './Notification';

let notify = {};
export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notify: {},
      placement: "",
      visible: true
    }
    this.addNotify = this.addNotify.bind(this);
  }
  addNotify(porps) {
    notify[porps._key] = porps;
    this.setState({ visible: true, placement: porps.placement })
  }
  delNotify(key) {
    let _notify = {}
    for (let i in notify) {
      if (i !== key) _notify[key] = notify[key]
    }
    notify = _notify;
  }
  render() {
    const { prefixCls } = this.props;
    const { placement, visible } = this.state;
    if (!visible) return null;
    return (
      <div className={this.classNames(prefixCls, placement)}>
        {Object.keys(notify).map((key) => {
          return <Notification delNotify={this.delNotify.bind(this)} key={key} {...notify[key]} />
        })}
      </div>
    )
  }
}

Container.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
Container.defaultProps = {
  placement: "top", // 位置
  prefixCls: "w-notification-warpper",
};


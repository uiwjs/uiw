import React from 'react';
import { Component, PropTypes } from '../utils/';
// import Notification from './Notification';
// import Message from './Message';
// export function isEmpty(obj) {
//   if (obj === null || obj === undefined) return true
//   if (typeof obj === 'number' && isNaN(obj)) return true
//   if (obj.length !== undefined) return obj.length === 0
//   if (obj instanceof Date) return false
//   if (typeof obj === 'object') return Object.keys(obj).length === 0
//   return false
// }

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notify: {},
      placement: ""
    }
    this.addNotify = this.addNotify.bind(this)
  }

  addNotify(msg) {
    let notify = this.state.notify
    notify[msg._id] = msg
    this.setState({ notify, placement: msg.placement })
  }

  render() {
    const { prefixCls } = this.props;
    const { notify, placement } = this.state;
    return (
      <div className={this.classNames(prefixCls, placement)}>
        {Object.keys(notify).map((key) => notify[key].component)}
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


import React from 'react';
import { Component, PropTypes } from '../utils/';
import Message from './Message';

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {}
    }
    this.addMessage = this.addMessage.bind(this)
  }

  addMessage(msg) {
    let message = this.state.message
    message[msg.id] = msg
    this.setState({ message, placement: msg.placement, currentId: msg.id })
  }
  delMessage(props, sub) {
    let { message } = this.state;
    if (message[props.id]) {
      delete message[props.id];
    }
  }
  render() {
    const { prefixCls, className } = this.props;
    const { message, currentId } = this.state;
    let cls = this.classNames(prefixCls);
    let _placement = message[currentId] && message[currentId].placement;
    if (_placement) {
      cls = this.classNames(className, cls, {
        [`${prefixCls}-top`]: _placement === 'top',            // 默认顶部中间
        [`${prefixCls}-bottom`]: _placement === 'bottom',         // 底部中间
        [`${prefixCls}-top-left`]: _placement === 'topLeft',        // 左边上角
        [`${prefixCls}-top-right`]: _placement === 'topRight',       // 右边上角
        [`${prefixCls}-bottom-left`]: _placement === 'bottomLeft',     // 左边下角
        [`${prefixCls}-bottom-right`]: _placement === 'bottomRight',    // 右边下角
      })
    }
    return (
      <div className={cls}>
        {
          Object.keys(message).map((key) => {
            return <Message key={key} {...message[key]} delMessage={this.delMessage.bind(this)} />
          })
        }
      </div>
    )
  }
}

Container.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
Container.defaultProps = {
  placement: "top", // 位置
  prefixCls: "w-message",
};


import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert'

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }
  onClose() {
    this.stopTimer();
    this.setState({
      visible: false
    }, () => {
      this.props.willUnmount();
    });
  }
  componentDidMount() {
    this.startTimer();
  }
  duration() {
    return this.props.duration * 1000;
  }
  stopTimer() { clearTimeout(this.timeout) }
  startTimer() {
    if (this.props.duration) {
      this.timeout = setTimeout(() => {
        this.onClose();
      }, this.duration())
    }
  }
  render() {
    const { prefixCls, type, className, message, description, placement, onClose } = this.props;
    let transition = 'fade-left';
    if (placement === ('topRight' || 'bottomRight')) {
      transition = 'fade-right';
    }
    console.log("type:", type)
    return (
      <Alert
        ref="alerts"
        onMouseLeave={this.startTimer.bind(this)}
        onMouseEnter={this.stopTimer.bind(this)}
        visible={this.state.visible}
        className={this.classNames(`${prefixCls}`, className)}
        type={type}
        showIcon={type ? true : false}
        onClose={onClose}
        transition={transition}
        message={message}
        description={description}
      />
    );
  }
}

Notification.propTypes = {
  prefixCls: PropTypes.string,
  message: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  type: PropTypes.oneOf(['success', 'warning', 'warn', 'info', 'error']),
}

Notification.defaultProps = {
  prefixCls: 'w-notification',
  duration: 4.5,
  showIcon: false,
  top: 12,
  placement: "topRight",
  onClose() { }
}

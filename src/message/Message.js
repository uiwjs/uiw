import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert'

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: props.duration,
      visible: true,
      removeRootElm: false
    }
  }
  componentDidMount() {
    const { duration } = this.props
    if (duration > 0) {
      this.timeout = setTimeout(this.dismiss.bind(this), duration * 1000)
    }
  }
  dismiss() {
    const { onClose } = this.props
    this.setState({ visible: false })
    onClose && onClose()
  }
  /**
   * 动画完成之后删除根节点
   */
  onTransitionendExit() {
    if (!this.state.removeRootElm) {
      this.setState({ removeRootElm: true })
    }
  }
  render() {
    const { content, type, className, ...other } = this.props;
    const { removeRootElm, visible } = this.state;
    // delete other.placement;
    // delete other.duration;
    // delete other.onClose;
    if (removeRootElm) {
      return null
    }
    return (
      <span>
        <Alert showIcon type={type} onTransitionendExit={this.onTransitionendExit.bind(this)} visible={visible} message={content} className={className} {...other} />
      </span>
    );
  }
}

Message.propTypes = {
  content: PropTypes.node,
  duration: PropTypes.number, // 持续时间
  type: PropTypes.string
}
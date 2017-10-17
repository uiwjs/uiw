import React from 'react';
import { Component, PropTypes } from '../utils/';
import Alert from '../alert'

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      duration: props.duration,
      visible: true
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
  render() {
    const { content, type, className, ...other } = this.props;
    // delete other.placement;
    // delete other.duration;
    // delete other.onClose;
    if (!this.state.visible) {
      return null
    }
    return (
      <span>
        <Alert showIcon type={type} message={content} className={className} {...other} />
      </span>
    );
  }
}

Message.propTypes = {
  content: PropTypes.node,
  duration: PropTypes.number, // 持续时间
  type: PropTypes.string
}
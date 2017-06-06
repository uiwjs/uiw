import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert'

export default class Message extends Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: props.duration
    }
  }
  componentDidMount () {
    const { duration } = this.props
    if (duration > 0) {
      this.timeout = setTimeout(this.dismiss.bind(this), duration * 1000)
    }
  }

  dismiss () {
    const {onClose} =this.props
    this.refs.alerts.handleClose()
    onClose&&onClose()
  }
  render() {
    const { content, type, className, ...other } = this.props;
    const { duration } = this.state;
    return (
      <Alert ref="alerts" type={type} className={className} {...other} >
        {content}
      </Alert>
    );
  }
}

Message.propTypes = {
  content: PropTypes.node,
  duration:PropTypes.number, // 持续时间
  type: PropTypes.string
}
import React from 'react';
import {Component, PropTypes} from '../utils/';
import Alert from '../alert'
import Icon from '../icon'

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
    const { content,icon, type, className, ...other } = this.props;
    delete other.placement;
    delete other.duration;
    return (
      <Alert ref="alerts" type={type} className={className} {...other} >
        {icon&&<Icon type={icon} />}
        <span>{content}</span>
      </Alert>
    );
  }
}

Message.propTypes = {
  content: PropTypes.node,
  duration:PropTypes.number, // 持续时间
  type: PropTypes.string
}
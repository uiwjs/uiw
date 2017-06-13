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
  componentWillUnmount(){
    console.log("tessssss")
  }
  dismiss () {
    const {onClose} =this.props
    this.refs.alerts.handleClose()
    console.log("-->",this.refs.alerts.target)
    onClose&&onClose()
  }
  render() {
    const { content, type, className, ...other } = this.props;
    const { duration } = this.state;
    delete other.placement;
    delete other.duration;
    let icon = '';
    switch(type){
      case "warn": icon = "warning-o";break;
      case "default": icon = "information-o";break;
      case "error": icon = "circle-close-o";break;
      case "success": icon = "circle-check-o";break;
    }
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
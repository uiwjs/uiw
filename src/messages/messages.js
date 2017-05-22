import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alerts from '../alerts'

export default class Messages extends Component {

  static propTypes = {
    content: PropTypes.node,
    duration:PropTypes.number,
    type: PropTypes.string
  }
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
    this.refs.alerts.handleClose()
  }
  render() {
    const { content, type, className } = this.props;
    const { duration } = this.state;
    return (
      <Alerts ref="alerts" type={type} className={className} >
        {content}
      </Alerts>
    );
  }
}

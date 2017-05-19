import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alerts from '../alerts'

export default class Messages extends Component {

  static propTypes = {
    content: PropTypes.node,
    duration:PropTypes.number,
    onClose: PropTypes.func,
    type: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = {
      duration: props.duration
    }
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount () {
    const { duration } = this.props
    if (duration > 0) {
      this.timeout = setTimeout(this.dismiss, duration * 1000)
    }
  }

  dismiss () {
    this.props.onClose(this.props.id)
  }
  render() {
    const { content, type, className } = this.props;
    const { duration } = this.state;
    return (
      <Alerts type={type} className={className} onClose={duration <= 0 ? this.dismiss : undefined} >
        {content}
      </Alerts>
    );
  }
}

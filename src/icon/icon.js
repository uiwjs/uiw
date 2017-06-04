import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


export default class Icon extends Component {
  render() {
    return <i className={classNames(`w-icon-${this.props.type}`)}></i>;
  }
}

Icon.propTypes = {
  name: PropTypes.string
}

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

export default class Calendar extends Component {
  static defaultProps = {
    prefixCls: "w-btn",
  };
  static propTypes = {
  }
  render() {
    const { prefixCls } = this.props;
    return (
      <div></div>
    );
  }
}

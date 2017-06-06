import React from 'react';
import {Component, PropTypes} from '../utils/';
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

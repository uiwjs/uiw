import React from 'react';
import { Component } from '../utils/';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    prefixCls: 'w-btn',
  };
  static propTypes = {
  }
  render() {
    // const { prefixCls } = this.props;
    return (
      <div />
    );
  }
}

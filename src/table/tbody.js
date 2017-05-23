import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tbody extends Component{
  render(){
    const { prefixCls, className, data } = this.props;

// {
//   姓名 | 年龄 | 住址
// }

    return(
      <tbody>
      </tbody>
    )
  }
}

Tbody.defaultProps = {
  prefixCls: '',
  columns:[]
};
Tbody.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  data: PropTypes.array,
}
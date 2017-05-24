import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Thead from './thead';
import Tbody from './tbody';
import Colgroup from './colgroup';

export default class Table extends Component{
  state={}
  renderCaption(){
    const { prefixCls, caption } = this.props;
    return (
      <caption className={`${prefixCls}-caption`}>{caption}</caption>
    )
  }
  render(){
    const { prefixCls, className, caption, columns, data } = this.props;
    return(
      <div className={prefixCls}>
        <table>
          <Colgroup columns={columns}/>
          {caption&&this.renderCaption()}
          <Thead columns={columns}/>
          <Tbody columns={columns} data={data} />
        </table>
      </div>
    )
  }
}

Table.defaultProps = {
  prefixCls: 'w-table',
  size: '',  // large | small
  data:[],
  columns:[]
};
Table.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  size: PropTypes.string,
  data: PropTypes.array,
}
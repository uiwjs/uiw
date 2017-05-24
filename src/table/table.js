import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Thead from './thead';
import Tbody from './tbody';
import "./style/index.less";

export default class Table extends Component{
  state={}
  render(){
    const { prefixCls, className, columns, data } = this.props;
    return(
      <div className={prefixCls}>
        <table>
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
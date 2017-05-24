import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Thead from './thead';
import Tbody from './tbody';
import "./style/index.less";

export default class Table extends Component{
  
  componentDidMount(){
  }
  getRender(key){
    console.log("key::",key,this.refs)
    // return this.refs.thead.getRender(key);
  }

  render(){
    const { prefixCls, className, columns, data } = this.props;
    return(
      <div className={prefixCls}>
        <div onClick={()=>{
          console.log(this.refs)
        }}>dsf</div>
        <table>
          <Thead ref="thead" columns={columns}/>
          <Tbody ref="tnody" getRender={this.getRender.bind(this)} data={data} />
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
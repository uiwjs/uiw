import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Thead from './thead';
import Tbody from './tbody';
import Colgroup from './colgroup';
import Checkboxs from '../checkbox/';
import {compare} from '../utils/objects';

export default class Table extends Component{
  constructor(props){
    super(props);
    this.state = {
      indeterminate:false,
      rowsChecked:[]
    }
    this.onRowSelection = this.onRowSelection.bind(this)
  }
  renderCaption(){
    const { prefixCls, caption } = this.props;
    return (
      <caption className={`${prefixCls}-caption`}>{caption}</caption>
    )
  }
  onRowSelection(row, index, checked, e){
    const {rowsChecked,indeterminate} = this.state;
    console.log("this.state:",this.state)
    // if(rowsChecked.length< 1 && checked){
    //   this.setState({
    //     indeterminate:true
    //   })
    // }
    this.setState({
      indeterminate:!this.state.indeterminate
    })
    // console.log("--23>",compare(
    //   {x:3,b:14},
    //   {x:3,"b":15}

    // ),row, index, checked)
  }
  // 添加一列 Checkbox
  addSelectDateColumn(data){
    let newdata = []
    for(let i = 0;i < data.length;i++){
      let temp = {_select:'_select'};
      for(let a in data[i]) temp[a] = data[i][a];
      newdata.push(temp)
    }
    return newdata;
  }
  render(){
    const { prefixCls, className, rowSelection, caption, columns, data } = this.props;
    // console.log("this.2state::",this.state)
    // checkbox 选择数据如果存在删除重新渲染
    // if(columns[0].key=='_select'){
    //   columns.splice(0,1)
    // }
    // columns.unshift({
    //   title: (
    //     <Checkboxs indeterminate={this.state.indeterminate} onChange={(e)=>{
    //       console.log(`checked = ${e.target.checked}=`,this.state.indeterminate);
    //     }}>
    //     </Checkboxs>
    //   ),
    //   key: '_select',
    //   className:"_select",
    //   render:(text, row, index)=>{
    //     return (
    //       <Checkboxs onChange={(e,checked)=>this.onRowSelection(row, index, checked, e)}>
    //       </Checkboxs>
    //     )
    //   }
    // })

    return(
      <div className={prefixCls}>
        <table>
          <Colgroup columns={columns}/>
          {caption&&this.renderCaption()}
          <Thead rowSelection={rowSelection} columns={columns}/>
          <Tbody rowSelection={rowSelection} columns={columns} data={data} />
        </table>
      </div>
    )
  }
}

Table.defaultProps = {
  prefixCls: 'w-table',
  size: 'default',
  data:[],
  columns:[]
};
Table.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  data: PropTypes.array,
  rowSelection: PropTypes.object,
  // onSelectAll: PropTypes.func,
  // onSelect: PropTypes.func,
  scroll: PropTypes.object,
}
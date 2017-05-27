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
      headindeterminate:false,  //表头半选中状态
      headchecked:false,        //表头选中状态
      rowsCheckedAll:false,     //所有行选中状态
      rowsChecked:{},
      rowsCount:0,

      scrollLeft:0
    }
  }
  componentDidMount() {
    const {data} = this.props;
    // 默认选择数据
    let checkedRow = {};
    for(let i =0; i< data.length;i++){
      if(data[i]._checked) checkedRow[i] = data[i]
    }
  }
  // 表头
  renderCaption(){
    const { prefixCls, caption } = this.props;
    return (<caption className={`${prefixCls}-caption`}>{caption}</caption>)
  }
  onRowSelection=(row, index, checked, e)=>{
    const {rowsChecked,rowsCount,headindeterminate} = this.state;
    const {data,onSelect,rowSelection} = this.props;

    let count = checked ? rowsCount+1 : rowsCount-1;
    this.setState({
      rowsCount:count,
      headchecked:count===data.length,
      headindeterminate: !(count===data.length || count===0)
    })
    rowSelection.onSelect&&rowSelection.onSelect(row,index,checked, e)
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
  // 全选
  selectedAll=(e,checked)=>{
    const {rowSelection,data} = this.props;
    this.setState({
      rowsCount:checked?data.length:0,
      headchecked:checked
    })
    this.refs.tbody.selectedAll(checked,(selectDatas)=>{
      rowSelection.onSelectAll&&rowSelection.onSelectAll(selectDatas,checked,e);
    })
  }
  //横向滚动事件
  onScroll(e){
    this.setState({
      scrollLeft:e.target.scrollLeft
    })
  }
  render(){
    const { prefixCls, className, onChange, rowSelection, caption, columns, data, height, width } = this.props;
    const { headindeterminate,headchecked } = this.state
    // checkbox 选择数据如果存在删除重新渲染
    if(rowSelection){
      if(columns[0].key=='_select'){
        columns.splice(0,1)
      }
      columns.unshift({
        key: '_select',
        className:"_select"
      })
    }

    let tableTbody = (<Tbody 
        ref="tbody"
        rowSelection={rowSelection}
        onRowSelection={this.onRowSelection}
        columns={columns} data={data} />
      )

    let tableThead =(<Thead 
        rowSelection={rowSelection} 
        headindeterminate={headindeterminate} 
        headchecked={headchecked} 
        selectedAll={this.selectedAll}
        columns={columns}/>
      )

    let tableColgroup = (<Colgroup columns={columns}/>);
    let tableCaption = caption&&this.renderCaption();

    if(height||width){
      // 固定头 或者左右滚动
      return(
        <div className={classNames(prefixCls,`${prefixCls}-scroll`)}>
          <div ref={(div)=>{
            if( div ) div.scrollLeft = this.state.scrollLeft;
          }} className={`${prefixCls}-head`}>
            <table style={{width}}>
              {tableColgroup}
              {tableCaption}
              {tableThead}
            </table>
          </div>
          <div onScroll={this.onScroll.bind(this)} style={{height}} className={`${prefixCls}-body`}>
            <table style={{width}}>
              {tableColgroup}
              {tableTbody}
            </table>
          </div>
        </div>
      )
    }

    // 默认的table
    return(
      <div className={prefixCls}>
        <table>
          {tableColgroup}
          {tableCaption}
          {tableThead}
          {tableTbody}
        </table>
      </div>
    )
  }
}

Table.defaultProps = {
  prefixCls:'w-table',
  size: 'default',
  data:[],
  columns:[]
};

Table.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  data: PropTypes.array,
  height: PropTypes.number,
  rowSelection: PropTypes.object,
  // onSelectAll: PropTypes.func,
  // onSelect: PropTypes.func,
  scroll: PropTypes.object,
}
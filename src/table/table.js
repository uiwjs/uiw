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
      rowsChecked:{},           //选中的数据
      rowsCount:0,              //选中的行数

      scrollLeft:0
    }
  }
  componentDidMount() {
    const {data} = this.props;
    // 默认选择数据
    // let checkedRow = {};
    // for(let i =0; i< data.length;i++){
    //   if(data[i]._checked) checkedRow[i] = data[i]
    // }
    let checkedRow = [],rowsCount=0;
    for(let i =0; i< data.length;i++){
      if(data[i]._checked){
        rowsCount +=1;
        checkedRow.push(data[i]);
      }
    }
    if(checkedRow.length > 0 &&  checkedRow.length != data.length){
      this.setState({
        rowsCount,
        headindeterminate:true,
        checkedRow:checkedRow
      })
    }else if(checkedRow.length == data.length){
      this.setState({
        rowsCount,
        headindeterminate:false,
        headchecked:true,
        checkedRow:checkedRow
      })

    }
    // console.log
    console.log("checkedRow::",checkedRow)
  }
  // 表头
  renderCaption(){
    const { prefixCls, caption } = this.props;
    return (<caption className={`${prefixCls}-caption`}>{caption}</caption>)
  }
  // 单行选择事件
  onRowSelection=(row, index, checked, e)=>{
    const {rowsChecked,rowsCount,headindeterminate} = this.state;
    const {data,onSelect,rowSelection} = this.props;

    let count = Math.abs(checked ? rowsCount+1 : rowsCount-1);
    console.group("---")

    console.log("====>",this.state.headindeterminate,count,data.length)

    let state = {rowsCount:count}

    if(this.state.headchecked != count===data.length){
      state[headchecked] = count===data.length;
    }
    if(this.state.headindeterminate != count > 0 && count < data.length){
      state[headindeterminate] = count > 0 && count < data.length;
    }

    // this.setState({...state})

    this.setState({
      rowsCount:count,
      headchecked:count===data.length,
      headindeterminate: count > 0 && count < data.length
    })
    // console.log("====>",this.state.headindeterminate,count > 0 && count < data.length)

    rowSelection.onSelect&&rowSelection.onSelect(row,index,checked, e)
    console.groupEnd("---")
  }
  // 全选
  selectedAll=(e,checked)=>{
    const {rowSelection,data} = this.props;
    const {rowsCount} = this.state;
    console.log("test",rowsCount,checked)
    this.setState({
      rowsCount:checked?data.length:0,
      headchecked:checked,
      headindeterminate:false
    })
    this.refs.tbody.selectedAll(checked,(selectDatas)=>{
      rowSelection.onSelectAll&&rowSelection.onSelectAll(selectDatas,checked,e);
    })
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
  //横向滚动事件
  onScroll(e){
    this.setState({
      scrollLeft:e.target.scrollLeft
    })
  }
  getFixedLeftWidth(){
    
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

    // if(height||width){
    //   // 固定头 或者左右滚动
    //   return(
    //     <div className={classNames(className,prefixCls,`${prefixCls}-scroll`)}>
    //       <div ref={(div)=>{
    //         if( div ) div.scrollLeft = this.state.scrollLeft;
    //       }} className={`${prefixCls}-head`}>
    //         <table style={{width}}>
    //           {tableColgroup}
    //           {tableCaption}
    //           {tableThead}
    //         </table>
    //       </div>
    //       <div onScroll={this.onScroll.bind(this)} style={{height}} className={`${prefixCls}-body`}>
    //         <table style={{width}}>
    //           {tableColgroup}
    //           {tableTbody}
    //         </table>
    //       </div>
    //       <div className={`${prefixCls}-fixed-head-left`}>
    //         <table>
    //           {React.cloneElement(tableColgroup)}
    //           {React.cloneElement(tableCaption)}
    //           {React.cloneElement(tableThead,{cloneElement: "left"})}
    //         </table>
    //       </div>
    //       <div style={{height}} className={`${prefixCls}-fixed-body-left`}>
    //         <table>
    //           {React.cloneElement(tableColgroup,{cloneElement: "left"})}
    //           {React.cloneElement(tableTbody,{cloneElement: "left"})}
    //         </table>
    //       </div>
    //     </div>
    //   )
    // }

    // 默认的table
    return(
      <div className={classNames(className,prefixCls)}>
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
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
      headIndeterminate:false,  //表头半选中状态
      headchecked:false,        //表头选中状态
      rowsCheckedAll:false,     //所有行选中状态
      rowsChecked:{},           //选中的数据
      rowsCount:0,              //选中的行数

      scrollLeft:0,
      scrollRight:0,
      scrollTop:0,
      leftFixedWidth:0,  // 左边固定的宽度
      leftFixedTop:0     // 左边固定的距离顶部距离
    }
  }
  componentDidMount() {
    const {data} = this.props;

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
        headIndeterminate:true,
        checkedRow:checkedRow
      })
    }else if(checkedRow.length == data.length){
      this.setState({
        rowsCount,
        headIndeterminate:false,
        headchecked:true,
        checkedRow:checkedRow
      })
    }

    // leftFixedTop
    if(this.refs.caption){
      this.setState({
        leftFixedTop:this.refs.caption.offsetHeight
      })
    }

  }
  // 表头
  renderCaption(){
    const { prefixCls, caption } = this.props;
    return (<div ref="caption" className={`${prefixCls}-caption`}>{caption}</div>)
    // return (<caption ref="caption" className={`${prefixCls}-caption`}>{caption}</caption>)
  }
  // 单行选择事件
  onRowSelection=(row, index, checked, e)=>{
    const {rowsChecked,rowsCount,headIndeterminate} = this.state;
    const {data,onSelect,rowSelection} = this.props;

    let count = Math.abs(checked ? rowsCount+1 : rowsCount-1);
    let state = {rowsCount:count}

    if(this.state.headchecked != count===data.length){
      state[headchecked] = count===data.length;
    }
    if(this.state.headIndeterminate != count > 0 && count < data.length){
      state[headIndeterminate] = count > 0 && count < data.length;
    }
    this.setState({
      rowsCount:count,
      headchecked:count===data.length,
      headIndeterminate: count > 0 && count < data.length
    })

    rowSelection.onSelect&&rowSelection.onSelect(row,index,checked, e)
  }
  // 全选
  selectedAll=(e,checked)=>{
    const {rowSelection,data} = this.props;
    const {rowsCount} = this.state;
    this.setState({
      rowsCount:checked?data.length:0,
      headchecked:checked,
      headIndeterminate:false
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
      scrollLeft:e.target.scrollLeft,
      scrollTop:e.target.scrollTop,
      scrollRight:e.target.scrollWidth - (e.target.scrollLeft + e.target.offsetWidth)
    })
  }
  setFixedLeftWidth=(width)=>{
    this.setState({
      leftFixedWidth:width
    })
  }
  render(){
    const { prefixCls, className, onChange, rowSelection, caption, columns, data, height, width } = this.props;
    const { headIndeterminate,headchecked } = this.state
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
        setFixedLeftWidth={this.setFixedLeftWidth}
        headindeterminate={headIndeterminate} 
        headchecked={headchecked} 
        selectedAll={this.selectedAll}
        columns={columns}/>
      )

    let tableColgroup = (<Colgroup columns={columns}/>);
    let tableCaption = caption&&this.renderCaption();

    if(height||width){
      // 固定头 或者左右滚动
      return(
        <div className={classNames(className,prefixCls,`${prefixCls}-scroll`,{
          [`${prefixCls}-scroll-position-left`]:this.state.scrollLeft ==0,
          [`${prefixCls}-scroll-position-middle`]:(this.state.scrollLeft>0 && this.state.scrollRight>0) || this.state.scrollRight==0,
          [`${prefixCls}-scroll-position-right`]:this.state.scrollRight==0,
        })}>
          {tableCaption}
          <div ref={(div)=>{
            if( div ) div.scrollLeft = this.state.scrollLeft;
          }} className={`${prefixCls}-head`}>
            <table style={{width}}>
              {tableColgroup}
              {tableThead}
            </table>
          </div>
          <div onScroll={this.onScroll.bind(this)} style={{height}} className={`${prefixCls}-body`}>
            <table style={{width}}>
              {tableColgroup}
              {tableTbody}
            </table>
          </div>
          <div className={classNames(`${prefixCls}-fixed-left`)} 
            style={{width:this.state.leftFixedWidth,marginTop:this.state.leftFixedTop}}>
            <div className={`${prefixCls}-fixed-head-left`}>
              <table>
                {React.cloneElement(tableColgroup)}
                {React.cloneElement(tableThead,{
                  cloneElement: "left",
                })}
              </table>
            </div>
            <div ref={(div)=>{
              if( div ) div.scrollTop = this.state.scrollTop;
            }} style={{height}} className={`${prefixCls}-fixed-body-left`}>
              <table>
                {React.cloneElement(tableColgroup,{cloneElement: "left"})}
                {React.cloneElement(tableTbody,{cloneElement: "left"})}
              </table>
            </div>
          </div>
        </div>
      )
    }

    // 默认的table
    return(
      <div className={classNames(className,prefixCls)}>
        {tableCaption}
        <table>
          {tableColgroup}
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
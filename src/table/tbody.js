import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Checkboxs from '../checkbox/';

export default class Tbody extends Component{
  constructor(props){
    super(props);
    this.state = {
      _checked:{
        // 0:true     // 是否选中，第一行选中
      },
      _disabled:{},   // 与_checked 一样的格式处理方式
    }
    this.renderTbodyTd = this.renderTbodyTd.bind(this)
  }
  componentDidMount() {
    const {data} = this.props;
    // 初始化选择
    let _checked = {},_disabled = {};
    for(let i = 0;i < data.length;i++){
      if(data[i]._checked) _checked[i] = data[i]._checked;
      if(data[i]._disabled) _disabled[i] = data[i]._disabled;
    }
    this.setState({_checked,_disabled});
  }
  getRenders(columns,headelm={}){
    let subitem = [];
    for(let i =0; i< columns.length;i++){
      if(columns[i] && columns[i].key && (!columns[i].children || columns[i].children.length < 1)){
        headelm[columns[i].key]={};
        let method = ['render','onCellClick','className']
        for(let a in method){
          if(method[a] in columns[i]){
            headelm[columns[i].key][ method[a] ] = columns[i][ method[a] ];
          }
        }
      }
      if(columns[i].children && columns[i].children.length){
        this.getRenders(columns[i].children,headelm);
      }
    }
    return headelm;
  }
  renderTbodyTd(item,rownum){
    const {columns} = this.props;
    var renders = this.getRenders(columns);
    let items = [],key=0;
    for(let a in item){
      ++key;
      let attri = {}
      if(renders[a]&&renders[a].onCellClick){
        attri.onClick = renders[a].onCellClick.bind(this,item[a])
      }
      if(renders[a]&&renders[a].className){
        attri.className = renders[a].className
      }
      if( 
        (item[`_select`] && a)  ==="_select" || 
        (item[`_checked`] && a)  ==="_checked" || 
        (item[`_disabled`] && a)  ==="_disabled"
      ){
        a == '_select'&&items.push(
          <td key={key} {...attri}>
            <Checkboxs 
              checked={this.state._checked[rownum]}
              disabled={this.state._disabled[rownum]}
              onChange={(e,checked)=>this.props.onRowSelection(item, rownum, checked, e)}>
            </Checkboxs>
          </td>
        );
      }else{
        items.push(
          <td key={key} {...attri}>
          {(renders[a]&&renders[a].render) ? renders[a].render(item[a],item,key):item[a]}
          </td>
        );
      }
    }
    return items;
  }
  selectedAll(checked,cb){
    const {data} = this.props;
    const {_disabled} = this.state;
    let _checked = {}, _selectedData=[];
    for(let i=0;i < data.length;i++){
      if(!_disabled[i]) {
        _checked[i] = checked;
        _checked[i]&&_selectedData.push(data[i])
      }
    }
    this.setState({_checked});
    cb&&cb(_selectedData)
  }
  // 添加一列 Checkbox
  addSelectDateColumn(data){
    let temp = {_select:'_select'};
    for(let a in data) temp[a] = data[a];
    return temp;
  }
  renderTbody(data){
    const {rowSelection} = this.props;
    let items = [];
    for(let i =0;i< data.length;i++){
      let rowdata = data[i];
      if(rowSelection){
        // 添加一列 Checkbox
        rowdata = this.addSelectDateColumn(data[i]);
      }
      items.push(<tr key={i}>{this.renderTbodyTd(rowdata,i)}</tr>)
    }
    return items;
  }
  render(){
    const { prefixCls, className, data, headchecked } = this.props;
    return(
      <tbody>
        {this.renderTbody.bind(this)(data)}
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
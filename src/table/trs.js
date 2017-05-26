import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tbody extends Component{
  state = {

  }
  getRenders(columns,headelm={}){
    let subitem = [];
    for(let i =0; i< columns.length;i++){
      if(columns[i] && columns[i].key && (!columns[i].children || columns[i].children.length < 1)){
        headelm[columns[i].key]={}
        if( columns[i].render ){
          headelm[columns[i].key]['render'] = columns[i].render;
        }
        if( columns[i].onCellClick ){
          headelm[columns[i].key]['onCellClick'] = columns[i].onCellClick;
        }
        if( columns[i].className ){
          headelm[columns[i].key]['className'] = columns[i].className;
        }
      }
      if(columns[i].children && columns[i].children.length){
        this.getRenders(columns[i].children,headelm);
      }
    }
    return headelm;
  }
  renderTbodyTd(item){
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
      items.push(
        <td key={key} {...attri}>
        {(renders[a]&&renders[a].render) ? renders[a].render(item[a],item,key):item[a]}
        </td>
      );
    }
    return items;
  }
  renderTbody(data){
    let items = [];
    for(let i =0;i< data.length;i++){
      items.push(<tr key={i}>{this.renderTbodyTd.bind(this)(data[i])}</tr>)
    }
    return items;
  }
  render(){
    const { prefixCls, className, data } = this.props;
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
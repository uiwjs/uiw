import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Tbody extends Component{
  state = {

  }
  getRenders(columns,headelm={}){
    let subitem = [];
    for(let i =0; i< columns.length;i++){
      if(columns[i]
        && (!columns[i].children || columns[i].children.length < 1) 
        && columns[i].render
        &&columns[i].key ){
        headelm[columns[i].key] = columns[i].render;
      }
      if(columns[i].children && columns[i].children.length){
        this.getRenders(columns[i].children,headelm);
      }
    }
    return headelm;
  }
  renderTbodyTd(item){
    const {render,columns} = this.props;
    var renders = this.getRenders(columns)
    let items = [],key=0;
    for(let a in item){
      ++key;
      items.push(<td key={key}>{renders[a]?renders[a](item[a],item,key):item[a]}</td>);
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

// export type Column = {
//   label: string,
//   prop: string,
//   property: string,
//   type: string,
//   minWidth: number,
//   width: number,
//   align: string,
//   sortable: boolean,
//   sortMethod: ()=>void,
//   resizable: boolean,
//   formatter: ()=>void,
//   selectable: boolean,
//   fixed: boolean | string,
//   filterMethod: ()=>void,
//   filters: Array<Object>,
//   expandPannel: ()=>any,
//   render: ()=>void
// };
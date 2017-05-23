import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


let num = 1;

export default class Thead extends Component{
  getRowSpan(columns,subnum){
    for(let i=0;i< columns.length;i++){
      if(columns[i].children){
        num += 1;
        // num = this.getRowSpan(columns[i].children,num+1)
        // console.log("===:",subnum,'-',num)
        // console.log("--->",num,num+1)
      }
    }
    console.log("===:",num)
    return num;
  }
  renderHead(columns,rowSpan){
    let subitem = [],items=[];
    for(let i =0;i< columns.length;i++){
      subitem.push(<th rowSpan="3">1</th>)
    }

  }
  render(){
    const { prefixCls, className, columns } = this.props;
    console.log("columns:",columns)
    let rowSpan=this.getRowSpan(columns)
    console.log("rowSpan::",rowSpan)
    
    return(
      <thead>
        {this.renderHead.bind(this)(columns,rowSpan)}
      </thead>
    )
    
    // return(
    //   <thead>
    //     <tr>
    //       <th rowSpan="3">1</th>
    //       <th colSpan="2">2</th>
    //     </tr>
    //     <tr>
    //       <th colSpan="2">1</th>
    //       <th rowSpan="3">2</th>
    //     </tr>
    //     <tr>
    //       <th >1</th>
    //       <th >2</th>
    //     </tr>
    //   </thead>
    // )
  }
}

Thead.defaultProps = {
  prefixCls: '',
  columns:[]
};
Thead.propTypes = {
  columns: PropTypes.array,
  prefixCls: PropTypes.string,
}
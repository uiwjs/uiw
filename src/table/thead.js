import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


let rowSpanNum = 0;
export default class Thead extends Component{
  state={
    render:{},
    renderHead:[]
  }
  componentDidMount(){
    const { columns } = this.props;
    // 计算层级
    let rowLevel = this.getRowSpan(columns);
    this.setState({
      renderHead:this.renderHead.bind(this)(columns,rowLevel.rowSpanNum)
    })
  }
  getRender(key){
    return this.state.render[key];
  }
  /**
   * [getRowSpan 获取行跨度数]
   * @param  {[type]} columns [某列的总数据]
   * @param  {[type]} subnum  [累计行跨度数]
   * @return {[type]}         [返回最终行跨度数]
   */
  getRowSpan(columns,subnum){
    let num = (subnum&&subnum.num)? subnum.num : 1;
    for(let i=0;i < columns.length;i++){
      if(columns[i].children&&columns[i].children.length>0){
        let curnum = this.getRowSpan(columns[i].children,{num:num+1});
        if(rowSpanNum < curnum.num) rowSpanNum = curnum.num;
      }
    }
    return {num,rowSpanNum};
  }
  /**
   * [getColSpan 获取列跨度数]
   * @param  {[type]} columns [某列的总数]
   * @param  {Number} num     [累计列跨度数]
   * @return {[type]}         [返回最终列的跨度数]
   */
  getColSpan(columns,num = 0){
    for(let i=0;i< columns.length;i++){
      num +=1
      if(columns[i].children&&columns[i].children.length>0){
        num -= 1;
        num = this.getColSpan(columns[i].children,num)
      }
    }
    return num;
  }
  /**
   * [renderHead 返回tr节点]
   * @param  {[type]} columns [列的总数据]
   * @param  {[type]} spanNum [行跨度数]
   * @param  {[type]} headelm [返回累计tr标签]
   * @return {[type]}         [返回最终累计tr总标签]
   */
  renderHead(columns,spanNum,childrens=[],level=0,headelm=[]){
    let subitem = [];
    for(let i =0; i< columns.length;i++){
      let attr = {}
      if(columns[i]){
        let attr = {}
        if(columns[i].children&&columns[i].children.length>0){
          attr.colSpan = this.getColSpan(columns[i].children);
          childrens = childrens.concat(columns[i].children)
        }else {
          if(columns[i].render&&columns[i].key){
            const { render } = this.state;
            render[columns[i].key] = columns[i].render;
            this.setState({render:[...render]});
          }
          attr.rowSpan = spanNum;
        }
        subitem.push(<th key={i} {...attr}>{columns[i].title}</th>);
      }
    }
    headelm.push(<tr key={`level${level}`}>{subitem}</tr>);
    if(childrens.length>0){
      this.renderHead(childrens,spanNum-1,[],level+1,headelm);
    }
    return headelm;
  }
  render(){
    const { prefixCls, className } = this.props;
    console.log("::",this.state.render)
    return(
      <thead>
        {this.state.renderHead}
      </thead>
    )
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
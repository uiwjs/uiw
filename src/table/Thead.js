import React from 'react';
import {Component, PropTypes} from '../utils/';
import Checkbox from '../checkbox/';


let rowSpanNum = 0;
export default class Thead extends Component{
  constructor(props){
    super(props);
    this.state ={
      td:''
    }
  }
  componentDidMount() {
    const {cloneElement} = this.props;
    if(!cloneElement){
      this.props.setFixedWidth(
        this.getTableThwidth(this.refs.thead,'left'),
        this.getTableThwidth(this.refs.thead,'right')
      )
    }
  }
  getTableThwidth($thead,type){
    const {columns}=this.props;
    let size=0;
    if($thead.children&&$thead.children.length===1){
      let $th = $thead.children[0].children;

      for(let i=0;i < $th.length;i++){
        if(type == 'left' && columns[i] && (columns[i].key === '_select' || columns[i].fixed === 'left' )){
          size += $th[i].offsetWidth;
        }
        if(type == 'right' && columns[i].fixed === 'right' ){
          size += $th[i].offsetWidth;
        }
      }
      return size;
    }
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
   * 过滤，保留固定的单元格
   * @param  {[type]} columns  [所有单元格总数据]
   * @param  {String} ty       [左边|右边固定的单元]
   * @param  {[type]} childArr [子对象中的数据]
   * @return {[type]}          [description]
   */
  renderColumnsFixed(columns,ty="left",childArr){
    let arr = childArr || [];
      for (var i = 0; i < columns.length; i++) {
        if(ty == "left" && (columns[i].key == "_select" || columns[i].fixed =="left")){
          arr.push(columns[i]);
        }
        if(ty == "right" && columns[i] && columns[i].fixed =="right"){
          arr.push(columns[i]);
        }
      }
      return arr;
  }
  /**
   * [renderHead 返回tr节点]
   * @param  {[bool]}   indeterminate [是否全选状态]
   * @param  {[Array]}  columns [列的总数据]
   * @param  {[Number]} spanNum [行跨度数]
   * @param  {[Node]}   headelm [返回累计tr标签]
   * @return {[Node]}           [返回最终累计tr总标签]
   */
  renderHead(indeterminate,columns,spanNum,childrens=[],level=0,headelm=[]){
    let subitem = [];
    const {cloneElement} = this.props;

    if(cloneElement){
      columns = this.renderColumnsFixed(columns,cloneElement);
    }

    for(let i =0; i< columns.length;i++){
      let attr = {}
      if(columns[i]){
        let attr = {}
        if(columns[i].children&&columns[i].children.length>0){
          attr.colSpan = this.getColSpan(columns[i].children);
          childrens = childrens.concat(columns[i].children)
        }else {
          attr.rowSpan = spanNum;
        }
        if(columns[i].key == "_select") attr.className = '_select';
        subitem.push(
          <th key={i} {...attr}>
            {
              columns[i].key==="_select"
              ?(
                <Checkbox 
                  indeterminate={this.props.headindeterminate}
                  checked={this.props.headchecked}
                  onChange={(e,checked) => this.props.selectedAll(e,checked)}>
                </Checkbox>
              )
              :columns[i].title
            }
          </th>
        );
      }
    }
    headelm.push(<tr key={`level${level}`}>{subitem}</tr>);
    if(childrens.length>0){
      this.renderHead(indeterminate,childrens,spanNum-1,[],level+1,headelm);
    }
    return headelm;
  }
  render(){
    const { prefixCls, className,indeterminate,headindeterminate,columns} = this.props;
    // 计算层级
    let rowLevel = this.getRowSpan(columns);
    return(
      <thead ref="thead">
        {this.renderHead.bind(this)(indeterminate,columns,rowLevel.rowSpanNum)}
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
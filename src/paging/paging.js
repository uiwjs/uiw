import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Paging extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activePage:props.activePage
    }
    this.onPrevOrNext = this.onPrevOrNext.bind(this);
  }
  onPrevOrNext(ty){
    const {total,pageSize,onChange} = this.props;
    const {activePage} = this.state;
    if( (ty == 'prev' && activePage ==1) || (ty == 'next' && activePage ==total/pageSize) ){
      return;
    }
    let num = ty == "prev" ? activePage -1 : activePage +1;

    switch(ty){
      case "prev" : num = activePage -1; break;
      case "next" : num = activePage +1; break;
      case "jump-prev" : num = activePage -3; break;
      case "jump-next" : num = activePage +3; break;
    }
    if(num){
      this.setState({activePage:num});
      onChange&&onChange(num)
    }
  }
  render() {
    const {prefixCls,className,total,pageSize,onChange} = this.props;
    const {activePage} = this.state;

    let items = [];
    let totalPage = total/pageSize; // 总页数

    items.push(
      <li key='prev' onClick={()=>this.onPrevOrNext('prev')} className={classNames(`${prefixCls}-prev`,{
      [`${prefixCls}-disable`]:activePage==1
      })}><a></a></li>
    )

    let curActvePage = activePage;
    let itemsJump = (ty) => (
      <li key={ty} onClick={()=>this.onPrevOrNext(ty)} className={classNames(`${prefixCls}-${ty}`)}><a>...</a></li>
    )

    for(let i =0; i< totalPage;i++){
      if(i+1 == curActvePage-3 && curActvePage-3 != 1 && totalPage > 5){
        items.push(itemsJump('jump-prev'));
      }
      if(i+1 == curActvePage+3 && curActvePage+3 != totalPage && totalPage > 5){
        items.push(itemsJump('jump-next'));
      }

      if(curActvePage == i+1 
        || i+1 == 1 
        || i+1 == totalPage 
        || (i+1 < 6 && totalPage < 6)
        || (i+1 > curActvePage-3 && i+1 < curActvePage)
        || (i+1 < curActvePage+3 && i+1 > curActvePage)
      ){
        items.push(
          <li key={i+1} 
            className={activePage == i+1 ? `${prefixCls}-active`:`${prefixCls}-item`}
            onClick={()=>{
              this.setState({activePage:i+1 })
              onChange&&onChange(i+1)
            }}
          >
            <a>{i+1}</a>
          </li>
        )
      }
    }
    items.push(
      <li key='next' onClick={()=>this.onPrevOrNext('next')} className={classNames(`${prefixCls}-next`,{
        [`${prefixCls}-disable`]:activePage==totalPage
      })}><a></a></li>
    )

    return (
      <ul className={classNames(prefixCls,className)}>
        {items}
      </ul>
    );
  }
}


Paging.defaultProps = {
  prefixCls: 'w-paging',
  total: 0,        // 数据总数
  pageSize: 10,    // 每页条数
  activePage: 1,   // 当前页数，选中的页数
  onChange: e => (e),
}
Paging.propTypes = {
  prefixCls: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  activePage: PropTypes.number,
  onChange: PropTypes.func,
}




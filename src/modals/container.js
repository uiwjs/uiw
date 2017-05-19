import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Modals from './modals';
import Buttons from '../buttons';

export function isEmpty (obj) {
  if (obj === null || obj === undefined)     return true
  if (typeof obj === 'number' && isNaN(obj)) return true
  if (obj.length !== undefined)              return obj.length === 0
  if (obj instanceof Date)                   return false
  if (typeof obj === 'object')               return Object.keys(obj).length === 0
  return false
}

export default function Container(config){

  const props = config;
  const {icon,title,content,width = 416,type = "success",prefixCls="w-modals-confirm"} = props;

  let div = document.createElement('div')
  document.body.appendChild(div)

  function closeModals(...args){
    // 从 DOM 中移除已经挂载的 React 组件，清除相应的事件处理器和 state。
    // 如果在 container 内没有组件挂载，这个函数将什么都不做。
    // 如果组件成功移除，则返回 true；如果没有组件被移除，则返回 false。
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if(unmountResult&&div.parentNode){
      div.parentNode.removeChild(div);
    }
    if(props.onCancel&&args[0]==='cancel'){
      props.onCancel(...args)
    }
    if(props.onOk&&args[0]==='ok'){
      props.onOk(...args)
    }
  }

  function okModals(...args){
    const { onOk } = props;
    if(!onOk) return closeModals("ok",...args);

    let ret;
    if(onOk.length) ret = onOk(closeModals);
      
    ret = onOk();
    if(!ret) closeModals();
    
    if(ret && ret.then) ret.then((...args) => {
      closeModals(...args);
    });
  }
  let footer = [];
  if (props.cancelText) {
    footer.push(
      <Buttons key="cancel" size="small" onClick={closeModals.bind(this,'cancel')}>
        {props.cancelText}
      </Buttons>
    )
  } 
  if (props.okText) {
    footer.push(
      <Buttons key="ok" type={type} size="small" onClick={okModals.bind(this,'ok')}>
        {props.okText}
      </Buttons>
    )
  } 
  ReactDOM.render(
    <div>
      <Modals 
        className={prefixCls}
        visible={true}
        maskClosable={false}
        onOk={()=>{}}           // 点击确定提交按钮
        width={width}           // 有默认值可以不传递
        onCancel={closeModals}
        footer={footer}
      >
        {icon}
        <div className={`${prefixCls}-title`}>
        {title}
        </div>
        <div className={`${prefixCls}-content`}>
        {content}
        </div>
      </Modals>

    </div>, 
    div
  )

}
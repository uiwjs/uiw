import React from 'react';
import {Component,ReactDOM} from '../utils/';
import classNames from 'classnames';
import Modals from './Modal';
import ActionButton from './ActionButton';

export default function Container(config){
  const props = config;
  const {icon,title,content,onOk,className,
    maskClosable=false, 
    visible=true, 
    width = 416,
    type = "success",
    prefixCls="w-modals-confirm", ...others
  } = props;

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
  let footer = [];
  if (props.cancelText) {
    footer.push(
      <ActionButton key="cancel" size="small" closeModals={closeModals} onOk={props.onCancel} autoFocus>
        {props.cancelText}
      </ActionButton>
    )
  } 
  if (props.okText) {
    footer.push(
      <ActionButton key="ok" type={type} size="small" closeModals={closeModals} onOk={props.onOk} autoFocus>
        {props.okText}
      </ActionButton>
    )
  }
  ReactDOM.render(
      <Modals 
        { ...others }
        className={classNames(prefixCls,className)}
        visible={visible}
        maskClosable={maskClosable}
        onOk={onOk}           // 点击确定提交按钮
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
      </Modals>, 
    div
  )

}

import React, { Component } from 'react';
import Transition from '../transition'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Buttons from '../buttons';
import {IconClose} from '../svgs';
const ButtonsGroup = Buttons.Group;

export default class Modal extends Component {
  state = {
    leave:true,
    visible:false,
  }
  handleCancel = (ismask,e) => {
    // 禁止遮罩层关闭
    if(ismask === "mask"&&!this.props.maskClosable) return;
    const {onCancel} = this.props;
    this.setState({leave:false})
    setTimeout(()=>{
      this.setState({
        visible:false,
        leave:true
      })
      onCancel && onCancel(e);
    },250)
  }

  handleOk = (e) => {
    const {onOk} = this.props;
    onOk && onOk(e);
  }
  render() {
    const { prefixCls,visible, className, title, footer, horizontal, styleMask, children, confirmLoading, onCancel, cancelText, okText, width,maskClosable, ...other} = this.props;
    const {leave} = this.state;
    
    if(!visible) return null;

    let defaultFooter = !footer?(
      <ButtonsGroup>
        <Buttons key="cancel" size="small" onClick={this.handleCancel}>
          {cancelText || '取消'}
        </Buttons>
        <Buttons key="confirm" size="small" loading={confirmLoading} onClick={this.handleOk}>
          {okText || '确定'}
        </Buttons>
      </ButtonsGroup>
    ):footer;

    const cls = classNames(prefixCls,{
      [`${prefixCls}-wrap`]: true,
      [`${prefixCls}-horizontal-left`]: horizontal === 'left',
      [`${prefixCls}-horizontal-right`]: horizontal === 'right',
      [className]: className
    });

    let AnimateType = '';
    switch(horizontal){
      case 'left': AnimateType='fade-left'; break;
      case 'right': AnimateType='fade-right'; break;
      default: AnimateType='fade-down'; break;
    }
    defaultFooter = (footer ===null?null:<div className={`${prefixCls}-footer`}>{defaultFooter}</div>)

    return (
      <div className={ cls }>
        <Transition type="fade-in">
          {leave&&<div className={`${prefixCls}-mask`} style={styleMask} onClick={this.handleCancel.bind(this,'mask')}></div>}
        </Transition>
        <Transition type={AnimateType}>
          {leave&&<div className={`${prefixCls}-content`} style={{width:width,...other.style}}>
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-title`} id="rcDialogTitle9">{title}</div>
              <a onClick={this.handleCancel.bind(this)} className={`${prefixCls}-close-icon`}>{IconClose}</a>
            </div>
            <div className={`${prefixCls}-body`}>{children}</div>
            {defaultFooter}
          </div>}
        </Transition>
      </div>
    );

  }
}

Modal.defaultProps = {
  prefixCls: "w-modal",
  width: 520,
  visible:false,
  maskClosable: true,
  confirmLoading:false
}
Modal.propTypes = {
  visible: PropTypes.bool,
  horizontal: PropTypes.oneOf(['left', 'right']),
  maskClosable: PropTypes.bool,
  styleMask: PropTypes.object,
  style: PropTypes.object,
  confirmLoading: PropTypes.bool,
  title: PropTypes.node,
  footer: PropTypes.node,
  onCancel: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.number, PropTypes.string
  ]),
}
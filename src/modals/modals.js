import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Buttons from '../buttons';
import {IconClose} from '../svgs';
const ButtonsGroup = Buttons.Group;

export default class Modal extends Component {
  static defaultProps = {
    prefixCls: "w-modal",
    width: 520,
    visible:false,
    maskClosable: true,
    horizontal: PropTypes.string, // left || right
    confirmLoading:false
  }
  static propTypes = {
    visible: PropTypes.bool,
    maskClosable: PropTypes.bool,
    confirmLoading: PropTypes.bool,
    title: PropTypes.node,
    onCancel: PropTypes.func,
    width: PropTypes.oneOfType([
      PropTypes.number, PropTypes.string
    ]),
  }
  state = {
    visible:true
  }
  handleCancel = (ismask,e) => {
    if(ismask === "mask"&&!this.props.maskClosable) return;
    const {onCancel} = this.props;
    this.setState({visible:false})
    onCancel && onCancel(e);
  }

  handleOk = (e) => {
    const {onOk} = this.props;
    onOk && onOk(e);
  }
  render() {
    const { prefixCls, className, title, footer, visible, horizontal, children, confirmLoading, onCancel, cancelText, okText, width, ...other} = this.props;
    if(!visible) return null;

    const defaultFooter = !footer?(
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

    return (
      <CSSTransitionGroup
        transitionName={prefixCls}
        transitionAppear={true}
        transitionAppearTimeout={3200}
        transitionEnter={false}
        transitionLeave={false}>
        <div className={ cls }>
          <div className={`${prefixCls}-mask`} onClick={this.handleCancel.bind(this,'mask')}>
          </div>
          <div className={`${prefixCls}-content`} style={{width:width,...other.style}}>
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-title`} id="rcDialogTitle9">{title}</div>
              <a onClick={this.handleCancel.bind(this)} className={`${prefixCls}-close-icon`}>{IconClose}</a>
            </div>
            <div className={`${prefixCls}-body`}>{children}</div>
            <div className={`${prefixCls}-footer`}>
              {defaultFooter}
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );

  }
}

import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types';
import Buttons from '../buttons';
import {IconClose} from '../svgs';
const ButtonsGroup = Buttons.Group;

export default class Modal extends Component {
  static defaultProps = {
    prefixCls: "w-modal",
    width: 520,
    visible:false,
  }
  static propTypes = {
    visible:PropTypes.bool,
    onCancel: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }
  state = {
    visible:true
  }
  handleCancel = (e) => {
    const {onCancel} = this.props;
    console.log("test",this.setState)
    this.setState({visible:false})
    onCancel && onCancel(e);
  }

  handleOk = (e) => {
    const {onOk} = this.props;
    onOk && onOk(e);
  }
  render() {
    const { prefixCls, footer, visible, children, onCancel, cancelText, okText, width, ...other} = this.props;
    console.log("this.state.visible::",this.state.visible)
    if(!visible) return null;

    const defaultFooter = !footer?(
      <ButtonsGroup>
        <Buttons key="cancel" size="small" onClick={this.handleCancel}>
          {cancelText || '取消'}
        </Buttons>
        <Buttons key="confirm" size="small" onClick={this.handleOk}>
          {okText || '确定'}
        </Buttons>
      </ButtonsGroup>
    ):footer;

    return (
      <CSSTransitionGroup
        transitionName={prefixCls}
        transitionAppear={true}
        transitionAppearTimeout={3200}
        transitionEnter={false}
        transitionLeave={false}>
        <div className={`${prefixCls}-wrap`}>
          <div className={`${prefixCls}-mask`} onClick={this.handleCancel}>
          </div>
          <div className={`${prefixCls}-content`} style={{width:width,...other.style}}>
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-title`} id="rcDialogTitle9">Title</div>
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

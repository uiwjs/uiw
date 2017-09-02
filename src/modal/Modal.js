import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Button from '../button';
import Icon from '../icon'
const ButtonGroup = Button.Group;

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leave: true,
      visible: this.props.visible,
    }
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.visible !== nextProps.visible) {
      if (nextProps.visible) {
        this.setState({
          visible: true,
          leave: true
        })
      } else {
        this.setState({ leave: false }, () => {
          setTimeout(() => {
            if (this.state.visible !== false) {
              this.setState({
                visible: false,
                leave: true,
              })
            }
          }, 250)
        })
      }
    }
  }
  modalHide(e) {
    const { onCancel } = this.props;
    if (!this.state) return;
    this.modalHideTimeout = setTimeout(() => {
      this.setState({
        visible: false,
        leave: true,
      })
      clearTimeout(this.modalHideTimeout)
      onCancel(e)
    }, 250)
  }
  onCancel = (ismask, e) => {
    // 禁止遮罩层关闭
    if (ismask === "mask" && !this.props.maskClosable) return;
    this.setState({ leave: false }, () => {
      this.modalHide()
    })
  }
  handleOk = (e) => {
    const { onOk } = this.props;
    onOk && onOk(e);
  }
  render() {
    const { prefixCls, className, title, footer, horizontal, styleMask, children, confirmLoading, onCancel, cancelText, okText, width, maskClosable, ...other } = this.props;
    const { leave, visible } = this.state;

    if (!visible) return null;

    let defaultFooter = !footer ? (
      <ButtonGroup>
        <Button key="cancel" size="small" onClick={this.onCancel}>
          {cancelText || '取消'}
        </Button>
        <Button key="confirm" size="small" loading={confirmLoading} onClick={this.handleOk}>
          {okText || '确定'}
        </Button>
      </ButtonGroup>
    ) : footer;

    const cls = this.classNames(prefixCls, {
      [`${prefixCls}-wrap`]: true,
      [`${prefixCls}-horizontal-left`]: horizontal === 'left',
      [`${prefixCls}-horizontal-right`]: horizontal === 'right',
      [className]: className
    });

    let AnimateType = '';
    switch (horizontal) {
      case 'left': AnimateType = 'fade-left'; break;
      case 'right': AnimateType = 'fade-right'; break;
      default: AnimateType = 'fade-down'; break;
    }
    defaultFooter = (footer === null ? null : <div className={`${prefixCls}-footer`}>{defaultFooter}</div>)

    return (
      <div className={cls}>
        <Transition type="fade-in">
          {leave && <div className={`${prefixCls}-mask`} style={styleMask} onClick={() => this.onCancel('mask')}></div>}
        </Transition>
        <Transition type={AnimateType}>
          {leave && <div className={`${prefixCls}-content`} style={{ width: width, ...other.style }}>
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-title`} id="rcDialogTitle9">{title}</div>
              <a onClick={() => this.onCancel()} className={`${prefixCls}-close-icon`}><Icon type="close" /></a>
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
  visible: false,
  maskClosable: true,
  confirmLoading: false,
  onCancel: (v) => v
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
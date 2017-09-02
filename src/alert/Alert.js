import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Icon from '../icon'

export default class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      tranVisible: true,
    }
  }
  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ ...nextProps })
    if (nextProps.visible !== this.props.visible) {
      this.removeRootDom();
    }
  }
  // 删除根节点
  removeRootDom() {
    this.timeout = setTimeout(() => {
      this.setState({
        tranVisible: false
      })
      clearTimeout(this.timeout)
    }, 300)
  }
  handleClose(e) {
    e && e.preventDefault();
    this.setState({ visible: false })
    this.props.onClose(e);
    this.removeRootDom();
  }
  render() {
    const { prefixCls, type, message, showIcon, onClose, closable, description, className, children, transition, visible, ...others } = this.props;
    let icon;
    if (showIcon) {
      switch (type) {
        case "success": icon = <Icon type="circle-check-o" />; break;
        case "info": icon = <Icon type="information-o" />; break;
        case "warning": icon = <Icon type="question-circle-o" />; break;
        case "error": icon =  <Icon type="circle-close-o" />; break;
        default: break;
      }
    }
    const cls = this.classNames(prefixCls, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-icon`]: showIcon && icon,
      [`${prefixCls}-icon-description`]: description,
      [className]: className
    });

    const alertsview = !this.state.visible ? null : <div { ...others } className={cls}>
      {message && <span className={!description ? `${prefixCls}-description` : `${prefixCls}-message`}>{icon}{message}</span>}
      {description && <span className={`${prefixCls}-description`}>{description}</span>}
      {children}
      {closable && <a onClick={this.handleClose.bind(this)} className={`${prefixCls}-close-icon`}><Icon type="close" /></a>}
    </div>
    return (
      <Transition visible={this.state.tranVisible} type={transition}>
        {alertsview}
      </Transition>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.bool,
  showIcon: PropTypes.bool,
  transition: PropTypes.string,
  message: PropTypes.string,
  closable: PropTypes.bool,
  description: PropTypes.string,
  onClose: PropTypes.func,
};
Alert.defaultProps = {
  type: 'default',
  prefixCls: "w-alert",
  transition: "fade-in",
  visible: true,
  showIcon: false,
  closable: false,
  onClose() { },
}
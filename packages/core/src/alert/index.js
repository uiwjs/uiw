import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Overlay from '../overlay';
import Button from '../button';
import Icon from '../icon';
import './style/index.less';

export default class Alert extends React.Component {
  state = {
    loading: false,
  }
  handleConfirm = async (e) => {
    this.setState({ loading: true });
    try {
      await this.props.onConfirm(e);
      this.overlay.onClosed(e);
    } catch (e) { }
    this.setState({ loading: false });
  }
  handleCancel = async (e) => {
    await this.props.onCancel(e);
    this.setState({ loading: false });
    this.overlay.onClosed(e);
  }
  render() {
    const { prefixCls, className, useButton, autoFocus, content, cancelText, confirmText, type, icon, ...other } = this.props;
    const cls = classnames(prefixCls, className, { [`${type}`]: type });
    return (
      <Overlay
        {...other}
        ref={(node) => this.overlay = node}
        className={cls}
      >
        <div className={`${prefixCls}-inner`}>
          <div className={`${prefixCls}-body`}>
            {icon && <Icon type={icon} />}
            <div className={`${prefixCls}-content`}>
              {this.props.children || content}
            </div>
          </div>
          {useButton && (
            <div className={`${prefixCls}-footer`}>
              <Button autoFocus={autoFocus} type={type} disabled={this.state.loading} onClick={this.handleConfirm}>
                {this.state.loading && <Icon type="loading" spin={this.state.loading} />}
                {confirmText}
              </Button>
              {cancelText && <Button onClick={this.handleCancel} >{cancelText}</Button>}
            </div>
          )}
        </div>
      </Overlay>
    );
  }
}

Alert.propTypes = {
  prefixCls: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  useButton: PropTypes.bool,
  usePortal: PropTypes.bool,
  autoFocus: PropTypes.bool,
  isOpen: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'light', 'dark']),
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

Alert.defaultProps = {
  prefixCls: 'w-alert',
  confirmText: '确认',
  useButton: true,
  usePortal: true,
  autoFocus: false,
  isOpen: false,
  type: 'light',
  onCancel: () => null,
  onConfirm: () => null,
};

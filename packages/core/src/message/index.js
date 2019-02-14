import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
import Button from '../button';
import './style/index.less';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  handleClosed = () => {
    this.setState({ isOpen: false });
  }
  renderIcon = () => {
    const { type, showIcon } = this.props;
    let icon = this.props.icon;
    if (!icon && showIcon) {
      switch (type) {
        case 'success': icon = 'circle-check'; break;
        case 'warning': icon = 'warning'; break;
        case 'info': icon = 'information'; break;
        case 'error': icon = 'circle-close'; break;
        default: break;
      }
    }
    return icon;
  }
  render() {
    const { prefixCls, className, type, title, description, showIcon, icon, rounded, isCloseButtonShown, ...elementProps } = this.props;
    const children = description || this.props.children;
    const cls = classnames(prefixCls, className, `${prefixCls}-${type}`, {
      [`${prefixCls}-rounded`]: rounded,
      [`${prefixCls}-icon`]: showIcon,
      [`${prefixCls}${title ? '-title' : ''}${children ? '-description' : ''}`]: showIcon,
    });
    const Child = (
      <div className={cls} {...elementProps}>
        {isCloseButtonShown && <Button basic onClick={this.handleClosed} icon="close" type="light" />}
        {showIcon && <Icon type={this.renderIcon()} />}
        <span className={classnames(`${prefixCls}-title`)}>{title}</span>
        <span className={classnames(`${prefixCls}-description`)}>{children}</span>
      </div>
    );
    if (!isCloseButtonShown) {
      return Child;
    }
    return (
      <CSSTransition
        in={this.state.isOpen}
        unmountOnExit={true}
        timeout={300}
        classNames={prefixCls}
      >
        {Child}
      </CSSTransition>
    )
  }
}

Message.propTypes = {
  prefixCls: PropTypes.string,
  showIcon: PropTypes.bool,
  rounded: PropTypes.bool,
  isCloseButtonShown: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(['success', 'warning', 'info', 'error']).isRequired,
};

Message.defaultProps = {
  prefixCls: 'w-message',
  rounded: true,
  isCloseButtonShown: false,
};

import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '@uiw/react-icon';
import Button from '@uiw/react-button';
import './style/index.less';
import { IProps, HTMLDivProps } from '@uiw/utils';

export interface MessageProps extends IProps, Omit<HTMLDivProps, 'title'> {
  title?: React.ReactNode;
  icon?: JSX.Element | string | false | null;
  type?: 'success' | 'warning' | 'info' | 'error';
  description?: React.ReactNode;
  showIcon?: boolean;
  isCloseButtonShown?: boolean;
  rounded?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IMessageState {
  isOpen: boolean;
}

export default class Message extends React.Component<MessageProps, IMessageState> {
  public static defaultProps: MessageProps = {
    prefixCls: 'w-message',
    rounded: true,
    isCloseButtonShown: false,
  }
  constructor(props: MessageProps) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  handleClosed = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {onClose } = this.props;
    this.setState({ isOpen: false });
    onClose && onClose(e);
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
        unmountOnExit
        timeout={300}
        classNames={prefixCls}
      >
        {Child}
      </CSSTransition>
    );
  }
}

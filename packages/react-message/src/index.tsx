import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon, { IconProps } from '@uiw/react-icon';
// import './style/index.less';
import { IProps, HTMLDivProps } from '@uiw/utils';

import { MessageDivWrap, MessageTitleSpan, MessageDescriptionSpan, MessageButtonWarp } from './style';
export interface MessageProps extends IProps, Omit<HTMLDivProps, 'title'> {
  title?: React.ReactNode;
  icon?: IconProps['type'];
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
  };
  constructor(props: MessageProps) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }
  handleClosed = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onClose } = this.props;
    this.setState({ isOpen: false });
    onClose && onClose(e);
  };
  renderIcon = () => {
    const { type, showIcon } = this.props;
    let icon = this.props.icon;
    if (!icon && showIcon) {
      switch (type) {
        case 'success':
          icon = 'circle-check';
          break;
        case 'warning':
          icon = 'warning';
          break;
        case 'info':
          icon = 'information';
          break;
        case 'error':
          icon = 'circle-close';
          break;
        default:
          break;
      }
    }
    return icon;
  };
  render() {
    const {
      prefixCls,
      className,
      type,
      title,
      description,
      showIcon,
      icon,
      rounded,
      isCloseButtonShown,
      ...elementProps
    } = this.props;
    const children = description || this.props.children;
    const cls = [
      prefixCls,
      className,
      `${prefixCls}-${type}`,
      rounded ? `${prefixCls}-rounded` : null,
      showIcon ? `${prefixCls}-icon` : null,
      showIcon ? `${prefixCls}${title ? '-title' : ''}${children ? '-description' : ''}` : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    const Child = (
      <MessageDivWrap params={{ rounded, type, title, children, showIcon, icon }} className={cls} {...elementProps}>
        {isCloseButtonShown && (
          <MessageButtonWarp basic onClick={this.handleClosed} icon={<Icon type="close" />} type="light" />
        )}
        {showIcon && <Icon type={this.renderIcon()} />}
        <MessageTitleSpan params={{ showIcon, title, children }} className={`${prefixCls}-title`}>
          {title}
        </MessageTitleSpan>
        <MessageDescriptionSpan params={{ showIcon, title, children }} className={`${prefixCls}-description`}>
          {children}
        </MessageDescriptionSpan>
      </MessageDivWrap>
    );
    if (!isCloseButtonShown) {
      return Child;
    }
    return (
      <CSSTransition in={this.state.isOpen} unmountOnExit timeout={300} classNames={prefixCls}>
        {Child}
      </CSSTransition>
    );
  }
}

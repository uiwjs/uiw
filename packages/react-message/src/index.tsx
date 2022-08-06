import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { IconStyleBase } from '@uiw/react-icon';
// import './style/index.less';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { CircleCheck } from '@uiw/icons/lib/CircleCheck';
import { Close } from '@uiw/icons/lib/Close';
import { Warning } from '@uiw/icons/lib/Warning';
import { Information } from '@uiw/icons/lib/Information';
import { CircleClose } from '@uiw/icons/lib/CircleClose';
import {
  MessageStyleDivWrap,
  MessageStyleTitleSpan,
  MessageStyleDescriptionSpan,
  MessageStyleButtonWarp,
} from './style';
export interface MessageProps extends IProps, Omit<HTMLDivProps, 'title'> {
  title?: React.ReactNode;
  icon?: React.ReactNode;
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
    let base: any = this.props.icon;
    if (!base && showIcon) {
      let fill;
      switch (type) {
        case 'success':
          fill = '#28a745';
          base = CircleCheck;
          break;
        case 'warning':
          fill = '#ffc107';
          base = Warning;
          break;
        case 'info':
          fill = '#008ef0';
          base = Information;
          break;
        case 'error':
          fill = '#dc3545';
          base = CircleClose;
          break;
        default:
          break;
      }
      return <IconStyleBase fill={fill} as={base} />;
    }
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
      <MessageStyleDivWrap params={{ rounded, type, title, children, showIcon }} className={cls} {...elementProps}>
        {isCloseButtonShown && (
          <MessageStyleButtonWarp
            basic
            onClick={this.handleClosed}
            icon={<IconStyleBase fill="rgba(0, 0, 0, 0.38)" as={Close} />}
            type="light"
          />
        )}
        {showIcon && (icon ? icon : this.renderIcon())}
        <MessageStyleTitleSpan params={{ showIcon, title, children }} className={`${prefixCls}-title`}>
          {title}
        </MessageStyleTitleSpan>
        <MessageStyleDescriptionSpan params={{ showIcon, title, children }} className={`${prefixCls}-description`}>
          {children}
        </MessageStyleDescriptionSpan>
      </MessageStyleDivWrap>
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

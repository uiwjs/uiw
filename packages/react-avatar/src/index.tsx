import React from 'react';
import Icon from '@uiw/react-icon';
import { HTMLSpanProps } from '@uiw/utils';
import './style/index.less';

export interface AvatarProps extends HTMLSpanProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  icon?: JSX.Element | string | false | null;
  alt?: string;
  src?: string;
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
}

export interface AvatarState {
  isImgExist: boolean;
}

export default class Avatar extends React.Component<AvatarProps, AvatarState> {
  public static defaultProps: AvatarProps = {
    prefixCls: 'w-avatar',
    shape: 'circle',
    size: 'default',
  };
  public state: AvatarState = {
    isImgExist: true,
  };

  componentDidUpdate(prevProps: AvatarProps) {
    if (prevProps.src !== this.props.src) {
      this.setState({ isImgExist: true });
    }
  }

  onImgLoadError(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    const { onError } = this.props;
    const errorFlag = onError ? onError(event) : undefined;
    if (errorFlag !== false) {
      this.setState({ isImgExist: false });
    }
  }
  render() {
    const {
      prefixCls,
      className,
      size,
      shape,
      src,
      alt,
      icon,
      ...resetProps
    } = this.props;
    let children = this.props.children;
    const cls = [
      prefixCls,
      className,
      size ? `${prefixCls}-${size}` : null,
      shape ? `${prefixCls}-${shape}` : null,
      src ? `${prefixCls}-image` : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();
    if (this.state.isImgExist && src) {
      children = (
        <img src={src} alt={alt} onError={this.onImgLoadError.bind(this)} />
      );
    } else if (icon && typeof icon === 'string') {
      children = <Icon type={icon} />;
    } else if (icon && React.isValidElement(icon)) {
      children = icon;
    }
    return (
      <span {...resetProps} className={cls}>
        {children}
      </span>
    );
  }
}

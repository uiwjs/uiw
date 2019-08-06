import React from 'react';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';

export interface IAvatarProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  icon?: JSX.Element | string | false | null;
  alt?: string;
  src?: string;
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
}

export interface IAvatarState {
  isImgExist: boolean;
}

export default class Avatar extends React.Component<IAvatarProps, IAvatarState> {
  public static defaultProps: IAvatarProps = {
    prefixCls: 'w-avatar',
    shape: 'circle',
    size: 'default',
  }
  public state: IAvatarState = {
    isImgExist: true,
  }
  onImgLoadError() {
    this.setState({ isImgExist: false });
  }
  render() {
    const { prefixCls, className, size, shape, src, alt, icon, ...resetProps } = this.props;
    let children = this.props.children;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-image`]: src,
    });
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

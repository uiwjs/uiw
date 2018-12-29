import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';

export default class Avatar extends React.Component {
  state = {
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
        <img src={src} alt={alt} onError={this.onImgLoadError} />
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

Avatar.propTypes = {
  prefixCls: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small', 'mini']),
  shape: PropTypes.oneOf([
    'square', // 正方形
    'circle', // 圈
  ]),
};

Avatar.defaultProps = {
  prefixCls: 'w-avatar',
  shape: 'circle',
  size: 'default',
};

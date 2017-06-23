import React from 'react';
import { Component, PropTypes } from '../utils/';
import "./style/index.less";

export default class Loading extends Component {
  render() {
    const { prefixCls, className, size, children, tip, loading } = this.props;
    const icon_content = (<div className={`${prefixCls}-icon`}></div>)
    const loadingElm = (<div className={`${prefixCls}-tips-nested`}>{icon_content}{tip}</div>);
    const cls = this.classNames(prefixCls, {
      [`${prefixCls}-small`]: size === 'small',
      [`${prefixCls}-large`]: size === 'large',
      // [`${prefixCls}-show-text`]: !!tip,
      // [`${prefixCls}-blur`]: !!loading,
      [className]: className
    });


    return (
      <div className={cls}>
        {loading && <div className={`${prefixCls}-tips`}>
          {loadingElm}
        </div>}
        {children && <div className={loading ? `${prefixCls}-blur` : ''}>
          {this.props.children}
        </div>}
      </div>
    )
  }
}

Loading.defaultProps = {
  prefixCls: 'w-loading',
  loading: true,
  size: 'default'
};
Loading.propTypes = {
  prefixCls: PropTypes.string,
  tip: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'default', 'large'])
}
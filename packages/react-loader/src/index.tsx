import React, { useMemo } from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface LoaderProps extends IProps, HTMLDivProps {
  size?: 'small' | 'default' | 'large';
  loading?: boolean;
  fullscreen?: boolean;
  color?: string;
  bgColor?: string;
  vertical?: boolean;
  tip?: React.ReactNode;
  indicator?: React.ReactNode;
  children?: any | React.ReactNode;
}

export default (props: LoaderProps = {}) => {
  const { prefixCls = 'w-loader', className, size = 'default', loading = true, tip, vertical, color, bgColor, children, indicator, fullscreen = false, ...otherProps } = props;
  const cls = classnames(prefixCls, {
    [`${prefixCls}-${size}`]: size,
  }, className);

  const indicatorView = useMemo(() => indicator || (
    <svg viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10" />
    </svg>
  ),[]);

  const tipsView = useMemo(() => (
    <div
      className={classnames(`${prefixCls}-tips`, {
        [`${prefixCls}-fullscreen`]: fullscreen,
      })}
      style={{ color, backgroundColor: bgColor }}
    >
      <div className={`${prefixCls}-tips-nested`}>
        {indicatorView}
        {tip && <div className={classnames(`${prefixCls}-text`, { [`${prefixCls}-vertical`]: vertical })}>{tip}</div>}
      </div>
    </div>
  ),[fullscreen,bgColor,prefixCls,vertical,tip])

  return (
    <div className={cls} {...otherProps}>
      {(loading || fullscreen) && tipsView}
      {children && React.cloneElement(children, Object.assign({}, children.props, {
        className: classnames(`${prefixCls}-warp`, { [`${prefixCls}-blur`]: loading }),
      }))}
    </div>
  );
}

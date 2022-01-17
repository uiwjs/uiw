import React, { useMemo } from 'react';
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
  const {
    prefixCls = 'w-loader',
    className,
    size = 'default',
    loading = true,
    tip,
    vertical,
    color,
    bgColor,
    children,
    indicator,
    fullscreen = false,
    ...otherProps
  } = props;
  const cls = [prefixCls, className, size ? `${prefixCls}-${size}` : null].filter(Boolean).join(' ').trim();

  const indicatorView = useMemo(
    () => (
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10" />
      </svg>
    ),
    [],
  );

  const tipsView = useMemo(
    () => (
      <div
        className={[`${prefixCls}-tips`, fullscreen ? `${prefixCls}-fullscreen` : null]
          .filter(Boolean)
          .join(' ')
          .trim()}
        style={{ color, backgroundColor: bgColor }}
      >
        <div className={`${prefixCls}-tips-nested`}>
          {indicator || indicatorView}
          {tip && (
            <div
              className={[`${prefixCls}-text`, vertical ? `${prefixCls}-vertical` : null]
                .filter(Boolean)
                .join(' ')
                .trim()}
            >
              {tip}
            </div>
          )}
        </div>
      </div>
    ),
    [fullscreen, bgColor, prefixCls, vertical, tip],
  );

  return (
    <div className={cls} {...otherProps}>
      {(loading || fullscreen) && tipsView}
      {children &&
        React.cloneElement(
          children,
          Object.assign({}, children.props, {
            className: [`${prefixCls}-warp`, loading ? `${prefixCls}-blur` : null].filter(Boolean).join(' ').trim(),
          }),
        )}
    </div>
  );
};

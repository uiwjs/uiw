import React from 'react';
import classnames from 'classnames';
import { IProps } from '../utils/props';
import './style/index.less';

export interface ILoaderProps extends IProps {
  size: 'small' | 'default' | 'large';
  loading: boolean;
  fullscreen: boolean;
  color?: string;
  bgColor?: string;
  vertical?: boolean;
  tip?: React.ReactNode;
  indicator?: React.ReactNode;
  children?: any | React.ReactNode;
}

export default class Loader extends React.Component<ILoaderProps> {
  public static defaultProps: ILoaderProps = {
    prefixCls: 'w-loader',
    size: 'default',
    loading: true,
    fullscreen: false,
  }
  render() {
    const { prefixCls, className, size, loading, tip, vertical, color, bgColor, children, indicator, fullscreen, ...otherProps } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${size}`]: size,
    });

    return (
      <div className={cls} {...otherProps}>
        {(loading || fullscreen) && (
          <div
            className={classnames(`${prefixCls}-tips`, {
              [`${prefixCls}-fullscreen`]: fullscreen,
            })}
            style={{ color, backgroundColor: bgColor }}
          >
            <div className={`${prefixCls}-tips-nested`}>
              {indicator}
              {!indicator && (
                <svg viewBox="25 25 50 50">
                  <circle cx="50" cy="50" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10" />
                </svg>
              )}
              {tip && <div className={classnames(`${prefixCls}-text`, { [`${prefixCls}-vertical`]: vertical })}>{tip}</div>}
            </div>
          </div>
        )}
        {children && (
          React.cloneElement(children, Object.assign({}, children.props, {
            className: classnames(`${prefixCls}-warp`, { [`${prefixCls}-blur`]: loading }),
          }))
        )}
      </div>
    );
  }
}

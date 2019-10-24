import React from 'react';
import classnames from 'classnames';
import { IIconProps } from '../icon';
import { IProps, HTMLDivProps } from '../utils/props';
import { IconProgress } from './utils';
import './style/index.less';
import './style/circle.less';

export type Status = 'success' | 'active' | 'exception';
export interface ProgressCircleProps<T> extends IProps, HTMLDivProps {
  type?: IIconProps<T>['type'];
  status?: Status
  showText?: boolean; // 是否显示进度条文字内容
  percent?: number, // 百分比（必填）
  width?: number, // 圆圈进度条画布宽度
  strokeWidth?: number, // 进度条大小设置
  format?: (percent: number) => React.ReactNode;
}

export default class Circle<T> extends React.Component<ProgressCircleProps<T>> {
  public static defaultProps: ProgressCircleProps<{}> = {
    prefixCls: 'w-progress',
    showText: true,
    percent: 0, // 百分比（必填）
    width: 126, // 圆圈进度条画布宽度
    strokeWidth: 6, // 进度条大小设置
  }
  relativeStrokeWidth(type: 'track' | 'bg' | undefined, elm: SVGPathElement) {
    const { strokeWidth, percent } = this.props;
    if (elm && elm.parentNode) {
      const { width } = (elm.parentNode as SVGAElement).getBoundingClientRect();
      const _strokeWidth: string = (((strokeWidth as number) / width) * 100).toFixed(1);
      const radius = parseInt((50 - (parseFloat(_strokeWidth) / 2)).toString(), 10);
      elm.setAttribute('stroke-width', _strokeWidth);
      elm.setAttribute('d', `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`);
      if (type === 'track') {
        // 计算周长
        const perimeter = 2 * Math.PI * radius;
        elm.setAttribute('style', `stroke-dasharray:${perimeter}px,${perimeter}px;stroke-dashoffset:${(1 - ((percent as number) / 100)) * perimeter}px;transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;`);
      }
    }
  }
  render() {
    const { prefixCls, style, type, className, showText, percent, format, strokeWidth, width, status, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-circle`, {
      [`${prefixCls}-show-text`]: showText,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-status-success`]: parseInt((percent as number).toString(), 10) >= 100,
    });
    let progressInfo;
    const progressStatus = parseInt((percent as number).toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
    if (showText) {
      let percentView: React.ReactNode = `${percent}%`;
      if (progressStatus === 'exception') {
        percentView = <IconProgress type="close" />;
      } else if (progressStatus === 'success') {
        percentView = <IconProgress type="check" />;
      }
      progressInfo = <span className={`${prefixCls}-text`} style={{ fontSize: ((width as number) * 0.16) + 6 }}>{format ? format(percent as number) : percentView}</span>;
    }
    return (
      <div className={cls} style={style} {...resetProps}>
        <svg viewBox="0 0 100 100" width={`${width}`}>
          <path ref={this.relativeStrokeWidth.bind(this, 'bg')} className={`${prefixCls}-trail`} fill="none" />
          <path
            ref={this.relativeStrokeWidth.bind(this, 'track')}
            strokeLinecap="round"
            className={`${prefixCls}-stroke`}
            fill="none"
          />
        </svg>
        {progressInfo}
      </div>
    );
  }
}

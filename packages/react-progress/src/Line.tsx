import React from 'react';
import classnames from 'classnames';
import { IconProgress } from './utils';
import { ProgressCircleProps } from './Circle';
import './style/index.less';
import './style/line.less';

export interface ProgressLineProp<T> extends ProgressCircleProps<T> {}

export default class Line<T> extends React.Component<ProgressLineProp<T>> {
  public static defaultProps: ProgressLineProp<{}> = {
    prefixCls: 'w-progress',
    showText: true, // 是否显示进度条文字内容
    percent: 0, // 百分比（必填）
    width: 126, // 圆圈进度条画布宽度
    strokeWidth: 6, // 进度条大小设置
  };
  render() {
    const {
      prefixCls,
      style,
      className,
      showText,
      percent,
      format,
      strokeWidth,
      width,
      status,
      ...resetProps
    } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-line`, {
      [`${prefixCls}-show-text`]: showText,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-status-success`]:
        parseInt((percent as number).toString(), 10) >= 100,
    });
    let progressInfo;
    if (showText) {
      const progressStatus =
        parseInt((percent as number).toString(), 10) >= 100 &&
        !('status' in this.props)
          ? 'success'
          : status;
      let percentView: React.ReactNode = `${percent}%`;
      if (progressStatus === 'exception') {
        percentView = <IconProgress type="circle-close" />;
      } else if (progressStatus === 'success') {
        percentView = <IconProgress type="circle-check" />;
      }
      progressInfo = (
        <span className={`${prefixCls}-text`}>
          {format ? format(percent as number) : percentView}
        </span>
      );
    }
    const percentStyle = {
      width: `${percent}%`,
      height: strokeWidth,
    };
    return (
      <div className={cls} style={style} {...resetProps}>
        <div className={`${prefixCls}-bar`}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle} />
          </div>
        </div>
        {progressInfo}
      </div>
    );
  }
}

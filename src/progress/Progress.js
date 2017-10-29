import React from 'react';
import { Component, PropTypes } from '../utils/';
import Icon from '../icon/';

export default class Progress extends Component {
  render() {
    const { prefixCls, type, className, showText, percent, strokeWidth, status, ...resetProps } = this.props;
    const cls = this.classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-show-text`]: showText,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-status-success`]: parseInt(percent.toString(), 10) >= 100,
    })
    let progress, progressInfo;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
    if (showText) {
      let text;
      if (progressStatus === 'exception') {
        text = <Icon type='circle-close' />
      } else if (progressStatus === 'success') {
        text = <Icon type='circle-check' />
      } else {
        text = percent + '%'
      }
      progressInfo = <span className={`${prefixCls}-text`}>{text}</span>;
    }
    if (type === 'line') {
      const percentStyle = {
        width: `${percent}%`,
        height: strokeWidth || 6,
      }
      progress = (
        <div className={`${prefixCls}-bar`}>
          <div className={`${prefixCls}-inner`}>
            <div className={`${prefixCls}-bg`} style={percentStyle} />
          </div>
        </div>
      )
    }
    return (
      <div {...resetProps} className={cls}>{progress} {progressInfo}</div>
    )
  }
}

Progress.propTypes = {
  prefixCls: PropTypes.string,
  showText: PropTypes.bool,
  status: PropTypes.oneOf([
    'success',
    'active',
    'exception',
  ]),
  type: PropTypes.oneOf([
    'line',
    'circle',
  ]),
  percent: PropTypes.number.isRequired,
}

Progress.defaultProps = {
  prefixCls: 'w-progress',
  showText: true, // 是否显示进度条文字内容
  percent: 0,     // 百分比（必填）
  type: 'line',
}

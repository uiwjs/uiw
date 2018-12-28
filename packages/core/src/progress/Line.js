import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';
import './style/line.less';

const IconProgress = ({ type }) => <Icon type={type} />;

export default class Line extends React.Component {
  render() {
    const { prefixCls, style, className, showText, percent, format, strokeWidth, width, status, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-line`, {
      [`${prefixCls}-show-text`]: showText,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-status-success`]: parseInt(percent.toString(), 10) >= 100,
    });
    let progressInfo;
    if (showText) {
      const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
      let percentView = `${percent}%`;
      if (progressStatus === 'exception') {
        percentView = <IconProgress type="circle-close" />;
      } else if (progressStatus === 'success') {
        percentView = <IconProgress type="circle-check" />;
      }
      progressInfo = <span className={`${prefixCls}-text`}>{format ? format(percent) : percentView}</span>;
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

Line.propTypes = {
  prefixCls: PropTypes.string,
  showText: PropTypes.bool,
  format: PropTypes.func,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  status: PropTypes.oneOf([
    'success',
    'active',
    'exception',
  ]),
  percent: PropTypes.number.isRequired,
};

Line.defaultProps = {
  prefixCls: 'w-progress',
  showText: true, // 是否显示进度条文字内容
  percent: 0, // 百分比（必填）
  width: 126, // 圆圈进度条画布宽度
  strokeWidth: 6, // 进度条大小设置
};

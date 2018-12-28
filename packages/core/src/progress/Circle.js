import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../icon';
import './style/index.less';
import './style/circle.less';

const IconProgress = ({ type }) => <Icon type={type} />;

export default class Circle extends React.Component {
  relativeStrokeWidth(bl, type, elm) {
    const { strokeWidth, percent } = this.props;
    if (elm) {
      const { width } = elm.parentNode.getBoundingClientRect();
      const _strokeWidth = ((strokeWidth / width) * 100).toFixed(1);
      const radius = parseInt(50 - (parseFloat(_strokeWidth) / 2), 10);
      elm.setAttribute('stroke-width', _strokeWidth);
      elm.setAttribute('d', `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`);
      if (type === 'track') {
        // 计算周长
        const perimeter = 2 * Math.PI * radius;
        elm.setAttribute('style', `stroke-dasharray:${perimeter}px,${perimeter}px;stroke-dashoffset:${(1 - (percent / 100)) * perimeter}px;transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;`);
      }
    }
  }
  render() {
    const { prefixCls, style, type, className, showText, percent, format, strokeWidth, width, status, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-circle`, {
      [`${prefixCls}-show-text`]: showText,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-status-success`]: parseInt(percent.toString(), 10) >= 100,
    });
    let progressInfo;
    const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : status;
    if (showText) {
      let percentView = `${percent}%`;
      if (progressStatus === 'exception') {
        percentView = <IconProgress type="close" />;
      } else if (progressStatus === 'success') {
        percentView = <IconProgress type="check" />;
      }
      progressInfo = <span className={`${prefixCls}-text`} style={{ fontSize: (width * 0.16) + 6 }}>{format ? format(percent) : percentView}</span>;
    }
    return (
      <div className={cls} style={style} {...resetProps}>
        <svg viewBox="0 0 100 100" width={`${width}`}>
          <path ref={this.relativeStrokeWidth.bind(this, true, 'bg')} className={`${prefixCls}-trail`} fill="none" />
          <path 
            ref={this.relativeStrokeWidth.bind(this, true, 'track')}
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

Circle.propTypes = {
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

Circle.defaultProps = {
  prefixCls: 'w-progress',
  showText: true, // 是否显示进度条文字内容
  percent: 0, // 百分比（必填）
  width: 126, // 圆圈进度条画布宽度
  strokeWidth: 6, // 进度条大小设置
};

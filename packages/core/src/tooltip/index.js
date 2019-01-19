import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Tooltip extends React.Component {
  render() {
    const { prefixCls, className, placement, visibleArrow, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${placement}`]: placement,
    });
    return (
      <div className={cls} {...other}>
        {visibleArrow && <div className={`${prefixCls}-arrow`} />}
        <div className={`${prefixCls}-inner`}>{this.props.children}</div>
      </div>
    );
  }
}

Tooltip.propTypes = {
  prefixCls: PropTypes.string,
  // Tooltip 的出现位置
  placement: PropTypes.oneOf([
    'top', 'topLeft', 'topRight',
    'left', 'leftTop', 'leftBottom',
    'right', 'rightTop', 'rightBottom',
    'bottom', 'bottomLeft', 'bottomRight',
  ]),
  // 是否显示 Tooltips 箭头
  visibleArrow: PropTypes.bool,
};

Tooltip.defaultProps = {
  prefixCls: 'w-tooltip',
  placement: 'top',
  visibleArrow: true,
};

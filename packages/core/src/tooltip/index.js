import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OverlayTrigger from '../overlay-trigger';
import './style/index.less';

export default class Tooltip extends React.Component {
  render() {
    const { prefixCls, className, placement, isOpen, trigger, delay, usePortal, visibleArrow, onVisibleChange, ...other } = this.props;
    const cls = classnames(prefixCls, className, { 'no-arrow': !visibleArrow });
    return (
      <OverlayTrigger
        usePortal={usePortal}
        isOpen={isOpen}
        trigger={trigger}
        delay={delay}
        onVisibleChange={onVisibleChange}
        placement={placement}
        {...other}
        overlay={
          <div className={cls}>
            {visibleArrow && <div className={`${prefixCls}-arrow`} />}
            <div className={`${prefixCls}-inner`}>{this.props.content}</div>
          </div>
        }
      >
        {typeof this.props.children === 'object' ? this.props.children : <span>{this.props.children}</span>}
      </OverlayTrigger>
    );
  }
}

Tooltip.propTypes = {
  prefixCls: PropTypes.string,
  usePortal: PropTypes.bool,
  isOpen: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number,
    }),
  ]),
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
  usePortal: true,
  isOpen: false,
  visibleArrow: true,
};

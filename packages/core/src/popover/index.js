import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import OverlayTrigger from '../overlay-trigger';
import './style/index.less';

const Arrow = ({ prefixCls }) => (
  <div className={`${prefixCls}-arrow`}>
    <svg viewBox="0 0 30 30">
      <path fill="#000" fillOpacity="0.1" d="M8.11 6.302c1.015-.936 1.887-2.922 1.887-4.297v26c0-1.378-.868-3.357-1.888-4.297L.925 17.09c-1.237-1.14-1.233-3.034 0-4.17L8.11 6.302z" />
      <path fill="#fff" className="bp3-popover-arrow-fill" d="M8.787 7.036c1.22-1.125 2.21-3.376 2.21-5.03V0v30-2.005c0-1.654-.983-3.9-2.21-5.03l-7.183-6.616c-.81-.746-.802-1.96 0-2.7l7.183-6.614z" />
    </svg>
  </div>
);

export default class Popover extends React.Component {
  render() {
    const { prefixCls, className, placement, content, visible, trigger, delay, visibleArrow, onVisibleChange, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${placement}`]: placement,
    });
    return (
      <OverlayTrigger
        usePortal={false}
        visible={visible}
        trigger={trigger}
        delay={delay}
        onVisibleChange={onVisibleChange}
        placement={placement}
        overlay={
          <div className={cls} {...other}>
            {visibleArrow && <Arrow prefixCls={prefixCls} />}
            <div className={`${prefixCls}-inner`}>{this.props.content}</div>
          </div>
        }
      >
        {typeof this.props.children === 'object' ? this.props.children : <span>{this.props.children}</span>}
      </OverlayTrigger>
    );
  }
}

Popover.propTypes = {
  prefixCls: PropTypes.string,
  visible: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number,
      hide: PropTypes.number,
    }),
  ]),
  // Popover 的出现位置
  placement: PropTypes.oneOf([
    'top', 'topLeft', 'topRight',
    'left', 'leftTop', 'leftBottom',
    'right', 'rightTop', 'rightBottom',
    'bottom', 'bottomLeft', 'bottomRight',
  ]),
  // 是否显示 Popovers 箭头
  visibleArrow: PropTypes.bool,
};

Popover.defaultProps = {
  prefixCls: 'w-popover',
  placement: 'top',
  visible: false,
  visibleArrow: true,
};

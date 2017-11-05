import React from 'react';
import { Component, PropTypes } from '../utils/';
import Transition from '../transition';
import Icon from '../icon';

export default class Panel extends Component {
  render() {
    const { prefixCls, className, children, isActive, onItemClick, disabled, showArrow, header, childProps, ...resetProps } = this.props;
    const cls = this.classNames([`${prefixCls}-item`], className, {
      [`${prefixCls}-active`]: isActive,
      [`${prefixCls}-disabled`]: disabled,
    })
    return (
      <div className={cls} {...resetProps}>
        <div
          className={[`${prefixCls}-header`]}
          onClick={onItemClick.bind(this)}
        >
          {showArrow && <Icon type="arrow-down" />}
          {header}
        </div>
        <Transition in={isActive} className={this.classNames([`${prefixCls}-conten`])} unmountOnExit={false} sequence='height'>
          <div>
            {children}
          </div>
        </Transition>
      </div>
    )
  }
}

Panel.propTypes = {
  prefixCls: PropTypes.string,
  disabled: PropTypes.bool,
  onItemClick: PropTypes.func,
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
}

Panel.defaultProps = {
  disabled: false,
}

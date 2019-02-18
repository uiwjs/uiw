import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

export default class Panel extends React.Component {
  getInstance = (status, instance) => {
    if (!instance) {
      return;
    }
    if (status === 'exited' || status === 'exiting') {
      instance.style.height = '1px';
    }
    if (status === 'entered' || status === 'entering') {
      instance.style.height = `${instance.scrollHeight}px`;
    }
  }
  render() {
    const { prefixCls, className, icon, children, isActive, onItemClick, disabled, showArrow, header, childProps, ...resetProps } = this.props;
    const cls = classnames([`${prefixCls}-item`], className, {
      [`${prefixCls}-active`]: isActive,
      [`${prefixCls}-disabled`]: disabled,
    });
    const iconRender = typeof (icon) === 'string' ? <Icon type={icon} /> : icon;

    const childStyle = (child) => {
      return Object.assign({}, child && child.props ? child.props.style : {}, {
        transitionDuration: '300ms',
      });
    };
    return (
      <div className={cls} {...resetProps}>
        <div
          className={[`${prefixCls}-header`]}
          onClick={onItemClick.bind(this)}
        >
          {showArrow && iconRender}
          <span>{header}</span>
        </div>
        <CSSTransition
          in={isActive}
          unmountOnExit={false}
          timeout={300}
          classNames={`${prefixCls}-panel`}
        >
          {status => React.cloneElement(<div>{children}</div>, {
            className: `${prefixCls}-panel`,
            style: childStyle(children, status),
            ref: this.getInstance.bind(this, status),
          })}
        </CSSTransition>
      </div>
    );
  }
}

Panel.propTypes = {
  prefixCls: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  disabled: PropTypes.bool,
  onItemClick: PropTypes.func,
  showArrow: PropTypes.bool,
  isActive: PropTypes.bool,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]),
};

Panel.defaultProps = {
  disabled: false,
  icon: 'arrow-down',
};

import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style/col.less';

export default class Col extends React.Component {
  static defaultProps = {
    prefixCls: 'w-col',
  }
  render() {
    const { prefixCls, className, fixed, span, grow, align, ...props } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-${span}`]: span,
      [`${prefixCls}-fixed`]: fixed,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-grow-${grow}`]: grow
    });
    return (
      <div className={cls} {...props}>
        {this.props.children}
      </div>
    );
  }
}

Col.propTypes = {
  prefixCls: PropTypes.string,
  fixed: PropTypes.bool,
  grow: PropTypes.number,
};

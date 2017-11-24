import React from 'react';
import { Component, PropTypes } from '../utils/';

export default class Card extends Component {
  render() {
    const { prefixCls, className, title, extra, footer, bordered, noHover, bodyStyle, children, ...resetProps } = this.props;

    const cls = this.classNames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-no-hover`]: noHover,
    });

    let head;
    if (title || extra) {
      head = (
        <div className={`${prefixCls}-head`}>
          {title ? <div className={`${prefixCls}-head-title`}>{title}</div> : null}
          {extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null}
        </div>
      );
    }
    return (
      <div {...resetProps} className={cls}>
        {head}
        <div className={`${prefixCls}-body`} style={bodyStyle}>{children}</div>
        {footer ? <div className={`${prefixCls}-footer`}>{footer}</div> : null}
      </div>
    );
  }
}

Card.propTypes = {
  prefixCls: PropTypes.string,
  bordered: PropTypes.bool,
  extra: PropTypes.node,
  footer: PropTypes.node,
  noHover: PropTypes.bool,
  bodyStyle: PropTypes.object,
};

Card.defaultProps = {
  prefixCls: 'w-card',
  bordered: true,
  noHover: false,
};

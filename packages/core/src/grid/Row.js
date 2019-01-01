import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './style/row.less';

export default class Row extends React.Component {
  static defaultProps = {
    prefixCls: 'w-row',
    gutter: 0,
    justify: null,
  }
  render() {
    const { prefixCls, gutter, justify, align, ...props } = this.props;
    const cls = classnames(prefixCls, {
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify
    });
    const gutterStyl = !gutter ? {} : { paddingLeft: gutter / 2, paddingRight: gutter / 2, }
    return (
      <div className={cls} {...props}>
        {React.Children.map(this.props.children, (element) => {
          return React.cloneElement(element, Object.assign({}, element.props, {
            style: { ...element.props.style, ...gutterStyl },
          }));
        })}
      </div>
    );
  }
}
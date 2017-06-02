import React, { Component,Children,cloneElement,createElement } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import PropTypes from 'prop-types';

export default class Row extends Component {
  render() {
    const { prefixCls,className,gutter,children,tag,...others } = this.props;

    const cols = Children.map(children, (col) => {
      if (!col) return null;

      if (col.props && gutter > 0) {
        return cloneElement(col, {
          style: assign({}, {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
          }, col.props.style),
        });
      }
      return col;
    });

    return createElement(this.props.tag, {
      className: classNames(className,'w-row'),
      ...others
    },cols);
  }
}


Row.childContextTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Row.propTypes = {
  prefixCls:PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Row.defaultProps = {
  prefixCls: "w-row",
  tag: 'div'
}

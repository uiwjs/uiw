import React, { createElement } from 'react';
import {Component, PropTypes} from '../utils/';

export default class Col extends Component {
  render() {
    const { prefixCls,tag,span, xs,sm,md,lg, ...others} = this.props;
    let classList = [];
    ['span', 'offset', 'pull', 'push', 'order'].forEach(prop => {
      let num = this.props[prop];
      if (num) {
        classList.push(
          prop !== 'span' ? `w-col-${prop}-${num}` : `w-col-${num}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this.props[size] === 'object') {
        let props = this.props[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
            ? `w-col-${size}-${prop}-${props[prop]}`
            : `w-col-${size}-${props[prop]}`
          );
        });
      } else {
        if (this.props[size]) {
          classList.push(`w-col-${size}-${Number(this.props[size])}`);
        }
      }
    });

    return createElement(this.props.tag, {
      className: this.classNames('w-col',classList), ...others
    }, this.props.children);
  }
}

Col.propTypes = {
  prefixCls:PropTypes.string,
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pull: PropTypes.number,
  push: PropTypes.number,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  tag: PropTypes.string
}

Col.defaultProps = {
  prefixCls: "w-col",
  tag: 'div',
  span: 24,
}

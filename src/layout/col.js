import React, { Component,createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Col extends Component {
  render() {
    const { prefixCls,tag,span,...others} = this.props;
    let classList = [];
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      let num = this.props[prop];
      if (num) {
        classList.push(
          prop !== 'span' ? `w-col-${prop}-${num}` : `w-col-${num}`
        );
      }
    });
    return createElement(this.props.tag, {
      className: classNames('w-col',classList),
      ...others
    }, this.props.children);
  }
}


Col.propTypes = {
  prefixCls:PropTypes.string,
  tag: PropTypes.string,
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Col.defaultProps = {
  prefixCls: "w-col",
  tag: 'div'
}

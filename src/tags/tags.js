import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {IconCloseSmall} from '../svgs';

export default class Alerts extends Component {
  static propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    color: 'default',
    prefixCls: "w-tags"
  }
  close = (e) => {
    const onClose = this.props.onClose;
    if (onClose) onClose(e);
    if (e.defaultPrevented) return;
    const dom = ReactDOM.findDOMNode(this);
    dom.parentNode.removeChild(dom);
  }
  render() {
    const { prefixCls, color, onClose, className, children, ...others } = this.props;

    const cls = classNames(prefixCls,{
        [`${prefixCls}-white`]:  (color === 'white')  || (color === 'default'),
        [`${prefixCls}-red`]:    (color === 'red')    || (color === 'error'),
        [`${prefixCls}-orange`]: (color === 'orange') || (color === 'warn'),
        [`${prefixCls}-green`]:  (color === 'green')  || (color === 'success'),
        [`${prefixCls}-blue`]:   (color === 'blue')   || (color === 'info'),
        [`${prefixCls}-cyan`]:   (color === 'cyan'),
        [`${prefixCls}-pink`]:   (color === 'pink'),
        [`${prefixCls}-purple`]: (color === 'purple'),

        [className]: className
      });

    return (
      <span className={cls}>{children} {onClose&&<i onClick={this.close}>{IconCloseSmall}</i>}</span>
    );
  }
}

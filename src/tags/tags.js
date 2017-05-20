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
  isPresetColor(color) {
    return /^(white|pink|red|yellow|orange|cyan|green|blue|purple)?$/.test(color);
  }
  render() {
    const { prefixCls, color, onClose, className, children, ...others } = this.props;

    let colors = '';
    switch(color){
      case 'default': colors='white';break;
      case 'error':   colors='red';break;
      case 'warn':    colors='orange';break;
      case 'success': colors='green';break;
      case 'info':    colors='blue';break;
      default:        colors = color;break;
    }
    const cls = classNames(prefixCls,{
        [`${prefixCls}-${colors}`]: this.isPresetColor(colors),
        [className]: className
      });

    return (
      <span className={cls}>{children} {onClose&&<i onClick={this.close}>{IconCloseSmall}</i>}</span>
    );
  }
}

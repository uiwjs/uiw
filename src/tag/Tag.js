import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {IconCloseSmall} from '../svgs';

export default class Tag extends Component {
  close = (e) => {
    const onClose = this.props.onClose;
    if (onClose) onClose(e);
    if (e.defaultPrevented) return;
    const dom = ReactDOM.findDOMNode(this);
    dom.parentNode.removeChild(dom);
  }
  isColorValue(color){
    var span = document.createElement("span");
    span.style.color = color;
    if(span.style.color != "") return true;
    else return false;
    span = null;
  }
  isPresetColor(color) {
    return /^(white|pink|red|yellow|orange|cyan|green|blue|purple)?$/.test(color)
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

    // 自定义颜色值
    let styles = {}
    if(!this.isPresetColor(colors) && this.isColorValue(colors) ){
      styles.style = {}
      styles.style.backgroundColor = colors;
    }

    return (
      <span {...styles} className={cls}>{children} {onClose&&<i onClick={this.close}>{IconCloseSmall}</i>}</span>
    );
  }
}

Tag.propTypes = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
};
Tag.defaultProps = {
  color: 'default',
  prefixCls: "w-tags"
}
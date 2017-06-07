import React from 'react';
import {Component, PropTypes, ReactDOM} from '../utils/';
import {IconCloseSmall} from '../svgs';

export default class Tag extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:true
    }
  }
  close = (e) => {
    const {onClose} = this.props;
    if (onClose) onClose(e);
    if (e.isDefaultPrevented()) return;
    this.setState({
      visible:false
    })
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
    const { prefixCls, color, onClose, className, checked, children, ...others } = this.props;
    const {visible} = this.state;
    let colors = '';
    switch(color){
      case 'default': colors='white';break;
      case 'error':   colors='red';break;
      case 'warn':    colors='orange';break;
      case 'success': colors='green';break;
      case 'info':    colors='blue';break;
      default:        colors = color;break;
    }
    const cls = this.classNames(prefixCls,{
        [`${prefixCls}-${colors}`]: this.isPresetColor(colors),
        'checkable': checked == false,
        'checked': checked,
        'className': className,
      });

    // 自定义颜色值
    let styles = {}
    if(!this.isPresetColor(colors) && this.isColorValue(colors) ){
      styles.backgroundColor = colors;
    }

    return visible ? (
      <span {...others} style={styles} className={cls}>
          {children} 
          {onClose&&<i onClick={this.close} ref="iconclose">{IconCloseSmall}</i>}
      </span>
    ) :null;
  }
}

Tag.propTypes = {
  prefixCls: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
};
Tag.defaultProps = {
  color: 'default',
  prefixCls: "w-tag"
}
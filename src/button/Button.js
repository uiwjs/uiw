import React from 'react';
import {Component, PropTypes} from '../utils/';
import "./style/index.less";
import Icon from '../icon/';

export default class Button extends Component {
  render() {
    const { prefixCls, type, size, icon, active, disabled, block, className, loading, children, ...others } = this.props;
    let types = type;
    switch(type){
      case 'error': types='danger';break;
      default:      types = type;  break;
    }
    const cls = this.classNames(prefixCls,{
        // [`${prefixCls}-default`]: size === 'default',         //（默认尺寸）Default button
        [`${prefixCls}-size-${size}`]: /^(large|default|small|mini)?$/.test(size),
        [`${prefixCls}-${types}`]: /^(default|primary|success|info|warn|danger)?$/.test(types),
        [`${prefixCls}-loading`]: loading,  // 加载
        'disabled': disabled || loading,    // 禁用状态
        'active': active,                   // 激活状态
        'block': block,                     // （块级元素）Block level 

        [className]: className
      });
    return (
      <button { ...others } disabled={disabled || loading} type={this.props.nativeType} className={ cls }>
        {icon&& <Icon type={icon} />}
        { children }
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
  active: false,
  loading: false,
  block: false,
  htmlType: 'button',
  type: 'default',
  size: 'default',
  prefixCls: "w-btn",
};
Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  htmlType: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'default', 'small', 'mini']),
  type: PropTypes.oneOf(["default","primary","success","info","warn","error","danger"]),
}


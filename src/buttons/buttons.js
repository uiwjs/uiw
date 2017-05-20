import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import "./style/index.less";

export default class Buttons extends Component {
  static defaultProps = {
    disabled: false,
    active: false,
    loading: false,
    block: false,
    type: 'default',
    size: 'normal',
    prefixCls: "w-btn",
  };
  static propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
  }
  render() {
    const { prefixCls, type, size, active, disabled, block, className, loading, children, ...others } = this.props;

    let types = type;
    switch(type){
      case 'error': types='danger';break;
      default:      types = type;  break;
    }
    const cls = classNames(prefixCls,{
        // [`${prefixCls}-default`]: size === 'default',         //（默认尺寸）Default button
        [`${prefixCls}-size-${size}`]:  /^(large|default|small|extra-small)?$/.test(size),
        [`${prefixCls}-${types}`]: /^(default|primary|success|info|warn|danger)?$/.test(types),
        [`${prefixCls}-loading`]: loading,  // 加载
        'disabled': disabled || loading,    // 禁用状态
        'active': active,                   // 激活状态
        'block': block,                     // （块级元素）Block level 

        [className]: className
      });
    console.log(cls)
    return (
      <button { ...others } disabled={disabled || loading} className={ cls }>{ children }</button>
    );
  }
}

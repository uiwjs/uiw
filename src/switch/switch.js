import React, { Component,createElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import assign from 'object-assign';

export default class Switch extends Component {
  constructor(props){
    super(props);
    this.state = {
      _checked:props.checked
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    const {onChange} =this.props;
    this.setState({
      _checked:e.target.checked
    })
    onChange&&onChange(e.target.checked,e)
  }
  render() {
    const { prefixCls,className,style,disabled,checked,checkedChildren,unCheckedChildren,color,unColor,...others} = this.props;
    const { _checked } = this.state;


    const textView = _checked ? checkedChildren : unCheckedChildren;



    const cls = classNames(prefixCls,className,{
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-checked`]: _checked,
        [`${prefixCls}-color`]: (color || unColor)?true:false,
      });

    return (
      <label style={assign({}, {
        backgroundColor:_checked ? color : unColor
      }, style)} className={cls}>
        <input disabled={disabled} checked={_checked} onChange={this.onChange} type="checkbox"/>
        <span>{_checked ? checkedChildren : unCheckedChildren}</span>
      </label>
    )
  }
}

Switch.propTypes = {
  prefixCls:PropTypes.string,
  checked:PropTypes.bool,
  disabled:PropTypes.bool,
  color:PropTypes.string,
  unColor:PropTypes.string,
  checkedChildren:PropTypes.string,
  unCheckedChildren:PropTypes.string,
  onChange:PropTypes.func,
}

Switch.defaultProps = {
  prefixCls: "w-switch",
  disabled: false
}

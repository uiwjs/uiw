import React from 'react';
import { mount } from 'enzyme';
import { Input } from '../../../src';


describe('<Input>',() => {
  const warpperState = {
    value:0,
  }
  var wrapper = mount(<Input
    onChange ={(e,value)=>{
      warpperState.value = value
    }}/>);


  it('Test the default props and node.',()=>{
    expect(wrapper.name()).toBe('Input');
    //默认值测试
    expect(wrapper.find('.w-input')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Input);
    expect(wrapper.at(0).prop('prefixCls')).toBe('w-input');
    expect(wrapper.at(0).prop('type')).toBe('text');
    expect(wrapper.at(0).prop('autoComplete')).toBe('off');
    expect(wrapper.find('.w-input').type()).toBe('div')
    expect(wrapper.find('.w-input-inner').type()).toBe('input');

  })

})
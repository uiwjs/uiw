import React from 'react';
import { mount } from 'enzyme';
import { Input } from '../../../src';


describe('<Input>',() => {
  const wrapperState = {
    value:0,
  }
  var wrapper = mount(<Input
    onChange ={(e,value)=>{
      wrapperState.value = value
    }}  
    onSearch ={(e,value)=>{
      wrapperState.value = value
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


  it('Test disabled attributes.',() => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.w-input').at(0).prop('className')).toBe('w-input w-disabled');
  })

  it('Test textarea attributes.',() => {
    wrapper.setProps({ type: 'textarea' });
    wrapper.setProps({ disabled: false });
    expect(wrapper.at(0).prop('type')).toBe('textarea');
    expect(wrapper.find('.w-input').at(0).prop('className')).toBe('w-input textarea w-input-inner');
  })

  it('Test onChange event.',()=>{
    wrapper.setProps({ type: 'text'});
    let input = wrapper.find('.w-input').at(0);
    input.simulate('change')
    expect(input.html()).toContain('<div class="w-input"><input type="text" autocomplete="off" class="w-input-inner"></div>')
  })

    it('Test onSearch event.',()=>{
    wrapper.setProps({ type: 'input' });
    let input = wrapper.find('.w-input').at(0);
    input.simulate('change')
    expect(input.html()).toContain('<div class="w-input"><input type="input" autocomplete="off" class="w-input-inner"></div>')
  })

  it('Test onKeyUp event.',()=>{
    wrapper.setProps({ type: 'input' });
    let input = wrapper.find('.w-input').at(0);
    input.simulate('keyup')
    expect(input.html()).toContain('<div class="w-input"><input type="input" autocomplete="off" class="w-input-inner"></div>')
  })

  it('Test defaultValue attributes.',() => {
    wrapper.setProps({ defaultValue: '默认值' });
    expect(wrapper.at(0).prop('defaultValue')).toBe('默认值');
  })

  it('Test size attributes.',() => {
    wrapper.setProps({ size: 'mini' });
    expect(wrapper.at(0).prop('size')).toBe('mini');
    wrapper.setProps({ size: 'large' });
    expect(wrapper.at(0).prop('size')).toBe('large');
    wrapper.setProps({ size: 'small' });
    expect(wrapper.at(0).prop('size')).toBe('small');
  })
 
})
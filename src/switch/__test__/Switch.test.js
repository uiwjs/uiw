import React from 'react';
import { mount } from 'enzyme';
import { Switch } from '../../../src';

describe('<Switch>', () => {
  const wrapperState = {
    value: 0,
  };
  const wrapper = mount(<Switch
    onChange={(e, checked) => {
      wrapperState.value = checked;
    }}
  />);
  it('Test the default props and node.', () => {
    expect(wrapper.name()).toBe('Switch');
    // 默认值测试
    expect(wrapper.find('.w-switch')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Switch);
    expect(wrapper.at(0).prop('prefixCls')).toBe('w-switch');
    expect(wrapper.at(0).prop('size')).toBe('default');
    expect(wrapper.at(0).prop('disabled')).toBe(false);
    expect(wrapper.at(0).prop('checked')).toBe(false);
  });

  it('Test checked attributes.', () => {
    expect(wrapper.find('.w-switch').at(0).prop('className')).toBe('w-switch w-switch-default');
    wrapper.setProps({ checked: true });
    expect(wrapper.find('.w-switch').at(0).prop('className')).toBe('w-switch w-switch-checked w-switch-default');
  });

  it('Test size attributes.', () => {
    wrapper.setProps({ size: 'large' });
    expect(wrapper.find('.w-switch').at(0).prop('className')).toBe('w-switch w-switch-checked w-switch-large');
  });

  it('Test onChange event.', () => {
    const S = wrapper.find('.w-switch input').at(0);
    S.simulate('change');
    expect(wrapperState.value).toBe(true);
    expect(S.html()).toContain('<input type="checkbox">');
  });
});

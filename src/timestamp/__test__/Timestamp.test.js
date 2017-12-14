import React from 'react';
import { mount } from 'enzyme';
import { Timestamp } from '../../../src';

describe('<Timestamp>', () => {
  const wrapper = mount(<Timestamp
    value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)"
  />);
  it('Test the default props and node.', () => {
    expect(wrapper.name()).toBe('Timestamp');
    // 默认值测试
    expect(wrapper.find('.w-timestamp')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Timestamp);
    expect(wrapper.at(0).prop('prefixCls')).toBe('w-timestamp');
    expect(wrapper.at(0).prop('format')).toBe('yyyy-MM-dd hh:mm:ss');
    expect(wrapper.html()).toContain('<span class="w-timestamp" value="Wed Nov 22 2017 02:06:01 GMT+0800 (CST)" format="yyyy-MM-dd hh:mm:ss">2017-11-22 02:06:01</span>');
  });
});

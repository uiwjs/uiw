import React from 'react';
import { mount } from 'enzyme';
import { Card, Icon } from '../../../src';

describe('<Card>', () => {
  const footer = (
    <a href="https://uiw-react.github.io">
      <Icon type="user" />&nbsp;
      16 Friends
    </a>
  );
  const wrapper = mount(<Card
    title="我是标题"
    footer={footer}
  />);
  it('Test the default props and node.', () => {
    expect(wrapper.name()).toBe('Card');
    // 默认值测试
    expect(wrapper.find('.w-card')).toHaveLength(1);
    expect(wrapper.find('.w-card-head-title')).toHaveLength(1);
    expect(wrapper.find('.w-card-footer')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Card);
    expect(wrapper.at(0).prop('prefixCls')).toBe('w-card');
    expect(wrapper.at(0).prop('bordered')).toBe(true);
    expect(wrapper.at(0).prop('noHover')).toBe(false);
  });
});

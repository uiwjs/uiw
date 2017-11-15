import React from 'react';
import { mount } from 'enzyme';
import { Layout } from '../../../src';

const { Row ,Col} = Layout;

describe('<Row>', () => {
  const wrapperState = {
    value: 0,
  };
  var wrapper = mount(<Row
    ></Row>);

  it('Test the default props and node.', () => {
    expect(wrapper.name()).toBe('Row');
    // 默认值测试
    expect(wrapper.find('.w-row')).toHaveLength(1);
    expect(wrapper.type()).toEqual(Row);

  }); 

  it('Test tag attributes', () => {
    wrapper.setProps({ tag: 'div' });
    expect(wrapper.at(0).html()).toContain('<div class="w-row"></div>')
  });  

  it('Test type attributes', () => {
    wrapper.setProps({ type: 'flex' });
    expect(wrapper.at(0).html()).toContain('<div class="w-row-flex"></div>')
  }); 

  it('Test justify attributes', () => {
    wrapper.setProps({ type: 'flex',justify:'center' });
    expect(wrapper.at(0).html()).toContain('<div class="w-row-flex w-row-justify-center"></div>')
    wrapper.setProps({ type: 'flex',justify:'start' });
    expect(wrapper.at(0).html()).toContain('<div class="w-row-flex w-row-justify-start"></div>')
  }); 
  
  it('Test align attributes', () => {
    wrapper.setProps({ type: 'flex',align:'middle',justify:null });
    expect(wrapper.at(0).html()).toContain('<div class="w-row-flex w-row-align-middle"></div>')
    wrapper.setProps({ type: 'flex',align:'baseline'});
    expect(wrapper.at(0).html()).toContain('<div class="w-row-flex w-row-align-baseline"></div>')
  }); 

  
})
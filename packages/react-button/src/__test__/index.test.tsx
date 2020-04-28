import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../';

describe('<Button />', () => {
  it('Should output a button', () => {
    const component = TestRenderer.create(
      <Button>按钮</Button>
    );
    let tree = component.toJSON();
    if(tree) {
      expect(tree.type).toBe('button');
      expect(tree.props.type).toBe('button');
      expect(tree.props.disabled).toBeFalsy();
      expect(tree.props.className).toBe('w-btn w-btn-size-default w-btn-light');
    }
    expect(component.root.props.children).toBe('按钮');
    expect(component.root.props.prefixCls).toBe('w-btn');
    expect(component.root.props.disabled).toBe(false);
    expect(component.root.props.active).toBe(false);
    expect(component.root.props.loading).toBe(false);
    expect(component.root.props.block).toBe(false);
    expect(component.root.props.basic).toBe(false);
    expect(component.root.props.htmlType).toBe('button');
    expect(component.root.props.type).toBe('light');
    expect(component.root.props.size).toBe('default');
  });
});

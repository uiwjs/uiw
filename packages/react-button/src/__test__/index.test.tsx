import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../';

describe('<Button />', () => {
  it('Should output a button', () => {
    const component = TestRenderer.create(<Button>按钮</Button>);
    let tree = component.toJSON();
    if (tree) {
      expect(tree.type).toBe('button');
      expect(tree.props.type).toBe('button');
      expect(tree.props.disabled).toBeFalsy();
      expect(tree.props.className).toBe('w-btn w-btn-size-default w-btn-light');
    }
    expect(component.root.props.children).toBe('按钮');
  });
});

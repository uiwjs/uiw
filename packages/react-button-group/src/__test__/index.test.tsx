import React from 'react';
import TestRenderer from 'react-test-renderer';
import ButtonGroup from '../';
import Button from '@uiw/react-button';

describe('<Button />', () => {
  it('Should output a button', () => {
    const component = TestRenderer.create(
      <ButtonGroup>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">错误按钮</Button>
        <Button type="light">亮按钮</Button>
        <Button type="dark">暗按钮</Button>
      </ButtonGroup>,
    );
    let tree = component.toJSON();
    if (tree) {
      expect(tree.type).toBe('div');
      expect(tree.props.className).toBe('w-btn-group');
    }
    if (tree && tree.children) {
      expect(tree.children.length).toBe(6);
    }
  });
});

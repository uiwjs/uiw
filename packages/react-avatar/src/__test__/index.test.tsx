import React from 'react';
import TestRenderer from 'react-test-renderer';
import Avatar from '../';

describe('<Avatar />', () => {
  it('Should output a Avatar', () => {
    const component = TestRenderer.create(
      <Avatar icon="user" />
    );
    let tree = component.toJSON();
    if (tree) {
      expect(tree.type).toBe('span');
      expect(tree.props.className).toBe('w-avatar w-avatar-default w-avatar-circle');
      expect(tree.children).toHaveLength(1);
      if (tree.children && tree.children[0]) {
        expect((tree.children[0] as any).type).toBe('span');
        expect((tree.children[0] as any).props.className).toBe('w-icon w-icon-middle');
        expect((tree.children[0] as any).props.style).toEqual({ fill: 'currentColor' });
      }
    }

    expect(component.root.props).toEqual({
      icon: 'user',
      prefixCls: 'w-avatar',
      shape: 'circle',
      size: 'default',
    });
    expect(component.root.children).toHaveLength(1);
  });
});

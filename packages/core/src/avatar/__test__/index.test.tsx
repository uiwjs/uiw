import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Avatar } from '../../';

describe('<Avatar />', () => {
  it('Should output a Avatar', () => {
    const component = TestRenderer.create(
      <Avatar icon="user" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    if (tree) {
      expect(tree.type).toBe('span');
      expect(tree.props.className).toBe('w-avatar w-avatar-default w-avatar-circle');
      expect(tree.children).toHaveLength(1);
      expect(tree.children[0].type).toBe('span');
      expect(tree.children[0].props.className).toBe('w-icon w-icon-middle');
      expect(tree.children[0].props.style).toEqual({ fill: 'currentColor' });
    }
  });
});

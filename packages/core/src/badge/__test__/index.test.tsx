import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Badge } from '../../';

describe('<Badge />', () => {
  it('Should output a Badge', () => {
    const component = TestRenderer.create(
      <Badge color="#28a745" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    if (tree) {
      expect(tree.type).toBe('span');
      expect(tree.props.className).toBe('w-badge nowrap w-badge-status');
      expect(tree.children).toHaveLength(1);
      expect(tree.children[0].type).toBe('span');
      expect(tree.children[0].props.className).toBe('w-badge-dot');
      expect(tree.children[0].props.style).toEqual({ backgroundColor: '#28a745' });
    }
  });
});

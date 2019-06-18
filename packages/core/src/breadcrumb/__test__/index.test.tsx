import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Breadcrumb } from '../../';

describe('<Button />', () => {
  it('Should output a button', () => {
    const component = TestRenderer.create(
      <Breadcrumb>
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item separator=">"><a href="#">Library</a></Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    if (tree) {
      expect(tree.type).toBe('div');
      expect(tree.props.className).toBe('w-breadcrumb');
      expect(tree.children.length).toBe(3);
      expect(tree.children[0].props.className).toBe('w-breadcrumb-item no-separator');
      expect(tree.children[0].type).toBe('span');
    }
  });
});


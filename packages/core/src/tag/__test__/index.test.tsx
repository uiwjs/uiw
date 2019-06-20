import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Tag } from '../../';

describe('<Tag />', () => {
  it('Should output a Tag', () => {
    const component = TestRenderer.create(
      <Tag title="成功-绿色" color="#28a745" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.root.props.title).toEqual('成功-绿色');
    expect(component.root.props.prefixCls).toEqual('w-tag');
    expect(component.root.props.color).toEqual('#28a745');
  });
});

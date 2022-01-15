import React from 'react';
import TestRenderer from 'react-test-renderer';
import Radio from '../Radio';

describe('<Radio />', () => {
  it('Should output a radio', () => {
    const component = TestRenderer.create(<Radio value="1">Radio</Radio>);
    let json = component.toJSON();
    if (json && !Array.isArray(json)) {
      expect(json.type).toBe('label');
      expect(json.children!.length).toBe(2);
    }
    expect(component.root.props.value).toBe('1');
    expect(component.root.props.children).toBe('Radio');
    expect(component.root.props.checked).toBeFalsy();
  });
});

import React from 'react';
import TestUtils, { isCompositeComponent, isDOMComponent, renderIntoDocument } from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';
import Tag from '../';

describe('<Tag />', () => {
  test('Basic component loading', () => {
    let component = renderer.create(<Tag />);
    let tree = component.toJSON();
    expect(isCompositeComponent(component.getInstance())).toBe(true)
    expect(isDOMComponent(component.getInstance())).toBe(false);
  })
})
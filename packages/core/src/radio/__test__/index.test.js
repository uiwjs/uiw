import React from 'react';
import TestUtils, { isCompositeComponent, isDOMComponent, renderIntoDocument } from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';
import Radio from '../Radio';

describe('<Radio />', () => {
  test('Basic component loading', () => {
    let component = renderer.create(<Radio />);
    let tree = component.toJSON();
    expect(isCompositeComponent(component.getInstance())).toBe(true)
    expect(isDOMComponent(component.getInstance())).toBe(false);
  })
})
import React from 'react';
import TestUtils, { isCompositeComponent, isDOMComponent, renderIntoDocument } from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';
import RadioGroup from '../RadioGroup';

describe('<RadioGroup />', () => {
  test('Basic component loading', () => {
    let component = renderer.create(<RadioGroup />);
    let tree = component.toJSON();
    expect(isCompositeComponent(component.getInstance())).toBe(true)
    expect(isDOMComponent(component.getInstance())).toBe(false);
  })
})
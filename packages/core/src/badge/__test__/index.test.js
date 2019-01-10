import React from 'react';
import { isCompositeComponent, isDOMComponent, renderIntoDocument, findRenderedDOMComponentWithClass } from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';
import { findDOMNode } from 'react-dom';
import { Badge } from '..';

describe('<Badge />', () => {
  test('Basic component loading1', () => {
    const component = renderIntoDocument(<Badge count={10} />);
    const count = Number(findRenderedDOMComponentWithClass(component, 'w-badge-count').innerHTML);
    expect(count).toBe(10);
  });
  test('Basic component loading2', () => {
    const component = renderIntoDocument(<Badge count={10} max={9} />);
    const count = findRenderedDOMComponentWithClass(component, 'w-badge-count').innerHTML;
    expect(count).toBe('9+');
  });
});

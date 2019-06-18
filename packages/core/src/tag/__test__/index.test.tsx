// import React from 'react';
// import TestUtils, { isCompositeComponent, isDOMComponent, renderIntoDocument } from 'react-dom/test-utils'; // ES6
// import renderer from 'react-test-renderer';
// import Tag from '../';

// describe('<Tag />', () => {
//   test('Basic component loading', () => {
//     let component = renderer.create(<Tag />);
//     let tree = component.toJSON();
//     expect(isCompositeComponent(component.getInstance())).toBe(true)
//     expect(isDOMComponent(component.getInstance())).toBe(false);
//     expect(tree.type).toBe('span');
//   })
//   test('Basic component loading 2', () => {
//     const app = TestUtils.renderIntoDocument(<Tag />);
//     let TagElm = TestUtils.scryRenderedDOMComponentsWithTag(app, 'span');
//     expect(TagElm.length).toBe(1)
//   })
// })
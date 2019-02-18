import React from 'react';
// import ReactDOM from 'react-dom';
import TestUtils, { isCompositeComponent, isDOMComponent, renderIntoDocument } from 'react-dom/test-utils'; // ES6
import renderer from 'react-test-renderer';
import Collapse from '../Collapse';

// https://reactjs.org/docs/test-utils.html
// scryRenderedDOMComponentsWithClass：找出所有匹配指定className的节点
// findRenderedDOMComponentWithClass：与scryRenderedDOMComponentsWithClass用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedDOMComponentsWithTag：找出所有匹配指定标签的节点
// findRenderedDOMComponentWithTag：与scryRenderedDOMComponentsWithTag用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedComponentsWithType：找出所有符合指定子组件的节点
// findRenderedComponentWithType：与scryRenderedComponentsWithType用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// findAllInRenderedTree：遍历当前组件所有的节点，只返回那些符合条件的节点

describe('<Collapse />', () => {
  test('Basic component loading', () => {
    // ReactDOM.render(<Collapse />, document.createElement('div'));
    let component = renderer.create(<Collapse />);
    let tree = component.toJSON();
    expect(isCompositeComponent(component.getInstance())).toBe(true);
    expect(isDOMComponent(component.getInstance())).toBe(false);
    expect(tree.type).toBe('div');
    expect(tree.children).toBeNull();
    expect(tree.props.className).toBe('w-collapse');
  });
  test('Basic component loading 2', () => {
    const app = TestUtils.renderIntoDocument(<Collapse />);
    let CollapseElm = TestUtils.scryRenderedDOMComponentsWithTag(app, 'span');
    expect(CollapseElm.length).toBe(0);
  });
});

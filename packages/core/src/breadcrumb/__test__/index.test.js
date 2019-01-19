import React from 'react';
import { isCompositeComponent, isDOMComponent, renderIntoDocument, findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
} from 'react-dom/test-utils'; // ES6
import { findDOMNode } from 'react-dom';
import Breadcrumb from '..';

describe('<Breadcrumb />', () => {
  test('Should have breadcrumb class', () => {
    const component = renderIntoDocument(<Breadcrumb className="w-breadcrumb2" />);
    const domNode = findDOMNode(component);
    expect(domNode.className).toBe('w-breadcrumb w-breadcrumb2');
  });

  test('Should have default separator ', () => {
    const component = renderIntoDocument(
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>活动列表</Breadcrumb.Item>
      </Breadcrumb>);
    const domNode = findDOMNode(component);
    expect(domNode.children[1].getAttribute('data-separator')).toBe('/');
  });
  test('Should can set separator ', () => {
    const component = renderIntoDocument(
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item separator=">">活动列表</Breadcrumb.Item>
      </Breadcrumb>);
    const domNode = findDOMNode(component);
    expect(domNode.children[1].getAttribute('data-separator')).toBe('>');
  });

  test('Should can set style ', () => {
    const fontSize = '12px';
    const component = renderIntoDocument(
      <Breadcrumb style={{ fontSize }}>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item separator=">">活动列表</Breadcrumb.Item>
      </Breadcrumb>);
    const breadcrumbSize = findDOMNode(component).style.fontSize;
    expect(breadcrumbSize).toBe('12px');
  });
});

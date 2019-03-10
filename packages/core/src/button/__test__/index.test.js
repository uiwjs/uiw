import React from 'react';
import { renderIntoDocument,
} from 'react-dom/test-utils'; // ES6
import { findDOMNode } from 'react-dom';
import Button from '..';
import ButtonGroup from '../../button-group';
import Icon from '../../icon';

describe('<Button />', () => {
  test('Should output a button', () => {
    const component = renderIntoDocument(<Button>按钮</Button>);
    const instance = findDOMNode(component);
    expect(instance.children[0].innerHTML.trim()).toBe('按钮');
    expect(instance.nodeName).toBe('BUTTON');
  });
  test('Should render button by type ', () => {
    const component = renderIntoDocument(<Button type="primary">按钮</Button>);
    const component2 = renderIntoDocument(<Button type="danger">按钮</Button>);
    const instance = findDOMNode(component);
    const instance2 = findDOMNode(component2);
    expect(instance.className.indexOf('w-btn-primary') > -1).toBe(true);
    expect(instance2.className.indexOf('w-btn-danger') > -1).toBe(true);
  });
  test('Should render basic button', () => {
    const component = renderIntoDocument(<Button basic type="primary">按钮</Button>);
    const instance = findDOMNode(component);
    expect(instance.className.indexOf('w-btn-primary w-btn-basic') > -1).toBe(true);
  });
  test('Should render button with icon', () => {
    const component = renderIntoDocument(<Button type="primary" size="small">more <Icon type="arrow-down" /></Button>);
    const instance = findDOMNode(component);
    expect(instance.children[1].className).toBe('w-icon w-icon-middle');
  });
  test('Should render buttons by buttonGroup', () => {
    const component = renderIntoDocument(
      <ButtonGroup>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">错误按钮</Button>
        <Button type="light">亮按钮</Button>
        <Button type="dark">暗按钮</Button>
      </ButtonGroup>
    );
    const instance = findDOMNode(component);
    expect(instance.children.length).toBe(6);
  });
  test('Should render disabled button', () => {
    const component = renderIntoDocument(<Button disabled type="primary">主要按钮</Button>);
    const instance = findDOMNode(component);
    expect(instance.hasAttribute('disabled')).toBeTruthy();
  });
  test('Should can set button size', () => {
    const component = renderIntoDocument(<Button size="small" type="primary">主要按钮</Button>);
    const instance = findDOMNode(component);
    expect(instance.className.indexOf('w-btn-size-small') > -1).toBe(true);
  });
});

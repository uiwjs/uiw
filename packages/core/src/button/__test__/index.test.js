import React from 'react';
import { renderIntoDocument,
} from 'react-dom/test-utils'; // ES6
import { findDOMNode } from 'react-dom';
import Button from '..';

describe('<Button />', () => {
  test('Should output a button', () => {
    const component = renderIntoDocument(<Button>按钮</Button>);
    const instance = findDOMNode(component);
    expect(instance.children[0].innerHTML.trim()).toBe('按钮');
    expect(instance.nodeName).toBe('BUTTON');
  });
});

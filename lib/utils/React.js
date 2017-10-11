import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';

function firstChild(props) {
  var childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export { ReactDOM, findDOMNode, firstChild };
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './container';

const div = document.createElement('div')
document.body.appendChild(div)
const container = ReactDOM.render(<Container />, div)

// 生成随机ID
let uid = Date.now()
function randomid () {
  return (uid++).toString(36)
}

function create (type) {
  return (content, msg = {}) => {
    if (typeof msg === 'string') msg = { type: msg }
    if (type) msg.type = type;
    msg.id = randomid()
    msg.content = content
    msg.placement = msg.placement 
    msg.duration = msg.duration || 3;
    container.addMessage(msg);
  }
}

export default {
  warning:create('warn'),
  warn:create('warn'),
  info:create('default'),
  error:create('error'),
  success:create('success')
};

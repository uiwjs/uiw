import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './container';

// 生成容器，并将容器添加到页面
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
    if (type) msg.type = type

    msg.id = randomid()
    msg.content = content
    msg.duration = msg.duration || 4;
    container.addMessage(msg)
  }
}

export default {
  warning:create('warn'),
  warn:create('warn'),
  info:create('default'),
  error:create('error'),
  success:create('success')
};

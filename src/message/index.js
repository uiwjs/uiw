import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { randomid } from '../utils/strings'
import "./style/index.less";

const div = document.createElement('div')
document.body.appendChild(div)

const container = ReactDOM.render(<Container />, div)

function create(type) {
  return (content, msg = {}) => {
    if (typeof msg === 'string') msg = { type: msg }
    if (type) msg.type = type;
    msg.id = randomid()
    msg.content = content
    msg.placement = msg.placement
    msg.duration = msg.duration || 3;
    switch (type) {
      case "warning": msg.icon = "warning-o"; break;
      case "default": msg.icon = "information-o"; break;
      case "error": msg.icon = "circle-close-o"; break;
      case "success": msg.icon = "circle-check-o"; break;
      default: break;
    }
    container.addMessage(msg, () => {
      // console.log("testt")
    });
  }
}

export default {
  warning: create('warning'),
  info: create('default'),
  error: create('error'),
  success: create('success')
};

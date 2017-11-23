import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { randomid } from '../utils/strings';
import './style/index.less';

const div = document.createElement('div');
document.body.appendChild(div);

const container = ReactDOM.render(<Container />, div);
function create(type) {
  return (content, msg) => {
    let message = msg || {};
    if (typeof message === 'string') message = { type: message };
    if (type) message.type = type;
    message.id = randomid();
    message.content = content;
    message.placement = message.placement;
    message.duration = message.duration || 3;
    container.addMessage(message);
  };
}

export default {
  warning: create('warning'),
  info: create('info'),
  error: create('error'),
  success: create('success'),
};

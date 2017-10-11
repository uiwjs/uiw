import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { randomid } from '../utils/strings';
import "./style/index.less";

var div = document.createElement('div');
document.body.appendChild(div);

var container = ReactDOM.render(React.createElement(Container, null), div);

function create(type) {
  return function (content) {
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof msg === 'string') msg = { type: msg };
    if (type) msg.type = type;
    msg.id = randomid();
    msg.content = content;
    msg.placement = msg.placement;
    msg.duration = msg.duration || 3;
    switch (type) {
      case "warning":
        msg.icon = "warning-o";break;
      case "default":
        msg.icon = "information-o";break;
      case "error":
        msg.icon = "circle-close-o";break;
      case "success":
        msg.icon = "circle-check-o";break;
      default:
        break;
    }
    container.addMessage(msg, function () {
      // console.log("testt")
    });
  };
}

export default {
  warning: create('warning'),
  info: create('default'),
  error: create('error'),
  success: create('success')
};
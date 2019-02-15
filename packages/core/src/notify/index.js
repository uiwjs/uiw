import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import Container from './Container';
import './style/index.less';

function randomid() {
  return parseInt(Math.random() * 1e15, 10).toString(36);
}

const notifys = {};

export default function NotificationCreate(props = {}, type = 'open') {
  if (!props.placement) {
    props.placement = 'topRight';
  }
  props.type = type;
  if (!props.icon) {
    switch (props.type) {
      case 'success': props.icon = 'circle-check'; break;
      case 'warning': props.icon = 'warning'; break;
      case 'info': props.type = 'primary'; props.icon = 'information'; break;
      case 'error': props.type = 'danger'; props.icon = 'circle-close'; break;
      default: break;
    }
  }

  if (props.placement && !notifys[props.placement]) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = classnames('w-notify-warpper', props.placement);
    notifys[props.placement] = ReactDOM.render(<Container />, div);
  }

  if (props.duration !== null) {
    props.duration = (props.duration || 4.5) * 1000;
  }

  if (notifys[props.placement]) {
    notifys[props.placement].create({
      ...props,
      duration: props.duration,
      key: randomid(),
      willUnmount(nprops, notifysChild) {
        if (!nprops) return;
        nprops.onClose && nprops.onClose();
        const keys = Object.keys(notifysChild[props.placement]);
        if (keys.length === 0 && notifys[props.placement]) {
          const parentNode = findDOMNode(notifys[props.placement]).parentNode;
          delete notifys[props.placement];
          document.body.removeChild(parentNode);
        }
      },
    });
  }
}

['open', 'success', 'warning', 'info', 'error'].forEach((type) => {
  NotificationCreate[type] = (options = {}) => {
    return NotificationCreate(options, type);
  };
});

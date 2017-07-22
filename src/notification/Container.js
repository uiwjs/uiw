import React from 'react';
import ReactDOM from 'react-dom';
import Warpper from './Warpper';
import Notification from './Notification';
import { randomid } from '../utils/strings'

let NotifyIndex = {}


export default function NotificationCreate(props = {}, type) {
  // const div = document.createElement('div');
  // document.body.appendChild(div);
  if (typeof props === 'string') {
    props = { message: props };
  }
  props.key = randomid()
  if (!props.placement) {
    props['placement'] = 'topRight'
  }

  if (props.placement && !NotifyIndex[props.placement]) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    NotifyIndex[props.placement] = ReactDOM.render(<Warpper />, div);
  }
  const component = React.createElement(Notification, {
    ...props,
    willUnmount: () => {
      // ReactDOM.unmountComponentAtNode(div);
      // document.body.removeChild(div);
      // setTimeout(() => {
      //   const instances = document.querySelectorAll('.w-notification');

      //   for (let i = 0, len = instances.length; i < len; i++) {
      //     const element = instances[i];

      //     if (element.offsetTop > props.offsetHeight) {
      //       element.style.top = `${element.offsetTop - props.offsetHeight - 16}px`;
      //     }
      //   }
      // })
      // if (props.onClose instanceof Function) {
      //   props.onClose();
      // }
    }
  });

  // const component = React.createElement(Notification, Object.assign({}, props, {
  //   willUnmount: () => {
  //     // ReactDOM.unmountComponentAtNode(div);
  //     // document.body.removeChild(div);
  //     // setTimeout(() => {
  //     //   const instances = document.querySelectorAll('.w-notification');

  //     //   for (let i = 0, len = instances.length; i < len; i++) {
  //     //     const element = instances[i];

  //     //     if (element.offsetTop > props.offsetHeight) {
  //     //       element.style.top = `${element.offsetTop - props.offsetHeight - 16}px`;
  //     //     }
  //     //   }
  //     // })
  //     // if (props.onClose instanceof Function) {
  //     //   props.onClose();
  //     // }
  //   }
  // }));

  if (NotifyIndex[props.placement]) {
    NotifyIndex[props.placement].addNotify({
      '_id': props.key,
      'placement': props.placement,
      component
    })
  }

}

['success', 'warning', 'info', 'error'].forEach(type => {
  NotificationCreate[type] = (options = {}) => {
    return NotificationCreate(options, type);
  };
});
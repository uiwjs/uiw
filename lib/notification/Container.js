var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ReactDOM from 'react-dom';
import Warpper from './Warpper';
import { randomid } from '../utils/strings';

var NotifyIndex = {};
export default function NotificationCreate() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = arguments[1];

  if (typeof props === 'string') {
    props = { message: props };
  }
  props._key = randomid();
  if (type) {
    props.type = type;
  }
  if (!props.placement) {
    props['placement'] = 'topRight';
  }

  if (props.placement && !NotifyIndex[props.placement]) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    NotifyIndex[props.placement] = ReactDOM.render(React.createElement(Warpper, null), div);
  }

  if (NotifyIndex[props.placement]) {
    NotifyIndex[props.placement].addNotify(_extends({}, props, {
      willUnmount: function willUnmount(nprops) {
        if (!nprops) return;
        nprops.onClose && nprops.onClose();
      }
    }));
  }
}

['success', 'warning', 'info', 'error'].forEach(function (type) {
  NotificationCreate[type] = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return NotificationCreate(options, type);
  };
});
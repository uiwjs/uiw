import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { ButtonType } from '../button';
import Container, { Placement, ContainerNotifys } from './Container';
import './style/index.less';

function randomid() {
  return parseInt(String(Math.random() * 1e15), 10).toString(36);
}

export interface NotificationCreateProps {
  placement?: Placement;
  description?: React.ReactNode;
  type?: ButtonType | 'info' | 'error' | 'open';
  icon?: JSX.Element | string | false | null;
  duration?: number;
  key?: string;
  isOpen?: boolean;
  willUnmount?: (props: NotificationCreateProps, notifys: ContainerNotifys) => void;
}

export type Notifys = { [key: string]: any }
export type NotifysDom = { [key: string]: HTMLDivElement; }

const notifys: Notifys  = {};
const notifysDom: NotifysDom = {};


export interface NotificationProps {
  (props: NotificationCreateProps, type: NotificationCreateProps['type']): void;
  [key: string]: () => void;
}

export default function NotificationCreate(props: NotificationCreateProps, type: NotificationCreateProps['type'] = 'open') {
  if (!props.placement) {
    props.placement = 'topRight';
  }
  props.type = (type) as NotificationCreateProps['type'];
  if (!props.icon && props.icon !== null) {
    switch (props.type) {
      case 'success': props.icon = 'circle-check'; break;
      case 'warning': props.icon = 'warning'; break;
      case 'info': props.icon = 'information'; break;
      case 'error': props.icon = 'circle-close'; break;
      default: break;
    }
  }
  switch (props.type) {
    case 'info': props.type = 'primary'; break;
    case 'error': props.type = 'danger'; break;
    default: break;
  }

  if (props.placement && !notifys[props.placement]) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = classnames('w-notify-warpper', props.placement);
    notifysDom[props.placement] = div;
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
      willUnmount(nprops: any, notifysChild: ContainerNotifys) {
        if (!nprops) return;
        nprops.onClose && nprops.onClose();
        const keys = Object.keys(notifysChild[props.placement as Placement]);
        if (keys.length === 0 && notifys[props.placement as Placement]) {
          delete notifys[props.placement as Placement];
          if (notifysDom[props.placement as Placement]) {
            document.body.removeChild(notifysDom[props.placement as Placement]);
          }
        }
      },
    });
  }
}

['open', 'success', 'warning', 'info', 'error'].forEach((type) => {
  (NotificationCreate as NotificationProps)[type] = (options: NotificationCreateProps = {}) => {
    return NotificationCreate(options, type as NotificationCreateProps['type']);
  };
});

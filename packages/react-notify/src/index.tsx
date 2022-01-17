import React from 'react';
import ReactDOM from 'react-dom';
import { AlertProps } from '@uiw/react-alert';
import { randomid } from '@uiw/utils';
import Container, { Placement, ContainerNotifys } from './Container';
import './style/index.less';

export interface NotificationCreateProps extends Omit<AlertProps, 'type'> {
  placement?: Placement;
  description?: React.ReactNode;
  type?: 'primary' | 'danger' | 'open' | 'success' | 'warning' | 'info' | 'error';
  duration?: number;
  key?: string;
  willUnmount?: (props: NotificationCreateProps, notifys: ContainerNotifys) => void;
}

export type Notifys = { [key: string]: any };
export type NotifysDom = { [key: string]: HTMLDivElement };

const notifys: Notifys = {};
const notifysDom: NotifysDom = {};

export interface NotificationProps {
  (props: NotificationCreateProps, type: NotificationCreateProps['type']): void;
  [key: string]: () => void;
}

function NotificationCreate(props: NotificationCreateProps, type: NotificationCreateProps['type'] = 'open') {
  if (!props.placement) {
    props.placement = 'topRight';
  }
  props.type = type as NotificationCreateProps['type'];
  if (!props.icon && props.icon !== null) {
    switch (props.type) {
      case 'success':
        props.icon = 'circle-check';
        break;
      case 'warning':
        props.icon = 'warning';
        break;
      case 'info':
        props.icon = 'information';
        break;
      case 'error':
        props.icon = 'circle-close';
        break;
      default:
        break;
    }
  }
  switch (props.type) {
    case 'info':
      props.type = 'primary';
      break;
    case 'error':
      props.type = 'danger';
      break;
    default:
      break;
  }

  if (props.placement && !notifys[props.placement]) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.className = ['w-notify-warpper', props.placement].filter(Boolean).join(' ').trim();
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

export interface NotificationApi {
  open(option: NotificationCreateProps): void;
  success(option: NotificationCreateProps): void;
  warning(option: NotificationCreateProps): void;
  info(option: NotificationCreateProps): void;
  error(option: NotificationCreateProps): void;
}

export default NotificationCreate as unknown as NotificationApi;

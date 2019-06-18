import React from 'react';
import classnames from 'classnames';
import Alert, { IAlertProps } from '../alert';
import { IProps } from '../utils/props';
import { NotificationCreateProps } from './index';

export type Placement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface IContainerProps extends IProps {}
export interface IContainerState {
  placement?: Placement;
  notifys: ContainerNotifys
}

export type ContainerNotifys = {
  [placement: string]: {
    [key: string]: NotificationCreateProps,
  }
}

const notifys: ContainerNotifys = {};
const timer: { [key: string]: any } = {};

export default class Container extends React.Component<IContainerProps, IContainerState> {
  public state: IContainerState = {
    notifys: {},
  }
  public create(props: NotificationCreateProps) {
    const { placement, key } = props;
    if (!notifys[placement as Placement]) {
      notifys[placement as Placement] = {};
    }
    props.isOpen = false;
    notifys[placement as Placement][key as string] = props;
    if (props.duration) {
      timer[key as string] = setTimeout(() => {
        this.closed(key as string, placement);
      }, props.duration);
    }
    this.setState({
      notifys,
      placement,
    }, () => {
      notifys[placement as Placement][key as string].isOpen = true;
      this.setState({ notifys });
    });
  }
  public closed(key: string, placement?: Placement) {
    if (!key || !placement || !notifys[placement][key]) {
      return;
    }
    notifys[placement][key].isOpen = false;
    const props: NotificationCreateProps = notifys[placement][key];
    this.setState({ notifys }, () => {
      clearTimeout(timer[key]);
      delete timer[key];
      delete notifys[placement][key];
      if (props && props.willUnmount) {
        props.willUnmount(props, notifys);
      }
    });
  }
  render() {
    const { prefixCls } = this.props;
    const { placement } = this.state;
    return (
      <React.Fragment>
        {placement && Object.keys(this.state.notifys[placement]).map((key) => {
          const { description, isOpen, ...alertProps } = this.state.notifys[placement][key];
          if (alertProps.type === 'open') {
            delete alertProps.type;
          }
          return (
            <Alert
              className={classnames(prefixCls)}
              key={key}
              useButton={false}
              width={320}
              {...alertProps as IAlertProps}
              usePortal={false}
              hasBackdrop={false}
              isOpen={isOpen}
              content={description}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

import React from 'react';
import classnames from 'classnames';
import Modal, { IModalProps } from '../modal';
import { IProps } from "../utils/props";
import './style/index.less';

export interface IAlertProps extends IProps, IModalProps {
  width?: number;
}

export default class Alert extends React.Component<IAlertProps> {
  public static defaultProps: IAlertProps = {
    prefixCls: 'w-alert',
    width: 400,
  }
  render() {
    const { prefixCls, className, ...other } = this.props;
    return (
      <Modal {...other} className={classnames(prefixCls, className)}>
        {this.props.children}
      </Modal>
    );
  }
}

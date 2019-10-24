import React from 'react';
import classnames from 'classnames';
import Modal, { ModalProps } from '../modal';
import { IProps } from "../utils/props";
import './style/index.less';

export interface AlertProps extends IProps, ModalProps {
  width?: number;
}

export default class Alert extends React.Component<AlertProps> {
  public static defaultProps: AlertProps = {
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

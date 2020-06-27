import React from 'react';
import classnames from 'classnames';
import Modal, { ModalProps } from '@uiw/react-modal';
import { IProps } from '@uiw/utils';
import './style/index.less';

export interface AlertProps extends IProps, ModalProps {
  width?: number;
}

export default (props: AlertProps = {}) => {
  const { prefixCls = 'w-alert', className, ...other } = props;
  return (
    <Modal {...other} className={classnames(prefixCls, className)}>
      {props.children}
    </Modal>
  );
};

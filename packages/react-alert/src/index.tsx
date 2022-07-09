import React from 'react';
import Modal, { ModalProps } from '@uiw/react-modal';
import { IProps } from '@uiw/utils';
import { AlertWarp } from './style';

export interface AlertProps extends IProps, ModalProps {
  width?: number;
}

export default (props: AlertProps = {}) => {
  const { prefixCls = 'w-alert', className, width = 400, ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <AlertWarp as={Modal} {...other} width={width} className={cls}>
      {props.children}
    </AlertWarp>
  );
};

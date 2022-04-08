import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalProps } from './';

export default function CallShow(props: Omit<ModalProps, 'onClosed' | 'isOpen'> & { children: React.ReactNode }) {
  const { title = '提示框', children, ...other } = props;
  const dv = document.createElement('div');
  dv.id = 'uiw-modal-call-show-element';
  document.body.appendChild(dv);
  ReactDOM.render(
    <Modal
      {...other}
      title={title}
      isOpen={true}
      onClosed={() => {
        dv.remove();
      }}
    >
      {children}
    </Modal>,
    dv,
  );
}

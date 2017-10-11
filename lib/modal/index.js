// https://github.com/eslint/eslint/issues/1867#issuecomment-76101812
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import assign from 'object-assign';
import "./style/index.less";
import Modal from './Modal';
import Container from './Container';
import Icon from '../icon';

Modal.warn = function (props) {
  return Container(assign({}, {
    type: 'warn',
    icon: React.createElement(Icon, { type: 'question-circle' })
  }, props));
};
Modal.info = function (props) {
  return Container(assign({}, {
    type: 'info',
    icon: React.createElement(Icon, { type: 'information' })
  }, props));
};
Modal.error = function (props) {
  return Container(assign({}, {
    type: 'error',
    icon: React.createElement(Icon, { type: 'circle-close' })
  }, props));
};
Modal.success = function (props) {
  return Container(assign({}, {
    type: 'success',
    icon: React.createElement(Icon, { type: 'circle-check' })
  }, props));
};
export default Modal;
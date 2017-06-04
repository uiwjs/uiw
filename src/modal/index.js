import React, { Component } from 'react';
import "./style/index.less";
import Modal from './Modal';
import Container from './Container';
import assign from 'object-assign';
import ReactDOM from 'react-dom';
import {InformationCircled,QuestionCircle,CheckmarkCircled,CloseCircled} from '../svgs';

Modal.warn = function(props){
  return Container(assign({}, {
    type: 'warn',
    icon: QuestionCircle,
  }, props));
}
Modal.info = function(props){
  return Container(assign({}, {
    type: 'info',
    icon: InformationCircled,
  }, props));

}
Modal.error = function(props){
  return Container(assign({}, {
    type: 'error',
    icon: CloseCircled,
  }, props));

}
Modal.success = function(props){
  return Container(assign({}, {
    type: 'success',
    icon: CheckmarkCircled,
  }, props));

}
export default Modal;

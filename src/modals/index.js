import React, { Component } from 'react';
import "./style/index.less";
import Modals from './modals';
import Container from './container';
import assign from 'object-assign';
import ReactDOM from 'react-dom';
import {InformationCircled,QuestionCircle,CheckmarkCircled,CloseCircled} from '../svgs';

Modals.warn = function(props){
  return Container(assign({}, {
    type: 'warn',
    icon: QuestionCircle,
  }, props));
}
Modals.info = function(props){
  return Container(assign({}, {
    type: 'info',
    icon: InformationCircled,
  }, props));

}
Modals.error = function(props){
  return Container(assign({}, {
    type: 'error',
    icon: CloseCircled,
  }, props));

}
Modals.success = function(props){
  return Container(assign({}, {
    type: 'success',
    icon: CheckmarkCircled,
  }, props));

}
export default Modals;

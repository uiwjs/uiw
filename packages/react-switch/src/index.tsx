import React from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import './style/index.less';

export interface SwitchProps extends RadioAbstractProps {}

export default (props: SwitchProps = {}) => {
  const { prefixCls = 'w-switch', ...other} = props;
  return <RadioAbstract prefixCls={prefixCls} {...{ ...other, type: 'checkbox' }} />;
}

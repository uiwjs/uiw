import React from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import { SwitchStyleWrap } from './style';
// import './style/index.less';

export interface SwitchProps extends RadioAbstractProps {}

export default React.forwardRef<HTMLInputElement, SwitchProps>((props, ref) => {
  const { prefixCls = 'w-switch', ...other } = props;
  return <SwitchStyleWrap as={RadioAbstract} prefixCls={prefixCls} {...{ ...other, type: 'checkbox' }} ref={ref} />;
});

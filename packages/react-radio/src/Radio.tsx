import React from 'react';
import { RadioAbstract, RadioAbstractProps } from './RadioAbstract';
import './style/index.less';

export interface RadioProps extends RadioAbstractProps {}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return <RadioAbstract ref={ref} {...props} />;
});
export default Radio;

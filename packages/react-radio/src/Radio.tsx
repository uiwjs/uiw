import React, { useImperativeHandle } from 'react';
import { RadioAbstract, RadioAbstractProps } from './RadioAbstract';
import './style/index.less';

export interface RadioProps extends RadioAbstractProps {}

function Radio(props: RadioProps = {}, ref: any) {
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  return <RadioAbstract ref={inputRef} {...props} />;
}

export default React.forwardRef<unknown, RadioProps>(Radio);

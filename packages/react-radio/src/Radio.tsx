import React, { useImperativeHandle } from 'react';
import { RadioAbstract, RadioAbstractProps } from './RadioAbstract';
import './style/index.less';

export interface RadioProps extends RadioAbstractProps {}

function Radio(
  props: RadioProps = {},
  ref?:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<HTMLInputElement | null>
    | null,
) {
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  return <RadioAbstract ref={inputRef} {...props} />;
}

export default React.forwardRef<HTMLInputElement, RadioProps>(Radio);

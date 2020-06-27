import React, { useImperativeHandle, useMemo } from 'react';
import { RadioAbstract, RadioAbstractProps } from './RadioAbstract';
import './style/index.less';

export interface RadioProps extends RadioAbstractProps {}

function Radio(props: RadioProps = {}, ref: any) {
  const menuRef = React.createRef<HTMLUListElement>();
  useImperativeHandle(ref, () => menuRef.current);
  return <RadioAbstract ref={menuRef} {...props} />;
}

export default React.forwardRef<unknown, RadioProps>(Radio);

import React, { useImperativeHandle } from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import './style/index.less';

export interface SwitchProps extends RadioAbstractProps {}

function Switch(
  props: SwitchProps = {},
  ref:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<HTMLInputElement | null>
    | null,
) {
  const { prefixCls = 'w-switch', ...other } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  return (
    <RadioAbstract
      prefixCls={prefixCls}
      {...{ ...other, type: 'checkbox' }}
      ref={inputRef}
    />
  );
}

export default React.forwardRef<HTMLInputElement, SwitchProps>(Switch);

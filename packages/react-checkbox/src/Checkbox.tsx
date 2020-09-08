import React, { useImperativeHandle } from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import { CheckboxGroup } from './Group';
import './style/index.less';

export interface CheckboxProps extends RadioAbstractProps {
  indeterminate?: boolean;
}

function InternalCheckbox(
  props: CheckboxProps = {},
  ref?:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<HTMLInputElement | null>
    | null,
) {
  const {
    prefixCls = 'w-checkbox',
    className,
    type = 'checkbox',
    indeterminate = false,
    disabled = false,
    value = '',
    ...other
  } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  const cls = [className, indeterminate ? 'indeterminate' : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <RadioAbstract
      ref={inputRef}
      {...other}
      type={type}
      prefixCls={prefixCls}
      disabled={disabled}
      value={value}
      className={cls}
    />
  );
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  InternalCheckbox,
);
type Checkbox = typeof Checkbox & {
  Group: typeof CheckboxGroup;
};

(Checkbox as Checkbox).Group = CheckboxGroup;

export default Checkbox as Checkbox;

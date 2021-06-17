import React from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import { CheckboxGroup } from './Group';
import './style/index.less';

export interface CheckboxProps extends RadioAbstractProps {
  indeterminate?: boolean;
}

function InternalCheckbox(
  props: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    className,
    prefixCls = 'w-checkbox',
    type = 'checkbox',
    indeterminate = false,
    disabled = false,
    value = '',
    ...other
  } = props;

  const cls = [className, indeterminate && 'indeterminate']
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <RadioAbstract
      ref={ref}
      {...other}
      type={type}
      prefixCls={prefixCls}
      disabled={disabled}
      value={value}
      className={cls}
    />
  );
}

InternalCheckbox.Group = CheckboxGroup;

export default InternalCheckbox;

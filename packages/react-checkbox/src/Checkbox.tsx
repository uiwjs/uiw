import React, { useImperativeHandle } from 'react';
import classnames from 'classnames';
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
  const cls = classnames(className, { indeterminate });
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

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps> {
  Group: typeof CheckboxGroup;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  InternalCheckbox,
) as CompoundedComponent;

Checkbox.Group = CheckboxGroup;

export default Checkbox;

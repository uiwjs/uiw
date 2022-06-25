import React, { useState, useMemo } from 'react';
import { IProps, HTMLButtonProps } from '@uiw/utils';
import Button from '@uiw/react-button';

/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */
export interface RadioButtonProps extends IProps, Omit<HTMLButtonProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (even: any) => void;
}

export const RadioButton = React.forwardRef<any, RadioButtonProps>((props, ref) => {
  const {
    prefixCls = 'w-radio',
    type = 'button',
    disabled = false,
    value = '',
    className,
    style,
    children,
    size = 'small',
    checked: prChecked = false,
    onChange,
    ...other
  } = props;

  const [checked, setChecked] = useState(prChecked);
  const [prevChecked, setPrevChecked] = useState<boolean>();
  if (prChecked !== prevChecked) {
    setPrevChecked(prChecked);
  }
  useMemo(() => {
    if (prChecked !== prevChecked) {
      setChecked(prChecked);
    }
  }, [prevChecked]);

  const cls = [prefixCls, className, disabled ? 'disabled' : null, size ? `${prefixCls}-${size}` : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  useMemo(() => {
    if (checked !== props.checked) {
      setChecked(!!props.checked);
    }
  }, [props.checked]);

  function handleChange(e: React.MouseEvent<HTMLButtonElement, MouseEvent> & MouseEvent) {
    e.persist();
    if (!checked) {
      setChecked(!checked);
      onChange && onChange(value);
    }
  }

  const label = children || value;

  return (
    <Button
      {...{ ...other, className: cls, style, disabled, value }}
      type={checked ? 'primary' : 'light'}
      ref={ref}
      onClick={handleChange}
    >
      {label}
    </Button>
  );
});

export default RadioButton;

import React, { useState, useMemo } from 'react';
import { IProps, HTMLInputProps } from '@uiw/utils';

/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */
export interface RadioAbstractProps extends IProps, Omit<HTMLInputProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (even: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioAbstract = React.forwardRef<HTMLInputElement, RadioAbstractProps>((props, ref) => {
  const {
    prefixCls = 'w-radio',
    type = 'radio',
    disabled = false,
    value = '',
    className,
    style,
    children,
    size,
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setChecked(e.target.checked);
    onChange && onChange(e);
  }

  const label = children || value;
  return (
    <label {...{ className: cls, style }}>
      <input {...{ ...other, type, disabled, value }} checked={checked} onChange={handleChange} ref={ref} />
      {label && <div className={`${prefixCls}-text`}>{label}</div>}
    </label>
  );
});

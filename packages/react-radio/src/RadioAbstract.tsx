import React, { useState, useImperativeHandle, useMemo } from 'react';
import classnames from 'classnames';
import { IProps, HTMLInputProps } from '@uiw/utils';

/**
 * Constructs a type by picking all properties from `HTMLInputProps` and then removing `size`.
 * Omit: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
 */
export interface RadioAbstractProps
  extends IProps,
    Omit<HTMLInputProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (even: React.ChangeEvent<HTMLInputElement>) => void;
}

function Abstract(
  props: RadioAbstractProps = {},
  ref:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<unknown>
    | null
    | undefined,
) {
  const {
    prefixCls = 'w-radio',
    type = 'radio',
    disabled = false,
    value = '',
    className,
    style,
    children,
    size,
    onChange,
    ...other
  } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  useImperativeHandle(ref, () => inputRef.current);
  const [checked, setChecked] = useState(other.checked || false);
  const cls = classnames(prefixCls, className, {
    disabled: disabled,
    [`${prefixCls}-${size}`]: size,
  });
  other.checked = checked;
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
      <input
        {...{ ...other, type, disabled, value }}
        onChange={handleChange}
        ref={inputRef}
      />
      {label && <div className={`${prefixCls}-text`}>{label}</div>}
    </label>
  );
}

export const RadioAbstract = React.forwardRef<
  HTMLInputElement,
  RadioAbstractProps
>(Abstract);

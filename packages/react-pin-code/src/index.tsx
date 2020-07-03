import React, { useEffect, useImperativeHandle, useState } from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';
import Input, { InputProps } from '@uiw/react-input';
import './style/input.less';

function noop() {}

export interface PinCodeProps extends IProps {
  value?: string[];
  disabled?: boolean;
  onChange?: (value: string[]) => void;
  onBlur?: InputProps<{}>['onBlur'];
  onFocus?: InputProps<{}>['onFocus'];
  autoFocus?: boolean;
  size?: InputProps<{}>['size'];
  placeholder?: string;
}

function InternalPinCode(
  props: PinCodeProps = {},
  ref:
    | ((instance: HTMLDivElement) => void)
    | React.RefObject<HTMLDivElement | null>
    | null,
) {
  const {
    prefixCls = 'w-pin-code',
    placeholder = '○',
    value = [],
    autoFocus,
    className,
    size = 'default',
    style,
    disabled,
    onChange = noop,
    onBlur = noop,
    onFocus = noop,
    ...otherProps
  } = props;
  const [input] = useState<{
    [key: string]: HTMLInputElement;
  }>({});
  const [placehold, setPlacehold] = useState(placeholder);
  const [values, setValues] = useState(value);
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    disabled,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
    let val = e.target.value;
    val = val.charAt(val.length - 1);
    const arr = [...values];
    if (Number(val) > -1 && val) {
      e.currentTarget.value = val;
      arr[idx] = val;
      if (input[idx + 1]) {
        input[idx + 1].focus();
      }
      setValues(arr);
    } else if (!val) {
      arr[idx] = '';
      setValues(arr);
    }
  }
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) {
    let val = e.currentTarget.value;
    const key = e.key.toLocaleLowerCase();
    if (!val && input[idx - 1] && /(backspace|delete)/.test(key)) {
      input[idx - 1].focus();
    }
  }
  useEffect(() => {
    if (values !== value) {
      onChange(values);
    }
  }, [values]);

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    setPlacehold(placeholder);
    onBlur(event);
  }
  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    setPlacehold('');
    onFocus(event);
  }

  return (
    <div className={cls} style={style} {...otherProps}>
      {[...values].map((val, key) => {
        const inpProps: InputProps<{}> = {
          min: 0,
          type: 'text',
          inputMode: 'numeric',
          autoComplete: 'off',
          value: val,
          onChange: (e) => handleChange(e, key),
          onKeyDown: (e) => handleKeyDown(e, key),
          onBlur: (e) => handleBlur(e),
          onFocus: (e) => handleFocus(e),
          className: `${prefixCls}-inner`,
          placeholder: placehold,
          disabled,
          size,
        };
        if (autoFocus && key === 0) {
          inpProps.autoFocus = true;
        }
        const child = (
          <Input
            ref={(instance) => {
              if (instance) {
                input[key] = instance;
              }
            }}
            {...inpProps}
            key={key}
          />
        );
        return child;
      })}
    </div>
  );
}

export default React.forwardRef<HTMLDivElement, PinCodeProps>(InternalPinCode);

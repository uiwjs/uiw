import React, { useEffect, useImperativeHandle } from 'react';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, HTMLInputProps } from '@uiw/utils';
import InputStyleWarp, { InputStyleBase, InputStyleAddonAfter } from './style/input';
export * from './style/input';
export * from './InputNumber';
export { default as InputNumber } from './InputNumber';
export * from './style/input';

export interface InputProps extends IProps, Omit<HTMLInputProps, 'size'> {
  preIcon?: IconProps['type'];
  addonAfter?: React.ReactNode;
  size?: 'large' | 'default' | 'small';
  inputStyle?: React.CSSProperties;
}

export default React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    prefixCls = 'w-input',
    className,
    style,
    size = 'default',
    type = 'text',
    preIcon = null,
    addonAfter,
    inputStyle,
    disabled,
    ...otherProps
  } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const addonRef = React.useRef<HTMLSpanElement>(null);
  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => inputRef.current);
  const cls = [
    prefixCls,
    className,
    size ? `${prefixCls}-${size}` : null,
    addonAfter ? `${prefixCls}-addon` : null,
    disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  useEffect(() => {
    computedInputPadding();
  });

  function computedInputPadding() {
    if (addonRef.current && inputRef.current) {
      const input = window && window.getComputedStyle(addonRef.current, null);
      inputRef.current.style.paddingRight = `${
        addonRef.current.clientWidth + parseInt(input.right as string, 10) * 2
      }px`;
    }
  }
  return (
    <InputStyleWarp className={cls} style={style} size={size} addonAfter={addonAfter} disabled={disabled}>
      <Icon type={preIcon} />
      <InputStyleBase
        ref={inputRef}
        type={type}
        autoComplete="off"
        disabled={disabled}
        {...otherProps}
        style={inputStyle}
        className={`${prefixCls}-inner`}
      />
      {addonAfter && (
        <InputStyleAddonAfter className={`${prefixCls}-addon-after`} ref={addonRef}>
          {addonAfter}
        </InputStyleAddonAfter>
      )}
    </InputStyleWarp>
  );
});

export { InputStyleBase };

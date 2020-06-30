import React, { useEffect, useImperativeHandle } from 'react';
import classnames from 'classnames';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, HTMLInputProps } from '@uiw/utils';
import './style/input.less';

export interface InputProps<T> extends IProps, Omit<HTMLInputProps, 'size'> {
  preIcon?: IconProps<T>['type'];
  type?: string;
  addonAfter?: React.ReactNode;
  size?: 'large' | 'default' | 'small';
}

function InternalInput<T>(
  props: InputProps<T> = {},
  ref:
    | ((instance: HTMLInputElement) => void)
    | React.RefObject<HTMLInputElement | null>
    | null,
) {
  const {
    prefixCls = 'w-input',
    className,
    style,
    size = 'default',
    type = 'text',
    preIcon = null,
    addonAfter,
    ...otherProps
  } = props;
  const inputRef = React.createRef<HTMLInputElement>();
  const addonRef = React.createRef<HTMLSpanElement>();
  useImperativeHandle(ref, () => inputRef.current);
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-addon`]: addonAfter,
    disabled: props.disabled,
  });

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
    <div className={cls} style={style}>
      <Icon type={preIcon} />
      <input
        ref={inputRef}
        type={type}
        {...otherProps}
        className={classnames(`${prefixCls}-inner`)}
      />
      {addonAfter && (
        <span className={`${prefixCls}-addon-after`} ref={addonRef}>
          {addonAfter}
        </span>
      )}
    </div>
  );
}

export default React.forwardRef<HTMLInputElement, InputProps<{}>>(
  InternalInput,
);

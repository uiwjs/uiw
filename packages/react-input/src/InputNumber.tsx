import React, { useState, useMemo } from 'react';
import Input, { InputProps } from './';

interface InputNumberProps extends InputProps {
  min?: number;
  max?: number;
  step?: number;
  overLimitColor?: string;
  formatter?: (value: number) => string;
  parser?: (value: number) => number;
  keyboard?: boolean;
}

export default React.forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const {
    className,
    min,
    max,
    step,
    overLimitColor,
    keyboard = false,
    formatter,
    prefixCls = 'w-input-number',
    ...otherProps
  } = props;

  const value = useMemo(() => Number.parseFloat((props.value || 0)?.toString()), [props.value]);
  const [isOverLimit, isOverLimitSet] = useState(overLimitComp(value));

  function overLimitComp(value: number) {
    if (typeof min === 'number' && value < min) return true;
    if (typeof max === 'number' && value > max) return true;
    return false;
  }

  const onChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    const isOverLimit = overLimitComp(Number.parseFloat(v.target.value));
    isOverLimitSet(isOverLimit);

    props.onChange?.(v);
  };

  const overLimitProps = useMemo(() => {
    if (!overLimitColor) return { min, max };
  }, []);

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  const inputStyle = useMemo(() => (isOverLimit ? { color: overLimitColor?.toString() } : undefined), [isOverLimit]);

  return (
    <Input
      {...otherProps}
      className={cls}
      type="number"
      inputStyle={inputStyle}
      onChange={onChange}
      step={step}
      {...overLimitProps}
    />
  );
});

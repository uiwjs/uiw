import React, { useState, useEffect } from 'react';
import Input, { InputProps } from './';

interface InputNumberProps extends InputProps {
  min?: number;
  max?: number;
  step?: number;
}

export default React.forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
  const { min, max, ...inputProps } = props;

  const [value, valueSet] = useState(props.value || 0);

  const onChange = (v: React.ChangeEvent<HTMLInputElement>) => {
    const parseValue = Number.parseInt(v.target.value);
    if (typeof min === 'number' && parseValue < min) return;
    if (typeof max === 'number' && parseValue > max) return;

    valueSet(v.target.value);
    props.onChange?.(v);
  };

  return <Input {...inputProps} value={value} onChange={onChange} type="number" />;
});

import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { RadioProps } from './Radio';
import ButtonGroup from '@uiw/react-button-group';
import { RadioGroupBase } from './style';

export interface RadioGroupProps extends IProps, HTMLDivProps {
  name?: RadioProps['name'];
  value?: RadioProps['value'];
  onChange?: RadioProps['onChange'];
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const { prefixCls = 'w-radio-group', className, name, value, onChange, children, ...other } = props;
  return (
    <RadioGroupBase {...other} ref={ref} className={[prefixCls, className].filter(Boolean).join(' ').trim()}>
      <ButtonGroup>
        {React.Children.toArray(children).map((child) => {
          if (!child) return;
          if (!React.isValidElement(child)) return child;
          console.log(111, child.props);
          return React.cloneElement(child, {
            ...(child.props || {}),
            ...{
              checked: child.props.value === value,
              name,
              onChange,
            },
          });
        })}
      </ButtonGroup>
    </RadioGroupBase>
  );
});
export default RadioGroup;

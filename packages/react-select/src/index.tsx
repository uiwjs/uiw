import React from 'react';
import { IProps } from '@uiw/utils';
import Option from './Option';
import Group from './Group';

import { SelectStyleWarp } from './style';
export * from './style';
export interface SelectProps extends IProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'large' | 'default' | 'small';
}

const InternalSelect = (props: SelectProps, ref?: React.ForwardedRef<HTMLSelectElement>) => {
  const { prefixCls = 'w-select', className, size = 'default', ...other } = props;
  const cls = [prefixCls, className, size ? `${prefixCls}-${size}` : null].filter(Boolean).join(' ').trim();
  return <SelectStyleWarp {...other} ref={ref} className={cls} params={{ size }} />;
};

const Select: SelectComponent = React.forwardRef<HTMLSelectElement>(InternalSelect) as unknown as SelectComponent;
type SelectComponent = React.FC<React.PropsWithRef<SelectProps>> & {
  Option: typeof Option;
  Group: typeof Group;
};

Select.Option = Option;
Select.Group = Group;

export default Select;

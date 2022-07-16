import React from 'react';
import { IProps } from '@uiw/utils';
import Option from './Option';
import Group from './Group';
// import './style/index.less';

import { SelectWarp } from './style';
export * from './style';
export interface SelectProps extends IProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'large' | 'default' | 'small';
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { prefixCls = 'w-select', className, size = 'default', ...other } = props;
  const cls = [prefixCls, className, size ? `${prefixCls}-${size}` : null].filter(Boolean).join(' ').trim();

  return <SelectWarp {...other} ref={ref} className={cls} params={{ size }} />;
});

type Select = typeof Select & {
  Option: typeof Option;
  Group: typeof Group;
};

(Select as Select).Option = Option;
(Select as Select).Group = Group;

export default Select as Select;

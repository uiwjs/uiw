import React, { useImperativeHandle } from 'react';
import { IProps } from '@uiw/utils';
import Option from './Option';
import Group from './Group';
import './style/index.less';

export interface SelectProps
  extends IProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'large' | 'default' | 'small';
}

function InternalSelect(
  props: SelectProps = {},
  ref?:
    | ((instance: HTMLSelectElement) => void)
    | React.RefObject<HTMLSelectElement | null>
    | null,
) {
  const {
    prefixCls = 'w-select',
    className,
    size = 'default',
    ...other
  } = props;
  const selectRef = React.createRef<HTMLSelectElement>();
  useImperativeHandle(ref, () => selectRef.current);
  return (
    <select
      {...other}
      ref={selectRef}
      className={[prefixCls, className, size ? `${prefixCls}-${size}` : null]
        .filter(Boolean)
        .join(' ')
        .trim()}
    />
  );
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(InternalSelect);
type Select = typeof Select & {
  Option: typeof Option;
  Group: typeof Group;
};

(Select as Select).Option = Option;
(Select as Select).Group = Group;

export default Select as Select;

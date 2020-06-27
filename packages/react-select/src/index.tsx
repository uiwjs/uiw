import React, { useImperativeHandle } from 'react';
import classnames from 'classnames';
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
  ref:
    | ((instance: HTMLSelectElement) => void)
    | React.RefObject<unknown>
    | null
    | undefined,
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
      className={classnames(prefixCls, className, {
        [`${prefixCls}-${size}`]: size,
      })}
    />
  );
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<
    SelectProps & React.RefAttributes<HTMLUListElement>
  > {
  Option: typeof Option;
  Group: typeof Group;
}

const Select = React.forwardRef<unknown, SelectProps>(
  InternalSelect,
) as CompoundedComponent;

Select.Option = Option;
Select.Group = Group;

export default Select;

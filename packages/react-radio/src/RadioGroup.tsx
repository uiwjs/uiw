import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { RadioProps } from './Radio';
import './style/group.less';

export interface RadioGroupProps extends IProps, HTMLDivProps {
  name?: RadioProps['name'];
  value?: RadioProps['value'];
  onChange?: RadioProps['onChange'];
}

export default (props: RadioGroupProps = {}) => {
  const {
    prefixCls = 'w-radio-group',
    className,
    name,
    value,
    onChange,
    children,
    ...other
  } = props;
  return (
    <div {...other} className={classnames(prefixCls, className)}>
      {React.Children.toArray(children).map((child) => {
        if (!child) return;
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          ...(child.props || {}),
          ...{
            checked: child.props.value === value,
            name,
            onChange,
          },
        });
      })}
    </div>
  );
};

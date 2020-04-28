import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';
import Option from './Option';
import Group from './Group';
import './style/index.less';

export interface SelectProps extends IProps, Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'large' | 'default' | 'small'; 
}

export default class Select extends React.Component<SelectProps> {
  public static defaultProps: SelectProps = {
    prefixCls: 'w-select',
    size: 'default',
  }
  static Option = Option;
  static Group = Group;
  render() {
    const { prefixCls, className, size, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-${size}`]: size });
    return (
      <select {...resetProps} className={cls} />
    );
  }
}

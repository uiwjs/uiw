import React from 'react';
import classnames from 'classnames';
import Abstract, { IAbstractProps } from '../radio/Abstract';
import Group from './Group';
import './style/index.less';

export interface ICheckboxProps extends IAbstractProps {
  indeterminate?: boolean;
}

export default class Checkbox extends React.Component<ICheckboxProps> {
  static Group = Group;
  public static defaultProps: ICheckboxProps = {
    prefixCls: 'w-checkbox',
    type: 'checkbox',
    indeterminate: false,
    disabled: false,
    checked: undefined,
    value: '',
  }
  render() {
    const { className, indeterminate, ...other } = this.props;
    const cls = classnames(className, { indeterminate });
    return <Abstract {...other} className={cls} />;
  }
}


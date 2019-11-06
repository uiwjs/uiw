import React from 'react';
import classnames from 'classnames';
import Abstract, { AbstractProps } from '../radio/Abstract';
import Group from './Group';
import './style/index.less';

export interface CheckboxProps extends AbstractProps {
  indeterminate?: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  static Group = Group;
  public static defaultProps: CheckboxProps = {
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


import React from 'react';
import classnames from 'classnames';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import { CheckboxGroup } from './Group';
import './style/index.less';

export interface CheckboxProps extends RadioAbstractProps {
  indeterminate?: boolean;
}

export default class Checkbox extends React.Component<CheckboxProps> {
  static Group = CheckboxGroup;
  public static defaultProps: CheckboxProps = {
    prefixCls: 'w-checkbox',
    type: 'checkbox',
    indeterminate: false,
    disabled: false,
    checked: undefined,
    value: '',
  };
  render() {
    const { className, indeterminate, ...other } = this.props;
    const cls = classnames(className, { indeterminate });
    return <RadioAbstract {...other} className={cls} />;
  }
}

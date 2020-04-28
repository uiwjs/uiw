import React from 'react';
import { RadioAbstract, RadioAbstractProps } from './RadioAbstract';
import './style/index.less';

export interface RadioProps extends RadioAbstractProps {}

export default class Radio extends React.Component<RadioProps> {
  public static defaultProps: RadioAbstractProps = {
    prefixCls: 'w-radio',
    type: 'radio',
    disabled: false,
    checked: false,
    value: '',
  }
  render() {
    return <RadioAbstract {...this.props} />;
  }
}
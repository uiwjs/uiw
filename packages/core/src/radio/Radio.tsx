import React from 'react';
import Abstract, { IAbstractProps } from './Abstract';
import './style/index.less';

export interface IRadioProps extends IAbstractProps {}

export default class Radio extends React.Component<IRadioProps> {
  public static defaultProps: IAbstractProps = {
    prefixCls: 'w-radio',
    type: 'radio',
    disabled: false,
    checked: false,
    value: '',
  }
  render() {
    return <Abstract {...this.props} />;
  }
}
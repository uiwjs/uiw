import React from 'react';
import { RadioAbstract, RadioAbstractProps } from '@uiw/react-radio';
import './style/index.less';

export interface SwitchProps extends RadioAbstractProps {}

export default class Switch extends React.Component<SwitchProps> {
  public static defaultProps: SwitchProps = {
    prefixCls: 'w-switch',
    type: 'switch',
  }
  render() {
    const props = this.props;
    return <RadioAbstract {...{ ...props, type: 'checkbox' }} />;
  }
}

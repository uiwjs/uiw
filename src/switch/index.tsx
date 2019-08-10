import React from 'react';
import Abstract, { IAbstractProps } from '../radio/Abstract';
import './style/index.less';

export interface ISwitchProps extends IAbstractProps {}

export default class Switch extends React.Component<ISwitchProps> {
  public static defaultProps: ISwitchProps = {
    prefixCls: 'w-switch',
    type: 'switch',
  }
  render() {
    const props = this.props;
    return <Abstract {...{ ...props, type: 'checkbox' }} />;
  }
}

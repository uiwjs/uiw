import React from 'react';
import Abstract, { AbstractProps } from '../radio/Abstract';
import './style/index.less';

export interface SwitchProps extends AbstractProps {}

export default class Switch extends React.Component<SwitchProps> {
  public static defaultProps: SwitchProps = {
    prefixCls: 'w-switch',
    type: 'switch',
  }
  render() {
    const props = this.props;
    return <Abstract {...{ ...props, type: 'checkbox' }} />;
  }
}

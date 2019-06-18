import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '../utils/props';

export interface ITabsPaneProps extends IProps, HTMLDivProps {}

export default class Pane extends React.Component<ITabsPaneProps> {
  public static defaultProps: ITabsPaneProps = {
    prefixCls: 'w-tabs-pane',
  }
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    return (
      <div className={classnames(`${prefixCls}`, className)} {...resetProps} />
    );
  }
}

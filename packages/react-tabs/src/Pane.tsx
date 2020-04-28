import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';

export interface TabsPaneProps extends IProps, HTMLDivProps {}

export default class Pane extends React.Component<TabsPaneProps> {
  public static defaultProps: TabsPaneProps = {
    prefixCls: 'w-tabs-pane',
  }
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    return (
      <div className={classnames(`${prefixCls}`, className)} {...resetProps} />
    );
  }
}

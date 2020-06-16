import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';

export interface TabsPaneProps extends IProps, HTMLDivProps {}

export default (props: TabsPaneProps = {}) => {
  const { prefixCls = 'w-tabs-pane', className, ...resetProps } = props;
  return (
    <div className={classnames(`${prefixCls}`, className)} {...resetProps} />
  );
}

import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';

export interface TabsPaneProps extends IProps, HTMLDivProps {
  label?: React.ReactNode;
  disabled?: boolean;
}

export default (props: TabsPaneProps = {}) => {
  const {
    prefixCls = 'w-tabs-pane',
    className,
    label: _,
    ...resetProps
  } = props;
  return (
    <div
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...resetProps}
    />
  );
};

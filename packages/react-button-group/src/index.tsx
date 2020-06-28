import React from 'react';
import classnames from 'classnames';
import { HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface ButtonGroupProps extends HTMLDivProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  vertical?: boolean;
}

export default (props: ButtonGroupProps = {}) => {
  const {
    prefixCls = 'w-btn-group',
    vertical = false,
    children,
    className,
    ...resetProps
  } = props;
  const cls = classnames(prefixCls, className, {
    [`${prefixCls}-vertical`]: vertical,
  });

  return (
    <div className={cls} {...resetProps}>
      {children}
    </div>
  );
}

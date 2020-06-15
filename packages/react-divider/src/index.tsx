import React from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface DividerProps extends IProps, HTMLDivProps {
  dashed?: boolean;
  type?: 'horizontal' | 'vertical';
  align?: 'left' | 'right' | 'center';
}

export default (props: DividerProps = {}) => {
  const { prefixCls = 'w-divider', className, children, dashed = false, type = 'horizontal', align = 'center', ...restProps } = props;
  const cls = classnames(className, prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${align}`, {
    [`${prefixCls}-with-text`]: children,
    [`${prefixCls}-dashed`]: !!dashed,
  });
  return (
    <div className={cls} {...restProps}>
      {children && <span className={`${prefixCls}-inner-text`}>{children}</span>}
    </div>
  );
}

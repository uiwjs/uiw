import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import DividerWarp, { DividerStyleInnerText } from './style';
export * from './style';

export interface DividerProps extends IProps, HTMLDivProps {
  dashed?: boolean;
  type?: 'horizontal' | 'vertical';
  align?: 'left' | 'right' | 'center';
}

export default React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    prefixCls = 'w-divider',
    className,
    children,
    dashed = false,
    type = 'horizontal',
    align = 'center',
    ...restProps
  } = props;
  const cls = [
    className,
    prefixCls,
    prefixCls && type ? `${prefixCls}-${type}` : null,
    prefixCls && align ? `${prefixCls}-${align}` : null,
    children ? `${prefixCls}-with-text` : null,
    !!dashed ? `${prefixCls}-dashed` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <DividerWarp
      className={cls}
      {...restProps}
      ref={ref}
      prefixCls={prefixCls}
      type={type}
      align={align}
      dashed={dashed}
    >
      {children && <DividerStyleInnerText className={`${prefixCls}-inner-text`}>{children}</DividerStyleInnerText>}
    </DividerWarp>
  );
});

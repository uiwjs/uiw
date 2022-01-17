import React from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/row.less';

export interface RowProps extends IProps, HTMLDivProps {
  fixed?: boolean;
  gutter?: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}

export function Row(props: RowProps = {}) {
  const { prefixCls = 'w-row', className, gutter = 0, justify, align, ...other } = props;
  const cls = [
    prefixCls,
    className,
    align ? `${prefixCls}-align-${align}` : null,
    justify ? `${prefixCls}-justify-${justify}` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  const gutterStyl = !gutter ? {} : { paddingLeft: gutter / 2, paddingRight: gutter / 2 };
  return (
    <div {...other} className={cls}>
      {React.Children.toArray(props.children).map((child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(
          child,
          Object.assign({}, child.props, {
            style: { ...child.props.style, ...gutterStyl },
          }),
        );
      })}
    </div>
  );
}

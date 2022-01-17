import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import { DescriptionsItemProps } from './DescriptionsItem';
import { RowProps } from './Row';

export interface CellProps
  extends Omit<RowProps, 'children'>,
    Omit<DescriptionsItemProps, 'children'>,
    React.HTMLAttributes<HTMLTableCellElement>,
    IProps {
  children?: React.ReactElement<DescriptionsItemProps> | React.ReactNode;
  tagName?: 'td' | 'th';
  /**
   * 是否为一行的最后一个
   */
  isLastCell?: boolean;
}

function Cell(props: CellProps = {}) {
  const {
    prefixCls,
    className,
    tagName: TagName = 'td',
    layout,
    bordered,
    label,
    isLastCell,
    colon,
    span,
    children,
    column,
    ...other
  } = props;

  const labelProps: React.HTMLAttributes<HTMLSpanElement> = {
    className: [
      prefixCls ? `${prefixCls}-item-label` : null,
      className,
      colon ? `${prefixCls}-item-colon` : null,
      !label ? `${prefixCls}-item-no-label` : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim(),
  };
  if (layout === 'horizontal') {
    if (!bordered) {
      return (
        <TagName {...other} colSpan={span}>
          <span {...labelProps}>{label}</span>
          <span className={prefixCls ? `${prefixCls}-item-content` : ''}>{children}</span>
        </TagName>
      );
    }
    return (
      <Fragment>
        <th {...labelProps}>{label}</th>
        <TagName
          {...other}
          colSpan={span ? span * 2 - 1 : span}
          className={prefixCls ? `${prefixCls}-item-content` : ''}
        >
          {children}
        </TagName>
      </Fragment>
    );
  }
  return (
    <TagName colSpan={span} className={`${prefixCls}-item-${TagName === 'td' ? 'content' : 'label'}`}>
      {children}
    </TagName>
  );
}

export default Cell;

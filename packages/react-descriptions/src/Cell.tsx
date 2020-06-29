import React, { Fragment } from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';
import { DescriptionsItemProps } from './DescriptionsItem';
import { RowProps } from 'Row';

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
    ...other
  } = props;

  const labelProps: any = {
    className: classnames(`${prefixCls}-item-label`, className, {
      [`${prefixCls}-item-colon`]: colon,
      [`${prefixCls}-item-no-label`]: !label,
    }),
  };
  if (layout === 'horizontal') {
    if (!bordered) {
      return (
        <TagName {...other} colSpan={span}>
          <span {...labelProps}>{label}</span>
          <span className={`${prefixCls}-item-content`}>{children}</span>
        </TagName>
      );
    }
    return (
      <Fragment>
        <th {...labelProps}>{label}</th>
        <TagName
          {...other}
          colSpan={isLastCell && span ? span * 2 - 1 : span}
          className={`${prefixCls}-item-content`}
        >
          {children}
        </TagName>
      </Fragment>
    );
  }
  return (
    <TagName
      colSpan={span}
      className={`${prefixCls}-item-${TagName === 'td' ? 'content' : 'label'}`}
    >
      {children}
    </TagName>
  );
}

export default Cell;

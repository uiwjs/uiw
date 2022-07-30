import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import { DescriptionsItemProps } from './DescriptionsItem';
import { RowProps } from './Row';
import { DescriptionsStyleItem } from './style';
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
        <DescriptionsStyleItem as={TagName} {...other} colSpan={span}>
          <DescriptionsStyleItem as="span" {...labelProps} isColon={colon} isLabel={!!label}>
            {label}
          </DescriptionsStyleItem>
          <DescriptionsStyleItem
            as="span"
            isContent={!!prefixCls}
            className={prefixCls ? `${prefixCls}-item-content` : ''}
          >
            {children}
          </DescriptionsStyleItem>
        </DescriptionsStyleItem>
      );
    }
    return (
      <Fragment>
        <DescriptionsStyleItem as="th" {...labelProps} bordered={bordered} isColon={colon} isLabel={!!label}>
          {label}
        </DescriptionsStyleItem>
        <DescriptionsStyleItem
          {...other}
          as={TagName}
          isContent={!!prefixCls}
          bordered={bordered}
          colSpan={span ? span * 2 - 1 : span}
          className={prefixCls ? `${prefixCls}-item-content` : ''}
        >
          {children}
        </DescriptionsStyleItem>
      </Fragment>
    );
  }
  return (
    <DescriptionsStyleItem
      bordered={bordered}
      isLabel={TagName === 'th'}
      isContent={TagName === 'td'}
      as={TagName}
      colSpan={span}
      className={`${prefixCls}-item-${TagName === 'td' ? 'content' : 'label'}`}
    >
      {children}
    </DescriptionsStyleItem>
  );
}

export default Cell;

import React, { Fragment } from 'react';
import { IProps } from '@uiw/utils';
import { DescriptionsItemProps } from './DescriptionsItem';
import Cell from './Cell';

export interface RowProps extends IProps {
  children?: React.ReactElement<DescriptionsItemProps>[];
  bordered?: boolean;
  layout?: 'horizontal' | 'vertical';
  colon?: boolean;
  column?: number;
}

export default function Row(props: RowProps = {}) {
  const { prefixCls, layout, bordered, column, colon, children = [] } = props;
  function handleCell(isHead?: boolean) {
    return children.map((child, index) => (
      <Cell
        {...child.props}
        prefixCls={prefixCls}
        key={index}
        column={column}
        tagName={isHead ? 'th' : 'td'}
        isLastCell={children.length - 1 === index}
        layout={layout}
        colon={colon}
        bordered={bordered}
      >
        {isHead ? child.props.label : child.props.children}
      </Cell>
    ));
  }
  const cls = prefixCls ? `${prefixCls}-row` : '';
  return (
    <Fragment>
      {layout === 'vertical' && <tr className={cls}>{handleCell(true)}</tr>}
      <tr className={cls}>{handleCell()}</tr>
    </Fragment>
  );
}

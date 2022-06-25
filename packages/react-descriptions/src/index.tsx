import React from 'react';
import { IProps } from '@uiw/utils';
import DescriptionsItem, { DescriptionsItemProps } from './DescriptionsItem';
import Row, { RowProps } from './Row';
// import './style/index.less';
import { DescriptionsTable, DescriptionsWarp, DescriptionsTableCaption, DescriptionsTableTbody } from './style';
export * from './DescriptionsItem';

export interface DescriptionsProps extends IProps {
  column?: number;
  title?: React.ReactNode;
  children?: React.ReactNode;
  bordered?: boolean;
  colon?: boolean;
  size?: 'large' | 'small' | 'default';
  layout?: RowProps['layout'];
}

const generateChildrenRows = (
  children: React.ReactElement<DescriptionsItemProps>[],
  column: number,
): Array<React.ReactElement<DescriptionsItemProps>[]> => {
  const rows: React.ReactElement<DescriptionsItemProps>[][] = [];
  let columns: React.ReactElement<DescriptionsItemProps>[] | null = null;
  let leftSpans: number;

  children.forEach((node: React.ReactElement<DescriptionsItemProps>, index: number) => {
    let itemNode = node;

    if (!columns) {
      leftSpans = column;
      columns = [];
      rows.push(columns);
    }

    // Always set last span to align the end of Descriptions
    const lastItem = index === children.length - 1;
    if (lastItem) {
      itemNode = React.cloneElement(itemNode, {
        span: leftSpans,
      });
    }
    // Calculate left fill span
    const { span = 1 } = itemNode.props;
    columns.push(itemNode);
    leftSpans -= span;

    if (leftSpans <= 0) {
      columns = null;
    }
  });

  return rows;
};

function InternalDescriptions(props: DescriptionsProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    prefixCls = 'w-descriptions',
    className,
    title,
    bordered,
    column = 3,
    size,
    colon = true,
    children,
    layout = 'horizontal',
    ...other
  } = props;
  const cls = [
    prefixCls,
    className,
    prefixCls && layout ? `${prefixCls}-${layout}` : null,
    bordered ? `${prefixCls}-bordered` : null,
    size ? `${prefixCls}-${size}` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  const cloneChildren = React.Children.toArray(children) as JSX.Element[];
  const childs: Array<React.ReactElement<DescriptionsItemProps>[]> = generateChildrenRows(cloneChildren, column!);

  return (
    <DescriptionsWarp bordered={bordered} className={cls} ref={ref}>
      <DescriptionsTable {...other}>
        {title && (
          <DescriptionsTableCaption bordered={bordered} className={`${prefixCls}-title`}>
            {title}
          </DescriptionsTableCaption>
        )}
        <DescriptionsTableTbody size={size} bordered={bordered} className={`${prefixCls}-tbody`}>
          {childs.map((child, index) => (
            <Row key={index} prefixCls={prefixCls} bordered={bordered} colon={colon} column={column} layout={layout}>
              {child}
            </Row>
          ))}
        </DescriptionsTableTbody>
      </DescriptionsTable>
    </DescriptionsWarp>
  );
}

const Descriptions = React.forwardRef<HTMLDivElement, DescriptionsProps>(InternalDescriptions);
type Descriptions = typeof Descriptions & {
  Item: typeof DescriptionsItem;
};

(Descriptions as Descriptions).Item = DescriptionsItem;

export default Descriptions as Descriptions;

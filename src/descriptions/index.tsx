import React from 'react';
import classnames from 'classnames';
import { IProps } from "../utils/props";
import DescriptionsItem, { DescriptionsItemProps } from './DescriptionsItem';
import Tr, { TrProps } from './Tr';
import './style/index.less';

export interface DescriptionsProps extends IProps {
  column?: number;
  title?: React.ReactNode;
  bordered?: boolean;
  colon?: boolean;
  size?: 'large' | 'small' | 'default';
  layout?: TrProps['layout'];
}

const generateChildrenRows = (children: JSX.Element[], column: number): Array<React.ReactElement<DescriptionsItemProps>[]> => {
  const rows: React.ReactElement<DescriptionsItemProps>[][] = [];
  let columns: React.ReactElement<DescriptionsItemProps>[] | null = null;
  let leftSpans: number;

  const itemNodes = children;
  itemNodes.forEach((node: React.ReactElement<DescriptionsItemProps>, index: number) => {
    let itemNode = node;

    if (!columns) {
      leftSpans = column;
      columns = [];
      rows.push(columns);
    }

    // Always set last span to align the end of Descriptions
    const lastItem = index === itemNodes.length - 1;
    // let lastSpanSame = true;
    if (lastItem) {
      // lastSpanSame = !itemNode.props.span || itemNode.props.span === leftSpans;
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
}

export default class Descriptions extends React.Component<DescriptionsProps> {
  static Item = DescriptionsItem;
  public static defaultProps: DescriptionsProps = {
    prefixCls: 'w-descriptions',
    layout: 'horizontal',
    size: 'default',
    column: 3,
    colon: true,
  }
  render() {
    const { prefixCls, className, title, bordered, column, size, colon, children, layout, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-${size}`]: size
    });
    console.log('size~~~:', size);
    const cloneChildren: JSX.Element[] = React.Children.map(children as React.ReactElement<DescriptionsItemProps>[], (child: React.ReactElement<DescriptionsItemProps>) => {
      return child;
    });

    const childrenArray: Array<React.ReactElement<DescriptionsItemProps>[]> = generateChildrenRows(cloneChildren, column!);
    return (
      <table className={cls}>
        {title && <caption className={`${prefixCls}-title`}>{title}</caption>}
        <tbody>
          {childrenArray.map((child, index) => (
            <Tr key={index} prefixCls={prefixCls} bordered={bordered} colon={colon} layout={layout} index={index}>{child}</Tr>
          ))}
        </tbody>
      </table>
    );
  }
}

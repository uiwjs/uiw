import React, { useMemo, useState, useEffect, useRef, Fragment } from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import { MinusSquareO } from '@uiw/icons/lib/MinusSquareO';
import { PlusSquareO } from '@uiw/icons/lib/PlusSquareO';
import Thead from './Thead';
import { TableStyleWrap, TableStyleFooter } from './style';
import { getLevelItems, getAllColumnsKeys, NodeTreeData } from './util';
import ExpandableComponent from './Expandable';
import TableTr from './TableTr';
export * from './style';

// 展开配置
export interface ExpandableType<T> {
  // 展开行
  expandedRowRender?: (record: T, index: number, expanded: boolean) => React.ReactNode;
  // 自定义图标
  expandIcon?: (expanded: boolean, record: T, index: number) => React.ReactNode;
  // 是否允许展开
  rowExpandable?: (record: T) => boolean;
  // 初始时，是否展开所有行
  defaultExpandAllRows?: boolean;
  // 默认展开的行 rowKey数组
  defaultExpandedRowKeys?: Array<T[keyof T] | number>;
  // 控制展开的行 rowKey数组
  expandedRowKeys?: Array<T[keyof T] | number>;
  // 展开的行变化触发
  onExpandedRowsChange?: (expandedRows: Array<T[keyof T] | number>) => void;
  // 点击展开图标触发
  onExpand?: (expanded: boolean, record: T, index: number, hierarchy?: number) => void;
  // 控制树形结构每一层的缩进宽度
  indentSize?: number;
  // 指定树形结构的列名
  childrenColumnName?: string;
  /**是否自动设置展开按钮位置*/
  isAutoExpanded?: boolean;
}

export type TableColumns<T = any> = {
  title?: string | ((data: TableColumns<T>, rowNum: number, colNum: number) => JSX.Element) | JSX.Element;
  key?: string;
  width?: number;
  colSpan?: number;
  children?: TableColumns<T>[];
  ellipsis?: boolean;
  render?: (
    text: string,
    keyName: string,
    rowData: T,
    rowNumber: number,
    columnNumber: number,
    leveConfig: {
      level: number;
      rowSpan?: number;
      summary:
        | {
            summary: Record<
              string,
              {
                count: number;
                level: number;
              }
            >;
            summaryCount: Record<string | number, number>;
          }
        | undefined;
    },
  ) => React.ReactNode;
  style?: React.CSSProperties;
  align?: 'left' | 'center' | 'right';
  className?: string;
  fixed?: boolean | 'left' | 'right';
  isExpanded?: boolean;
  isExpandedButton?: boolean;
  isExpandedButtonLayout?: 'left' | 'right';
  [key: string]: any;
};

export interface TableProps<T extends { [key: string]: V } = any, V = any> extends IProps, Omit<HTMLDivProps, 'title'> {
  prefixCls?: string;
  columns?: TableColumns<T>[];
  data?: Array<T>;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  bordered?: boolean;
  empty?: React.ReactNode;
  onCell?: (
    data: { [key: string]: any },
    options: ICellOptions,
    evn: React.MouseEvent<HTMLTableCellElement>,
  ) => void | React.ReactNode;
  onCellHead?: (
    data: TableColumns<T>,
    rowNum: number,
    colNum: number,
    evn: React.MouseEvent<HTMLTableCellElement>,
  ) => void;
  expandable?: ExpandableType<T>;
  rowKey?: keyof T;
  scroll?: { x?: React.CSSProperties['width']; y?: React.CSSProperties['height'] };
  isAutoMergeRowSpan?: boolean;
}

export interface LocationWidth {
  left?: number;
  right?: number;
  width: number;
  key?: string;
  colSpan?: number;
}
export interface ICellOptions {
  rowNum: number;
  colNum: number;
  keyName: string;
}

export default function Table<T extends { [key: string]: V }, V>(props: TableProps<T, V> = {}) {
  const {
    prefixCls = 'w-table',
    className,
    columns = [],
    data = [],
    title,
    footer,
    bordered,
    onCell = noop,
    onCellHead = noop,
    empty,
    children,
    expandable,
    rowKey,
    scroll,
    isAutoMergeRowSpan = false,
    ...other
  } = props;
  const [expandIndex, setExpandIndex] = useState<Array<T[keyof T] | number>>([]);
  const [locationWidth, setLocationWidth] = useState<{ [key: string]: LocationWidth }>({});
  const finalLocationWidth = useRef<{ [key: string]: LocationWidth }>({});
  const updateLocation = (params: LocationWidth, index: string, key: string, colSpan: number = 0) => {
    finalLocationWidth.current = {
      ...finalLocationWidth.current,
      [index]: {
        ...finalLocationWidth.current[index],
        ...params,
        key: key,
        colSpan,
      },
    };
    if (index === `${header.length - 1}${header[header.length - 1].length - 1}`) {
      setLocationWidth(computed());
    }
  };
  const deepClumnsLocation = (params: Array<TableColumns<T> | number>, fistIndex: number) => {
    let initialValue = 0,
      headerIndex = 0,
      deepParams: Array<TableColumns<T> | number> = [];
    params.forEach((_, index) => {
      const i = `${fistIndex}${headerIndex}`;
      if (typeof params[index] === 'number') {
        initialValue = (params[index] as number) + initialValue;
        deepParams.push(params[index]);
        return;
      }
      if (finalLocationWidth.current[i]) {
        finalLocationWidth.current[i].left = initialValue;
        initialValue = finalLocationWidth.current[i].width + initialValue;
        if (Array.isArray((params[index] as TableColumns<T>).children)) {
          deepParams.push(...(params[index] as TableColumns<T>).children!);
        } else {
          deepParams.push(finalLocationWidth.current[i].width);
        }
      }
      headerIndex += 1;
    });
    (initialValue = 0), (headerIndex = header[fistIndex].length - 1);
    for (let index = params.length - 1; index >= 0; index--) {
      const i = `${fistIndex}${headerIndex}`;
      if (typeof params[index] === 'number') {
        initialValue = (params[index] as number) + initialValue;
        continue;
      }
      if (finalLocationWidth.current[i]) {
        finalLocationWidth.current[i].right = initialValue;
        initialValue = finalLocationWidth.current[i].width + initialValue;
      }
      headerIndex -= 1;
    }
    if (deepParams.filter((it) => typeof it !== 'number').length) deepClumnsLocation(deepParams, fistIndex + 1);
  };

  const computed = () => {
    deepClumnsLocation(columns, 0);
    return finalLocationWidth.current;
  };
  useEffect(() => {
    const childKey = expandable?.childrenColumnName || 'children';
    const deep = (params: TableColumns<T>) => {
      const arr1: Array<T[keyof T] | number> = [];
      const arr = params.map((it: T, index: number) => {
        if (Array.isArray(it[childKey])) {
          arr1.push(...deep(it[childKey]));
        }
        return rowKey ? it[rowKey] : index;
      });
      return [...arr1, ...arr];
    };
    if (expandable) {
      if (expandable.defaultExpandAllRows) {
        setExpandIndex(deep(data));
        return;
      }
      if (expandable.defaultExpandedRowKeys) {
        setExpandIndex(expandable.defaultExpandedRowKeys);
        return;
      }
    }
  }, []);
  useEffect(() => {
    if (expandable) {
      if (expandable.expandedRowKeys && JSON.stringify(expandable.expandedRowKeys) !== JSON.stringify(expandIndex)) {
        setExpandIndex(expandable.expandedRowKeys);
      }
    }
  }, [expandable?.expandedRowKeys]);

  const isExpandedDom = useMemo(() => {
    return (record: T, index: number) => {
      if (!expandable) {
        return false;
      }
      if (!expandable.expandedRowRender) {
        return false;
      }
      let flag = true;
      if (expandable.rowExpandable) {
        flag = expandable.rowExpandable(record);
      }
      return (
        flag && (
          <tr style={expandIndex.includes(rowKey ? record[rowKey] : index) ? {} : { display: 'none' }}>
            <td style={{ paddingLeft: 16 }} colSpan={columns.length + 1}>
              {expandable.expandedRowRender(record, index, true)}
            </td>
          </tr>
        )
      );
    };
  }, [expandable, expandIndex]);

  const self = useMemo(() => {
    let keys = getAllColumnsKeys<T>(columns);
    let selfColumns: TableColumns<T>[] = [];
    if (expandable?.expandedRowRender) {
      keys = [{ key: 'uiw-expanded', align: 'center' }, ...keys];
      selfColumns = [
        {
          title: '',
          key: 'uiw-expanded',
          width: 50,
          align: 'center',
          render: (text, key, record, index) => {
            return (
              <ExpandableComponent
                defaultExpand={
                  expandable.defaultExpandAllRows === undefined
                    ? !!expandable.defaultExpandedRowKeys?.includes(rowKey ? record[rowKey] : index)
                    : !!expandable.defaultExpandAllRows
                }
                onClick={(expand) => {
                  expandable.onExpand?.(expand, record, index);
                  if (expand) {
                    const result = expandIndex.filter((it) => (rowKey ? it !== record[rowKey] : it !== index));
                    expandable.onExpandedRowsChange ? expandable.onExpandedRowsChange(result) : setExpandIndex(result);
                  } else {
                    const result = [...expandIndex, rowKey ? record[rowKey] : index];
                    expandable.onExpandedRowsChange ? expandable.onExpandedRowsChange(result) : setExpandIndex(result);
                  }
                }}
                expandIcon={(expand) => {
                  if (expandable.rowExpandable && !expandable.rowExpandable?.(record)) {
                    return null;
                  }
                  if (expandable.expandIcon) {
                    return expandable.expandIcon(expand, record, index);
                  }
                  return expand ? <MinusSquareO /> : <PlusSquareO />;
                }}
              />
            );
          },
        },
        ...columns,
      ];
    } else {
      selfColumns = [...columns];
    }
    return {
      keys,
      selfColumns,
    };
  }, [columns, expandIndex]);
  const style: { table: React.CSSProperties; div: React.CSSProperties } = useMemo(() => {
    const style: { table: React.CSSProperties; div: React.CSSProperties } = {
      table: {},
      div: {},
    };
    if (scroll) {
      if (scroll.x !== undefined) {
        style.table.maxWidth = 'none';
        style.table.minWidth = '100%';
        style.table.width = scroll.x;
        style.div.overflowX = 'auto';
        style.div.overflowY = 'hidden';
      }
      if (scroll.y !== undefined) {
        style.div.maxHeight = scroll.y;
        style.div.overflowY = 'scroll';
      }
    }
    return style;
  }, [scroll]);
  const cls = [prefixCls, className, bordered ? `${prefixCls}-bordered` : null].filter(Boolean).join(' ').trim();
  const { header, render, ellipsis } = getLevelItems(self.selfColumns);

  const treeData = useMemo(
    () => new NodeTreeData(data, rowKey as string, expandable?.childrenColumnName || 'children'),
    [data, rowKey, expandable?.childrenColumnName, isAutoMergeRowSpan],
  );

  return (
    <React.Fragment>
      <TableStyleWrap className={cls} {...other} style={{ ...other.style, ...style.div }} params={{ bordered }}>
        <table style={{ tableLayout: ellipsis ? 'fixed' : 'auto', ...style.table }}>
          {title && <caption>{title}</caption>}
          {columns && columns.length > 0 && (
            <Thead
              onCellHead={onCellHead}
              bordered={bordered}
              data={header}
              locationWidth={locationWidth}
              updateLocation={updateLocation}
            />
          )}
          {data && data.length > 0 && (
            <tbody>
              <TableTr
                rowKey={rowKey}
                locationWidth={locationWidth}
                data={data}
                header={header}
                keys={self.keys}
                render={render}
                ellipsis={ellipsis}
                prefixCls={prefixCls}
                bordered={bordered}
                onCell={onCell}
                hierarchy={0}
                isExpandedDom={isExpandedDom}
                onExpand={expandable?.onExpand}
                indentSize={typeof expandable?.indentSize === 'number' ? expandable?.indentSize : 16}
                childrenColumnName={expandable?.childrenColumnName || 'children'}
                isAutoExpanded={expandable?.isAutoExpanded}
                treeData={treeData}
                isAutoMergeRowSpan={isAutoMergeRowSpan}
                expandIndex={expandIndex}
                setExpandIndex={setExpandIndex}
              />
            </tbody>
          )}
          {data && data.length === 0 && empty && (
            <tbody>
              <tr>
                <td colSpan={self.keys.length} style={{ position: 'relative', left: 0 }}>
                  {empty}
                </td>
              </tr>
            </tbody>
          )}
          {props.children}
        </table>
      </TableStyleWrap>
      {footer && (
        <TableStyleFooter className={`${prefixCls}-footer`} params={{ bordered }}>
          {footer}
        </TableStyleFooter>
      )}
    </React.Fragment>
  );
}

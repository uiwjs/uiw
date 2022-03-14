import React, { useMemo, useState, useEffect } from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import Icon from '@uiw/react-icon'
import Thead from './Thead';
import { getLevelItems, getAllColumnsKeys } from './util';
import ExpandableComponent from './Expandable'
import './style/index.less';

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
  // 默认展开的行	rowKey数组
  defaultExpandedRowKeys?: Array<T[keyof T] | number>;
}

export type TableColumns<T = any,> = {
  title?: string | ((data: TableColumns<T>, rowNum: number, colNum: number) => JSX.Element) | JSX.Element;
  key?: string;
  width?: number;
  colSpan?: number;
  children?: TableColumns<T>[];
  ellipsis?: boolean;
  render?: (text: string, keyName: string, rowData: T, rowNumber: number, columnNumber: number) => React.ReactNode;
  style?: React.CSSProperties;
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
  expandable?: ExpandableType<T>,
  rowKey?: keyof T;
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
    ...other
  } = props;
  const [expandIndex, setExpandIndex] = useState<Array<T[keyof T] | number>>([])
  useEffect(() => {
    if (expandable) {
      if (expandable.defaultExpandAllRows) {
        setExpandIndex(data.map((it, index) => rowKey ? it[rowKey] : index))
        return
      }
      if (expandable.defaultExpandedRowKeys) {
        setExpandIndex(expandable.defaultExpandedRowKeys)
        return
      }
    }
  }, [expandable])

  const isExpandedDom = useMemo(() => {
    return (record: T, index: number) => {
      if (!expandable) {
        return false
      }
      let a = true;
      if (expandable.expandedRowRender) {
        a = true
      }
      if (expandable.rowExpandable) {
        a = expandable.rowExpandable(record)
      }
      return a && <tr style={expandIndex.includes(rowKey ? record[rowKey] : index) ? {} : { display: 'none' }}><td style={{ paddingLeft: 16 }} colSpan={columns.length + 1} >{expandable?.expandedRowRender?.(record, index, true)}</td></tr>
    }
  }, [expandable, expandIndex])
  let keys = getAllColumnsKeys<T>(columns);
  let selfColumns: TableColumns<T>[] = []
  if (expandable?.expandedRowRender) {
    keys = ['uiw-expanded', ...keys];
    selfColumns = [
      {
        title: '',
        key: 'uiw-expanded',
        width: 50,
        align: 'center',
        render: (text, key, record, index) => {
          return <ExpandableComponent
            defaultExpand={
              expandable.defaultExpandAllRows === undefined ? !!expandable.defaultExpandedRowKeys?.includes(rowKey ? record[rowKey] : index) : !!expandable.defaultExpandAllRows
            }
            onClick={(expand) => {
              if (expand) {
                setExpandIndex(expandIndex.filter(it => rowKey ? it !== record[rowKey] : it !== index))
                expandable.expandedRowRender?.(record, index, false)
              } else {
                setExpandIndex([...expandIndex, rowKey ? record[rowKey] : index])
              }
            }}
            expandIcon={(expand) => {
              if (expandable.rowExpandable && !expandable.rowExpandable?.(record)) {
                return null
              }
              if (expandable.expandIcon) {
                return expandable.expandIcon(expand, record, index)
              }
              return expand ? <Icon type="minus-square-o" /> : <Icon type="plus-square-o" />
            }}
          />
        }
      },
      ...columns
    ]
  } else {
    selfColumns = [...columns]
  }
  const cls = [prefixCls, className, bordered ? `${prefixCls}-bordered` : null].filter(Boolean).join(' ').trim();
  const { header, render, ellipsis } = getLevelItems(selfColumns);

  return (
    <div>
      <div style={{ overflowY: 'scroll' }} className={cls} {...other}>
        <table style={ellipsis ? { tableLayout: 'fixed' } : {}}>
          {title && <caption>{title}</caption>}
          {columns && columns.length > 0 && <Thead onCellHead={onCellHead} data={header} />}
          {data && data.length > 0 && (
            <tbody>
              {data.map((trData, rowNum) => {
                return (
                  <React.Fragment key={rowNum}>
                    <tr key={rowKey ? trData[rowKey]+'' : rowNum}>
                      {keys.map((keyName, colNum) => {
                        let objs: React.TdHTMLAttributes<HTMLTableDataCellElement> = {
                          children: trData[keyName],
                        };
                        if (render[keyName]) {
                          const child = render[keyName](trData[keyName], keyName, trData, rowNum, colNum);
                          if (React.isValidElement(child)) {
                            objs.children = child;
                          } else {
                            if (child.props) {
                              objs = { ...child.props, children: objs.children };
                              if (child.props.rowSpan === 0 || child.props.colSpan === 0) return null;
                            }
                            if (child.children) {
                              objs.children = child.children;
                            }
                          }
                        }
                        if (ellipsis && ellipsis[keyName]) {
                          objs.className = `${prefixCls}-ellipsis`;
                        }
                        return (
                          <td {...objs} key={colNum} onClick={(evn) => onCell(trData, { rowNum, colNum, keyName }, evn)} />
                        );
                      })}
                    </tr>
                    {isExpandedDom(trData, rowNum)}
                  </React.Fragment>
                )
              })}
            </tbody>
          )}
          {data && data.length === 0 && empty && (
            <tbody>
              <tr>
                <td colSpan={columns.length} style={{ position: 'relative', left: 0 }}>
                  {empty}
                </td>
              </tr>
            </tbody>
          )}
          {props.children}
        </table>
      </div>
      {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
    </div>
  );
}

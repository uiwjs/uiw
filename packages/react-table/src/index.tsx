import React from 'react';
import { IProps, HTMLDivProps, noop } from '@uiw/utils';
import Thead from './Thead';
import { getLevelItems, getAllColumnsKeys } from './util';
import './style/index.less';

export type TableColumns<T = any, V = any> = {
  title?: string | ((data: TableColumns<T, V>, rowNum: number, colNum: number) => JSX.Element) | JSX.Element;
  key?: string;
  width?: number;
  colSpan?: number;
  children?: TableColumns<T, V>[];
  ellipsis?: boolean;
  render?: (text: V, keyName: V, rowData: T, rowNumber: number, columnNumber: number) => React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
};

export interface TableProps<T extends { [key: string]: V } = any, V = any> extends IProps, Omit<HTMLDivProps, 'title'> {
  prefixCls?: string;
  columns?: TableColumns<T, V>[];
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
    data: TableColumns<T, V>,
    rowNum: number,
    colNum: number,
    evn: React.MouseEvent<HTMLTableCellElement>,
  ) => void;
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
    ...other
  } = props;

  const cls = [prefixCls, className, bordered ? `${prefixCls}-bordered` : null].filter(Boolean).join(' ').trim();
  const { header, render, ellipsis } = getLevelItems(columns);
  const keys = getAllColumnsKeys<T>(columns);
  return (
    <div>
      <div style={{ overflowY: 'scroll' }} className={cls} {...other}>
        <table style={ellipsis ? { tableLayout: 'fixed' } : {}}>
          {title && <caption>{title}</caption>}
          {columns && columns.length > 0 && <Thead onCellHead={onCellHead} data={header} />}
          {data && data.length > 0 && (
            <tbody>
              {data.map((trData, rowNum) => (
                <tr key={rowNum}>
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
              ))}
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

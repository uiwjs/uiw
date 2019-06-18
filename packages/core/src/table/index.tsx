import React from 'react';
import classnames from 'classnames';
import Thead from './Thead';
import { getLevelItems, getAllColumnsKeys } from './util';
import { IProps } from '../utils/props';
import './style/index.less';

function noop() { };

export interface IColumns {
  title?: React.ReactNode;
  key?: string;
  width?: number;
  colSpan?: number;
  children?: IColumns[];
  render?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

export interface ITableProps extends IProps {
  prefixCls?: string;
  columns?: IColumns[];
  data?: {
    [key: string]: any;
  }[];
  title?: React.ReactNode;
  footer?: React.ReactNode;
  bordered?: boolean;
  onCell?: (data: { [key: string]: any; }, rowNum: number, colNum: number, evn: React.MouseEvent<HTMLTableCellElement>) => void;
  onCellHead?: (data: IColumns, rowNum: number, colNum: number, evn: React.MouseEvent<HTMLTableCellElement>) => void;
}

export default class Table extends React.Component<ITableProps> {
  public static defaultProps: ITableProps = {
    prefixCls: 'w-table',
    columns: [],
    data: [],
    onCell: noop,
    onCellHead: noop,
  }
  render() {
    const {
      prefixCls, className, columns, data, title, footer, bordered, onCell, onCellHead, ...other
    } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-bordered`]: bordered,
    });
    const { header, render } = getLevelItems(columns as IColumns[]);
    const keys = getAllColumnsKeys(columns as IColumns[]);
    return (
      <div className={cls} {...other}>
        <table>
          {title && <caption>{title}</caption>}
          {columns && columns.length > 0 && <Thead
            onCellHead={onCellHead}
            data={header} />}
          {data && data.length > 0 && (
            <tbody>
              {data.map((trs, idx) => {
                return (
                  <tr key={idx}>
                    {keys.map((key, _idx) => (
                      <td onClick={onCell!.bind(this, trs, idx, _idx)} key={_idx}>{render[key] ? render[key](trs[key], key, trs, idx, _idx) : trs[key]}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          )}
          {this.props.children}
        </table>
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}

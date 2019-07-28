import React from 'react';
import classnames from 'classnames';
import { IProps } from '../utils/props';
import { ITableProps, IColumns } from './';
import './style/index.less';

function noop() { }

export interface ITheadProps extends IProps {
  data?: ITableProps['data'];
  onCellHead?: ITableProps['onCellHead'];
}

export default class Thead extends React.Component<ITheadProps & React.HTMLAttributes<HTMLTableSectionElement>> {
  public static defaultProps: ITheadProps = {
    prefixCls: 'w-table-thead',
    onCellHead: noop,
    data: [],
  }
  render() {
    const { prefixCls, className, data, onCellHead, ...other } = this.props;
    return (
      <thead className={classnames(prefixCls, className)} {...other}>
        {data && data.map((tds, rowNum: number) => (
          <tr key={rowNum}>
            {tds.map((item: IColumns, colNum: number) => {
              const { title, key, render, children, ...thProps } = item;
              const titleNode = (typeof title === 'function' ? title(item, colNum, rowNum) : title) as IColumns['title'];
              if (thProps.colSpan === 0) {
                return null;
              }
              return (
                <th
                  key={colNum}
                  onClick={onCellHead!.bind(this, item, colNum, rowNum)}
                  {...thProps}
                >
                  {titleNode}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
    );
  }
}

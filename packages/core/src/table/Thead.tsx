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
        {data && data.map((tds, idx: number) => (
          <tr key={idx}>
            {tds.map((item: IColumns, _idx: number) => {
              const { title, key, render, children, ...thProps } = item;
              const titleNode = typeof title === 'function' ? title(item, idx, _idx) : title;
              return (
                <th
                  key={_idx}
                  onClick={onCellHead!.bind(this, item, idx, _idx)}
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

import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils';
import { TableProps, IColumns } from './';
import './style/index.less';

function noop() { }

export interface TheadProps extends IProps {
  data?: TableProps['data'];
  onCellHead?: TableProps['onCellHead'];
}

export default class Thead extends React.Component<TheadProps & React.HTMLAttributes<HTMLTableSectionElement>> {
  public static defaultProps: TheadProps = {
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

import React from 'react';
import { IProps } from '@uiw/utils';
import { TableProps, TableColumns } from './';
import './style/index.less';

function noop() {}

export interface TheadProps extends IProps {
  data?: TableProps['data'][];
  onCellHead?: TableProps['onCellHead'];
}

export default (
  props: TheadProps & React.HTMLAttributes<HTMLTableSectionElement> = {},
) => {
  const {
    prefixCls = 'w-table-thead',
    className,
    data = [],
    onCellHead = noop,
    ...other
  } = props;
  return (
    <thead
      className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      {...other}
    >
      {data &&
        data.length > 0 &&
        data.map((tds?: TableColumns[], rowNum?: number) => (
          <tr key={rowNum}>
            {(tds || []).map((item, colNum) => {
              const { title, key, render, children, ...thProps } = item;
              const titleNode = (
                typeof title === 'function'
                  ? title(item, colNum, rowNum!)
                  : title
              ) as TableColumns['title'];
              if (thProps.colSpan === 0) {
                return null;
              }
              return (
                <th
                  key={colNum}
                  onClick={(evn) => onCellHead(item, colNum, rowNum!, evn)}
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
};

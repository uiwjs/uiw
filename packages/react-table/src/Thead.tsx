import React from 'react';
import { IProps, noop } from '@uiw/utils';
import { TableProps, TableColumns } from './';
import './style/index.less';

export interface TheadProps extends IProps {
  data?: TableProps['data'][];
  onCellHead?: TableProps['onCellHead'];
}

export default (props: TheadProps & React.HTMLAttributes<HTMLTableSectionElement> = {}) => {
  const { prefixCls = 'w-table', className, data = [], onCellHead = noop, ...other } = props;
  return (
    <thead className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {data &&
        data.length > 0 &&
        data.map((tds?: TableColumns[], rowNum?: number) => (
          <tr key={rowNum}>
            {(tds || []).map((item, colNum) => {
              const { title, key, render, children, ellipsis, ...thProps } = item;
              const titleNode: TableColumns['title'] =
                typeof title === 'function' ? title(item, colNum, rowNum!) : title;
              if (thProps.colSpan === 0) {
                return null;
              }
              if (ellipsis) {
                thProps.className = `${thProps.className || ''} ${prefixCls}-ellipsis`;
              }
              return (
                <th key={colNum} onClick={(evn) => onCellHead(item, colNum, rowNum!, evn)} {...thProps}>
                  {titleNode}
                </th>
              );
            })}
          </tr>
        ))}
    </thead>
  );
};

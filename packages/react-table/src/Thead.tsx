import React from 'react';
import { IProps, noop } from '@uiw/utils';
import { TableProps, TableColumns, LocationWidth } from './';
import { TheadWrap, TableColContent } from './style';
import './style/index.less';
import ThComponentProps from './ThComponent';

export interface TheadProps<T extends { [key: string]: V }, V = any> extends IProps {
  data?: TableColumns<T>[][];
  onCellHead?: TableProps<T, V>['onCellHead'];
  align?: TableColumns['align'];
  className?: TableColumns['className'];
  locationWidth?: { [key: string]: LocationWidth };
  updateLocation?: (params: LocationWidth, index: string, key: string, colSpan?: number) => void;
}

export default function TheadComponent<T extends { [key: string]: V }, V>(
  props: TheadProps<T, V> & React.HTMLAttributes<HTMLTableSectionElement> = {},
) {
  const {
    prefixCls = 'w-table',
    className,
    data = [],
    onCellHead = noop,
    locationWidth,
    updateLocation,
    ...other
  } = props;
  return (
    <TheadWrap className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {data &&
        data.length > 0 &&
        data.map((tds?: TableColumns<T>[], rowNum?: number) => (
          <tr key={rowNum}>
            {(tds || []).map((item, colNum) => {
              const { title, key, render, children, ellipsis, fixed = false, ...thProps } = item;
              const titleNode: TableColumns<T>['title'] = (
                <TableColContent
                  className={ellipsis ? `${thProps.className || ''} ${prefixCls}-ellipsis` : undefined}
                  params={{ ellipsis }}
                >
                  {typeof title === 'function' ? title(item, colNum, rowNum!) : title}
                </TableColContent>
              );
              if (thProps.colSpan === 0) {
                return null;
              }
              return (
                <ThComponentProps
                  colNum={colNum}
                  item={item}
                  key={colNum}
                  prefixCls={prefixCls}
                  onCellHead={onCellHead}
                  rowNum={rowNum!}
                  titleNode={titleNode}
                  locationWidth={locationWidth!}
                  updateLocation={updateLocation!}
                />
              );
            })}
          </tr>
        ))}
    </TheadWrap>
  );
}

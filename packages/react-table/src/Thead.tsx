import React from 'react';
import { IProps, noop } from '@uiw/utils';
import { TableProps, TableColumns, LocationWidth } from './';
import { TableStyleTheadWrap, TableStyleColContent } from './style';
import ThComponentProps from './ThComponent';

export interface TheadProps<T extends { [key: string]: V }, V = any> extends IProps {
  data?: TableColumns<T>[][];
  bordered?: boolean;
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
  let rightFixedNum = 0;
  return (
    <TableStyleTheadWrap className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...other}>
      {data &&
        data.length > 0 &&
        data.map((tds?: TableColumns<T>[], rowNum?: number) => (
          <tr key={rowNum}>
            {(tds || []).map((item, colNum) => {
              const { title, key, render, children, ellipsis, fixed = false, ...thProps } = item;
              const titleNode: TableColumns<T>['title'] = (
                <TableStyleColContent
                  className={ellipsis ? `${thProps.className || ''} ${prefixCls}-ellipsis` : undefined}
                  params={{ ellipsis }}
                >
                  {typeof title === 'function' ? title(item, colNum, rowNum!) : title}
                </TableStyleColContent>
              );
              if (thProps.colSpan === 0) {
                return null;
              }
              if (fixed === 'right') {
                rightFixedNum = rightFixedNum + 1;
              }
              return (
                <ThComponentProps
                  colNum={colNum}
                  rightFixedKey={rightFixedNum}
                  item={item}
                  key={colNum}
                  bordered={props.bordered}
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
    </TableStyleTheadWrap>
  );
}

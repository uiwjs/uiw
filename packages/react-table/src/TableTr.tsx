import React, { useMemo, useState, useEffect } from 'react';
// import Icon from '@uiw/react-icon';
import { MinusSquareO } from '@uiw/icons/lib/MinusSquareO';
import { PlusSquareO } from '@uiw/icons/lib/PlusSquareO';
import { LocationWidth, TableColumns, TableProps } from './';
import { TableStyleCol, TableStyleColContent, TableStyleDomIcon } from './style';
// import './style/index.less';
import { noop } from '@uiw/utils';
import { locationFixed } from './util';

interface TableTrProps<T> {
  rowKey?: keyof T;
  header: TableColumns<T>[][];
  data: T[];
  keys: TableProps['columns'];
  render: { [key: string]: any };
  ellipsis?: Record<string, boolean>;
  prefixCls: string;
  onCell: TableProps['onCell'];
  isExpandedDom: (record: T, index: number) => false | JSX.Element;
  // 控制树形结构每一层的缩进宽度
  indentSize: number;
  // 层级
  hierarchy: number;
  childrenColumnName: string;
  locationWidth: { [key: string]: LocationWidth };
}

export default function TableTr<T extends { [key: string]: any }>(props: TableTrProps<T>) {
  const {
    rowKey,
    data,
    keys,
    render,
    ellipsis,
    prefixCls,
    onCell = noop,
    isExpandedDom,
    hierarchy,
    indentSize,
    childrenColumnName,
    locationWidth,
    header,
  } = props;
  const [isOpacity, setIsOpacity] = useState(false);
  const [childrenIndex, setChildrenIndex] = useState(0);
  const [expandIndex, setExpandIndex] = useState<Array<T[keyof T] | number>>([]);
  useEffect(() => {
    setIsOpacity(!!data?.find((it) => it[childrenColumnName]));
    setChildrenIndex(keys?.findIndex((it) => it.key === 'uiw-expanded') === -1 ? 0 : 1);
  }, [data]);

  const IconDom = useMemo(() => {
    return (key: T[keyof T] | number, isOpacity: boolean) => {
      const flag = expandIndex.includes(key);
      return (
        <TableStyleDomIcon
          as={flag ? MinusSquareO : PlusSquareO}
          style={{
            marginRight: 10,
            opacity: isOpacity ? 1 : 0,
            marginLeft: hierarchy * indentSize,
            float: 'left',
            marginTop: 3.24,
          }}
          onClick={() => {
            setExpandIndex(flag ? expandIndex.filter((it) => it !== key) : [...expandIndex, key]);
          }}
        />
      );
    };
  }, [expandIndex]);
  const getIndex = (key: string) => {
    let j = 0;
    const i = header.findIndex((it) => {
      j = it.findIndex((item) => item.key === key);
      return j > -1;
    });
    return `${i}${j}`;
  };
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  return (
    <React.Fragment>
      {data.map((trData, rowNum) => {
        const key = rowKey ? trData[rowKey] : rowNum;
        return (
          <React.Fragment key={rowNum}>
            <tr key={key}>
              {keys!.map((keyName, colNum) => {
                let objs: React.TdHTMLAttributes<HTMLTableDataCellElement> = {
                  children: trData[keyName.key!],
                };
                if (render[keyName.key!]) {
                  const child = render[keyName.key!](trData[keyName.key!], keyName.key, trData, rowNum, colNum);
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
                const isHasChildren = Array.isArray(trData[childrenColumnName]);
                if (colNum === childrenIndex && (isOpacity || hierarchy || isHasChildren)) {
                  objs.children = (
                    <>
                      {IconDom(key, isHasChildren)}
                      <span style={{ paddingLeft: hierarchy * indentSize }}></span>
                      {objs.children}
                    </>
                  );
                }
                if (keyName.fixed) {
                  if (keyName.fixed === 'right') {
                    objs.className = `${prefixCls}-fixed-right`;
                  } else {
                    objs.className = `${prefixCls}-fixed-true`;
                  }
                }
                return (
                  <TableStyleCol
                    {...objs}
                    style={
                      keyName.fixed
                        ? { ...locationFixed(keyName.fixed!, locationWidth, `${getIndex(keyName.key || 'undefined')}`) }
                        : {}
                    }
                    children={
                      <TableStyleColContent
                        className={ellipsis && ellipsis[keyName.key!] ? `${prefixCls}-ellipsis` : undefined}
                        params={{ ellipsis: ellipsis && ellipsis[keyName.key!] }}
                      >
                        {objs.children}
                      </TableStyleColContent>
                    }
                    key={colNum}
                    className={[
                      prefixCls + '-tr-children-' + (keyName.align || 'left'),
                      keyName.className,
                      objs.className,
                    ]
                      .filter((it) => it)
                      .join(' ')
                      .trim()}
                    params={{
                      align: keyName.align,
                      fixed: keyName.fixed,
                    }}
                    onClick={(evn) => onCell(trData, { rowNum, colNum, keyName: keyName.key! }, evn)}
                  />
                );
              })}
            </tr>
            {isExpandedDom(trData, rowNum)}
            {expandIndex.includes(key) && (
              <TableTr {...props} data={trData[childrenColumnName]} hierarchy={hierarchy + 1} />
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

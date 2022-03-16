import React, { useMemo, useState } from 'react';
import Icon from '@uiw/react-icon';
import { TableProps } from './';
import './style/index.less';
import { noop } from '@uiw/utils';

interface TableTrProps<T> {
  rowKey?: keyof T;
  data: T[];
  keys: string[];
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
  } = props;

  const [expandIndex, setExpandIndex] = useState<Array<T[keyof T] | number>>([]);

  const IconDom = useMemo(() => {
    return (key: T[keyof T] | number, isOpacity: boolean) => {
      const flag = expandIndex.includes(key);
      return (
        <Icon
          type={flag ? 'minus-square-o' : 'plus-square-o'}
          style={{ marginRight: 10, opacity: isOpacity ? 1 : 0, marginLeft: hierarchy * indentSize }}
          onClick={() => {
            setExpandIndex(flag ? expandIndex.filter((it) => it !== key) : [...expandIndex, key]);
          }}
        />
      );
    };
  }, [expandIndex]);
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
                const isHasChildren = Array.isArray(trData[childrenColumnName]);
                if (colNum === 0 && (hierarchy || isHasChildren)) {
                  objs.className = `${objs.className} ${prefixCls}-has-children`;
                  objs.children = (
                    <>
                      {IconDom(key, isHasChildren)}
                      {objs.children}
                    </>
                  );
                }
                return (
                  <td {...objs} key={colNum} onClick={(evn) => onCell(trData, { rowNum, colNum, keyName }, evn)} />
                );
              })}
            </tr>
            {expandIndex.includes(key) && (
              <TableTr {...props} data={trData[childrenColumnName]} hierarchy={hierarchy + 1} />
            )}
            {isExpandedDom(trData, rowNum)}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

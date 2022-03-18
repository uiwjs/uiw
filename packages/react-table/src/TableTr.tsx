import React, { useMemo, useState, useEffect } from 'react';
import Icon from '@uiw/react-icon';
import { TableProps } from './';
import './style/index.less';
import { noop } from '@uiw/utils';

interface TableTrProps<T> {
  rowKey?: keyof T;
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
  const [isOpacity, setIsOpacity] = useState(false);
  const [expandIndex, setExpandIndex] = useState<Array<T[keyof T] | number>>([]);
  useEffect(() => {
    setIsOpacity(!!data?.find((it) => it[childrenColumnName]));
  }, [data]);

  const IconDom = useMemo(() => {
    return (key: T[keyof T] | number, isOpacity: boolean) => {
      const flag = expandIndex.includes(key);
      return (
        <Icon
          type={flag ? 'minus-square-o' : 'plus-square-o'}
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
                if (ellipsis && ellipsis[keyName.key!]) {
                  objs.className = `${prefixCls}-ellipsis`;
                }
                const isHasChildren = Array.isArray(trData[childrenColumnName]);
                if (colNum === 0 && (isOpacity || hierarchy || isHasChildren)) {
                  objs.children = (
                    <>
                      {IconDom(key, isHasChildren)}
                      <span style={{ paddingLeft: hierarchy * indentSize }}></span>
                      {objs.children}
                    </>
                  );
                }
                return (
                  <td
                    {...objs}
                    key={colNum}
                    // style={keyName?.style}
                    className={`${objs.className || ''} ${prefixCls}-tr-children-${keyName.align || 'left'}  ${
                      keyName.className || ''
                    }`}
                    onClick={(evn) => onCell(trData, { rowNum, colNum, keyName: keyName.key! }, evn)}
                  />
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

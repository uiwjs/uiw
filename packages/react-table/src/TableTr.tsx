import React, { useMemo, useState, useEffect, Fragment } from 'react';
// import Icon from '@uiw/react-icon';
import { MinusSquareO } from '@uiw/icons/lib/MinusSquareO';
import { PlusSquareO } from '@uiw/icons/lib/PlusSquareO';
import { LocationWidth, TableColumns, TableProps } from './';
import { TableStyleCol, TableStyleColContent, TableStyleDomIcon } from './style';
import { noop } from '@uiw/utils';
import { locationFixed, NodeTreeData } from './util';

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
  bordered?: boolean;
  // 层级
  hierarchy: number;
  childrenColumnName: string;
  locationWidth: { [key: string]: LocationWidth };
  isAutoExpanded?: boolean;
  treeData?: NodeTreeData;
  isAutoMergeRowSpan?: boolean;
  expandIndex: (number | T[keyof T])[];
  setExpandIndex: React.Dispatch<React.SetStateAction<(number | T[keyof T])[]>>;
  // 点击展开图标触发
  onExpand?: (expanded: boolean, record: T, index: number, hierarchy?: number) => void;
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
    isAutoExpanded = true,
    treeData,
    isAutoMergeRowSpan,
    expandIndex,
    setExpandIndex,
    onExpand,
  } = props;
  const [isOpacity, setIsOpacity] = useState(false);
  const [childrenIndex, setChildrenIndex] = useState(0);

  useEffect(() => {
    setIsOpacity(!!data?.find((it) => it[childrenColumnName]));
    setChildrenIndex(keys?.findIndex((it) => it.key === 'uiw-expanded') === -1 ? 0 : 1);
  }, [data]);

  const IconDom = useMemo(() => {
    return (key: T[keyof T] | number, isOpacity: boolean, trData: T, rowNum: number) => {
      const flag = expandIndex.includes(key);
      const Icon = flag ? MinusSquareO : PlusSquareO;
      return (
        <TableStyleDomIcon
          style={{
            marginRight: 10,
            opacity: isOpacity ? 1 : 0,
            marginLeft: hierarchy * indentSize,
            float: 'left',
            marginTop: 3.24,
          }}
          onClick={() => {
            onExpand && onExpand(flag, trData, rowNum, hierarchy);
            setExpandIndex(flag ? expandIndex.filter((it) => it !== key) : [...expandIndex, key]);
          }}
        >
          <Icon />
        </TableStyleDomIcon>
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
        const summary = treeData?.getSum(key as string, expandIndex || []);
        return (
          <React.Fragment key={rowNum}>
            <tr key={key}>
              {keys!.map((keyName, colNum) => {
                const isHasChildren = Array.isArray(trData[childrenColumnName]);
                let itemShow: {
                  show?: boolean;
                  rowSpan?: number;
                } = {};
                if (isAutoMergeRowSpan && summary) {
                  const newLaval = Reflect.get(keyName, 'level');
                  const summaryCount = summary.summaryCount[newLaval];

                  if (hierarchy === newLaval && isHasChildren) {
                    itemShow.rowSpan = summaryCount;
                  } else if (hierarchy && Reflect.has(keyName, 'level') && hierarchy > newLaval) {
                    return <Fragment key={colNum} />;
                  }
                }
                let objs: React.TdHTMLAttributes<HTMLTableDataCellElement> = {
                  children: trData[keyName.key!],
                };
                if (render[keyName.key!]) {
                  const child = render[keyName.key!](trData[keyName.key!], keyName.key, trData, rowNum, colNum, {
                    level: hierarchy,
                    rowSpan: itemShow.rowSpan,
                    summary,
                  });
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
                } else if (itemShow.rowSpan && isAutoMergeRowSpan) {
                  objs.rowSpan = itemShow.rowSpan;
                }

                let isExpanded = false;

                if ((isOpacity || hierarchy || isHasChildren) && colNum === childrenIndex && isAutoExpanded) {
                  isExpanded = true;
                } else if ((isOpacity || hierarchy || isHasChildren) && !isAutoExpanded && keyName.isExpanded) {
                  isExpanded = true;
                }

                if (isExpanded || keyName.isExpandedButton) {
                  if (keyName.isExpandedButtonLayout === 'right') {
                    objs.children = (
                      <>
                        {IconDom(key, isHasChildren || !!keyName?.isExpandedButton, trData, rowNum)}
                        <span style={{ paddingLeft: hierarchy * indentSize }}></span>
                        {objs.children}
                      </>
                    );
                  } else {
                    objs.children = (
                      <>
                        <span style={{ paddingLeft: hierarchy * indentSize }}></span>
                        {objs.children}
                        {IconDom(key, isHasChildren || !!keyName?.isExpandedButton, trData, rowNum)}
                      </>
                    );
                  }
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
                      bordered: props.bordered,
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

import { TableColumns, LocationWidth } from './';
import React from 'react';

/**
 * Get colspan number
 * @param {Array} date
 */
function getColspanNum<T>(data: TableColumns<T>[] = [], num = 1) {
  let childs: TableColumns<T>[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      childs = childs.concat(data[i].children || []);
    }
  }
  if (childs && childs.length > 0) {
    num = getColspanNum(childs, num + 1);
  }
  return num;
}

/**
 * Get rowspan number
 * @param {Array} date
 */
function getRowspanNum<T>(data: TableColumns<T>[] = [], child = []) {
  let childs: TableColumns<T>[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (!data[i].children) {
      childs.push(data[i]);
    } else if (data[i].children && data[i].children!.length > 0) {
      childs = childs.concat(getRowspanNum(data[i].children, child));
    }
  }
  return childs;
}

export interface ILevelItems<T> {
  header: TableColumns<T>[][];
  ellipsis?: Record<string, boolean>;
  render: {
    [key: string]: any;
  };
}

/**
 * JSON Array => Array
 * @param {Array} date
 */
export function getLevelItems<T>(data: TableColumns<T>[], result?: ILevelItems<T>): ILevelItems<T> {
  if (!result) {
    result = { header: [], render: {} };
  }
  if (result && !result.header) {
    result.header = [];
  }
  if (result && !result.render) {
    result.render = {};
  }
  let child: TableColumns<T>[] = [];
  const levelTop: TableColumns<T>[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].render && data[i].key) {
      result.render[data[i].key as string] = data[i].render;
    }
    if (data[i].ellipsis && data[i].key) {
      if (!result.ellipsis) result.ellipsis = {};
      result.ellipsis[data[i].key!] = true;
    }
    if (result.header.length === 0) {
      // Calculation rowspan
      if (data[i].children && data[i].children && data[i].children!.length > 0) {
        data[i].colSpan = getRowspanNum(data[i].children as TableColumns<T>[]).length;
      }
      levelTop.push(data[i]);
    }
    if (data[i] && data[i].children) {
      child = child.concat(
        data[i].children!.map((item: TableColumns<T>) => {
          // Calculation rowspan
          if (item.children && item.children.length > 0) {
            item.colSpan = getRowspanNum(item.children).length;
          }
          return item;
        }),
      );
    }
  }
  // level 1
  if (result.header.length === 0) {
    const num = getColspanNum(levelTop);
    result.header.push(
      levelTop.map((item) => {
        if (num === 1) return item;
        if (!item.children || (item.children && item.children.length === 0)) {
          item.rowSpan = num;
        }
        return item;
      }),
    );
  }
  if (child && child.length > 0) {
    const num = getColspanNum(child);
    result.header.push(
      child.map((item: TableColumns<T>) => {
        if (num === 1) return item;
        if (!item.children || (item.children && item.children.length === 0)) {
          item.rowSpan = num;
        }
        return item;
      }),
    );
    result = getLevelItems(child, result);
  }
  return result;
}

/**
 * Get all columns keys
 * @param {Array} data
 */
export function getAllColumnsKeys<T>(data: TableColumns<T>[], keys: TableColumns<T>[] = []): TableColumns<T>[] {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      keys = keys.concat(getAllColumnsKeys(data[i].children || []));
    } else if (data[i].key) {
      keys.push(data[i]);
    } else {
      keys.push({ ...data[i], key: i.toString() });
    }
  }
  return keys;
}

export function locationFixed(
  fixed: boolean | 'left' | 'right',
  location: { [key: string]: LocationWidth },
  index: string,
): React.CSSProperties {
  if (!fixed) return {};
  if (fixed === 'right') return { right: location[index]?.right };
  return { left: location[index]?.left };
}

// 通过树获取子节点个数
// 记录顶层父级
// 通过顶层父级进行获取展开的 key
// 通过 key 进行获取个数
export class NodeTreeData {
  parentToChild: Map<string | number, (string | number)[]> = new Map([]);
  childToParent: Map<string | number, string | number> = new Map([]);
  childTreeCount: Map<string | number, number> = new Map([]);

  rowKey: string = 'id';
  childName: string = 'children';

  constructor(dataList: any[], rowKey?: string, childName?: string) {
    this.rowKey = rowKey || this.rowKey;
    this.childName = childName || this.childName;
    this.init(dataList);
  }
  /**把根据父级 key 存储对应下所有子集的个数*/
  init(dataList: any[], parentList: string[] = []) {
    dataList.forEach((item) => {
      if (Array.isArray(item[this.childName])) {
        const newParent = parentList.concat([item[this.rowKey]]);
        const parentKey = newParent[0];
        this.childToParent.set(item[this.rowKey], parentKey);
        this.parentToChild.set(parentKey, newParent);
        this.childTreeCount.set(item[this.rowKey], item[this.childName].length);
        this.init(item[this.childName], newParent);
      }
    });
  }
  /**获取合并行数*/
  getSum(key: string, expandedKeys: (string | number)[]) {
    const parentKey = this.childToParent.get(key) || '';
    const childList = this.parentToChild.get(parentKey) || [];
    const summary: Record<string, number> = {};
    let lg = childList.length;
    for (let index = 0; index < lg; index++) {
      const childKey = childList[index];
      if (expandedKeys.includes(childKey)) {
        summary[childKey] = 1;
        const count = this.childTreeCount.get(childKey || '') || 0;
        Object.entries(summary).forEach(([k, value]) => {
          /**计算合并行个数*/
          summary[k] = value + count;
        });
      } else {
        break;
      }
    }
    return summary;
  }
}

export const getRowSpan = (rowSpan: number, leve: number, index: number) => {
  const show = leve < index + 1;
  const newRowSpan = leve === index ? rowSpan : undefined;
  return {
    show,
    rowSpan: newRowSpan,
  };
};

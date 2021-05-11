import { TableColumns } from './';

/**
 * Get colspan number
 * @param {Array} date
 */
function getColspanNum(data: TableColumns[] = [], num = 1) {
  let childs: TableColumns[] = [];
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
function getRowspanNum(data: TableColumns[] = [], child = []) {
  let childs: TableColumns[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (!data[i].children) {
      childs.push(data[i]);
    } else if (data[i].children && data[i].children!.length > 0) {
      childs = childs.concat(getRowspanNum(data[i].children, child));
    }
  }
  return childs;
}

export interface ILevelItems {
  header: TableColumns[][];
  render: {
    [key: string]: any;
  };
}

/**
 * JSON Array => Array
 * @param {Array} date
 */
export const getLevelItems = (
  data: TableColumns[],
  result?: ILevelItems,
): ILevelItems => {
  if (!result) {
    result = { header: [], render: {} };
  }
  if (result && !result.header) {
    result.header = [];
  }
  if (result && !result.render) {
    result.render = {};
  }
  let child: TableColumns[] = [];
  const levelTop: TableColumns[] = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].render && data[i].key) {
      result.render[data[i].key as string] = data[i].render;
    }
    if (result.header.length === 0) {
      // Calculation rowspan
      if (
        data[i].children &&
        data[i].children &&
        data[i].children!.length > 0
      ) {
        data[i].colSpan = getRowspanNum(
          data[i].children as TableColumns[],
        ).length;
      }
      levelTop.push(data[i]);
    }
    if (data[i] && data[i].children) {
      child = child.concat(
        data[i].children!.map((item: TableColumns) => {
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
      child.map((item: TableColumns) => {
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
};

/**
 * Get all columns keys
 * @param {Array} data
 */
export const getAllColumnsKeys = (
  data: TableColumns[],
  keys: any[] = [],
): string[] => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      keys = keys.concat(getAllColumnsKeys(data[i].children || []));
    } else if (data[i].key) {
      keys.push(data[i].key);
    }
  }
  return keys;
};

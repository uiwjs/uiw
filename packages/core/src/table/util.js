

/**
 * Get colspan number
 * @param {Array} date
 */
function getColspanNum(data = [], num = 1) {
  let childs = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      childs = childs.concat(data[i].children);
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
function getRowspanNum(data = [], child = []) {
  let childs = [];
  for (let i = 0; i < data.length; i += 1) {
    if (!data[i].children) {
      childs.push(data[i]);
    } else if (data[i].children && data[i].children.length > 0) {
      childs = childs.concat(getRowspanNum(data[i].children, child));
    }
  }
  return childs;
}

/**
 * JSON Array => Array
 * @param {Array} date
 */
export const getLevelItems = (data, result = { }) => {
  if (!result.header) {
    result.header = [];
    result.render = {};
  }
  let child = [];
  const levelTop = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].render && data[i].key) {
      result.render[data[i].key] = data[i].render;
    }
    if (result.header.length === 0) {
      // Calculation rowspan
      if (data[i].children && data[i].children.length > 0) {
        data[i].colSpan = getRowspanNum(data[i].children).length;
      }
      levelTop.push(data[i]);
    }
    if (data[i].children) {
      child = child.concat(data[i].children.map((item) => {
        // Calculation rowspan
        if (item.children && item.children.length > 0) {
          item.colSpan = getRowspanNum(item.children).length;
        }
        return item;
      }));
    }
  }
  // level 1
  if (result.header.length === 0) {
    const num = getColspanNum(levelTop);
    result.header.push(levelTop.map((item) => {
      if (!item.children || (item.children && item.children.length === 0)) {
        item.rowSpan = num;
      }
      return item;
    }));
  }
  if (child && child.length > 0) {
    const num = getColspanNum(child);
    result.header.push(child.map((item) => {
      if (!item.children || (item.children && item.children.length === 0)) {
        item.rowSpan = num;
      }
      return item;
    }));
    result = getLevelItems(child, result);
  }
  return result;
};

/**
 * Get all columns keys
 * @param {Array} data
 */
export const getAllColumnsKeys = (data = [], keys = []) => {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].children) {
      keys = keys.concat(getAllColumnsKeys(data[i].children));
    } else {
      keys.push(data[i].key);
    }
  }
  return keys;
};

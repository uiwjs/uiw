// 判断是否为日期
export const isDate = function (date) {
  if (date instanceof Date) return true
  else return false;
};


// 时间字符串转`22:32` 换成对象 {'hours':22,'minutes':32}
export const parseTime = function (time) {
  const values = ('' || time).split(':');
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    return {
      hours,
      minutes
    };
  }
  return null;
};

// export const value_map = {
// }
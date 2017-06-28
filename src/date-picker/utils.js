// 判断是否为日期
export const isDate = function (date) {
  if (date instanceof Date) return true
  else return false;
};


// 时间字符串转`22:32` 或者 时间字符串 换成对象 {'hours':22,'minutes':32} || null
export const parseTime = function (time) {
  if (!time) return null;
  if (time instanceof Date) {
    const _time = new Date(time)
    let h = _time.getHours()
    let m = _time.getMinutes()
    return {
      hours: h,
      minutes: m
    };
  }

  const values = ('' || time).split(':');
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    return {
      hours,
      minutes
    };
  }
};

// export const value_map = {
// }
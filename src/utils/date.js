// 判断是否为日期
export const isDate = function (date) {
  return ((new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date))));
};

// 判断是否为正确的时间格式
// 15:21:21 = true
// 15:21 = true
export const isDateTime = function (timeStr) {
  return /^([01][0-9]|[2][0-3]):([0-5][0-9])(?::([0-5][0-9])(\.\d{1,3})?)?$/.test(timeStr);
};

export function formatDate(date, formatStr) {
  const timeFormat = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  };
  let formatString = formatStr;
  if (/(y+)/.test(formatStr)) formatString = formatString.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  for (const k in timeFormat) {
    if (new RegExp(`(${k})`).test(formatString)) {
      formatString = formatString.replace(RegExp.$1, RegExp.$1.length === 1
        ? timeFormat[k]
        : (`00${timeFormat[k]}`).substr((`${timeFormat[k]}`).length));
    }
  }
  return formatString;
}


// 是否为闰年
export const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  else if (year % 400 === 0) return true;
  return false;
};

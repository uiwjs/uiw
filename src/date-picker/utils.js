// 判断是否为日期
export const isDate = function (date) {
  if (date instanceof Date) return true
  else return false;
};

// parseTime 方法生成的Object 对象转换时间 `22:32`
export const parseTimeStr = (obj) => {
  let time = [];
  for (let a in obj) time.push(
    obj[a] < 10 ? '0' + obj[a] : obj[a]
  );
  return time.join(':');
}

// 时间字符串转`22:32` 或者 时间 new Date 换成对象 {'hours':22,'minutes':32} || null
export const parseTime = function (time) {
  if (!time) return null;
  if (time instanceof Date) {
    const _time = new Date(time)
    let hours = _time.getHours()
    let minutes = _time.getMinutes()
    let seconds = _time.getSeconds()
    return { hours, minutes, seconds };
  }

  const values = ('' || time).split(':');
  if (values.length >= 2) {
    const hours = parseInt(values[0], 10);
    const minutes = parseInt(values[1], 10);
    const seconds = parseInt(values[2], 10);
    return { hours, minutes, seconds };
  }
};

//  new Date 换成对象 根据format 转换成 `22:32`
export const dateTimeToStr = (date, format = 'HH:mm:ss') => {
  let time = []
  let _format = format.split(":");
  date = parseTime(date);
  if (!date) return '';
  if (_format.indexOf('HH') > -1) {
    time.push(date.hours < 10 ? '0' + date.hours : date.hours)
  }
  if (_format.indexOf('mm') > -1) {
    time.push(date.minutes < 10 ? '0' + date.minutes : date.minutes)
  }
  if (_format.indexOf('ss') > -1) {
    time.push(date.seconds < 10 ? '0' + date.seconds : date.seconds)
  }
  return time.join(':');
}
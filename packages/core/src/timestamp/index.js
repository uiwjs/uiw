
const dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g;
const timespan = {
  YYYY: ['getFullYear', 4],
  YY: ['getFullYear', 2],
  MM: ['getMonth', 2, 1], // getMonth is zero-based, thus the extra increment field
  DD: ['getDate', 2],
  HH: ['getHours', 2],
  mm: ['getMinutes', 2],
  ss: ['getSeconds', 2],
  ms: ['getMilliseconds', 3]
};

function timestamp(str, date, utc) {
  if (typeof str !== 'string') {
    date = str;
    str = 'YYYY-MM-DD';
  }

  if (!date) {
    date = new Date();
  }
  return str.replace(dateRegex, (match, key, rest) => {
    const args = timespan[key];
    const chars = args[1];
    let name = args[0];
    if (utc === true) name = 'getUTC' + name.slice(3);
    const val = '00' + String(date[name]() + (args[2] || 0));
    return val.slice(-chars) + (rest || '');
  });
};

timestamp.utc = (str, date) => {
  return timestamp(str, date, true);
};

function timeZoneConverter(date, timeZone) {
  const oldDate = new Date(date);
  const newDate = new Date();
  const stamp = oldDate.getTime();
  if (!timeZone) return oldDate;
  return (isNaN(timeZone) && !timeZone)
    ? oldDate :
    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));
}

timestamp.tzc = (date, timeZone) => {
  return timeZoneConverter(date, timeZone).toString();
};

export default timestamp;

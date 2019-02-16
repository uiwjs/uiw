
/**
 * Determine whether it is a leap year
 * @param {Number} year
 */
export const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  else if (year % 400 === 0) return true;
  return false;
};

/**
 * Get the sun moon, commonly known as the solar calendar month
 * By calculating the second month of the leap year, maybe `29` days
 * @param {Number} month
 * @param {Number} year
 */
export const solarMonthDays = (year, month) => {
  const day = year && isLeapYear(year) ? 29 : 28;
  return [31, day, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
};

/**
 * The first day of the month is the day of the week.
 * @param {Date} date
 */
export const getFirstDayOfWeek = (year, month) => {
  return new Date(`${year}/${month}/${1}`).getDay();
};

/**
 * Check if a date is the same as another date.
 * Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check
 * if the first date is the same as the second one.
 * @param {Date} dateA
 * @param {Date} dateB
 */
export const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();

/**
 * Determine if it is a date
 * @param {String} date
 */
export const isDate = function (date) {
  return ((new Date(date).toString() !== 'Invalid Date' && !isNaN(new Date(date))));
};

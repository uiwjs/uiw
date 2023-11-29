`@uiw/utils`
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-utils/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-utils.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-utils)
[![npm version](https://img.shields.io/npm/v/@uiw/react-utils.svg?label=@uiw/react-utils)](https://npmjs.com/@uiw/react-utils)

## Install

```bash
npm i @uiw/utils
```

## Usage

```js
import { isLeapYear, solarMonthDays } from '@uiw/utils';
```

### ~~isLeapYear~~

Determine whether it is a leap year

```js
const isLeapYear = (year: number) => {
  if (year % 4 === 0 && year % 100 !== 0) return true;
  else if (year % 400 === 0) return true;
  return false;
};
```

### ~~getFirstDayOfWeek~~

The first day of the month is the day of the week.

```js
new Date(2021,6,1).getDay() // => 4
```

### ~~solarMonthDays~~

Get the sun moon, commonly known as the solar calendar month By calculating the second month of the leap year, maybe `29` days

```js
new Date(2021,6,0).getDate() // => 30
```

### ~~isSameDate~~

Check if a date is the same as another date. Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.

```js
new Date(2021,6,1).toISOString() === new Date(2021,6,1).toISOString() // => true
```

### getScroll

Gets the scroll value of the given element in the given side (top and left)

### randomid

```js
randomid()
// "5fan4z7qsa"
```
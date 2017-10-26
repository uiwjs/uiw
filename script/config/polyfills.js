// if (typeof Promise === 'undefined') {
//   // Rejection tracking prevents a common issue where React gets into an
//   // inconsistent state due to an error, but it gets swallowed by a Promise,
//   // and the user has no idea what causes React's erratic future behavior.
//   require('promise/lib/rejection-tracking').enable();
//   window.Promise = require('promise/lib/es6-extensions.js');
// }
// fetch() polyfill进行API调用。
// require('whatwg-fetch');
// Object.assign() 通常用于React。
// 它将使用本机实现，如果它现在，没有bug。
// Object.assign = require('object-assign');
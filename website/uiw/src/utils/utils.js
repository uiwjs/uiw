// 拼接url参数
function splitUrl(url, options) {
  let urlNew = url;
  const paramsArray = [];
  // Object.keys(options).forEach(key => paramsArray.push(key + '=' + options[key]));
  Object.keys(options).forEach(key => paramsArray.push(`${key}=${options[key]}`));
  if (Object.keys(options).length === 0) {
    return url;
  }
  if (/\?/.test(urlNew) === false) {
    urlNew = `${urlNew}?${paramsArray.join('&')}`;
  } else {
    urlNew += `&${paramsArray.join('&')}`;
  }
  return urlNew;
}


export {
  splitUrl,
};

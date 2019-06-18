import isBrowser from './isBrowser';

interface Document  {
  documentMode?: any;
}

interface Window {
  MSInputMethodContext?: any;
}

const isIE11 = isBrowser && !!((window as Window).MSInputMethodContext && (document as Document).documentMode);
const isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
export default function isIE(version: number) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

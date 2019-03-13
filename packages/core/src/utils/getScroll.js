/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} top `true` or `false`
 * @returns {number} amount of scrolled pixels
 */
export default function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }

  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';
  const isWindow = target === window;

  let ret = isWindow ? target[prop] : target[method];
  if (isWindow && typeof ret !== 'number') {
    ret = document.documentElement[method];
  }

  return ret;
}

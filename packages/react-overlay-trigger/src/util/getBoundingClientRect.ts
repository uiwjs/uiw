import { getScroll } from '@uiw/utils';
import getStyleComputedProperty from './getStyleComputedProperty';
import getBordersSize from './getBordersSize';
import getWindowSizes, { WindowSize } from './getWindowSizes';
import getClientRect from './getClientRect';
import isIE from './isIE';

export interface IBoundingClientRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
  offsetLeft?: number;
  offsetTop?: number;
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
export default function getBoundingClientRect(element: HTMLElement) {
  let rect = {} as IBoundingClientRect;

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      const scrollTop = getScroll(element, true);
      const scrollLeft = getScroll(element);
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
    // eslint-disable-next-line
  } catch (e) {}

  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top,
  } as IBoundingClientRect;

  // subtract scrollbar size from sizes
  const sizes: WindowSize =
    element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument!) : {};
  const width =
    sizes.width || element.clientWidth || result.right - result.left;
  const height =
    sizes.height || element.clientHeight || result.bottom - result.top;

  let horizScrollbar = element.offsetWidth - width;
  let vertScrollbar = element.offsetHeight - height;

  result.offsetLeft = element.offsetLeft || element.scrollLeft || 0;
  result.offsetTop = element.offsetTop || element.offsetTop || 0;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result) as IBoundingClientRect;
}

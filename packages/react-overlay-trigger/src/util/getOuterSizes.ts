export type Sizes = {
  width: number;
  height: number;
};

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
export default function getOuterSizes(element: HTMLElement): Sizes {
  let rect = element.getBoundingClientRect();
  // const window = element.ownerDocument.defaultView;
  // const styles = window.getComputedStyle(element);
  // const x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  // const y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  const result: Sizes = {
    width: element.offsetWidth || element.scrollWidth || rect.width || 0,
    height: element.offsetHeight || element.scrollHeight || rect.height || 0,
  };
  return result;
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
export default function getStyleComputedProperty(
  element: HTMLElement,
  property?: keyof CSSStyleDeclaration,
): CSSStyleDeclaration | any {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  const window = element.ownerDocument!.defaultView;
  const css: CSSStyleDeclaration = (window as Window).getComputedStyle(element, null);
  return property ? css[property] : css;
}

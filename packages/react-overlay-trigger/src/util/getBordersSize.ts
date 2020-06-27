export interface BordersSize extends CSSStyleDeclaration {
  [key: string]: any;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

export default function getBordersSize(
  styles: BordersSize,
  axis: 'x' | 'y',
): number {
  const sideA: string = axis === 'x' ? 'Left' : 'Top';
  const sideB: string = sideA === 'Left' ? 'Right' : 'Bottom';
  return (
    parseFloat(styles[`border${sideA}Width`]) +
    parseFloat(styles[`border${sideB}Width`])
  );
}

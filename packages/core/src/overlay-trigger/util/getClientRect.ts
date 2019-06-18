/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
export default function getClientRect(offsets: ClientRect): ClientRect {
  return {
    ...offsets,
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height,
  };
}

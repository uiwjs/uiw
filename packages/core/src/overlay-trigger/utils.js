
const canUseDOM = !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
);

function fallback(context, node) {
  if (node) {
    // eslint-disable-next-line
    do {
      if (node === context) return true;
    } while (node = node.parentNode);
  }

  return false;
}

export default (() => {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return canUseDOM
    ? function (context, node) {
      if (context.contains) {
        return context.contains(node);
      } if (context.compareDocumentPosition) {
        return context === node || !!(context.compareDocumentPosition(node) && 16);
      }
      return fallback(context, node);
    }
    : fallback;
})();

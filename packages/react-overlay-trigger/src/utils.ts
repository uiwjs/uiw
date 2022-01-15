const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

function fallback(context: HTMLElement, node: HTMLElement) {
  if (node) {
    do {
      if (node === context) return true;
    } while ((node = node.parentNode as HTMLElement));
  }

  return false;
}

function isDOM(item: Node) {
  return typeof HTMLElement === 'function'
    ? item instanceof HTMLElement
    : item &&
        typeof item === 'object' &&
        item.nodeType === 1 &&
        typeof item.nodeName === 'string';
}

const contains = (() => {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return canUseDOM
    ? function (context: HTMLElement, node: HTMLElement) {
        if (
          context &&
          context.contains &&
          typeof context.contains === 'function' &&
          isDOM(node)
        ) {
          return context.contains(node);
        }
        if (context && context.compareDocumentPosition && isDOM(node)) {
          return (
            context === node || !!(context.compareDocumentPosition(node) && 16)
          );
        }
        return fallback(context, node);
      }
    : fallback;
})();

export default contains;

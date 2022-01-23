import { getScroll } from '@uiw/utils';

export const getTargetRect = (target: HTMLElement | Window | null) => {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, left: 0, bottom: 0 } as ClientRect);
};

export const getOffset = (element: HTMLElement, target: HTMLElement | Window | null) => {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);
  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
};

export const getDefaultTarget = () => (typeof window !== 'undefined' ? window : null);

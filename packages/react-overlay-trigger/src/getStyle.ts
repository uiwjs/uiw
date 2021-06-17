import { getScroll } from '@uiw/utils';
import getBoundingClientRect, {
  IBoundingClientRect,
} from './util/getBoundingClientRect';
import getOuterSizes from './util/getOuterSizes';
import { OverlayStyl, OverlayTriggerProps, Placement } from './';

type GetStyleOptions = {
  trigger: HTMLElement | IBoundingClientRect;
  popup: HTMLElement | IBoundingClientRect;
  placement: OverlayStyl['placement'];
  usePortal: OverlayTriggerProps['usePortal'];
  zIndex: OverlayStyl['zIndex'];
  autoAdjustOverflow: OverlayTriggerProps['autoAdjustOverflow'];
};

export function getStyle(options: GetStyleOptions) {
  let { trigger, popup, placement, usePortal, autoAdjustOverflow, zIndex } =
    options || {};
  const sty = {} as OverlayStyl;
  if (!trigger || !popup || !document) {
    return sty;
  }

  const winSizeHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0,
  );
  const winSizeWidth = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0,
  );

  sty.placement = placement;
  const scrollTop = getScroll(
    (trigger as HTMLElement).ownerDocument!.documentElement,
    true,
  );
  const scrollLeft = getScroll(
    (trigger as HTMLElement).ownerDocument!.documentElement,
  );
  trigger = {
    ...getBoundingClientRect(trigger as HTMLElement),
    ...getOuterSizes(trigger as HTMLElement),
  };
  popup = {
    ...getBoundingClientRect(popup as HTMLElement),
    ...getOuterSizes(popup as HTMLElement),
  };

  const bottom = winSizeHeight - trigger.bottom;
  const right = winSizeWidth - trigger.left - trigger.width;

  sty.top = trigger.top + scrollTop;
  sty.left = trigger.left;

  if (!usePortal) {
    sty.top = trigger.offsetTop as number;
    sty.left = trigger.offsetLeft as number;
  }

  if (placement && /^(top)/.test(placement)) {
    sty.top -= popup.height;
  }
  if (placement && /^(right)/.test(placement)) {
    sty.left += trigger.width;
  }
  if (placement && /^(bottom)/.test(placement)) {
    sty.top += trigger.height;
  }
  if (placement && /^(left)/.test(placement)) {
    sty.left -= popup.width;
  }
  switch (sty.placement) {
    case 'bottomLeft':
    case 'topLeft':
      break;
    case 'bottom':
    // eslint-disable-next-line
    case 'top':
      sty.left = sty.left - (popup.width - trigger.width) / 2;
      break;
    case 'bottomRight':
    case 'topRight':
      sty.left = sty.left + scrollLeft + trigger.width - popup.width;
      break;
    case 'rightTop':
    case 'leftTop':
      break;
    case 'right':
    // eslint-disable-next-line
    case 'left':
      sty.top = sty.top - (popup.height - trigger.height) / 2;
      break;
    case 'rightBottom':
    case 'leftBottom':
      sty.top = sty.top - popup.height + trigger.height;
      break;
    default:
      break;
  }
  if (autoAdjustOverflow) {
    if (
      placement &&
      /^(top)/.test(placement) &&
      trigger.top < popup.height &&
      bottom > popup.height
    ) {
      sty.placement = placement.replace(/^top/, 'bottom') as Placement;
      sty.top = sty.top + popup.height + trigger.height;
    }
    if (
      placement &&
      /^(bottom)/.test(placement) &&
      bottom < popup.height &&
      trigger.top > popup.height
    ) {
      sty.placement = placement.replace(/^bottom/, 'top') as Placement;
      sty.top = sty.top - popup.height - trigger.height;
    }
    if (placement && /^(right)/.test(placement) && right < popup.width) {
      sty.placement = placement.replace(/^right/, 'left') as Placement;
      sty.left = sty.left - trigger.width - popup.width;
    }
    if (placement && /^(left)/.test(placement) && trigger.left < popup.width) {
      sty.placement = placement.replace(/^left/, 'right') as Placement;
      sty.left = sty.left + trigger.width + popup.width;
    }

    if (placement && /^(left|right)/.test(placement) && usePortal) {
      // Top
      if (
        (/(Top)$/.test(placement) && trigger.top < 0) ||
        (/(right|left)$/.test(placement) &&
          trigger.top + trigger.height / 2 < popup.height / 2) ||
        (/(Bottom)$/.test(placement) &&
          trigger.top + trigger.height < popup.height)
      ) {
        sty.top = scrollTop;
      }
    } else {
      // Top
      if (placement && /(Top)$/.test(placement) && trigger.top < 0) {
        sty.top -= trigger.top;
      }
      if (
        placement &&
        /(Bottom)$/.test(placement) &&
        trigger.bottom < popup.height
      ) {
        // eslint-disable-next-line
        sty.top = sty.top + (popup.height - trigger.bottom);
      }
      if (
        placement &&
        /(right|left)$/.test(placement) &&
        trigger.bottom - trigger.height / 2 < popup.height / 2
      ) {
        sty.top =
          sty.top + popup.height / 2 - (trigger.bottom - trigger.height / 2);
      }
    }
    // Bottom Public Part
    if (placement && /^(left|right)/.test(placement)) {
      if (/(Top)$/.test(placement) && bottom + trigger.height < popup.height) {
        sty.top = sty.top - (popup.height - bottom - trigger.height); // eslint-disable-line
      }
      if (
        /(right|left)$/.test(placement) &&
        bottom + trigger.height / 2 < popup.height / 2
      ) {
        sty.top = sty.top - (popup.height / 2 - bottom - trigger.height / 2); // eslint-disable-line
      }
      if (/(Bottom)$/.test(placement) && bottom < 0) {
        sty.top = sty.top + bottom; // eslint-disable-line
      }
    }

    if (placement && /^(top|bottom)/.test(placement) && usePortal) {
      // left
      if (
        (/(Left)$/.test(placement) && trigger.left < 0) ||
        (/(top|bottom)$/.test(placement) &&
          trigger.left + trigger.width / 2 < popup.width / 2) ||
        (/(Right)$/.test(placement) &&
          trigger.left + trigger.width < popup.width)
      ) {
        sty.left = scrollLeft;
      }
      // right
      if (
        /(top|bottom)$/.test(placement) &&
        right + trigger.width / 2 < popup.width / 2
      ) {
        sty.left = trigger.left + trigger.width + right - popup.width;
      }
    } else if (
      placement &&
      /(top|bottom)$/.test(placement) &&
      right + trigger.width / 2 < popup.width / 2
    ) {
      sty.left = sty.left + (right + trigger.width / 2 - popup.width / 2); // eslint-disable-line
    }
    if (placement && /^(top|bottom)/.test(placement)) {
      if (/(Left)$/.test(placement) && trigger.width + right < popup.width) {
        sty.left = sty.left - (popup.width - trigger.width - right); // eslint-disable-line
      }
      if (/(Right)$/.test(placement) && right < 0) {
        sty.left = sty.left + right; // eslint-disable-line
      }
    }
  }
  sty.zIndex = zIndex;
  return sty;
}

import isIE from './isIE';

interface BodyElement extends HTMLBodyElement {
  [key: string]: any;
}

interface IHTMLElement extends HTMLElement {
  [key: string]: any;
}

interface ComputedStyle extends CSSStyleDeclaration {
  [key: string]: any;
}

function getSize(
  axis: 'Height' | 'Width',
  body: BodyElement,
  html: IHTMLElement,
  computedStyle: ComputedStyle,
) {
  return Math.max(
    body[`offset${axis}`],
    body[`scroll${axis}`],
    html[`client${axis}`],
    html[`offset${axis}`],
    html[`scroll${axis}`],
    isIE(10)
      ? parseInt(html[`offset${axis}`], 10) +
          parseInt(
            computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`],
            10,
          ) +
          parseInt(
            computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`],
            10,
          )
      : 0,
  );
}

export type WindowSize = { height?: number; width?: number };

export default function getWindowSizes(document: HTMLDocument): WindowSize {
  const body = document.body as HTMLBodyElement;
  const html = document.documentElement as HTMLElement;
  const computedStyle = getComputedStyle(html) as CSSStyleDeclaration;

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle),
  };
}

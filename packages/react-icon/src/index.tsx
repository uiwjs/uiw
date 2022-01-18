import React from 'react';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
import './style/index.less';

export type IconsName = keyof typeof svgPaths;
export interface IconProps<T = HTMLSpanElement | HTMLElement, E = React.ReactElement> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
  type?: IconsName | null | E;
  spin?: boolean;
  color?: string;
  verticalAlign?: 'middle' | 'baseline';
}

export default function Icon(props: IconProps) {
  const {
    className,
    prefixCls = 'w-icon',
    verticalAlign = 'middle',
    tagName: TagName = 'span',
    color,
    type,
    spin = false,
    ...others
  } = props;

  let svg = null;
  if (typeof type === 'string') {
    svg = (
      <svg fill={color} viewBox="0 0 20 20">
        {(svgPaths[type as IconsName] || []).map((d, i) => (
          <path key={i} d={d} fillRule="evenodd" />
        ))}
      </svg>
    );
  } else if (React.isValidElement(type)) {
    svg = React.cloneElement(type, {
      fill: color,
    });
  } else {
    return null;
  }
  others.style = { fill: 'currentColor', ...others.style };
  const propps = {
    ...others,
    className: [
      prefixCls,
      className,
      prefixCls && verticalAlign ? `${prefixCls}-${verticalAlign}` : null,
      spin && prefixCls ? `${prefixCls}-spin` : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim(),
  };
  return <TagName {...propps}>{svg}</TagName>;
}

import React, { useMemo } from 'react';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
import './style/index.less';

type ElementTag<T = any> = T extends HTMLElement ? React.HTMLAttributes<T> : T;

export type IconsName = keyof typeof svgPaths;
export interface IconProps<T = HTMLSpanElement> extends ElementTag {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: T extends HTMLElement ? keyof JSX.IntrinsicElements : T;
  type?: IconsName | null | T;
  spin?: boolean;
  color?: string;
  verticalAlign?: 'middle' | 'baseline';
}

const Icon = React.forwardRef<HTMLDivElement, IconProps>((props, ref) => {
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

  const renderSVGPaths = useMemo(() => {
    if (!type) {
      return null;
    }
    const svgPathsData = svgPaths;
    const pathStrings: string[] = svgPathsData[type as IconsName] || [];
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  }, [type]);

  let svg = null;
  if (typeof type === 'string') {
    svg = (
      <svg fill={color} viewBox="0 0 20 20">
        {renderSVGPaths}
      </svg>
    );
  } else if (React.isValidElement(type)) {
    svg = React.cloneElement(type as unknown as React.ReactElement, {
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
});

export default Icon;

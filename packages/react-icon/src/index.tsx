import React, { useMemo } from 'react';
import classnames from 'classnames';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
import './style/index.less';

export type IconsName = keyof typeof svgPaths;

export interface IconProps<T> extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: keyof JSX.IntrinsicElements | any;
  type?: IconsName | null | T;
  spin?: boolean;
  color?: string;
  verticalAlign?: 'middle' | 'baseline';
}

export default function Icon<T>(props: IconProps<T> = {}) {
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
    svg = React.cloneElement((type as unknown) as React.ReactElement, {
      fill: color,
    });
  } else {
    return null;
  }
  others.style = { fill: 'currentColor', ...others.style };
  const propps = {
    ...others,
    className: classnames(
      prefixCls,
      className,
      `${prefixCls}-${verticalAlign}`,
      { [`${prefixCls}-spin`]: spin },
    ),
  };
  return <TagName {...propps}>{svg}</TagName>;
}

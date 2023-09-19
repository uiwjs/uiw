import React from 'react';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
import './style/index.less';

export type IconsName = keyof typeof svgPaths;
type TagType = React.ElementType | keyof JSX.IntrinsicElements;
type ElementProps<T extends TagType, E = React.ReactElement> = {
  fill?: string;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: T;
  type?: IconsName | null | E;
  spin?: boolean;
  color?: string;
  verticalAlign?: 'middle' | 'baseline';
};

export type IconProps<T extends TagType> = ElementProps<T> & React.ComponentPropsWithoutRef<T>;

const Icon = <T extends TagType = 'span'>(props: IconProps<T>) => {
  const {
    className,
    prefixCls = 'w-icon',
    verticalAlign = 'middle',
    tagName: Element = 'span',
    color,
    type,
    spin = false,
    style,
    ...reset
  } = props;

  let svg = null;
  if (typeof type === 'string') {
    svg = (
      <svg fill={color || props.fill} viewBox="0 0 20 20">
        {(svgPaths[type as IconsName] || []).map((d, i) => (
          <path key={i} d={d} fillRule="evenodd" />
        ))}
      </svg>
    );
  }
  const initStyle = { fill: 'currentColor', ...style };
  const cls = [
    prefixCls,
    className,
    prefixCls && verticalAlign ? `${prefixCls}-${verticalAlign}` : null,
    spin && prefixCls ? `${prefixCls}-spin` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <Element className={cls} {...reset} style={initStyle}>
      {svg}
    </Element>
  );
};

export default Icon;

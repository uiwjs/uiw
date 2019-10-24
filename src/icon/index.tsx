import React from 'react';
import classnames from 'classnames';
import svgPaths from '@uiw/icons/fonts/w-icon.json';
import './style/index.less';

export type IconsName = keyof typeof svgPaths;

export interface IIconProps<T> extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: keyof JSX.IntrinsicElements | any;
  type?: IconsName | null | T;
  spin: boolean;
  color?: string;
  verticalAlign?: 'middle' | 'baseline';
}

export default class Icon<T> extends React.PureComponent<IIconProps<T>> {
  public static defaultProps: IIconProps<{}> = {
    prefixCls: 'w-icon',
    verticalAlign: 'middle',
    tagName: 'span',
    spin: false,
  }
  renderSvgPaths = (type: IconsName) => {
    const svgPathsData = svgPaths;
    const pathStrings: string[] = svgPathsData[type];
    if (pathStrings == null) {
      return null;
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  }

  public render() {
    const { prefixCls, className, color, type, spin, verticalAlign, tagName: TagName, ...others } = this.props;
    let svg = null;
    if (typeof type === 'string') {
      svg = <svg fill={color} viewBox="0 0 20 20">{this.renderSvgPaths(type as IconsName)}</svg>;
    } else if (React.isValidElement(type)) {
      svg = React.cloneElement(type as unknown as React.ReactElement, {
        fill: color,
      });
    } else {
      return null;
    }
    others.style = { fill: 'currentColor', ...others.style };
    const propps = { ...others,
      className: classnames(prefixCls, className, `${prefixCls}-${verticalAlign}`, { [`${prefixCls}-spin`]: spin }),
    };
    return (
      <TagName {...propps}>{svg}</TagName>
    );
  }
}

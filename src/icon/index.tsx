import React from 'react';
import classnames from 'classnames';
import svgPaths from 'uiw-iconfont/fonts/w-icon.json';
import './style/index.less';

export type Type = React.ReactElement | string | false | null;

export interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  /**
   * HTML tag to use for the rendered element.
   * @default "span"
   */
  tagName?: keyof JSX.IntrinsicElements | any;
  type?: Type;
  spin: boolean;
  color?: string;
  verticalAlign: 'middle' | 'baseline';
}

export default class Icon extends React.PureComponent<IIconProps> {
  public static defaultProps: IIconProps = {
    prefixCls: 'w-icon',
    verticalAlign: 'middle',
    tagName: 'span',
    spin: false,
  }
  renderSvgPaths = (type: string) => {
    const svgPathsData = svgPaths as {[key: string]: any}
    const pathStrings: string[] = svgPathsData[type];
    if (pathStrings == null) {
      return null;
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  }

  public render() {
    const { prefixCls, className, color, type, spin, verticalAlign, tagName: TagName, ...others } = this.props;
    let svg = null;
    if (type == null || typeof type === 'boolean') {
      return null;
    } else if (typeof type !== 'string') {
      svg = React.cloneElement(type, {
        fill: color,
      });
    } else {
      svg = (<svg fill={color} viewBox="0 0 20 20">{this.renderSvgPaths(type)}</svg>);
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

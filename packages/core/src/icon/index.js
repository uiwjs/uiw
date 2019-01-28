import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgPaths from 'uiw-iconfont/fonts/w-icon.json';
import './style/index.less';

export default class Icon extends React.PureComponent {
  renderSvgPaths = (type) => {
    const pathStrings = svgPaths[type];
    if (pathStrings == null) {
      return null
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)
  }

  render() {
    const { prefixCls, className, color, type, spin, verticalAlign, tagName: TagName = 'span', ...others } = this.props;
    let svg = null;
    if (type == null || typeof type === "boolean") {
      return null;
    } else if (typeof type !== "string") {
      svg = React.cloneElement(type, {
        fill: color,
      });
    } else {
      svg = <svg fill={color} viewBox={`0 0 20 20`}>{this.renderSvgPaths(type)}</svg>;
    }
    others.style = { fill: 'currentColor', ...others.style };
    const propps = { ...others,
      className: classnames(prefixCls, className, `${prefixCls}-${verticalAlign}`, { [`${prefixCls}-spin`]: spin }),
    }
    return (
      <TagName {...propps}>{svg}</TagName>
    )
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  style: PropTypes.object,
  verticalAlign: PropTypes.oneOf(['middle', 'baseline']),
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  prefixCls: 'w-icon',
  style: {},
  verticalAlign: 'middle',
  spin: false,
};


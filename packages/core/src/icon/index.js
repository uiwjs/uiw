import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svgPaths from 'uiw-iconfont/fonts/w-icon.json';
import './style/index.less';

export class Icon extends React.PureComponent {
  renderSvgPaths = (type) => {
    const pathStrings = svgPaths[type];
    if (pathStrings == null) {
      return null
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />)
  }

  render() {
    const { prefixCls, color, type, spin, verticalAlign, tagName: TagName = 'span', ...others } = this.props;
    const paths = this.renderSvgPaths(type);
    const propps = { ...others,
      className: classnames(prefixCls, `${prefixCls}-${verticalAlign}`, { [`${prefixCls}-spin`]: spin }),
    }
    return (
      <TagName {...propps}>
        <svg fill={color} viewBox={`0 0 24 24`}>
          {paths}
        </svg>
      </TagName>
    )
  }
}

Icon.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  verticalAlign: PropTypes.oneOf(['middle', 'baseline']),
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  prefixCls: 'w-icon',
  style: {},
  verticalAlign: 'baseline',
  spin: false,
};


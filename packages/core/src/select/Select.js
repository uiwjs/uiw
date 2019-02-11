import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Option from './Option';
import './style/index.less';

export default class Select extends React.Component {
  static Option = Option;
  render() {
    const { prefixCls, className, size, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-${size}`]: size });
    return (
      <select {...resetProps} className={cls}>
        {React.Children.map(this.props.children, (element) => {
          return React.cloneElement(element, Object.assign({}, element.props, {}));
        })}
      </select>
    );
  }
}

Select.propTypes = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

Select.defaultProps = {
  prefixCls: 'w-select',
  size: 'default',
};

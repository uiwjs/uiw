import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import Icon from '../icon';
// import './style/index.less';

export default class Select extends React.Component {
  render() {
    const { prefixCls, className, size, ...resetProps } = this.props;
    const cls = classnames(prefixCls, className, { [`${prefixCls}-${size}`]: size});
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

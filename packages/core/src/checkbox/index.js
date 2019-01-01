import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Abstract from '../radio/Abstract';
import './style/index.less';

export default class Checkbox extends React.Component {
  render() {
    const { prefixCls, className, indeterminate, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      indeterminate,
    });
    return <Abstract {...other} className={cls} />;
  }
}

Checkbox.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  prefixCls: 'w-checkbox',
  type: 'checkbox',
  disabled: false,
  checked: false,
  value: '',
};

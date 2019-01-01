import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Abstract from '../radio/Abstract';
import './style/index.less';

export default class Checkbox extends React.Component {
  render() {
    const { className, indeterminate, ...other } = this.props;
    const cls = classnames(className, { indeterminate });
    return <Abstract {...other} className={cls} />;
  }
}

Checkbox.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.oneOf([undefined, false, true]),
};

Checkbox.defaultProps = {
  prefixCls: 'w-checkbox',
  type: 'checkbox',
  disabled: false,
  checked: undefined,
  value: '',
};

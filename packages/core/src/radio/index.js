import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';


export default class Radio extends React.Component {
  render() {
    const { prefixCls, className, style, children, checked, disabled, value, ...other } = this.props;
    const cls = classnames(`${prefixCls}`, className, { disabled, checked });
    other.disabled = disabled;
    other.defaultChecked = other.defaultChecked || checked;
    other.value = value;
    return (
      <label {...{ className: cls, style }}>
        <input type="radio" {...other} />
        <span className={`${prefixCls}-text`}>{children || value}</span>
      </label>
    );
  }
}

Radio.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  prefixCls: 'w-radio',
  disabled: false,
  checked: false,
  value: '',
};

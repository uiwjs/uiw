import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Radio extends React.Component {
  render() {
    const { prefixCls, className, style, children, checked, disabled, size, value, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      disabled, checked: checked || other.defaultChecked, [`${prefixCls}-${size}`]: size,
    });
    other.disabled = disabled;
    other.checked = checked;
    other.value = value;
    const label = children || value;
    return (
      <label {...{ className: cls, style }}>
        <input {...other} />
        {label && <div className={`${prefixCls}-text`}>{label}</div>}
      </label>
    );
  }
}

Radio.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.oneOf([undefined, false, true]),
};

Radio.defaultProps = {
  prefixCls: 'w-radio',
  type: 'radio',
  disabled: false,
  checked: undefined,
  value: '',
  onChange() {},
};
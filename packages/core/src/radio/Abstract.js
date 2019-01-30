import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Abstract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({ checked: this.props.checked });
    }
  }
  onChange = (e) => {
    this.setState({ checked: e.target.checked }, this.props.onChange.bind(this, { ...e }));
  }
  render() {
    const { prefixCls, className, style, children, checked, disabled, size, value, ...other } = this.props;
    const cls = classnames(prefixCls, className, {
      disabled, [`${prefixCls}-${size}`]: size,
    });
    other.disabled = disabled;
    other.checked = this.state.checked;
    other.onChange = this.onChange
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

Abstract.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.oneOf([undefined, false, true]),
};

Abstract.defaultProps = {
  prefixCls: 'w-radio',
  type: 'radio',
  disabled: false,
  checked: false,
  value: '',
  onChange() {},
};
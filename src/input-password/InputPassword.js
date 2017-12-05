import React from 'react';
import { PropTypes } from '../utils/';
import Input from '../input/';

export default class InputPassword extends Input {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    const { prefixCls, value, onIconClick, onChange, ...other } = this.props;
    const { toggle } = this.state;
    const cls = this.classNames(prefixCls, {
      'password-show': toggle,
    });

    return (
      <Input
        {...other}
        className={cls}
        type={toggle ? 'text' : 'password'}
        value={value}
        onIconClick={() => {
          this.setState({ toggle: !toggle }, onIconClick);
        }}
        onChange={onChange}
      />
    );
  }
}

InputPassword.propTypes = {
  prefixCls: PropTypes.string,
  value: PropTypes.string,
};

InputPassword.defaultProps = {
  prefixCls: 'w-input-password',
  icon: 'eye-o',
  value: '',
};

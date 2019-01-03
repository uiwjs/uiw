import React from 'react';
import PropTypes from 'prop-types';
import Abstract from '../radio/Abstract';
import './style/index.less';


export default class Switch extends React.Component {
  render() {
    const props = this.props;
    return <Abstract {...{ ...props, type: 'checkbox' }} />;
  }
}

Switch.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.oneOf([undefined, false, true]),
};

Switch.defaultProps = {
  prefixCls: 'w-switch',
  type: 'switch',
  disabled: false,
  checked: undefined,
};

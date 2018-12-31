import React from 'react';
import PropTypes from 'prop-types';
import Abstract from './Abstract';
import './style/index.less';

export default class Radio extends React.Component {
  render() {
    return <Abstract {...this.props} />;
  }
}

Radio.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  prefixCls: 'w-radio',
  type: 'radio',
  disabled: false,
  checked: false,
  value: '',
};

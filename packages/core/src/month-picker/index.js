import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class MonthPicker extends React.Component {
  render() {
    const { prefixCls, className, ...other } = this.props;
    return (
      <div>MonthPicker</div>
    );
  }
}

MonthPicker.propTypes = {
  prefixCls: PropTypes.string,
};

MonthPicker.defaultProps = {
  prefixCls: 'w-monthpicker',
};

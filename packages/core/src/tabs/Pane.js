import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Pane extends React.Component {
  render() {
    const { prefixCls, className, ...resetProps } = this.props;
    return (
      <div className={classnames(`${prefixCls}`, className)} {...resetProps} />
    );
  }
}

Pane.propTypes = {
  prefixCls: PropTypes.string,
};

Pane.defaultProps = {
  prefixCls: 'w-tabs-pane',
};

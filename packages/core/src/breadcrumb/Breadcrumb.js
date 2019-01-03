import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Breadcrumb extends React.Component {
  render() {
    const { prefixCls, className, ...other } = this.props;
    const cls = classnames(prefixCls, className);
    return (
      <div {...{ className: cls, ...other }}>{this.props.children}</div>
    );
  }
}

Breadcrumb.propTypes = {
  prefixCls: PropTypes.string,
};

Breadcrumb.defaultProps = {
  prefixCls: 'w-breadcrumb',
};

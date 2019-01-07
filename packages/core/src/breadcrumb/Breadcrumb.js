import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Breadcrumb extends React.Component {
  render() {
    const { prefixCls, className, separator, ...other } = this.props;
    const cls = classnames(prefixCls, className);
    return (
      <div {...{ className: cls, ...other }}>
        {React.Children.map(this.props.children, (element) => {
          return React.cloneElement(element, Object.assign({ separator }, element.props, {}));
        })}
      </div>
    );
  }
}

Breadcrumb.propTypes = {
  prefixCls: PropTypes.string,
};

Breadcrumb.defaultProps = {
  prefixCls: 'w-breadcrumb',
  separator: '/',
};

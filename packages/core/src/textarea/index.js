import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Textarea extends React.PureComponent {
  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const cls = classnames(prefixCls, className);
    return (
      <textarea className={cls} {...restProps}>{this.props.children}</textarea>
    );
  }
}

Textarea.propTypes = {
  prefixCls: PropTypes.string,
};

Textarea.defaultProps = {
  prefixCls: 'w-textarea',
};

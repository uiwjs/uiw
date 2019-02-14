import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style/index.less';

export default class Message extends React.Component {
  render() {
    const { prefixCls, className, type, title, description, ...elementProps } = this.props;
    const cls = classnames(prefixCls, className, `${prefixCls}-${type}`);
    return (
      <div className={cls} {...elementProps}>
        <span className={classnames(`${prefixCls}-title`)}>{title}</span>
        <span className={classnames(`${prefixCls}-description`)}>{description}</span>
      </div>
    );
  }
}

Message.propTypes = {
  prefixCls: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  type: PropTypes.oneOf(['success', 'warning', 'info', 'error']).isRequired,
  
};

Message.defaultProps = {
  prefixCls: 'w-message',
};

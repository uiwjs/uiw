import React from 'react';
import PropTypes from 'prop-types';
import copy from '@uiw/copy-to-clipboard';
import './style/index.less';

export default class CopyToClipboard extends React.Component {
  onClick(e) {
    const { onClick, text } = this.props;
    copy(text, (isCopy) => {
      onClick(text, isCopy, e);
    });
  }
  render() {
    const { prefixCls, text, children, ...resetProps } = this.props;
    const concatProps = {
      ...resetProps,
      ...{
        onClick: this.onClick.bind(this),
        className: prefixCls,
      },
    };
    return (
      <a {...concatProps}>
        <span className={`${prefixCls}-select`}>{text}</span>
        {children}
      </a>
    );
  }
}
CopyToClipboard.propTypes = {
  prefixCls: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CopyToClipboard.defaultProps = {
  prefixCls: 'w-copy-to-clipboard',
  onClick: () => null,
};

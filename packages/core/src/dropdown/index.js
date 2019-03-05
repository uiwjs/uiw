import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '../overlay-trigger';
import './style/index.less';

export default class Dropdown extends React.Component {
  render() {
    const { prefixCls, className, menu, children, disabled, ...other } = this.props;
    return (
      <OverlayTrigger isOutside disabled={disabled} {...other} overlay={menu}>
        {React.cloneElement(children, Object.assign({}, children.props, { disabled }))}
      </OverlayTrigger>
    );
  }
}

Dropdown.propTypes = {
  prefixCls: PropTypes.string,
  placement: PropTypes.string,
  disabled: PropTypes.bool,
};

Dropdown.defaultProps = {
  prefixCls: 'w-dropdown',
  placement: 'bottomLeft',
};

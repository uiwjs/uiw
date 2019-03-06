import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from '../overlay-trigger';

export default function Dropdown({ prefixCls, className, menu, children, disabled, ...other }) {
  return (
    <OverlayTrigger isOutside autoAdjustOverflow disabled={disabled} {...other} overlay={menu}>
      {React.cloneElement(children, Object.assign({}, children.props, { disabled }))}
    </OverlayTrigger>
  );
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

import React from 'react';
import OverlayTrigger, {
  OverlayTriggerProps,
} from '@uiw/react-overlay-trigger';
import { IProps } from '@uiw/utils';

export interface DropdownProps extends IProps, OverlayTriggerProps {
  menu?: React.ReactNode;
}

export default class Dropdown extends React.PureComponent<DropdownProps> {
  public static defaultProps: DropdownProps = {
    prefixCls: 'w-dropdown',
    placement: 'bottomLeft',
  };
  render() {
    const {
      prefixCls,
      className,
      menu,
      children,
      disabled,
      ...other
    } = this.props;
    return (
      <OverlayTrigger
        isOutside
        autoAdjustOverflow
        disabled={disabled}
        {...other}
        overlay={menu}
      >
        {React.cloneElement(
          children as React.ReactElement,
          Object.assign({}, (children as React.ReactElement).props),
        )}
      </OverlayTrigger>
    );
  }
}

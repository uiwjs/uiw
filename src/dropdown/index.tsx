import React from 'react';
import OverlayTrigger, { IOverlayTriggerProps } from '../overlay-trigger';
import { IProps } from '../utils/props';

export interface IDropdownProps extends IProps, IOverlayTriggerProps {
  menu?: React.ReactNode;
}

export default class Dropdown extends React.PureComponent<IDropdownProps & IOverlayTriggerProps> {
  public static defaultProps: IDropdownProps = {
    prefixCls: 'w-dropdown',
    placement: 'bottomLeft',
  }
  render() {
    const { prefixCls, className, menu, children, disabled, ...other } = this.props;
    return (
      <OverlayTrigger isOutside autoAdjustOverflow disabled={disabled} {...other} overlay={menu}>
        {React.cloneElement((children as React.ReactElement), Object.assign({}, (children as React.ReactElement).props))}
      </OverlayTrigger>
    );
  }
}


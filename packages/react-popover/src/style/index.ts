import styled, { css } from 'styled-components';
import { PopoverProps } from '../index';

interface PopoverWarpProps extends PopoverProps {
  defaultTheme?: Record<string, string | number>;
}
export const OverlayTriggerPopoverArrow = styled.div<PopoverWarpProps>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-color: transparent;
  z-index: 21;
`;

export const OverlayTriggerPopover = styled.div<PopoverWarpProps>`
  position: relative;
  display: inline-block;
  outline: 0;

  ${(props) =>
    ['right', 'rightTop', 'rightBottom'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        left: 2px;
        margin-top: -15px;
        top: 50%;
      }
    `}

  ${(props) =>
    ['left', 'leftTop', 'leftBottom'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        transform: rotate(180deg);
        margin-top: -15px;
        right: 2px;
        top: 50%;
      }
    `} 

  ${(props) =>
    ['leftTop', 'rightTop'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        top: 15px;
      }
    `} 

  ${(props) =>
    ['leftBottom', 'rightBottom'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        bottom: 0;
        top: auto;
      }
    `} 

  ${(props) =>
    ['top', 'topLeft', 'topRight'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        transform: rotate(-90deg);
        bottom: 2px;
        left: 50%;
        margin-left: -15px;
      }
    `} 

  ${(props) =>
    ['bottom', 'bottomLeft', 'bottomRight'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        transform: rotate(90deg);
        left: 50%;
        margin-left: -15px;
        top: 2px;
      }
    `} 

  ${(props) =>
    ['bottomLeft', 'topLeft'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        transform: rotate(90deg);
        left: 50%;
        margin-left: -15px;
        top: 2px;
      }
    `} 

  ${(props) =>
    ['bottomRight', 'topRight'].includes(props.placement || '') &&
    css`
      & ${OverlayTriggerPopoverArrow} {
        right: 0;
        left: auto;
      }
    `} 

  &.top,
  &.topLeft,
  &.topRight {
    padding-bottom: 13px;
  }
  &.bottom,
  &.bottomLeft,
  &.bottomRight {
    padding-top: 13px;
  }
  &.right,
  &.rightTop,
  &.rightBottom {
    padding-left: 13px;
  }
  &.left,
  &.leftTop,
  &.leftBottom {
    padding-right: 13px;
  }

  &.no-arrow {
    padding: 0 !important;
  }
`;

export const OverlayTriggerPopoverContent = styled.div<PopoverWarpProps>`
  font-size: 12px;
  display: block;
  text-align: left;
  text-decoration: none;
  background-color: #fff;
  border-radius: 4px;
  min-height: 23px;
  box-shadow: 'rgba(16, 22, 26, 0.1) 0px 0px 0px 1px, rgba(16, 22, 26, 0.2) 0px 2px 4px,rgba(16, 22, 26, 0.2) 0px 8px 24px';
`;

import styled, { css } from 'styled-components';
import OverlayTrigger, { OverlayTriggerProps } from '@uiw/react-overlay-trigger';

interface PopoverWarpProps extends OverlayTriggerProps {
  defaultTheme?: Record<string, string | number>;
}
export const OverlayTriggerPopoverArrow = styled.div<PopoverWarpProps>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-color: transparent;
  z-index: 21;
`;

export interface OverlayTriggerPopoverBodyBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  params?: {
    placement?: OverlayTriggerProps['placement'];
  };
}

export const OverlayTriggerPopoverBodyBase = styled.div<OverlayTriggerPopoverBodyBaseProps>`
  ${(props) =>
    ['top', 'topLeft', 'topRight'].includes(props.params?.placement || '') &&
    css`
      padding-bottom: 13px;
    `}
  ${(props) =>
    ['bottom', 'bottomLeft', 'bottomRight'].includes(props.params?.placement || '') &&
    css`
      padding-top: 13px;
    `}
  ${(props) =>
    ['right', 'rightTop', 'rightBottom'].includes(props.params?.placement || '') &&
    css`
      padding-left: 13px;
    `}

  ${(props) =>
    ['left', 'leftTop', 'leftBottom'].includes(props.params?.placement || '') &&
    css`
      padding-right: 13px;
    `}
`;

export const OverlayTriggerPopover = styled(OverlayTrigger)<PopoverWarpProps>`
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
        left: 15px;
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
`;

export const OverlayTriggerPopoverContent = styled.div<PopoverWarpProps>`
  font-size: 12px;
  display: block;
  text-align: left;
  text-decoration: none;
  background-color: #fff;
  border-radius: 4px;
  min-height: 23px;
  box-shadow: rgba(16, 22, 26, 0.1) 0px 0px 0px 1px, rgba(16, 22, 26, 0.2) 0px 2px 4px,
    rgba(16, 22, 26, 0.2) 0px 8px 24px;
`;

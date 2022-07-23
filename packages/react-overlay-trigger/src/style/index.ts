import styled, { css } from 'styled-components';
import Overlay, { ContainerWrap, ContentWrap } from '@uiw/react-overlay';
import { ThemeVariantValueOptions } from '@uiw/utils';
import { OverlayTriggerProps } from 'src';

interface OverlayTriggerWrapProps extends ThemeVariantValueOptions, OverlayTriggerProps {}

export const OverlayTriggerWrap = styled(Overlay)<OverlayTriggerWrapProps>`
  ${(props) => css`
    position: absolute;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    overflow: inherit;
    width: initial;
    height: initial;
    ${ContainerWrap} {
      position: relative;
      overflow: inherit;
      &::before {
        display: none;
      }
    }
    ${ContentWrap} {
      margin: 0;

      ${props.placement === 'rightTop' &&
      css`
        transform-origin: left top;
      `}

      ${props.placement === 'right' &&
      css`
        transform-origin: left center;
      `}

    ${props.placement === 'rightBottom' &&
      css`
        transform-origin: left bottom;
      `}

    ${props.placement === 'topLeft' &&
      css`
        transform-origin: bottom left;
      `}

    ${props.placement === 'top' &&
      css`
        transform-origin: bottom center;
      `}

    ${props.placement === 'topRight' &&
      css`
        transform-origin: bottom right;
      `}

    ${props.placement === 'left' &&
      css`
        transform-origin: right center;
      `}

    ${props.placement === 'leftBottom' &&
      css`
        transform-origin: right bottom;
      `}

    ${props.placement === 'bottomLeft' &&
      css`
        transform-origin: top left;
      `}

    ${props.placement === 'bottom' &&
      css`
        transform-origin: top center;
      `}

    ${props.placement === 'bottomRight' &&
      css`
        transform-origin: top right;
      `}
    }
  `}
`;

export const TriggerWrap = styled.div<{ disabled?: boolean }>`
  ${(props) => css`
    ${props.disabled &&
    css`
      cursor: not-allowed;
    `}
  `}
`;

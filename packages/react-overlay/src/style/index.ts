import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { OverlayProps } from 'src';

interface OverlayWrapProps extends ThemeVariantValueOptions, Pick<OverlayProps, 'usePortal' | 'isOpen'> {}

interface BackdropWrapProps extends ThemeVariantValueOptions {}

export const ContentWrap = styled.span`
  position: relative;
  outline: 0;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 20px 0;
  z-index: 20;
`;

export const ContainerWrap = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &:before {
    content: ' ';
    display: inline-block;
    height: 100%;
    width: 1px;
    vertical-align: middle;
  }
`;

export const BackdropWrap = styled.div<BackdropWrapProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  z-index: 20;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorOverlayBackdrop')};
  overflow: auto;
  user-select: none;
`;

export const OverlayWrap = styled.div<OverlayWrapProps>`
  ${(props) => css`
    position: fixed;
    overflow: auto;
    top: 0;
    right: 0;
    left: 0;
    outline: 0;
    bottom: 0;
    z-index: 999;
    -webkit-overflow-scrolling: touch;
    text-align: center;
    height: 100%;
    width: 100%;
    display: none;
    &.open {
      z-index: 9999;
    }

    .w-overlay-open {
      overflow: hidden;
    }

    ${!props.usePortal &&
    css`
      position: absolute;
      overflow: initial;
      ${ContainerWrap} {
        position: relative;
      }
      ${BackdropWrap} {
        position: absolute;
      }
    `}

    ${props.isOpen &&
    css`
      display: inherit;
    `}

  &.w-overlay-enter .w-overlay-backdrop {
      opacity: 0;
    }
    &.w-overlay-enter-active .w-overlay-backdrop {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }
    &.w-overlay-exit .w-overlay-backdrop {
      opacity: 1;
    }
    &.w-overlay-exit-active .w-overlay-backdrop {
      opacity: 0;
      transition: opacity 300ms ease-in;
    }
    &.w-overlay-enter .w-overlay-content {
      transform: scale(0.5);
      opacity: 0;
    }
    &.w-overlay-enter-active .w-overlay-content {
      opacity: 1;
      transform: translate(0);
      transition: transform 300ms ease, opacity 300ms ease;
    }
    &.w-overlay-exit .w-overlay-content {
      opacity: 1;
      transform: translate(0);
      transition: transform 300ms ease, opacity 300ms ease;
    }
    &.w-overlay-exit-active .w-overlay-content {
      transform: scale(0.5);
      opacity: 0;
    }
    &.w-overlay-enter,
    &.w-overlay-exit,
    &.w-overlay-enter-done {
      display: inherit;
    }
  `}
`;

BackdropWrap.defaultProps = {
  defaultTheme: {
    backgroundColorOverlayBackdrop: 'rgba(16, 22, 26, 0.7)',
  },
};

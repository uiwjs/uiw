import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import Overlay, { ContentWrap } from '@uiw/react-overlay';
import { DrawerProps } from 'src';

interface DrawerWrapperWrapProps extends ThemeVariantValueOptions { }
interface DrawerHeaderWrapProps extends ThemeVariantValueOptions { }
interface DrawerHeaderWrapProps extends ThemeVariantValueOptions { }
interface DrawerWrapProps extends Pick<DrawerProps, 'placement'> { }
export const DrawerWrapperWrap = styled.div<DrawerWrapperWrapProps>`
  ${(props) => css`
    box-shadow: 0 0 0 1px ${getThemeVariantValue(props, 'boxShadowColorInDrawerWrapper')},
      0 0 46px 6px ${getThemeVariantValue(props, 'boxShadowColorHvDrawerWrapper')};
    background-color: ${getThemeVariantValue(props, 'backgroundColorDrawerWrapper')};
    position: fixed;
    margin: 0 !important;
    display: flex;
    flex-direction: column;
  `}
`;

export const DrawerHeaderWrap = styled.div<DrawerHeaderWrapProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    min-height: 40px;
    padding-left: 13px;
    padding-right: 5px;
    background-color: ${getThemeVariantValue(props, 'backgroundColorDrawerHeader')};
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 0 ${getThemeVariantValue(props, 'boxShadowColorInDrawerHeader')};
    font-size: 16px;
    > .w-icon {
      margin-right: 10px;
      color: ${getThemeVariantValue(props, 'colorHvDrawerHeader')};
    }
    h4 {
      margin: 0;
      padding: 0;
      flex: 1 1 auto;
    }
  `}
`;

export const DrawerBodyWrap = styled.div`
  ${(props) => css`
    flex: 1 1 auto;
    overflow: auto;
    line-height: 18px;
  `}
`;

export const DrawerFooterWrap = styled.div<DrawerHeaderWrapProps>`
  ${(props) => css`
    box-shadow: 0 -1px 0 ${getThemeVariantValue(props, 'boxShadowColorInDrawerFooter')};
    min-height: 40px;
    padding-left: 13px;
    padding-right: 5px;
    display: flex;
    align-items: center;
  `}
`;

export const DrawerBodyClsWrap = styled.div`
  ${(props) => css`
    padding: 15px;
  `}
`;

export const DrawerWrap = styled(Overlay) <DrawerWrapProps>`
  ${(props) => css`
    ${(props.placement === 'top' || props.placement === 'bottom') &&
    css`
      ${DrawerWrapperWrap} {
        left: 0;
        right: 0;
      }
    `}

    ${props.placement === 'top' &&
    css`
      ${DrawerWrapperWrap} {
        top: 0;
      }
    `}

  ${props.placement === 'bottom' &&
    css`
      ${DrawerWrapperWrap} {
        bottom: 0;
      }
    `}

  ${(props.placement === 'right' || props.placement === 'left') &&
    css`
      ${DrawerWrapperWrap} {
        bottom: 0;
        top: 0;
      }
    `}

  ${props.placement === 'right' &&
    css`
      ${DrawerWrapperWrap} {
        right: 0;
      }
    `}

  ${props.placement === 'left' &&
    css`
      ${DrawerWrapperWrap} {
        left: 0;
      }
    `}


  &.w-overlay-enter ${ContentWrap} {
      opacity: 1;
    }
    &.w-overlay-enter-active ${ContentWrap} {
      transition: all 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);
    }
    &.w-overlay-exit ${ContentWrap} {
      opacity: 1;
    }
    &.w-overlay-exit-active ${ContentWrap} {
      transition: all 0.2s cubic-bezier(0.4, 1, 0.75, 0.9);
    }

    ${props.placement === 'right' &&
    css`
      &.w-overlay-enter ${ContentWrap} {
        transform: translateX(100%);
      }
      &.w-overlay-enter-active ${ContentWrap} {
        transform: translateX(0);
      }
      &.w-overlay-exit ${ContentWrap} {
        transform: translateX(0);
      }
      &.w-overlay-exit-active ${ContentWrap} {
        transform: translateX(100%);
      }
    `}

    ${props.placement === 'left' &&
    css`
      &.w-overlay-enter ${ContentWrap} {
        transform: translateX(-100%);
      }
      &.w-overlay-enter-active ${ContentWrap} {
        transform: translateX(0);
      }
      &.w-overlay-exit ${ContentWrap} {
        transform: translateX(0);
      }
      &.w-overlay-exit-active ${ContentWrap} {
        transform: translateX(-100%);
      }
    `}

  ${props.placement === 'top' &&
    css`
      &.w-overlay-enter ${ContentWrap} {
        transform: translateY(-100%);
      }
      &.w-overlay-enter-active ${ContentWrap} {
        transform: translateY(0);
      }
      &.w-overlay-exit ${ContentWrap} {
        transform: translateY(0);
      }
      &.w-overlay-exit-active ${ContentWrap} {
        transform: translateY(-100%);
      }
    `}

  ${props.placement === 'bottom' &&
    css`
      &.w-overlay-enter ${ContentWrap} {
        transform: translateY(100%);
      }
      &.w-overlay-enter-active ${ContentWrap} {
        transform: translateY(0);
      }
      &.w-overlay-exit ${ContentWrap} {
        transform: translateY(0);
      }
      &.w-overlay-exit-active ${ContentWrap} {
        transform: translateY(100%);
      }
    `}
  `}
`;

DrawerWrapperWrap.defaultProps = {
  defaultTheme: {
    boxShadowColorInDrawerWrapper: 'rgba(16, 22, 26, 0.1)',
    boxShadowColorHvDrawerWrapper: 'rgba(16, 22, 26, 0.2)',
    backgroundColorDrawerWrapper: '#fff',
  },
};
DrawerHeaderWrap.defaultProps = {
  defaultTheme: {
    backgroundColorDrawerHeader: '#fff',
    boxShadowColorInDrawerHeader: 'rgba(16, 22, 26, 0.15)',
    colorHvDrawerHeader: '#393e48',
  },
};
DrawerFooterWrap.defaultProps = {
  defaultTheme: {
    boxShadowColorInDrawerFooter: 'rgba(16, 22, 26, 0.15)',
  },
};

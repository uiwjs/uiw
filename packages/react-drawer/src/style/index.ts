import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import Overlay from '@uiw/react-overlay';
import { DrawerProps } from 'src';

interface DrawerWrapperWrapProps extends ThemeVariantValueOptions {}
interface DrawerHeaderWrapProps extends ThemeVariantValueOptions {}
interface DrawerHeaderWrapProps extends ThemeVariantValueOptions {}
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
DrawerWrapperWrap.defaultProps = {
  defaultTheme: {
    boxShadowColorInDrawerWrapper: 'rgba(16, 22, 26, 0.1)',
    boxShadowColorHvDrawerWrapper: 'rgba(16, 22, 26, 0.2)',
    backgroundColorDrawerWrapper: '#fff',
  },
};

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
DrawerHeaderWrap.defaultProps = {
  defaultTheme: {
    backgroundColorDrawerHeader: '#fff',
    boxShadowColorInDrawerHeader: 'rgba(16, 22, 26, 0.15)',
    colorHvDrawerHeader: '#393e48',
  },
};

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
DrawerFooterWrap.defaultProps = {
  defaultTheme: {
    boxShadowColorInDrawerFooter: 'rgba(16, 22, 26, 0.15)',
  },
};

export const DrawerBodyClsWrap = styled.div`
  ${(props) => css`
    padding: 15px;
  `}
`;

interface DrawerWrapProps extends Pick<DrawerProps, 'placement'> {}

export const DrawerWrap = styled(Overlay)<DrawerWrapProps>`
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
    `} /* &.w-overlay-enter ${ContentWrap} {
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
  &.right.w-overlay-enter ${ContentWrap} {
    background: red;
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  &.right.w-overlay-enter-active ${ContentWrap} {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  &.right.w-overlay-exit ${ContentWrap} {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  &.right.w-overlay-exit-active ${ContentWrap} {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  &.left.w-overlay-enter ${ContentWrap} {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  &.left.w-overlay-enter-active ${ContentWrap} {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  &.left.w-overlay-exit ${ContentWrap} {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  &.left.w-overlay-exit-active ${ContentWrap} {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  &.top.w-overlay-enter ${ContentWrap} {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  &.top.w-overlay-enter-active ${ContentWrap} {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  &.top.w-overlay-exit ${ContentWrap} {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  &.top.w-overlay-exit-active ${ContentWrap} {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  &.bottom.w-overlay-enter ${ContentWrap} {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
  &.bottom.w-overlay-enter-active ${ContentWrap} {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  &.bottom.w-overlay-exit ${ContentWrap} {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  &.bottom.w-overlay-exit-active ${ContentWrap} {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  } */
  `}
`;

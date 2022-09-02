import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { TooltipProps } from '../';

export const TooltipStyleTheme = {
  backgroundColorTooltipStyleInnerWarpBase: 'rgba(0, 0, 0, 0.75)',
  borderColorTooltipStyleInnerWarpBase: 'rgba(0, 0, 0, 0.75)',
  boxShadowTooltipStyleInnerWarpBase: '0 1px 6px rgba(0, 0, 0, 0.2)',
};
type ThemeVar = ThemeVariantValueOptions<typeof TooltipStyleTheme>;

export interface TooltipStyleProps extends TooltipProps, ThemeVar {}

interface TooltipContainerProps {
  visibleArrow: boolean;
  placement: TooltipStyleProps['placement'];
}

interface TooltipArrowProps extends ThemeVar {
  placement: TooltipStyleProps['placement'];
}

function tooltipHandle(placement: TooltipStyleProps['placement']) {
  const obj = {
    right: 'right',
    rightTop: 'right',
    rightBottom: 'right',

    left: 'left',
    leftTop: 'left',
    leftBottom: 'left',

    top: 'top',
    topLeft: 'top',
    topRight: 'top',

    bottom: 'bottom',
    bottomLeft: 'bottom',
    bottomRight: 'bottom',
  };
  switch (obj[placement!]) {
    case 'bottom':
      return css`
        padding-top: 5px;
      `;
    case 'top':
      return css`
        padding-bottom: 5px;
      `;
    case 'right':
      return css`
        padding-left: 5px;
      `;
    case 'left':
      return css`
        padding-right: 5px;
      `;
    default:
      return css``;
  }
}

function tooltipArrowHandle(placement: TooltipStyleProps['placement']) {
  const obj = {
    right: 'right',
    rightTop: 'right',
    rightBottom: 'right',

    left: 'left',
    leftTop: 'left',
    leftBottom: 'left',

    top: 'top',
    topLeft: 'top',
    topRight: 'top',

    bottom: 'bottom',
    bottomLeft: 'bottom',
    bottomRight: 'bottom',
  };
  switch (obj[placement!]) {
    case 'right':
      return css`
        border-right-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'borderColorTooltipStyleInnerWarpBase')};
        border-width: 5px 5px 5px 0;
        left: 0;
        margin-top: -5px;
        top: 50%;
      `;
    case 'left':
      return css`
        border-left-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'borderColorTooltipStyleInnerWarpBase')};
        border-width: 5px 0 5px 5px;
        margin-top: -5px;
        right: 0;
        top: 50%;
      `;
    case 'top':
      return css`
        border-top-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'borderColorTooltipStyleInnerWarpBase')};
        border-width: 5px 5px 0;
        bottom: 0;
        left: 50%;
        margin-left: -5px;
      `;
    case 'bottom':
      return css`
        border-bottom-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'borderColorTooltipStyleInnerWarpBase')};
        border-width: 0 5px 5px;
        left: 50%;
        margin-left: -5px;
        top: 0;
      `;
    default:
      return css``;
  }
}

export const TooltipStyleWarp = styled.div<TooltipStyleProps>``;
export const TooltipStyleContainerWarp = styled.div<TooltipContainerProps>`
  position: relative;
  display: inline-block;
  ${(props) =>
    !props.visibleArrow &&
    css`
      padding: 0 !important;
    `}
  ${(props) => tooltipHandle(props.placement)}
`;
export const TooltipStyleArrowWarp = styled.div<TooltipArrowProps>`
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  ${(props) => tooltipArrowHandle(props.placement)}
  ${({ placement }) => {
    if (['leftTop', 'rightTop'].includes(placement!)) {
      return css`
        top: 15px;
      `;
    }
    if (['leftBottom', 'rightBottom'].includes(placement!)) {
      return css`
        bottom: 10px;
        top: auto;
      `;
    }
    if (['bottomLeft', 'topLeft'].includes(placement!)) {
      return css`
        left: 15px;
      `;
    }
    if (['bottomRight', 'topRight'].includes(placement!)) {
      return css`
        right: 10px;
        left: auto;
      `;
    }
    return css``;
  }}
`;
export const TooltipStyleInnerWarp = styled.div<ThemeVar>`
  font-size: 12px;
  max-width: 250px;
  padding: 5px 10px;
  display: block;
  color: #fff;
  text-align: left;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'boxShadowTooltipStyleInnerWarpBase')};
  word-break: break-all;
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: TooltipStyleTheme }, 'backgroundColorTooltipStyleInnerWarpBase')};
`;

// TooltipStyleInnerWarp.defaultProps = {
//   defaultTheme: TooltipStyleTheme,
// };
// TooltipStyleArrowWarp.defaultProps = {
//   defaultTheme: TooltipStyleTheme,
// };

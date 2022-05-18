import styled, { keyframes, css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export interface BadgeWarpProps extends ThemeVariantValueOptions {}

const keyframesStatusProcessing = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;
export interface BadgeColorDotProps extends ThemeVariantValueOptions {
  processing?: boolean;
  defaultTheme?: {
    backgroundColorBadgepPocessing: string;
    widthBadgeColorDot: string;
    topBadgeColorDot: string;
    fontSizeDefault: string;
    [k: string]: string | number;
  };
}
/** 展示 color  **/
export const BadgeColorDot = styled.span<BadgeColorDotProps>`
  line-height: inherit;
  vertical-align: baseline;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  margin: ${(props) =>
    css`
      ${getThemeVariantValue(props, 'marginVerticalBadgeColorDot')} ${getThemeVariantValue(
        props,
        'marginHorizontalBadgeColorDot',
      )}
    `};
  width: ${(props) => getThemeVariantValue(props, 'widthBadgeColorDot')};
  height: ${(props) => getThemeVariantValue(props, 'widthBadgeColorDot')};
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  top: ${(props) => getThemeVariantValue(props, 'topBadgeColorDot')};
  ${(props) => {
    if (props.processing) {
      return css`
        position: relative;
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBadgepPocessing')};
        &:after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: inherit;
          content: '';
          -webkit-animation: ${keyframesStatusProcessing} 1.2s infinite ease-in-out;
          animation: ${keyframesStatusProcessing} 1.2s infinite ease-in-out;
        }
      `;
    }
    return css``;
  }}
`;

export interface BadgeSupCountDotProps extends ThemeVariantValueOptions {
  dot?: boolean;
  nowrap?: boolean;
  defaultTheme?: {
    boxShadowColorBadge: string;
    colorBadge: string;
    fontSizeSmall: string;
    backgroundBadgeCountDot: string;
    [k: string]: string | number;
  };
}
/** 展示 count  **/
export const BadgeSupCountDot = styled.sup<BadgeSupCountDotProps>`
  ${(props) =>
    !props.dot &&
    css`
      position: absolute;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -10px;
      height: 16px;
      border-radius: 10px;
      min-width: 16px;
      background: ${(props) => getThemeVariantValue(props, 'backgroundBadgeCountDot')};
      color: ${(props) => getThemeVariantValue(props, 'colorBadge')};
      line-height: 16px;
      text-align: center;
      padding: 0 5px;
      font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
      white-space: nowrap;
      -webkit-transform-origin: -10% center;
      transform-origin: -10% center;
      font-family: tahoma;
      box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowBadgeCountDot')};
    `}

  ${(props) =>
    props.nowrap &&
    !props.dot &&
    css`
      top: auto;
      display: block;
      position: relative;
      -webkit-transform: none !important;
      transform: none !important;
      overflow: hidden;
    `}
    ${(props) =>
    props.dot &&
    css`
      position: absolute;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      -webkit-transform-origin: 0 center;
      transform-origin: 0 center;
      overflow: hidden;
      color: transparent;
      top: -4px;
      height: 6px;
      width: 6px;
      padding: 0;
      border-radius: 100%;
      background: ${(props) => getThemeVariantValue(props, 'backgroundBadgeCountDot')};
      z-index: 10;
      box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowBadgeCountDot')};
    `}
`;
/** 最外层包裹 **/
export const BadgeWarp = styled.span<BadgeWarpProps>`
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
`;
export const BadgeColorDotDefaultTheme = {
  marginVerticalBadgeColorDot: '0px',
  marginHorizontalBadgeColorDot: '4px',
  topBadgeColorDot: '-1px',
  widthBadgeColorDot: '6px',
  backgroundColorBadgepPocessing: '#007bff',
  fontSizeDefault: '14px',
};
BadgeColorDot.defaultProps = {
  defaultTheme: BadgeColorDotDefaultTheme,
};
export const BadgeSupCountDotDefaultTheme = {
  backgroundBadgeCountDot: '#f04134',
  boxShadowColorBadge: '#fff',
  colorBadge: '#fff',
  fontSizeSmall: '12px',
  boxShadowBadgeCountDot: '0 0 0 1px #fff',
};
BadgeSupCountDot.defaultProps = {
  defaultTheme: BadgeSupCountDotDefaultTheme,
};

BadgeWarp.defaultProps = {};

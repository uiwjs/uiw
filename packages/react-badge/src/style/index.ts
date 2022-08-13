import styled, { keyframes, css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const BadgeStyleTheme = {
  marginVerticalBadgeStyleColorDot: '0px',
  marginHorizontalBadgeStyleColorDot: '4px',
  topBadgeStyleColorDot: '-1px',
  widthBadgeStyleColorDot: '6px',
  backgroundColorBadgepPocessing: '#007bff',
  fontSizeDefault: '14px',
  backgroundBadgeCountDot: '#f04134',
  colorBadge: '#fff',
  fontSizeSmall: '12px',
  boxShadowBadgeCountDot: '0 0 0 1px #fff',
  topBadgeCountDot: '-4px',
  topBadgeCount: '-10px',
  heightBadgeCount: '16px',
  borderRadiusBadgeCount: '10px',
};

const propsTheme = {
  defaultTheme: { ...BadgeStyleTheme },
};

export interface BadgeStyleWarpProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    ThemeVariantValueOptions<typeof BadgeStyleTheme> {}

const keyframesStatusProcessing = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;
export interface BadgeStyleColorDotProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    ThemeVariantValueOptions<typeof BadgeStyleTheme> {
  processing?: boolean;
}
/** 展示 color  **/
export const BadgeStyleColorDot = styled.span<BadgeStyleColorDotProps>`
  line-height: inherit;
  vertical-align: baseline;
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  margin: ${(props) =>
    css`
      ${getThemeVariantValue({ ...props, ...propsTheme }, 'marginVerticalBadgeStyleColorDot')} ${getThemeVariantValue(
        props,
        'marginHorizontalBadgeStyleColorDot',
      )}
    `};
  width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthBadgeStyleColorDot')};
  height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthBadgeStyleColorDot')};
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
  top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'topBadgeStyleColorDot')};
  ${(props) => {
    if (props.processing) {
      return css`
        position: relative;
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorBadgepPocessing')};
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

export interface BadgeStyleSupCountDotBaseProps extends ThemeVariantValueOptions<typeof BadgeStyleTheme> {
  dot?: boolean;
  nowrap?: boolean;
}
/** 展示 count  **/
export const BadgeStyleSupCountDotBase = styled.sup<BadgeStyleSupCountDotBaseProps>`
  ${(props) =>
    !props.dot &&
    css`
      position: absolute;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'topBadgeCount')};
      height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'heightBadgeCount')};
      border-radius: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadiusBadgeCount')};
      min-width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'heightBadgeCount')};
      background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundBadgeCountDot')};
      color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorBadge')};
      line-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'heightBadgeCount')};
      text-align: center;
      padding: 0 5px;
      font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeSmall')};
      white-space: nowrap;
      -webkit-transform-origin: -10% center;
      transform-origin: -10% center;
      font-family: tahoma;
      box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowBadgeCountDot')};
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
      top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'topBadgeCountDot')};
      height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthBadgeStyleColorDot')};
      width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthBadgeStyleColorDot')};
      padding: 0;
      border-radius: 100%;
      background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundBadgeCountDot')};
      z-index: 10;
      box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowBadgeCountDot')};
    `}
`;

/** 最外层包裹 **/
export const BadgeStyleWarp = styled.span<BadgeStyleWarpProps>`
  position: relative;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
`;

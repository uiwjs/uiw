import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, ThemeVariantValueOptions } from '@uiw/utils';

export const TagDefaultTheme = {
  fontSizeSmall: '12px',
  backgroundColorTagStyleSvgHover: 'rgba(0, 0, 0, 0.22)',
  backgroundColorTagStyleSvgActive: 'rgba(0, 0, 0, 0.32)',
  backgroundColorTagStyleSvgLightActive: 'rgba(0, 0, 0, 0.15)',
  fillTagStyleSvgLightHover: '#fff',
};

export interface TagStyleSvgProps extends React.SVGProps<SVGSVGElement>, ThemeVariantValueOptions {
  isLight?: boolean;
}
export const TagStyleSvg = styled.svg<TagStyleSvgProps>`
  vertical-align: bottom;
  margin: 0px -3px 0 2px;
  border-radius: 2px;
  position: relative;
  top: -1px;
  fill: currentcolor;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagStyleSvgHover')};
  }
  &:active {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagStyleSvgActive')};
  }
  ${(props) =>
    props.isLight &&
    css`
      & {
        &:hover {
          background-color: currentcolor;
          path {
            fill: ${(props) => getThemeVariantValue(props, 'fillTagStyleSvgLightHover')};
          }
        }
        &:active {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagStyleSvgLightActive')};
        }
      }
    `}
`;
TagStyleSvg.defaultProps = { defaultTheme: TagDefaultTheme };
export interface TagStyleWarpProps extends HTMLSpanProps, ThemeVariantValueOptions {
  disabled?: boolean;
}
export const TagStyleWarp = styled.span<TagStyleWarpProps>`
  border-radius: 2px;
  display: inline-block;
  user-select: none;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
  padding: 1px 5px;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  & + & {
    margin-left: 5px;
  }
  ${(props) =>
    props.disabled &&
    css`
      & {
        opacity: 0.75;
        cursor: not-allowed;
      }
    `}
`;
TagStyleWarp.defaultProps = { defaultTheme: TagDefaultTheme };

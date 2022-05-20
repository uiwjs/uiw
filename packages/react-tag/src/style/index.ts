import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, ThemeVariantValueOptions } from '@uiw/utils';

export const TagDefaultTheme = {
  fontSizeSmall: '12px',
  backgroundColorTagSvgHover: 'rgba(0, 0, 0, 0.22)',
  backgroundColorTagSvgActive: 'rgba(0, 0, 0, 0.32)',
  backgroundColorTagSvgLightActive: 'rgba(0, 0, 0, 0.15)',
  fillTagSvgLightHover: '#fff',
};

export interface TagSvgProps extends React.SVGProps<SVGSVGElement>, ThemeVariantValueOptions {
  isLight?: boolean;
}
export const TagSvg = styled.svg<TagSvgProps>`
  vertical-align: bottom;
  margin: 0px -3px 0 2px;
  border-radius: 2px;
  position: relative;
  top: -1px;
  fill: currentcolor;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagSvgHover')};
  }
  &:active {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagSvgActive')};
  }
  ${(props) =>
    props.isLight &&
    css`
      & {
        &:hover {
          background-color: currentcolor;
          path {
            fill: ${(props) => getThemeVariantValue(props, 'fillTagSvgLightHover')};
          }
        }
        &:active {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorTagSvgLightActive')};
        }
      }
    `}
`;
TagSvg.defaultProps = { defaultTheme: TagDefaultTheme };
export interface TagWarpProps extends HTMLSpanProps, ThemeVariantValueOptions {
  disabled?: boolean;
}
export const TagWarp = styled.span<TagWarpProps>`
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
TagWarp.defaultProps = { defaultTheme: TagDefaultTheme };

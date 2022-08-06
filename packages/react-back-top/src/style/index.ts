import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const BackTopStyleWarpDefaultTheme = {
  bottomBackTop: '50px',
  rightBackTop: '50px',
};
export interface BackTopStyleWarpProps extends ThemeVariantValueOptions {
  visible?: boolean;
  fixed?: boolean;
  defaultTheme?: typeof BackTopStyleWarpDefaultTheme;
}

export const BackTopStyleWarp = styled.div<BackTopStyleWarpProps>`
  position: fixed;
  bottom: ${(props) => getThemeVariantValue(props, 'bottomBackTop')};
  right: ${(props) => getThemeVariantValue(props, 'rightBackTop')};
  cursor: pointer;
  z-index: 1006;
  transition: all 1s;
  ${(props) =>
    !props.fixed &&
    css`
      cursor: auto;
      position: static;
    `}
  ${(props) => {
    switch (props.visible) {
      case true:
        return css`
          opacity: 1;
        `;
      case false:
        return css`
          transition: all 1s;
          opacity: 0;
          height: 0px;
        `;
      default:
        return css``;
    }
  }}
`;

BackTopStyleWarp.defaultProps = {
  defaultTheme: BackTopStyleWarpDefaultTheme,
};

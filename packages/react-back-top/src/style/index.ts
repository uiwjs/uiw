import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export interface BackTopWarpProps extends ThemeVariantValueOptions {
  visible?: boolean;
  fixed?: boolean;
  defaultTheme?: {
    bottomBackTop: string;
    rightBackTop: string;
    [x: string]: string | number;
  };
}

export const BackTopWarp = styled.div<BackTopWarpProps>`
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
export const BackTopWarpDefaultTheme = {
  bottomBackTop: '50px',
  rightBackTop: '50px',
};
BackTopWarp.defaultProps = {
  defaultTheme: BackTopWarpDefaultTheme,
};

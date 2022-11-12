import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const BackTopStyleTheme = {
  bottomBackTop: '50px',
  rightBackTop: '50px',
};
const propsTheme = {
  defaultTheme: { ...BackTopStyleTheme },
};
export interface BackTopStyleWarpProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions<typeof BackTopStyleTheme> {
  visible?: boolean;
  fixed?: boolean;
}

export const BackTopStyleWarp = styled.div<BackTopStyleWarpProps>`
  position: fixed;
  bottom: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'bottomBackTop')};
  right: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'rightBackTop')};
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

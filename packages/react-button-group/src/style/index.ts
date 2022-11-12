import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { ButtonStyleWarp, ButtonStyleBaseLight } from '@uiw/react-button';

export const ButtonGroupStyleTheme = {
  boxShadowColorLightDefault: 'rgba(0, 0, 0, 0.17)',
};
const propsTheme = {
  defaultTheme: { ...ButtonGroupStyleTheme },
};
export interface ButtonGroupWarpProps extends ThemeVariantValueOptions<typeof ButtonGroupStyleTheme>, HTMLDivProps {
  vertical?: boolean;
}
export const ButtonGroupWarp = styled.div<ButtonGroupWarpProps>`
  ${ButtonStyleWarp} {
    border-radius: 0;
    box-shadow: inset 1px 0 0 0
        ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
      inset -1px 0 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
      inset -1px 0px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')};
  }
  ${ButtonStyleWarp}:last-child {
    border-radius: 0 3px 3px 0;
  }
  ${ButtonStyleWarp}:first-child {
    border-radius: 3px 0 0 3px;
  }
  ${ButtonStyleWarp}:first-child:last-child {
    border-radius: 3px !important;
  }
  ${ButtonStyleWarp}:focus {
    z-index: 2;
  }
  ${ButtonStyleWarp} + ${ButtonStyleWarp} {
    margin-left: -1px !important;
  }
  ${ButtonStyleWarp}:not(${ButtonStyleBaseLight}):first-child {
    box-shadow: inset -1px 0px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')} !important;
  }
  ${ButtonStyleWarp}:not(${ButtonStyleBaseLight}):last-child {
    box-shadow: inset 1px 0 0 0
        ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
      inset 0px 0 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')};
  }
  ${ButtonStyleBaseLight} {
    box-shadow: inset 0 1px 0 0
        ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
      inset 1px -1px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
      inset -1px 0px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')} !important;
  }
  ${(props) =>
    props.vertical &&
    css`
      ${ButtonStyleWarp}:not(${ButtonStyleBaseLight}) {
        box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
          inset 0 1px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')} !important;
      }
      ${ButtonStyleWarp}:not(${ButtonStyleBaseLight}):first-child {
        box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
          inset 0 0 0 0 ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')} !important;
      }
      ${ButtonStyleWarp} {
        width: 100%;
        display: block;
        & + ${ButtonStyleWarp} {
          margin-left: 0 !important;
          margin-top: -1px !important;
        }
        &:last-child {
          border-radius: 0 0 3px 3px;
        }
        &:first-child {
          border-radius: 3px 3px 0 0;
        }
      }
    `}
`;

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { ButtonWarp, ButtonBaseLight } from '@uiw/react-button';
export interface ButtonGroupWarpProps extends ThemeVariantValueOptions, HTMLDivProps {
  vertical?: boolean;
}
const Warp = styled.div<ButtonGroupWarpProps>`
  ${ButtonWarp} {
    border-radius: 0;
    box-shadow: inset 1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset -1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')};
  }
  ${ButtonWarp}:last-child {
    border-radius: 0 3px 3px 0;
  }
  ${ButtonWarp}:first-child {
    border-radius: 3px 0 0 3px;
  }
  ${ButtonWarp}:first-child:last-child {
    border-radius: 3px !important;
  }
  ${ButtonWarp}:focus {
    z-index: 2;
  }
  ${ButtonWarp} + ${ButtonWarp} {
    margin-left: -1px !important;
  }
  ${ButtonWarp}:not(${ButtonBaseLight}):first-child {
    box-shadow: inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
  }
  ${ButtonWarp}:not(${ButtonBaseLight}):last-child {
    box-shadow: inset 1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset 0px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')};
  }
  ${ButtonBaseLight} {
    box-shadow: inset 0 1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset 1px -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
  }
  ${(props) =>
    props.vertical &&
    css`
      ${ButtonWarp}:not(${ButtonBaseLight}) {
        box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
          inset 0 1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
      }
      ${ButtonWarp}:not(${ButtonBaseLight}):first-child {
        box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
          inset 0 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
      }
      ${ButtonWarp} {
        width: 100%;
        display: block;
        & + ${ButtonWarp} {
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

Warp.defaultProps = {
  defaultTheme: {
    boxShadowColorLightDefault: 'rgba(0, 0, 0, 0.17)',
  },
};
export default Warp;

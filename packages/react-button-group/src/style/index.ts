import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const Warp = styled.div<ThemeVariantValueOptions>`
  &.w-btn-group > .w-btn {
    border-radius: 0;
    box-shadow: inset 1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset -1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
      inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')};
  }
  &.w-btn-group > .w-btn:last-child {
    border-radius: 0 3px 3px 0;
  }
  &.w-btn-group > .w-btn:first-child {
    border-radius: 3px 0 0 3px;
  }
  &.w-btn-group > .w-btn:first-child:last-child {
    border-radius: 3px !important;
  }
  &.w-btn-group > .w-btn:focus {
    z-index: 2;
  }
  &.w-btn-group {
    .w-btn + .w-btn {
      margin-left: -1px !important;
    }
    .w-btn:not(.w-btn-light):first-child {
      box-shadow: inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
    }
    .w-btn:not(.w-btn-light):last-child {
      box-shadow: inset 1px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset 0px 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')};
    }
    .w-btn-light {
      box-shadow: inset 0 1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset 1px -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset -1px 0px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
    }
  }
  &.w-btn-group-vertical {
    .w-btn:not(.w-btn-light) {
      box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset 0 1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
    }
    .w-btn:not(.w-btn-light):first-child {
      box-shadow: inset 0 -1px 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset 0 0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowColorLightDefault')} !important;
    }
  }
  &.w-btn-group-vertical .w-btn {
    width: 100%;
    & + .w-btn {
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
`;

Warp.defaultProps = {
  defaultTheme: {
    boxShadowColorLightDefault: 'rgba(0, 0, 0, 0.17)',
  },
};
export default Warp;

import styled, { css } from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';
import { buttonVariant, getCommonCss, getloadingCss, getIconAndSizeCss } from './Variant';
import { ButtonType, ButtonSize } from '../';
export const ButtonStyleTheme = {
  colorButtonStyleBase: '#fff',
  // 大小设置
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',
  // 最小高度
  minHeightButtonSmall: '24px',
  minHeightButtonDefault: '30px',
  minHeightButtonLarge: '36px',
  // 按钮中图标大小
  fontSizeButtonIconSmall: '14px',
  fontSizeButtonIcontDefault: '16px',
  fontSizeButtonIconLarge: '20px',
  // 边框颜色 + 组件 + 组件属性 + 伪类
  borderColorLinghtLoadingBefore: '#666f81',
  colorButtonLoadingBefore: '#fff',

  // 颜色设置
  // Primary
  colorPrimary: '#fff',
  backgroundColorPrimary: '#008ef0',
  backgroundColorPrimaryHover: '#0070bd',
  boxShadowColorPrimaryFocus: 'rgba(0, 142, 240, 0.26)',
  backgroundColorPrimaryActive: '#00528a',
  backgroundColorPrimaryDisabled: '#57baff',
  boxShadowColorPrimaryBasic: '#000',
  backgroundColorPrimaryBasicHover: '#c7e8ff',
  colorPrimaryBasicDisabled: '#24a6ff',
  backgroundColorPrimaryBasicActive: '#94d3ff',

  // Success
  colorSuccess: '#fff',
  backgroundColorSuccess: '#28a745',
  backgroundColorSuccessHover: '#1e7e34',
  boxShadowColorSuccessFocus: 'rgba(40, 167, 69, 0.26)',
  backgroundColorSuccessActive: '#145523',
  backgroundColorSuccessDisabled: '#5dd879',
  boxShadowColorSuccessBasic: '#000',
  backgroundColorSuccessBasicHover: '#b7eec4',
  colorSuccessBasicDisabled: '#34ce57',
  backgroundColorSuccessBasicActive: '#8ee4a2',

  // Warning
  colorWarning: '#fff',
  backgroundColorWarning: '#ffc107',
  backgroundColorWarningHover: '#d39e00',
  boxShadowColorWarningFocus: 'rgba(255, 193, 7, 0.26)',
  backgroundColorWarningActive: '#a07800',
  backgroundColorWarningDisabled: '#ffdb6d',
  boxShadowColorWarningBasic: '#000',
  backgroundColorWarningBasicHover: '#fff7dd',
  colorWarningBasicDisabled: '#ffce3a',
  backgroundColorWarningBasicActive: '#ffeaaa',

  // Error
  colorError: '#fff',
  backgroundColorError: '#dc3545',
  backgroundColorErrorHover: '#bd2130',
  boxShadowColorErrorFocus: 'rgba(220, 53, 69, 0.26)',
  backgroundColorErrorActive: '#921925',
  backgroundColorErrorDisabled: '#eb8c95',
  boxShadowColorErrorBasic: '#000',
  backgroundColorErrorBasicHover: '#fceced',
  colorErrorBasicDisabled: '#e4606d',
  backgroundColorErrorBasicActive: '#f4c0c5',

  // Light
  colorLight: '#393e48',
  backgroundColorLight: '#f8f9fa',
  backgroundColorLightHover: '#dae0e5',
  boxShadowColorLightFocus: 'rgba(248, 249, 250, 0.26)',
  backgroundColorLightActive: '#bcc6cf',
  backgroundColorLightDisabled: '#ffffff',
  boxShadowColorLightBasic: '#000',
  backgroundColorLightBasicHover: '#ecedf0',
  colorLightBasicDisabled: '#adb3be',
  colorLightBasic: '#9199a7',
  backgroundColorLightBasicActive: '#d5d8dd',

  boxShadowColorLightDefault: 'rgba(0, 0, 0, 0.17)',
  boxShadowColorLight4: 'rgba(0, 0, 0, 0.1)',

  // Dark
  colorDark: '#fff',
  backgroundColorDark: '#393e48',
  backgroundColorDarkHover: '#22252c',
  boxShadowColorDarkFocus: 'rgba(57, 62, 72, 0.26)',
  backgroundColorDarkActive: '#0c0d0f',
  backgroundColorDarkDisabled: '#666f81',
  boxShadowColorDarkBasic: '#000',
  backgroundColorDarkBasicHover: '#a2a8b5',
  colorDarkBasicDisabled: '#505764',
  backgroundColorDarkBasicActive: '#858e9f',

  // Link
  colorLink: '#008ef0',
  colorLinkHover: '#008ef0',
  backgroundColorLink: 'transparent',
  backgroundColorLinkHover: 'rgba(0, 0, 0, 0)',
  boxShadowColorLinkFocus: 'rgba(0, 0, 0, 0)',
  backgroundColorLinkActive: 'rgba(0, 0, 0, 0)',
  backgroundColorLinkDisabled: 'rgba(51, 51, 51, 0)',
  boxShadowColorLinkBasic: '#000',
  backgroundColorLinkBasicHover: 'rgba(107, 107, 107, 0)',
  colorLinkBasicDisabled: 'rgba(26, 26, 26, 0)',
  backgroundColorLinkBasicActive: 'rgba(82, 82, 82, 0)',
  colorLinkNotDisabled: '#006ab3',
  colorLinkNotDisabledActive: '#002d4d',
};

export interface ButtonStyleBaseProps {
  defaultTheme?: Record<string, string | number>;
  theme?: Record<string, string | number>;
  param?: {
    size: ButtonSize;
    type: ButtonType;
    basic: boolean;
    loading: boolean;
    disabled: boolean;
    active: boolean;
    block: boolean;
    focus: boolean;
  };
}
const ButtonStyleBase = styled.button<ButtonStyleBaseProps>`
  user-select: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 7px;
  position: relative;
  vertical-align: middle;
  text-align: left;
  line-height: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  min-width: ${(props) => getThemeVariantValue(props, 'minHeightButtonDefault')};
  min-height: ${(props) => getThemeVariantValue(props, 'minHeightButtonDefault')};
  text-align: center;
  color: ${(props) => getThemeVariantValue(props, 'colorButtonStyleBase')};
  transition: background-color 0.5s, opacity 1s;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
  & + & {
    margin-left: 5px;
  }
  ${(props) =>
    props.param?.block &&
    css`
      & {
        display: block;
        width: 100%;
      }
      & + && {
        margin-left: 0;
      }
    `}
  ${(props) =>
    props.param?.disabled &&
    css`
      cursor: not-allowed;
    `}
  &[disabled] {
    cursor: not-allowed;
  }
`;
const ButtonStyleBasePrimary = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Primary' })}
`;
const ButtonStyleBaseSuccess = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Success' })}
`;
const ButtonStyleBaseDangers = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Error' })}
`;
const ButtonStyleBaseDark = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Dark' })}
`;
const ButtonStyleBaseLight = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => {
    const { focus, basic, active, disabled } = props.param || {};
    return css`
      box-shadow: inset 0 1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset 1px -1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
        inset -1px 0px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
      ${buttonVariant({ ...props, type: 'Light' })}
      ${getCommonCss(
        `
              outline: 0;
              box-shadow: inset 0 1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                inset 1px -1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                inset -1px 0px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                0 0 0 2px ${getThemeVariantValue(props, 'boxShadowColorLight4')};
        `,
        '&:focus',
        focus,
      )}
        ${basic &&
      css`
        color: ${getThemeVariantValue(props, 'colorLightBasic')} !important;
        &:focus {
          box-shadow: inset 0 0 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
        }
        ${focus &&
        css`
          box-shadow: inset 0 0 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
        `}
        &:hover {
          background-color: ${getThemeVariantValue(props, 'backgroundColorLightBasicHover')} !important;
        }
        ${getCommonCss(
          `
              color: ${getThemeVariantValue(props, 'colorLightBasic')};
              background-color: ${getThemeVariantValue(props, 'backgroundColorLightBasicActive')} !important;
              background-image: none;
                `,
          '&:active',
          active,
        )}
        ${getCommonCss(
          `
                background-color: transparent !important;
                color: ${getThemeVariantValue(props, 'colorLightBasicDisabled')};
                `,
          '&[disabled]',
          disabled,
        )}
      `}
        ${getCommonCss(
        `
          color: ${getThemeVariantValue(props, 'colorLightBasicDisabled')};
          z-index: 0;
          `,
        '&[disabled]',
        disabled,
      )}
      ${() => getIconAndSizeCss(props)}
      ${() => getloadingCss(props)}
    `;
  }}
`;
const ButtonStyleBaseLink = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => {
    const { disabled } = props.param || {};
    return css`
      ${buttonVariant({ ...props, type: 'Link' })};
      color: ${getThemeVariantValue(props, 'colorLink')} !important;
      &:hover:not([disabled]) {
        color: ${getThemeVariantValue(props, 'colorLinkNotDisabled')};
        text-decoration: underline;
      }
      ${getCommonCss(
        `
          color: ${getThemeVariantValue(props, 'colorLinkNotDisabledActive')};
          box-shadow: none;
          text-decoration: underline;
          `,
        '&:not([disabled]):active',
        disabled,
        '&:not([disabled]) ',
      )}
      &[disabled] {
        z-index: 0;
      }
      ${disabled &&
      css`
        z-index: 0;
      `}
    `;
  }}
`;
const ButtonStyleBaseWarning = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Warning' })}
`;

ButtonStyleBase.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBasePrimary.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseSuccess.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseDangers.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseDark.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseLight.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseLink.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};
ButtonStyleBaseWarning.defaultProps = {
  defaultTheme: { ...ButtonStyleTheme },
};

export {
  ButtonStyleBase,
  ButtonStyleBasePrimary,
  ButtonStyleBaseSuccess,
  ButtonStyleBaseDangers,
  ButtonStyleBaseDark,
  ButtonStyleBaseLight,
  ButtonStyleBaseLink,
  ButtonStyleBaseWarning,
};

import styled, { css } from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';
import { buttonTypes, buttonSizeCss } from './Variant';
import { ButtonType, ButtonSize } from '../';
export interface ButtonBaseProps {
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

const ButtonBase = styled.button<ButtonBaseProps>`
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
  color: ${(props) => getThemeVariantValue(props, 'colorButtonBase')};
  transition: background-color 0.5s, opacity 1s;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
  & + &:not(.block) {
    margin-left: 5px;
  }
  &.block {
    display: block;
    width: 100%;
  }
  &.disabled,
  &[disabled] {
    cursor: not-allowed;
  }
  ${buttonTypes}
  .w-icon {
    font-size: ${(props) => getThemeVariantValue(props, 'fontSizeButtonIcontDefault')};
  }
  ${buttonSizeCss}
  .w-icon:not(:last-child) {
    margin-right: 5px;
  }
  ${(props) =>
    props.param?.loading &&
    props.param.type === 'light' &&
    css`
      &::before {
        border: 1.2px solid ${(props) => getThemeVariantValue(props, 'borderColorLinghtLoadingBefore')};
      }
    `}
  ${(props) =>
    props.param?.loading &&
    css`
      &::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 1.2px solid ${(props) => getThemeVariantValue(props, 'colorButtonLoadingBefore')};
        color: ${(props) => getThemeVariantValue(props, 'colorButtonLoadingBefore')};
        margin: 0 3px 0 0;
        clip-path: polygon(0% 0%, 100% 0, 100% 30%, 0% 30%);
        animation: rotate 0.5s linear infinite;
        @keyframes rotate {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }
      }
    `}
`;

ButtonBase.defaultProps = {
  defaultTheme: {
    colorButtonBase: '#fff',
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
  },
};
export default ButtonBase;

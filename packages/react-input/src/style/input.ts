import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue, HTMLSpanProps } from '@uiw/utils';
import { InputProps } from 'src';
import { IconStyleBase } from '@uiw/react-icon';
export const InputStyleTheme = {
  colorInputStyleBase: '#393e48',
  boxShadowColorInputHBase: 'rgba(19, 124, 189, 0)',
  boxShadowColorInputInsHBase: 'rgba(16, 22, 26, 0.15)',
  boxShadowColorInputInsVBase: 'rgba(16, 22, 26, 0.2)',
  backgroundColorInputStyleBase: '#fff',
  heightInputDefault: '30px',
  fontSizeInputDefault: 'inherit',
  boxShadowColorInputHFocus: '#393e48',
  boxShadowColorInputVFocus: 'rgba(57, 62, 72, 0.17)',
  boxShadowColorInputHHover: '#6e6e6e',
  boxShadowColorInputVHover: 'rgba(57, 62, 72, 0)',
  backgrounColorInputDisabled: '#dddddd',
  colorInputDisabled: '#a5a5a5',

  topInputStyleAddonAfter: '3px',

  fontSizeDefault: '14px',
  fontSizeLarge: '16px',
  lineHeightInputsDefault: '14px',
  widthInputsDefault: '100%',
  lineHeightInputLarge: '36px',
  lineHeightInputSmall: '24px',
  lineHeightInputStyleAddonAfter: '16px',
};

const propsTheme = {
  defaultTheme: { ...InputStyleTheme },
};
export interface InputStyleBaseProps
  extends ThemeVariantValueOptions<typeof InputStyleTheme>,
    Pick<InputProps, 'size' | 'addonAfter' | 'disabled'> {}

export interface InputStyleAddonAfterProps extends ThemeVariantValueOptions<typeof InputStyleTheme>, HTMLSpanProps {}

export const InputStyleBase = styled.input<InputStyleBaseProps>`
  ${(props) => {
    const boxShadowColorInputStyleBase = getThemeVariantValue(
      { ...props, ...propsTheme },
      `boxShadowColorInputStyleBase`,
    );
    const boxShadowColorInputInsHBase = getThemeVariantValue(
      { ...props, ...propsTheme },
      `boxShadowColorInputInsHBase`,
    );
    const boxShadowColorInputInsVBase = getThemeVariantValue(
      { ...props, ...propsTheme },
      `boxShadowColorInputInsVBase`,
    );
    const boxShadowColorInputVFocus = getThemeVariantValue({ ...props, ...propsTheme }, `boxShadowColorInputVFocus`);
    const boxShadowColorInputHHover = getThemeVariantValue({ ...props, ...propsTheme }, `boxShadowColorInputHHover`);

    return css`
      outline: none;
      border: none;
      border-radius: 3px;
      box-shadow: 0 0 0 0 ${boxShadowColorInputStyleBase}, 0 0 0 0 ${boxShadowColorInputStyleBase},
        inset 0 0 0 1px ${boxShadowColorInputInsHBase}, inset 0 1px 1px ${boxShadowColorInputInsVBase};
      box-sizing: border-box;
      background: ${getThemeVariantValue({ ...props, ...propsTheme }, `backgroundColorInputStyleBase`)};
      height: ${getThemeVariantValue({ ...props, ...propsTheme }, `heightInputDefault`)};
      margin: 0 !important;
      padding: 0 10px;
      vertical-align: middle;
      line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, `heightInputDefault`)};
      color: ${getThemeVariantValue({ ...props, ...propsTheme }, `colorInputStyleBase`)};
      font-weight: 400;
      font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, `fontSizeInputDefault`)};
      transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
      appearance: none;
      &:not(:first-child) {
        padding-left: 26px;
      }
      &:focus {
        box-shadow: 0 0 0 1px ${getThemeVariantValue({ ...props, ...propsTheme }, `boxShadowColorInputHFocus`)},
          0 0 0 3px ${boxShadowColorInputVFocus}, inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:hover {
        box-shadow: 0 0 0 1px ${boxShadowColorInputHHover},
          0 0 0 3px ${getThemeVariantValue({ ...props, ...propsTheme }, `boxShadowColorInputVHover`)},
          inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:focus&:hover {
        box-shadow: 0 0 0 1px ${boxShadowColorInputHHover}, 0 0 0 3px ${boxShadowColorInputVFocus},
          inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:disabled {
        box-shadow: none;
        background: ${getThemeVariantValue({ ...props, ...propsTheme }, `backgrounColorInputDisabled`)};
        opacity: 0.75;
        color: ${getThemeVariantValue({ ...props, ...propsTheme }, `colorInputDisabled`)};
        cursor: not-allowed;
        resize: none;
      }
    `;
  }}
`;

export const InputStyleAddonAfter = styled.span<InputStyleAddonAfterProps>`
  ${(props) => {
    return css`
      position: absolute;
      top: ${getThemeVariantValue({ ...props, ...propsTheme }, `topInputStyleAddonAfter`)};
      right: ${getThemeVariantValue({ ...props, ...propsTheme }, `topInputStyleAddonAfter`)};
      display: flex;
      bottom: ${getThemeVariantValue({ ...props, ...propsTheme }, `topInputStyleAddonAfter`)};
      > * {
        display: flex !important;
        align-items: center;
      }
    `;
  }}
`;

export const InputStyleWarp = styled.div<InputStyleBaseProps>`
  position: relative;
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  line-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputsDefault')};
  width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthInputsDefault')};

  & ${InputStyleBase} {
    width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthInputsDefault')};
  }

  > ${IconStyleBase} {
    position: absolute;
    margin: 0 7px 0 7px;
    transform: translateY(-50%);
    top: 50%;
  }

  ${(props) => {
    if (props.size === 'large') {
      return css`
        font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeLarge')};
        ${InputStyleBase} {
          line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputLarge')};
          height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputLarge')};
        }
      `;
    }
  }}

  ${(props) => {
    if (props.size === 'small') {
      return css`
        min-width: 20px;
        ${InputStyleBase} {
          line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputSmall')};
          height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputSmall')};
          padding: 0 6px;
          &:not(:first-child) {
            padding-left: 26px;
          }
        }
        ${InputStyleAddonAfter} {
          > * {
            line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputStyleAddonAfter')};
            min-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightInputStyleAddonAfter')};
          }
        }
      `;
    }
  }}
`;

export default InputStyleWarp;

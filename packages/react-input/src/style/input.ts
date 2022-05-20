import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { InputProps } from 'src';

interface InputWarp extends ThemeVariantValueOptions, Pick<InputProps, 'size' | 'addonAfter' | 'disabled'> {}

export const Input = styled.input<InputWarp>`
  ${(props) => {
    const boxShadowColorInputBase = getThemeVariantValue(props, `boxShadowColorInputBase`);
    const boxShadowColorInputInsHBase = getThemeVariantValue(props, `boxShadowColorInputInsHBase`);
    const boxShadowColorInputInsVBase = getThemeVariantValue(props, `boxShadowColorInputInsVBase`);
    const boxShadowColorInputVFocus = getThemeVariantValue(props, `boxShadowColorInputVFocus`);
    const boxShadowColorInputHHover = getThemeVariantValue(props, `boxShadowColorInputHHover`);

    return css`
      outline: none;
      border: none;
      border-radius: 3px;
      box-shadow: 0 0 0 0 ${boxShadowColorInputBase}, 0 0 0 0 ${boxShadowColorInputBase},
        inset 0 0 0 1px ${boxShadowColorInputInsHBase}, inset 0 1px 1px ${boxShadowColorInputInsVBase};
      box-sizing: border-box;
      background: ${getThemeVariantValue(props, `backgroundColorInputBase`)};
      height: ${getThemeVariantValue(props, `heightInputDefault`)};
      margin: 0 !important;
      padding: 0 10px;
      vertical-align: middle;
      line-height: ${getThemeVariantValue(props, `heightInputDefault`)};
      color: ${getThemeVariantValue(props, `colorInputBase`)};
      font-weight: 400;
      font-size: ${getThemeVariantValue(props, `fontSizeInputDefault`)};
      transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
      appearance: none;
      &:not(:first-child) {
        padding-left: 26px;
      }
      &:focus {
        box-shadow: 0 0 0 1px ${getThemeVariantValue(props, `boxShadowColorInputHFocus`)},
          0 0 0 3px ${boxShadowColorInputVFocus}, inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:hover {
        box-shadow: 0 0 0 1px ${boxShadowColorInputHHover},
          0 0 0 3px ${getThemeVariantValue(props, `boxShadowColorInputVHover`)},
          inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:focus&:hover {
        box-shadow: 0 0 0 1px ${boxShadowColorInputHHover}, 0 0 0 3px ${boxShadowColorInputVFocus},
          inset 0 1px 1px ${boxShadowColorInputInsVBase};
      }
      &:disabled {
        box-shadow: none;
        background: ${getThemeVariantValue(props, `backgrounColorInputDisabled`)};
        opacity: 0.75;
        color: ${getThemeVariantValue(props, `colorInputDisabled`)};
        cursor: not-allowed;
        resize: none;
      }
    `;
  }}
`;

export const InputAddonAfter = styled.span<InputWarp>`
  ${(props) => {
    return css`
      position: absolute;
      top: ${getThemeVariantValue(props, `topInputAddonAfter`)};
      right: ${getThemeVariantValue(props, `topInputAddonAfter`)};
      display: flex;
      bottom: ${getThemeVariantValue(props, `topInputAddonAfter`)};
      > * {
        display: flex !important;
        align-items: center;
      }
    `;
  }}
`;

const InputWarp = styled.div<InputWarp>`
  position: relative;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightInputsDefault')};
  width: ${(props) => getThemeVariantValue(props, 'widthInputsDefault')};

  & ${Input} {
    width: ${(props) => getThemeVariantValue(props, 'widthInputsDefault')};
  }

  > .w-icon {
    position: absolute;
    margin: 0 7px 0 7px;
    transform: translateY(-50%);
    top: 50%;
  }

  ${(props) => {
    if (props.size === 'large') {
      return css`
        font-size: ${getThemeVariantValue(props, 'fontSizeLarge')};
        ${Input} {
          line-height: ${getThemeVariantValue(props, 'lineHeightInputLarge')};
          height: ${getThemeVariantValue(props, 'lineHeightInputLarge')};
        }
      `;
    }
  }}

  ${(props) => {
    if (props.size === 'small') {
      return css`
        min-width: 20px;
        ${Input} {
          line-height: ${getThemeVariantValue(props, 'lineHeightInputSmall')};
          height: ${getThemeVariantValue(props, 'lineHeightInputSmall')};
          padding: 0 6px;
          &:not(:first-child) {
            padding-left: 26px;
          }
        }
        ${InputAddonAfter} {
          > * {
            line-height: ${getThemeVariantValue(props, 'lineHeightInputAddonAfter')};
            min-height: ${getThemeVariantValue(props, 'lineHeightInputAddonAfter')};
          }
        }
      `;
    }
  }}
`;

Input.defaultProps = {
  defaultTheme: {
    colorInputBase: '#393e48',
    boxShadowColorInputHBase: 'rgba(19, 124, 189, 0)',
    boxShadowColorInputInsHBase: 'rgba(16, 22, 26, 0.15)',
    boxShadowColorInputInsVBase: 'rgba(16, 22, 26, 0.2)',
    backgroundColorInputBase: '#fff',
    heightInputDefault: '30px',
    fontSizeInputDefault: 'inherit',
    boxShadowColorInputHFocus: '#393e48',
    boxShadowColorInputVFocus: 'rgba(57, 62, 72, 0.17)',
    boxShadowColorInputHHover: '#6e6e6e',
    boxShadowColorInputVHover: 'rgba(57, 62, 72, 0)',
    backgrounColorInputDisabled: '#dddddd',
    colorInputDisabled: '#a5a5a5',
  },
};

InputAddonAfter.defaultProps = {
  defaultTheme: {
    topInputAddonAfter: '3px',
  },
};

InputWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    fontSizeLarge: '16px',
    lineHeightInputsDefault: '14px',
    widthInputsDefault: '100%',
    lineHeightInputLarge: '36px',
    lineHeightInputSmall: '24px',
    lineHeightInputAddonAfter: '16px',
  },
};

export default InputWarp;

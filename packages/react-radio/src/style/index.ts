import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue, IProps, HTMLInputProps, HTMLDivProps } from '@uiw/utils';

export const RadioStyleTheme = {
  backgroundColorBase: '#fff',
  fontSizeSamll: '12px',
  colorRadioDefault: '#c7c7c7',
  colorNotCheckedNotDisabledDefault: '#cecece',
  widthRadioDefault: '16px',
  heightRadioDefault: '16px',
  borderRadioDefault: '1.2px solid #d7d7d7',
  borderRadioCheckedDefault: '5px solid #008ef0',
};
type ThemeVar = ThemeVariantValueOptions<typeof RadioStyleTheme>;

export interface RadioBaseProps extends ThemeVar, IProps, Omit<HTMLInputProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked: boolean;
  disabled: boolean;
}

export const RadioInputStyleBase = styled.input``;

const RadioText = styled.div<HTMLDivProps>`
  vertical-align: middle;
  display: inline-block;
  margin-left: 4px;
  margin-right: 5px;
  font-size: 14px;
`;

const RadioBase = styled.label<RadioBaseProps>`
  ${(props) => {
    const disabled = props?.disabled;
    return css`
      color: ${disabled && getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'colorRadioDefault')};
      cursor: ${disabled && 'not-allowed'};
      vertical-align: middle;
      display: inline-block;
      font-size: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'fontSizeSamll')};
      input[type='radio'] {
        outline: none;
        position: relative;
        width: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'widthRadioDefault')};
        height: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'heightRadioDefault')};
        background-clip: border-box;
        appearance: none;
        margin-top: -1.5px;
        margin-right: 1px;
        border-radius: 50%;
        background-color: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'backgroundColorBase')};
        border: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'borderRadioDefault')};
        transition: border 0.25s, box-shadow 0.25s;
        vertical-align: middle;
        cursor: ${disabled && 'not-allowed'};
        &:not(:checked):not(:disabled):not(.disabled) {
          background-color: ${disabled &&
          getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'colorNotCheckedNotDisabledDefault')};
          &:hover,
          &:focus {
            box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.25);
          }
        }
        &:checked {
          border: ${getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'borderRadioCheckedDefault')};
          &:focus {
            box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.25);
          }
          border-color: ${disabled &&
          getThemeVariantValue({ ...props, defaultTheme: RadioStyleTheme }, 'colorNotCheckedNotDisabledDefault')};
        }
      }
    `;
  }}
`;
const RadioGroupBase = styled.div`
  font-size: 0;
`;

export { RadioText, RadioBase, RadioGroupBase };

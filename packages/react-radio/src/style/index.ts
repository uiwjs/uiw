import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue, IProps, HTMLInputProps } from '@uiw/utils';

export interface RadioBaseProps extends ThemeVariantValueOptions, IProps, Omit<HTMLInputProps, 'size'> {
  size?: 'large' | 'default' | 'small';
  checked: boolean;
  disabled: boolean;
}

const RadioText = styled.div`
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
      color: ${disabled && getThemeVariantValue(props, 'colorRadioDefault')};
      cursor: ${disabled && 'not-allowed'};
      vertical-align: middle;
      display: inline-block;
      font-size: ${getThemeVariantValue(props, 'fontSizeSamll')};
      input[type='radio'] {
        outline: none;
        position: relative;
        width: ${getThemeVariantValue(props, 'widthRadioDefault')};
        height: ${getThemeVariantValue(props, 'heightRadioDefault')};
        background-clip: border-box;
        appearance: none;
        margin: -0.15px 0.6px 0 0;
        border-radius: 50%;
        background-color: ${getThemeVariantValue(props, 'backgroundColorBase')};
        border: ${getThemeVariantValue(props, 'borderRadioDefault')};
        transition: border 0.25s, box-shadow 0.25s;
        cursor: ${disabled && 'not-allowed'};
        &:not(:checked):not(:disabled):not(.disabled) {
          background-color: ${disabled && getThemeVariantValue(props, 'colorNotCheckedNotDisabledDefault')};
          &:hover,
          &:focus {
            box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.25);
          }
        }
        &:checked {
          border: ${disabled && getThemeVariantValue(props, 'borderRadioCheckedDefault')};
          &:focus {
            box-shadow: 0 0 0 2px rgba(0, 142, 240, 0.25);
          }
        }
      }
    `;
  }}
`;
const RadioGroupBase = styled.div`
  font-size: 0;
`;

RadioBase.defaultProps = {
  defaultTheme: {
    backgroundColorBase: '#fff',
    fontSizeSamll: '12px',
    colorRadioDefault: '#c7c7c7',
    colorNotCheckedNotDisabledDefault: '#efefef',
    widthRadioDefault: '16px',
    heightRadioDefault: '16px',
    borderRadioDefault: '1.2px solid #d7d7d7',
    borderRadioCheckedDefault: '5px solid #008ef0',
  },
};

export { RadioText, RadioBase, RadioGroupBase };

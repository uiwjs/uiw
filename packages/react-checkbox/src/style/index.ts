import styled, { css } from 'styled-components';
import { RadioAbstractProps, RadioText } from '@uiw/react-radio';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const CheckboxStyleTheme = {
  boxShadowCheckboxChecked: 'inset 0 0 0 1px rgb(0, 142, 240)',
  backgroundColorCheckboxChecked: '#008df8',
  backgroundColorCheckboxBase: '#d7d7d7',
  colorCheckboxDisabled: '#6e6e6e',
  borderColorCheckboxChecked: '#fff',
  boxShadowCheckboxHover: 'inset 0 1px 2px rgba(16, 22, 26, 0.35)',
};

export interface CheckboxStyleBaseProps
  extends RadioAbstractProps,
    ThemeVariantValueOptions<typeof CheckboxStyleTheme> {
  disabled?: boolean;
  indeterminate?: boolean;
}

const disabledCss = ({ disabled, ...rest }: CheckboxStyleBaseProps) => {
  return (
    disabled &&
    css`
      input[type='checkbox'] {
        cursor: not-allowed;
        opacity: 0.5;
      }
      ${RadioText} {
        color: ${() => getThemeVariantValue({ ...rest }, 'colorCheckboxDisabled')};
      }
    `
  );
};

const indeterminateCss = ({ indeterminate, ...rest }: CheckboxStyleBaseProps) => {
  return (
    indeterminate &&
    css`
      input[type='checkbox']:checked {
        background-color: transparent;
        box-shadow: ${() => getThemeVariantValue({ ...rest }, 'boxShadowCheckboxChecked')};
        &:after {
          display: inline-block;
          background-color: ${() => getThemeVariantValue({ ...rest }, 'backgroundColorCheckboxChecked')};
          box-sizing: inherit;
          transform: rotate(0);
          position: relative;
          top: -1px;
          right: -3px;
          border-width: 0;
          border-radius: 2px;
          height: 8px;
          width: 8px;
        }
      }
    `
  );
};

const CheckGroupStyleBase = styled.div<CheckboxStyleBaseProps>`
  vertical-align: middle;
  font-size: 0;
  cursor: pointer;
  white-space: nowrap;
`;

const CheckboxStyleBase = styled.div<CheckboxStyleBaseProps>`
  display: inline-block;
  input[type='checkbox'] {
    vertical-align: middle;
    outline: none;
    width: 14px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    border-radius: 2px;
    background-clip: border-box;
    appearance: none;
    margin: 0 !important;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCheckboxBase')};
    transition: background-color 0.3s, box-shadow 0.3s;
    &:after {
      content: '';
      box-sizing: inherit;
    }
    &:not(:checked):not(:disabled):not(.disabled) {
      &:focus,
      &:hover {
        box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowCheckboxHover')};
      }
    }
  }
  ${disabledCss}
  ${indeterminateCss}
  input[type='checkbox']:checked {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCheckboxChecked')};
    &:after {
      transition: background-color 0.2s ease-in;
      display: inline-block;
      border: solid ${(props) => getThemeVariantValue(props, 'borderColorCheckboxChecked')};
      border-width: 0 2px 2px 0;
      transform: rotate(33deg);
      position: relative;
      top: -1px;
      right: -4px;
      height: 10px;
      width: 6px;
    }
  }
  ${RadioText} {
    display: inline-block;
    padding-left: 4px;
    margin-right: 5px;
    font-size: 14px;
  }
`;

CheckboxStyleBase.defaultProps = {
  defaultTheme: CheckboxStyleTheme,
};

export { CheckGroupStyleBase, CheckboxStyleBase };

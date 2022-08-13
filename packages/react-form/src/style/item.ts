import styled, { css } from 'styled-components';
import { HTMLInputProps, ThemeVariantValueOptions, HTMLDivProps, getThemeVariantValue } from '@uiw/utils';
import { InputStyleBase } from '@uiw/react-input';
import { SelectStyleWarp } from '@uiw/react-select';
import { TextareaStyleWarp } from '@uiw/react-textarea';

export const FormStyleTheme = {
  colorFormStyleHelpStyleBase: '#c2c2c2',
  colorFormStyleItemErrorBase: '#dc3545',
  boxShadowFormStyleItemErrorBase:
    '0 0 0 1px #dc3545, 0 0 0 3px rgba(220, 53, 69, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
};

interface FormStyleItemProps extends HTMLInputProps, ThemeVariantValueOptions<typeof FormStyleTheme> {
  hasError?: boolean;
}

export const LabelStyle = styled.label`
  line-height: 32px;
  min-height: 32px;
  font-weight: 600;
  font-size: 14px;
  padding-right: 5px;
  label {
    display: inline-block;
  }
`;

export interface FormStyleHelpStyleProps extends HTMLDivProps, ThemeVariantValueOptions<typeof FormStyleTheme> {}

export const FormStyleHelpStyle = styled.div`
  color: ${(props) => getThemeVariantValue(props, 'colorFormStyleHelpStyleBase')};
  font-size: 12px;
  padding-top: 3px;
`;
export const FormStyleRowStyle = styled.div`
  align-items: center;
  display: flex;
`;

export const FormStyleItem = styled.div<FormStyleItemProps>`
  margin-bottom: 10px;
  ${(props) =>
    props.hasError &&
    css`
      ${InputStyleBase},${SelectStyleWarp},${TextareaStyleWarp} {
        box-shadow: ${() => getThemeVariantValue(props, 'boxShadowFormStyleItemErrorBase')};
        &:hover {
          box-shadow: ${() => getThemeVariantValue(props, 'boxShadowFormStyleItemErrorBase')};
        }
        &:focus,
        &:hover {
          box-shadow: ${() => getThemeVariantValue(props, 'boxShadowFormStyleItemErrorBase')};
        }
      }
      ${LabelStyle}, ${FormStyleHelpStyle} {
        color: ${() => getThemeVariantValue(props, 'colorFormStyleItemErrorBase')};
      }
    `}
`;

FormStyleItem.defaultProps = {
  defaultTheme: FormStyleTheme,
};

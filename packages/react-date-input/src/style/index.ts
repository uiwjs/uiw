import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import styled, { css } from 'styled-components';
import { DatePickerProps } from '@uiw/react-date-picker';
import { InputProps, InputStyleBase } from '@uiw/react-input';
import { IconStyleBase, IconStyleBaseProps } from '@uiw/react-icon';

export const DateInputStyleTheme = {
  fillDateInputCloseBase: '#a5a5a5',
  fillDateInputCloseHover: '#393e48',

  borderRadiusDefault: '3px',
  colorDateInputStyleBase: '#393e48',
  backgroundColorBase: '#fff',
  backgroundColorDateInputDisabled: '#dddddd',
  colorDateInputDisabled: '#a5a5a5',
  boxShadowDateInputBase:
    '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowDateInputFocus: '0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowDateInputHover: '0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowDateInputFocusHover:
    ' 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);',
};

const propsTheme = {
  defaultTheme: { ...DateInputStyleTheme },
};

export interface DateInputDatePickerPopoverProps extends DatePickerProps {}
export const DateInputStyleDatePickerPopover = styled.div<DateInputDatePickerPopoverProps>`
  box-shadow: 0 0 0 0;
`;

export interface DateInputStyleBaseProps extends InputProps {}
export const DateInputStyleBase = styled.input<DateInputStyleBaseProps>`
  display: inline-block;
  ${(props) =>
    props.disabled &&
    css`
      &::before {
        cursor: not-allowed;
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
      }
    `}
`;

export interface DateInputIconStyleWarpProps
  extends IconStyleBaseProps,
    ThemeVariantValueOptions<typeof DateInputStyleTheme> {
  closebtn?: boolean;
}

export const DateInputIconStyleWarp = styled(IconStyleBase)<DateInputIconStyleWarpProps>`
  ${(props) =>
    props.closebtn &&
    css`
      & {
        display: flex;
        margin: 0 3px;
        fill: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fillDateInputCloseBase')};
        cursor: pointer;
        &:hover {
          fill: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fillDateInputCloseHover')};
        }
      }
    `}
`;

export interface DateInputIconProps {
  spin?: boolean;
}
export const DateInputIcon = styled.div<DateInputIconProps>`
  height: 1em;
  width: 1em;
`;

export interface DateTimeInputProps extends HTMLDivProps, ThemeVariantValueOptions<typeof DateInputStyleTheme> {}

export const DateInputRangeStyleWarp = styled.div<DateTimeInputProps>`
  display: flex;
  justify-content: space-between;

  input {
    box-shadow: none;
    padding: 0px;
    height: 20px;
  }

  ${InputStyleBase} {
    &:hover {
      box-shadow: none !important;
    }

    &:focus {
      box-shadow: none !important;
    }
  }

  outline: none;
  border: none;
  align-items: center;
  border-radius: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadiusDefault')};
  box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowDateInputBase')};
  box-sizing: border-box;
  background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorBase')};
  min-height: 30px;
  margin: 0 !important;
  padding: 3px 10px 3px 10px;
  vertical-align: middle;
  line-height: 30px;
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDateInputStyleBase')};
  font-weight: 400;
  font-size: inherit;
  transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;

  &:focus {
    box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowDateInputFocus')};
  }

  &:hover {
    box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowDateInputHover')};
  }

  &:focus&:hover {
    box-shadow: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowDateInputFocusHover')};
  }

  &:disabled {
    box-shadow: none;
    background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDateInputDisabled')};
    opacity: 0.75;
    color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDateInputDisabled')};
    cursor: not-allowed;
    resize: none;
  }
`;

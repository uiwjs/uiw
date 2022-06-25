import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import styled, { css } from 'styled-components';
import { DatePickerProps } from '@uiw/react-date-picker';
import { InputProps, InputBase } from '@uiw/react-input';

export interface DateInputDatePickerPopoverProps extends DatePickerProps {}
export const DateInputDatePickerPopover = styled.div<DateInputDatePickerPopoverProps>`
  box-shadow: 0 0 0 0;
`;

export interface DateInputBaseProps extends InputProps {}
export const DateInputBase = styled.input<DateInputBaseProps>`
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

export interface DateInputIconWarpProps extends ThemeVariantValueOptions {
  spin?: boolean;
  baseline?: boolean;
  closebtn?: boolean;
}

export const DateInputIconWarp = styled.span<DateInputIconWarpProps>`
  height: 1em;
  width: 1em;
  display: inline-flex;
  align-self: center;
  position: relative;
  transition: color 0.3s;
  box-sizing: inherit;

  ${(props) =>
    props.baseline &&
    css`
      & {
        top: 0.125em;
      }
    `}

  ${(props) =>
    props.closebtn &&
    css`
      & {
        display: flex;
        margin: 0 3px;
        fill: ${(props) => getThemeVariantValue(props, 'fillDateInputCloseBase')};
        cursor: pointer;
        &:hover {
          fill: ${(props) => getThemeVariantValue(props, 'fillDateInputCloseHover')};
        }
      }
    `}
`;

DateInputIconWarp.defaultProps = {
  defaultTheme: {
    fillDateInputCloseBase: '#a5a5a5',
    fillDateInputCloseHover: '#393e48',
  },
};
export interface DateInputIconProps {
  spin?: boolean;
}
export const DateInputIcon = styled.div<DateInputIconProps>`
  height: 1em;
  width: 1em;
`;

export interface DateTimeInputProps extends HTMLDivProps, ThemeVariantValueOptions {}

export const DateInputRangeWarp = styled.div<DateTimeInputProps>`
  display: flex;
  justify-content: space-between;

  input {
    box-shadow: none;
    padding: 0px;
    height: 20px;
  }

  ${InputBase} {
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
  border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusDefault')};
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  box-sizing: border-box;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  min-height: 30px;
  margin: 0 !important;
  padding: 3px 10px 3px 10px;
  vertical-align: middle;
  line-height: 30px;
  color: ${(props) => getThemeVariantValue(props, 'colorDateInputBase')};
  font-weight: 400;
  font-size: inherit;
  transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }

  &:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }

  &:focus&:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }

  &:disabled {
    box-shadow: none;
    background: ${(props) => getThemeVariantValue(props, 'backgroundColorDateInputDisabled')};
    opacity: 0.75;
    color: ${(props) => getThemeVariantValue(props, 'colorDateInputDisabled')};
    cursor: not-allowed;
    resize: none;
  }
`;

DateInputRangeWarp.defaultProps = {
  defaultTheme: {
    borderRadiusDefault: '3px',
    colorDateInputBase: '#393e48',
    backgroundColorBase: '#fff',
    backgroundColorDateInputDisabled: '#dddddd',
    colorDateInputDisabled: '#a5a5a5',
  },
};

import styled, { css } from 'styled-components';
import {
  ThemeVariantValueOptions,
  HTMLDivProps,
  HTMLInputProps,
  HTMLButtonProps,
  HTMLLiProps,
  getThemeVariantValue,
} from '@uiw/utils';

export const DateTimePickerStyleTheme = {
  borderLeftColorDateTimeStylePanelUl: '#e9e9e9',

  colorDateTimeLi: '#393e48',
  colorDateTimeLiDisabled: '#d4d4d4',
  colorDateTimeLiSelected: '#000',
  backgroundColorDateTimeLiSelect: '#f1f1f1',
  backgroundColorDateTimeLiHover: '#f6f8fa',
  backgroundColorDateTimeLiActive: '#e1e5e8',

  colorDateTimeStyleCloseButton: '#a5a5a5',
  colorDateTimeStyleCloseButtonHover: '#393e48',
};
type ThemeVar = ThemeVariantValueOptions<typeof DateTimePickerStyleTheme>;

export interface DateTimeInputProps extends HTMLInputProps, ThemeVar {}
export const DateTimeInput = styled.input``;
export interface DateTimeStyleCloseButtonProps extends HTMLButtonProps, ThemeVar {
  disabled?: boolean;
}
/** dateTime 清空按钮 **/
export const DateTimeStyleCloseButton = styled.button<DateTimeStyleCloseButtonProps>`
  ${DateTimeInput}.disabled & {
    display: none !important;
  }
  ${DateTimeInput} & {
    display: none;
    min-height: initial;
    color: ${(props) => getThemeVariantValue(props, 'colorDateTimeStyleCloseButton')};
    &:hover {
      color: ${(props) => getThemeVariantValue(props, 'colorDateTimeStyleCloseButtonHover')};
      background-color: transparent !important;
    }
  }
`;

DateTimeStyleCloseButton.defaultProps = {
  defaultTheme: DateTimePickerStyleTheme,
};

export const DateTimeStylePanelUl = styled.ul`
  list-style: none;
  min-width: 56px;
  margin: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 162px !important;
`;
export interface DateTimeStylePanelLiProps extends HTMLLiProps, ThemeVariantValueOptions {
  disabled?: boolean;
  selected?: boolean;
}
export const DateTimeStylePanelLi = styled.li<DateTimeStylePanelLiProps>`
  & + & {
    margin-top: 0 !important;
  }
  & {
    cursor: pointer;
    text-align: center;
    height: 28px;
    line-height: 28px;
    transition: all 0.3s;
    color: ${(props) => getThemeVariantValue(props, 'colorDateTimeLi')};
    ${(props) =>
      !props.disabled &&
      css`
        &:hover {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDateTimeLiHover')};
        }
        &:active {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDateTimeLiActive')};
        }
      `}
    ${(props) =>
      props.selected &&
      css`
        & {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDateTimeLiSelect')};
          font-weight: bold;
          color: ${(props) => getThemeVariantValue(props, 'colorDateTimeLiSelected')};
        }
      `}
    ${(props) =>
      props.disabled &&
      css`
        & {
          color: ${(props) => getThemeVariantValue(props, 'colorDateTimeLiDisabled')};
          cursor: not-allowed;
          &.hide {
            display: none;
          }
        }
      `}
  }
`;

DateTimeStylePanelLi.defaultProps = {
  defaultTheme: DateTimePickerStyleTheme,
};

export interface DateTimeStylePanelProps extends HTMLDivProps, ThemeVariantValueOptions {}

export const DateTimeStylePanel = styled.div<DateTimeStylePanelProps>`
  max-height: 189px;
  flex: 1;
  overflow: auto;
  font-size: 14px;
  &:hover {
    overflow: auto;
  }
  & + & {
    ul {
      border-left: 1px solid ${(props) => getThemeVariantValue(props, 'borderLeftColorDateTimeStylePanelUl')};
    }
  }
`;

DateTimeStylePanel.defaultProps = {
  defaultTheme: DateTimePickerStyleTheme,
};

export interface DateTimeStyleBaseProps extends HTMLDivProps, ThemeVariantValueOptions {}
export const DateTimeStyleBase = styled.div`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

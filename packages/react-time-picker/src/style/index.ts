import styled, { css } from 'styled-components';
import {
  ThemeVariantValueOptions,
  HTMLDivProps,
  HTMLInputProps,
  HTMLButtonProps,
  HTMLLiProps,
  getThemeVariantValue,
} from '@uiw/utils';

export interface DateTimeInputProps extends HTMLInputProps, ThemeVariantValueOptions {}
export const DateTimeInput = styled.input``;
export interface DateTimeCloseButtonProps extends HTMLButtonProps, ThemeVariantValueOptions {
  disabled?: boolean;
}
/** dateTime 清空按钮 **/
export const DateTimeCloseButton = styled.button<DateTimeCloseButtonProps>`
  ${DateTimeInput}.disabled & {
    display: none !important;
  }
  ${DateTimeInput} & {
    display: none;
    min-height: initial;
    color: ${(props) => getThemeVariantValue(props, 'colorDateTimeCloseButton')};
    &:hover {
      color: ${(props) => getThemeVariantValue(props, 'colorDateTimeCloseButtonHover')};
      background-color: transparent !important;
    }
  }
`;

const DateTimeCloseButtonDefaultTheme = {
  colorDateTimeCloseButton: '#a5a5a5',
  colorDateTimeCloseButtonHover: '#393e48',
};

DateTimeCloseButton.defaultProps = {
  defaultTheme: DateTimeCloseButtonDefaultTheme,
};

export const DateTimePanelUl = styled.ul`
  list-style: none;
  min-width: 56px;
  margin: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-bottom: 162px !important;
`;
export interface DateTimePanelLiProps extends HTMLLiProps, ThemeVariantValueOptions {
  disabled?: boolean;
  selected?: boolean;
}
export const DateTimePanelLi = styled.li<DateTimePanelLiProps>`
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

const DateTimePanelLiDefaultTheme = {
  colorDateTimeLi: '#393e48',
  colorDateTimeLiDisabled: '#d4d4d4',
  colorDateTimeLiSelected: '#000',
  backgroundColorDateTimeLiSelect: '#f1f1f1',
  backgroundColorDateTimeLiHover: '#f6f8fa',
  backgroundColorDateTimeLiActive: '#e1e5e8',
};

DateTimePanelLi.defaultProps = {
  defaultTheme: DateTimePanelLiDefaultTheme,
};

export interface DateTimePanelProps extends HTMLDivProps, ThemeVariantValueOptions {}

export const DateTimePanel = styled.div<DateTimePanelProps>`
  max-height: 189px;
  flex: 1;
  overflow: auto;
  font-size: 14px;
  &:hover {
    overflow: auto;
  }
  & + & {
    ul {
      border-left: 1px solid ${(props) => getThemeVariantValue(props, 'borderLeftColorDateTimePanelUl')};
    }
  }
`;
const DateTimePanelDefaultTheme = {
  borderLeftColorDateTimePanelUl: '#e9e9e9',
};

DateTimePanel.defaultProps = {
  defaultTheme: DateTimePanelDefaultTheme,
};

export interface DateTimeBaseProps extends HTMLDivProps, ThemeVariantValueOptions {}
export const DateTimeBase = styled.div`
  overflow: hidden;
  border-radius: 4px;
  display: flex;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

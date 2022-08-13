import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { DatePickerStyleTheme } from './theme';

export interface DatePickerStyleCaptionPaneBaseProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  prev?: boolean;
  next?: boolean;
}
/** 基础的**/
export const DatePickerStyleCaptionPaneBase = styled.div<DatePickerStyleCaptionPaneBaseProps>`
  transition: background-color 0.3s;
  display: inline-block;
  border-radius: 3px;
  padding: 1px 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
  }
  &:active {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerActive')};
  }
  ${(props) =>
    (props.prev || props.next) &&
    css`
      & {
        z-index: 30;
        position: relative;
        padding: 1px 8px 6px 8px;
        &::after,
        &::before {
          content: '';
          display: block;
          height: 8px;
          width: 2px;
          border-radius: 2px;
          background-color: ${(props) =>
            getThemeVariantValue(props, 'backgroundColorDatePickerStyleCaptionPanePrevBefore')};
        }
        &::after {
          margin-top: -4px;
        }
        &::before {
          margin-top: 4px;
        }
      }
    `}
  ${(props) =>
    props.prev &&
    css`
      & {
        float: left;
      }
      &::after {
        transform: rotate(-45deg);
      }
      &::before {
        transform: rotate(45deg);
      }
    `}
  ${(props) =>
    props.next &&
    css`
      & {
        float: right;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
      }
    `}
`;
/** 年 **/
export const DatePickerStyleCaptionPaneYear = styled(
  DatePickerStyleCaptionPaneBase,
)<DatePickerStyleCaptionPaneBaseProps>``;
/** 月 **/
export const DatePickerStyleCaptionPaneMonth = styled(
  DatePickerStyleCaptionPaneBase,
)<DatePickerStyleCaptionPaneBaseProps>``;
/**  pane  **/
export const DatePickerStyleCaptionPane = styled(DatePickerStyleCaptionPaneBase)<DatePickerStyleCaptionPaneBaseProps>``;

/** tody 按钮 **/
export interface DatePickerStyleCaptionTodayProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const DatePickerStyleCaptionToday = styled.div<DatePickerStyleCaptionTodayProps>`
  cursor: pointer;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerStyleCaptionToday')};
  border-radius: 3px;
  display: inline-block;
  height: 10px;
  width: 10px;
  overflow: hidden;
  margin: 0 0 0 2px;
  transition: background-color 0.3s;
  &::before {
    content: '';
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 3px;
    margin: 3px 0 0 3px;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerStyleCaptionTodayBefore')};
  }
  &:hover {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryHover')};
    &::before {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
    }
  }
  &:active {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryActive')};
    &::before {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
    }
  }
`;

export interface DatePickerStyleCaptionBaseProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const DatePickerStyleCaptionBase = styled.div<DatePickerStyleCaptionBaseProps>`
  user-select: none;
  text-align: center;
  padding: 0 0 3px 0;
  border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderBottomColorDatepickerCaption')};
  & ${DatePickerStyleCaptionPaneYear}+${DatePickerStyleCaptionPaneMonth} {
    margin-left: 5px;
  }
`;

DatePickerStyleCaptionToday.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

DatePickerStyleCaptionBase.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};
DatePickerStyleCaptionPaneYear.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

DatePickerStyleCaptionPaneMonth.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

DatePickerStyleCaptionPane.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

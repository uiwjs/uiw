import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { DatePickerDayRenderDay } from './../index';
import { DatePickerStyleTheme } from './theme';

export interface DatePickerStyleBodyWarpProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    HTMLDivProps {}
export const DatePickerStyleBodyWarp = styled.div<DatePickerStyleBodyWarpProps>`
  padding-top: 5px;
`;

export interface DatePickerStyleWeekProps extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>, HTMLDivProps {
  cls?: DatePickerDayRenderDay;
}
export interface DatePickerStyleWeekBaseProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    HTMLDivProps {}

export const DatePickerStyleWeekBase = styled.div<DatePickerStyleWeekBaseProps>`
  display: flex;
  width: 100%;
  & > div,
  & > div {
    display: table-cell;
    flex: 1;
    min-width: 26px;
    min-height: 26px;
    vertical-align: middle;
    text-align: center;
  }
  & > div.end {
    color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayEnd')};
  }
`;
export const DatePickerStyleWeekDay = styled(DatePickerStyleWeekBase)`
  & > div {
    font-weight: bold;
  }
`;

export const DatePickerStyleWeek = styled(DatePickerStyleWeekBase)<DatePickerStyleWeekProps>`
  & {
    border-radius: 3px;
    cursor: pointer;
    ${(props) =>
      (props.cls?.prev || props.cls?.next) &&
      css`
        & {
          color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayTodayBase')};
        }
      `}
    & > div {
      transition: background-color 0.3s, color 0.3s;
      margin: 0 2px;
      border-radius: 3px;
      line-height: 22px;
    }
    ${(props) =>
      props.cls?.today &&
      css`
        & > div {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
        }
      `}
    ${(props) =>
      props.cls?.selected &&
      css`
        &,
        &&:hover {
          > div {
            color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
            background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
          }
        }
      `}
  
    &:hover > div {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
      color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayHover')};
    }
    &:active > div {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerActive')};
    }
    ${(props) =>
      props.cls?.disabled &&
      css`
        &,
        &&:hover {
          & > div {
            color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayTodayBase')};
            cursor: not-allowed;
            background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerDayDisabled')};
          }
          ${() =>
            props.cls?.today &&
            css`
              & > div {
                background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerTodayDisabled')};
                color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
              }
            `}
          ${() =>
            props.cls?.selected &&
            css`
              & > div {
                background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryDisabled')};
                color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
              }
            `}
        }
      `}
  }
`;

DatePickerStyleWeekBase.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};
DatePickerStyleWeek.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { DatePickerDayRenderDay } from './../index';
import { DatePickerStyleTheme } from './theme';
const propsTheme = {
  defaultTheme: { ...DatePickerStyleTheme },
};
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
    color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDatePickerDayEnd')};
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
          color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDatePickerDayTodayBase')};
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
          background-color: ${(props) =>
            getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDatePickerBaseHover')};
        }
      `}
    ${(props) =>
      props.cls?.selected &&
      css`
        &,
        &&:hover {
          > div {
            color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorPrimary')};
            background-color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorPrimary')};
          }
        }
      `}
  
    &:hover > div {
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDatePickerBaseHover')};
      color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDatePickerDayHover')};
    }
    &:active > div {
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDatePickerActive')};
    }
    ${(props) =>
      props.cls?.disabled &&
      css`
        &,
        &&:hover {
          & > div {
            color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDatePickerDayTodayBase')};
            cursor: not-allowed;
            background-color: ${(props) =>
              getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDatePickerDayDisabled')};
          }
          ${() =>
            props.cls?.today &&
            css`
              & > div {
                background-color: ${(props) =>
                  getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorDatePickerTodayDisabled')};
                color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorPrimary')};
              }
            `}
          ${() =>
            props.cls?.selected &&
            css`
              & > div {
                background-color: ${(props) =>
                  getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorPrimaryDisabled')};
                color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorPrimary')};
              }
            `}
        }
      `}
  }
`;

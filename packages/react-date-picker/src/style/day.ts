import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { DatePickerDayRenderDay } from './../index';

export interface DatePickerBodyWarpProps extends ThemeVariantValueOptions, HTMLDivProps {}
export const DatePickerBodyWarp = styled.div<DatePickerBodyWarpProps>`
  padding-top: 5px;
`;

export interface DatePickerWeekProps extends ThemeVariantValueOptions, HTMLDivProps {
  cls?: DatePickerDayRenderDay;
}
export interface DatePickerWeekBaseProps extends ThemeVariantValueOptions, HTMLDivProps {}

export const DatePickerWeekDefaultTheme = {
  // 公共
  backgroundColorPrimary: '#008ef0',
  colorPrimary: '#fff',
  backgroundColorPrimaryDisabled: '#57baff',
  backgroundColorDatePickerTodayDisabled: 'rgba(189, 189, 189, 0.47)',
  // 组件内部
  colorDatePickerDayTodayBase: '#d3d3d3',
  backgroundColorDatePickerBaseHover: '#eaeaea',
  backgroundColorDatePickerDayDisabled: '#f5f5f5',
  backgroundColorDatePickerActive: '#d2d2d2',
  colorDatePickerDayHover: '#393e48',
};

export const DatePickerWeekBaseDefaultTheme = {
  colorDatePickerDayEnd: '#6f6f6f',
};

export const DatePickerWeekBase = styled.div<DatePickerWeekBaseProps>`
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
export const DatePickerWeekDay = styled(DatePickerWeekBase)`
  & > div {
    font-weight: bold;
  }
`;

export const DatePickerWeek = styled(DatePickerWeekBase)<DatePickerWeekProps>`
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

DatePickerWeekBase.defaultProps = {
  defaultTheme: DatePickerWeekDefaultTheme,
};
DatePickerWeek.defaultProps = {
  defaultTheme: DatePickerWeekDefaultTheme,
};

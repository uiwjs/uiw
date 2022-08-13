import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { DatePickerStyleTheme } from './theme';
export interface DatePickerStyleWarpProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions<typeof DatePickerStyleTheme> {}

export const DatePickerStyleWarp = styled.div<DatePickerStyleWarpProps>`
  vertical-align: top;
  display: inline-block;
  position: relative;
  border-radius: 3px;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  color: ${(props) => getThemeVariantValue(props, 'colorDatepickerTimeBase')};
  user-select: none;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  line-height: 21px;
  padding: 5px;
  min-width: 192px;
  max-width: 192px;
  box-shadow: 0 0 0 1px ${(props) => getThemeVariantValue(props, 'boxShadowDatepickerTime1')},
    0 0 0 ${(props) => getThemeVariantValue(props, 'boxShadowDatepickerTime2')},
    0 1px 1px ${(props) => getThemeVariantValue(props, 'boxShadowDatepickerTime3')};
  &.w-datepicker-timepicker {
    border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorDatepickerTimeBase')};
    border-top: 0;
    border-radius: 0 0 4px 4px !important;
    > div {
      max-height: 186px;
    }
  }
  &.w-datepicker-time-btn {
    cursor: pointer;
    margin-top: 2px;
    transition: background-color 0.3s;
    display: inline-block;
    border-radius: 3px;
    padding: 1px 5px;
    &:hover {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
    }
    &:active {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerActive')};
    }
  }
`;
DatePickerStyleWarp.defaultProps = {
  defaultTheme: DatePickerStyleTheme,
};

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';
import { DatePickerStyleTheme } from './theme';
const propsTheme = {
  defaultTheme: { ...DatePickerStyleTheme },
};
export interface DatePickerStyleYearMonthWarpProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    HTMLDivProps {
  isYear?: boolean;
}
export const DatePickerStyleYearMonthWarp = styled.div<DatePickerStyleYearMonthWarpProps>`
  & {
    text-align: center;
    max-width: 100%;
    padding: 10px 0 9px 0;
  }
  ${(props) =>
    props.isYear &&
    css`
      & > div {
        width: 33.333%;
      }
    `}
`;
export interface DatePickerStyleYearMonthSelectProps
  extends ThemeVariantValueOptions<typeof DatePickerStyleTheme>,
    HTMLDivProps {
  selected?: boolean;
  paging?: boolean;
}
export const DatePickerStyleYearMonthSelect = styled.div<DatePickerStyleYearMonthSelectProps>`
  display: inline-block;
  width: 50%;
  line-height: 20px;
  margin: 3px 0;
  > span {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 3px;
    cursor: pointer;
  }
  ${(props) =>
    props.selected &&
    css`
      & > span {
        color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorPrimary')};
        background-color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorPrimary')};
      }
    `}
  > span:hover {
    background-color: ${(props) =>
      getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorPrimaryBasicHover')};
    color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorPrimary')};
  }
  ${(props) =>
    props.paging &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorDatePickerPaging')};
      }
    `}
`;
export default DatePickerStyleYearMonthWarp;

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';

export interface DatePickerYearMonthWarpProps extends ThemeVariantValueOptions, HTMLDivProps {
  isYear?: boolean;
}
export const DatePickerYearMonthWarp = styled.div<DatePickerYearMonthWarpProps>`
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
export interface DatePickerYearMonthSelectProps extends ThemeVariantValueOptions, HTMLDivProps {
  selected?: boolean;
  paging?: boolean;
}
export const DatePickerYearMonthSelect = styled.div<DatePickerYearMonthSelectProps>`
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
        color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
      }
    `}
  > span:hover {
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryBasicHover')};
    color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
  }
  ${(props) =>
    props.paging &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorDatePickerPaging')};
      }
    `}
`;
DatePickerYearMonthSelect.defaultProps = {
  defaultTheme: {
    colorPrimary: '#fff',
    backgroundColorPrimary: '#008ef0',
    backgroundColorPrimaryBasicHover: '#c7e8ff',
    colorDatePickerPaging: 'rgba(0, 0, 0, 0.25)',
  },
};

DatePickerYearMonthWarp.defaultProps = {
  defaultTheme: {
    colorPrimary: '#fff',
    backgroundColorPrimary: '#008ef0',
    backgroundColorPrimaryBasicHover: '#c7e8ff',
    colorDatePickerPaging: 'rgba(0, 0, 0, 0.25)',
  },
};
export default DatePickerYearMonthWarp;

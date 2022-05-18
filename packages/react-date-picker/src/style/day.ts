import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const WarpDay = styled.div<ThemeVariantValueOptions>`
  & > .w-datepicker-weekday,
  & .w-datepicker-week {
    display: flex;
    width: 100%;
  }
  & > .w-datepicker-weekday > div,
  & .w-datepicker-week > div {
    display: table-cell;
    flex: 1;
    min-width: 26px;
    min-height: 26px;
    vertical-align: middle;
    text-align: center;
  }
  & > .w-datepicker-weekday > div {
    font-weight: bold;
  }
  & > .w-datepicker-weekday > div.end,
  & .w-datepicker-week > div.end {
    color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayEnd')};
  }
  & .w-datepicker-week > div {
    border-radius: 3px;
    cursor: pointer;
    &.prev,
    &.next {
      color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayTodayBase')};
    }
    & > div {
      transition: background-color 0.3s, color 0.3s;
      margin: 0 2px;
      border-radius: 3px;
      line-height: 22px;
    }
    &.today > div {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
    }
    &.selected,
    &.selected:hover {
      > div {
        color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
      }
    }
    &:hover > div {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerBaseHover')};
      color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayHover')};
    }
    &:active > div {
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerActive')};
    }
    &.disabled,
    &.disabled:hover {
      > div {
        color: ${(props) => getThemeVariantValue(props, 'colorDatePickerDayTodayBase')};
        cursor: not-allowed;
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerDayDisabled')};
      }
      &.today > div {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatePickerTodayDisabled')};
        color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
      }
      &.selected > div {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryDisabled')};
        color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
      }
    }
  }
  &.w-datepicker-body {
    padding-top: 5px;
  }
`;

WarpDay.defaultProps = {
  defaultTheme: {
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
    colorDatePickerDayEnd: '#6f6f6f',
  },
};

export default WarpDay;

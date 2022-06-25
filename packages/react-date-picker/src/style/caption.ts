import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps } from '@uiw/utils';

export interface DatePickerCaptionPaneBaseProps extends ThemeVariantValueOptions, HTMLDivProps {
  prev?: boolean;
  next?: boolean;
  defaultTheme?: {
    backgroundColorDatePickerBaseHover: string;
    backgroundColorDatepickerCaptionPanePrevBefore: string;
    backgroundColorDatePickerActive: string;
  };
}
/** 基础的**/
export const DatePickerCaptionPaneBase = styled.div<DatePickerCaptionPaneBaseProps>`
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
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatepickerCaptionPanePrevBefore')};
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
export const DatePickerCaptionPaneYear = styled(DatePickerCaptionPaneBase)<DatePickerCaptionPaneBaseProps>``;
/** 月 **/
export const DatePickerCaptionPaneMonth = styled(DatePickerCaptionPaneBase)<DatePickerCaptionPaneBaseProps>``;
/**  pane  **/
export const DatePickerCaptionPane = styled(DatePickerCaptionPaneBase)<DatePickerCaptionPaneBaseProps>``;

/** tody 按钮 **/
export interface DatePickerCaptionTodayProps extends ThemeVariantValueOptions, HTMLDivProps {
  defaultTheme?: {
    backgroundColorPrimaryHover: string;
    backgroundColorPrimaryActive: string;
    backgroundColorDatepickerCaptionToday: string;
    backgroundColorDatepickerCaptionTodayBefore: string;
    backgroundColorBase: string;
  };
}
export const DatePickerCaptionToday = styled.div<DatePickerCaptionTodayProps>`
  cursor: pointer;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorDatepickerCaptionToday')};
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
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorDatepickerCaptionTodayBefore')};
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

export interface DatePickerCaptionBaseProps extends ThemeVariantValueOptions, HTMLDivProps {}
export const DatePickerCaptionBase = styled.div<DatePickerCaptionBaseProps>`
  user-select: none;
  text-align: center;
  padding: 0 0 3px 0;
  border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderBottomColorDatepickerCaption')};
  & ${DatePickerCaptionPaneYear}+${DatePickerCaptionPaneMonth} {
    margin-left: 5px;
  }
`;

export const DatePickerCaptionPaneBaseDefaultTheme = {
  backgroundColorDatePickerBaseHover: '#eaeaea',
  backgroundColorDatepickerCaptionPanePrevBefore: '#333',
  backgroundColorDatePickerActive: '#d2d2d2',
};

export const DatePickerCaptionTodayDefaultTheme = {
  backgroundColorPrimaryHover: '#0070bd',
  backgroundColorPrimaryActive: '#00528a',
  backgroundColorDatepickerCaptionToday: '#dedede',
  backgroundColorDatepickerCaptionTodayBefore: '#a0a0a0',
  backgroundColorBase: '#fff',
};
DatePickerCaptionToday.defaultProps = {
  defaultTheme: DatePickerCaptionTodayDefaultTheme,
};

DatePickerCaptionBase.defaultProps = {
  defaultTheme: {
    //底部边框颜色 Caption
    borderBottomColorDatepickerCaption: '#ececec',
  },
};
DatePickerCaptionPaneYear.defaultProps = {
  defaultTheme: DatePickerCaptionPaneBaseDefaultTheme,
};

DatePickerCaptionPaneMonth.defaultProps = {
  defaultTheme: DatePickerCaptionPaneBaseDefaultTheme,
};

DatePickerCaptionPane.defaultProps = {
  defaultTheme: DatePickerCaptionPaneBaseDefaultTheme,
};

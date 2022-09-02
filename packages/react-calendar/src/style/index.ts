import { IconStyleBase } from '@uiw/react-icon';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import styled, { css } from 'styled-components';
import { DatePickerStyleBodyWarp, DatePickerStyleWeekDay, DatePickerStyleWeekBase } from '@uiw/react-date-picker';

export const CalendarStyleTheme = {
  fontSizeCalendarCaptionDefualt: '26px',
  fontSizeLarge: '16px',
  backgroundColorCalendarHover: '#ececec',
  backgroundColorCalendarActive: '#ececec',
  lineHeightCalendarPanel: '16px',
  backgroundCalendarDefault: 'white',
  borderColorCalendarChildDiv: '#ececec',
};
const propsTheme = {
  defaultTheme: { ...CalendarStyleTheme },
};

type HTMLDivElements = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ThemeVar = ThemeVariantValueOptions<typeof CalendarStyleTheme>;

export interface CalendarCaptionStyleWrapProps extends HTMLDivElements, ThemeVar {}
export interface CalendarBtnGroupStyleWrapProps extends HTMLDivElements, ThemeVar {}
export interface CalendarPanelStyleWrapProps extends HTMLDivElements, ThemeVar {}
export interface CalendarStyleWrapProps extends HTMLDivElements, ThemeVar {}
export interface CalendarBtnStyleWrapProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const CalendarCaptionStyleWrap = styled.div<CalendarCaptionStyleWrapProps>`
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeCalendarCaptionDefualt')};
  font-weight: 200;
  width: 100%;
  display: inline-block;
`;

export const CalendarBtnStyleWrap = styled.span<CalendarBtnStyleWrapProps>``;

export const CalendarBtnGroupStyleWrap = styled.div<CalendarBtnGroupStyleWrapProps>`
  ${(props) => css`
    display: inline-block;
    user-select: none;
    float: right;

    & > ${CalendarBtnStyleWrap} {
      font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeLarge')};
      padding: 2px 3px;
      position: relative;
      top: -3px;
    }
    & > ${IconStyleBase}, & > ${CalendarBtnStyleWrap} {
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.3s;
      &:hover {
        background-color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorCalendarHover')};
      }
      &:active {
        background-color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorCalendarActive')};
      }
    }
    & > ${IconStyleBase}, & > ${CalendarBtnStyleWrap} {
      vertical-align: middle;
      margin-top: -6px;
      > svg {
        width: 18px;
        height: 18px;
        margin: 4px 0px 0px 4px;
      }
      &:last-child {
        transform: rotate(-90deg);
      }
      &:first-child {
        transform: rotate(90deg);
      }
    }
  `}
`;

export const CalendarTitleWrap = styled.div`
  display: inline-block;
  user-select: none;
`;

export const CalendarDayWrap = styled.div`
  padding-right: 5px;
  text-align: right;
`;

export const CalendarInnerWrap = styled.div`
  text-align: right;
  padding: 5px;
`;

export const CalendarPanelStyleWrap = styled.div<CalendarPanelStyleWrapProps>`
  ${(props) => css`
    width: 100%;
    height: 90px;
    line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightCalendarPanel')};
    overflow-y: auto;
    text-align: left;
    > * {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeSmall')};
    }
  `}
`;

export const CalendarStyleWrap = styled.div<CalendarStyleWrapProps>`
  ${(props) => css`
    background: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundCalendarDefault')};

    ${DatePickerStyleBodyWarp} {
      padding: 0 0 0 0;
    }
    ${DatePickerStyleWeekBase}:last-child > div {
      border-bottom: 0;
    }
    ${DatePickerStyleWeekBase} > div {
      display: inline-flex;
      border-radius: 0;
      border-right: 1px solid ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCalendarChildDiv')};
      border-bottom: 1px solid ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCalendarChildDiv')};
      &:last-child {
        border-right: 0;
      }
      > div {
        margin: 0;
        border-radius: 0;
      }
    }
    ${DatePickerStyleWeekDay} {
      > div {
        background-color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCalendarChildDiv')};
        height: 32px;
        line-height: 32px;
      }
    }
  `}
`;

import { IconStyleBase } from '@uiw/react-icon';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import styled, { css } from 'styled-components';

interface CalendarCaptionStyleWrapProps extends ThemeVariantValueOptions { }
interface CalendarBtnGroupStyleWrapProps extends ThemeVariantValueOptions { }
interface CalendarPanelStyleWrapProps extends ThemeVariantValueOptions { }
interface CalendarStyleWrapProps extends ThemeVariantValueOptions { }

export const CalendarCaptionStyleWrap = styled.div<CalendarCaptionStyleWrapProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeCalendarCaptionDefualt')};
  font-weight: 200;
  width: 100%;
  display: inline-block;
`;

export const CalendarBtnStyleWrap = styled.span``;

export const CalendarBtnGroupStyleWrap = styled.div<CalendarBtnGroupStyleWrapProps>`
  ${(props) => css`
    display: inline-block;
    user-select: none;
    float: right;

    & > ${CalendarBtnStyleWrap} {
      font-size: ${getThemeVariantValue(props, 'fontSizeLarge')};
      padding: 2px 3px;
      position: relative;
      top: -3px;
    }
    & > ${IconStyleBase}, & > ${CalendarBtnStyleWrap} {
      cursor: pointer;
      border-radius: 3px;
      transition: all 0.3s;
      &:hover {
        background-color: ${getThemeVariantValue(props, 'backgroundColorCalendarHover')};
      }
      &:active {
        background-color: ${getThemeVariantValue(props, 'backgroundColorCalendarActive')};
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
    line-height: ${getThemeVariantValue(props, 'lineHeightCalendarPanel')};
    overflow-y: auto;
    text-align: left;
    > * {
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      font-size: ${getThemeVariantValue(props, 'fontSizeSmall')};
    }
  `}
`;

export const CalendarStyleWrap = styled.div<CalendarStyleWrapProps>`
  ${(props) => css`
    background: ${getThemeVariantValue(props, 'backgroundCalendarDefault')};

    .w-datepicker-body {
      padding: 0 0 0 0;
    }
    .w-datepicker-week:last-child > div {
      border-bottom: 0;
    }
    .w-datepicker-week > div {
      display: inline-flex;
      border-radius: 0;
      border-right: 1px solid ${getThemeVariantValue(props, 'borderColorCalendarChildDiv')};
      border-bottom: 1px solid ${getThemeVariantValue(props, 'borderColorCalendarChildDiv')};
      &:last-child {
        border-right: 0;
      }
      > div {
        margin: 0;
        border-radius: 0;
      }
    }
    .w-datepicker-weekday {
      > div {
        background-color: ${getThemeVariantValue(props, 'borderColorCalendarChildDiv')};
        height: 32px;
        line-height: 32px;
      }
    }
  `}
`;

CalendarCaptionStyleWrap.defaultProps = {
  defaultTheme: {
    fontSizeCalendarCaptionDefualt: '26px',
  },
};

CalendarBtnGroupStyleWrap.defaultProps = {
  defaultTheme: {
    fontSizeLarge: '16px',
    backgroundColorCalendarHover: '#ececec',
    backgroundColorCalendarActive: '#ececec',
  },
};

CalendarPanelStyleWrap.defaultProps = {
  defaultTheme: {
    lineHeightCalendarPanel: '16px',
  },
};

CalendarStyleWrap.defaultProps = {
  defaultTheme: {
    backgroundCalendarDefault: 'white',
    borderColorCalendarChildDiv: '#ececec',
  },
};

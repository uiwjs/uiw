import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const WarpCaption = styled.div<ThemeVariantValueOptions>`
  &.w-datepicker-caption {
    user-select: none;
    text-align: center;
    padding: 0 0 3px 0;
    border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderBottomColorDatepickerCaption')};
    .w-datepicker-caption-pane {
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
      &.year + &.month {
        margin-left: 5px;
      }
      &.prev,
      &.next {
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
      &.prev::after,
      &.next::before {
        transform: rotate(-45deg);
      }
      &.prev::before,
      &.next::after {
        transform: rotate(45deg);
      }
      &.prev {
        float: left;
      }
      &.next {
        float: right;
      }
    }
    & > .w-datepicker-caption-today {
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
    }
  }
`;

WarpCaption.defaultProps = {
  defaultTheme: {
    // 公共的
    backgroundColorPrimaryHover: '#0070bd',
    backgroundColorPrimaryActive: '#00528a',
    // 组件内部
    //底部边框颜色 Caption
    borderBottomColorDatepickerCaption: '#ececec',
    backgroundColorDatePickerBaseHover: '#eaeaea',
    // 背景颜色 CaptionPane prev ::before
    backgroundColorDatepickerCaptionPanePrevBefore: '#333',
    // 背景颜色 CaptionPane today
    backgroundColorDatepickerCaptionToday: '#dedede',
    backgroundColorDatepickerCaptionTodayBefore: '#a0a0a0',
    backgroundColorBase: '#fff',
    backgroundColorDatePickerActive: '#d2d2d2',
  },
};

export default WarpCaption;

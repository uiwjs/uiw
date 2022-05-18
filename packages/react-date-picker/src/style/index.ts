import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const Warp = styled.div<ThemeVariantValueOptions>`
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
Warp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    // 组件内部
    backgroundColorDatePickerBaseHover: '#eaeaea',
    backgroundColorDatePickerActive: '#d2d2d2',
    // 组件
    borderColorDatepickerBase: '#e9e9e9',
    colorDatepickerTimeBase: '#393e48',
    backgroundColorBase: '#fff',
    boxShadowDatepickerTime1: 'rgba(16, 22, 26, 0.1)',
    boxShadowDatepickerTime2: 'rgba(16, 22, 26, 0)',
    boxShadowDatepickerTime3: 'rgba(16, 22, 26, 0.2)',
  },
};

export default Warp;

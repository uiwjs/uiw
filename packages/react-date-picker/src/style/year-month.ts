import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const WarpYear = styled.div<ThemeVariantValueOptions>`
  &.w-datepicker-month,
  &.w-datepicker-year {
    text-align: center;
    max-width: 100%;
    padding: 10px 0 9px 0;
    > div {
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
      &.selected > span {
        color: ${(props) => getThemeVariantValue(props, 'colorPrimary')};
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
      }
      > span:hover {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimaryBasicHover')};
        color: ${(props) => getThemeVariantValue(props, 'backgroundColorPrimary')};
      }
      &.paging {
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
  &.w-datepicker-year > div {
    width: 33.333%;
  }
`;

WarpYear.defaultProps = {
  defaultTheme: {
    colorPrimary: '#fff',
    backgroundColorPrimary: '#008ef0',
    backgroundColorPrimaryBasicHover: '#c7e8ff',
  },
};
export default WarpYear;

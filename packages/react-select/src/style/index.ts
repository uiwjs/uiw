import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { SelectProps } from 'src';

const selectArrow =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4gIDxwYXRoIGZpbGw9IiMzOTNFNDgiIGQ9Ik0wLjIyMiw1LjYxMyBMNS40NTEsMC4yMjMgQzUuNzU2MjEyMDksLTAuMDc0MzYzMjMzMyA2LjI0Mjc4NzkxLC0wLjA3NDM2MzIzMzMgNi41NDgsMC4yMjMgTDExLjc3OCw1LjYxMyBDMTIuMTgsNi4wMjcgMTIuMDI1LDYuNjY3IDExLjQwNyw2LjY2NyBMMC41OTIsNi42NjcgQy0wLjAyNCw2LjY2NyAtMC4xOCw2LjAyNyAwLjIyMiw1LjYxMyBaIE0wLjU5Miw5LjMzMyBMMTEuNDA3LDkuMzMzIEMxMi4wMjUsOS4zMzMgMTIuMTgsOS45NzMgMTEuNzc3LDEwLjM4NyBMNi41NDcsMTUuNzc3IEM2LjI0MTkxMjU4LDE2LjA3MzcxNDMgNS43NTYwODc0MiwxNi4wNzM3MTQzIDUuNDUxLDE1Ljc3NyBMMC4yMjIsMTAuMzg3IEMtMC4xOCw5Ljk3MyAtMC4wMjQsOS4zMzMgMC41OTIsOS4zMzMgWiIvPjwvc3ZnPg==';

interface SelectWarpProps extends ThemeVariantValueOptions, Omit<SelectProps, 'size'> {
  params: {
    size: 'large' | 'default' | 'small';
  };
}

export const SelectStyleWarp = styled.select<SelectWarpProps>`
  display: inline-flex;
  appearance: none;
  cursor: ${(props) => getThemeVariantValue(props, 'cursorSelectDefault')};
  color: ${(props) => getThemeVariantValue(props, 'colorSelectBase')};
  padding: ${(props) => getThemeVariantValue(props, 'paddingSelectDefault')};
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSelectDefault')};
  width: 100%;
  max-width: 100%;
  margin: 0;
  line-height: 18px;
  vertical-align: middle;
  box-sizing: border-box;
  border: none;
  box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSelectBase')};
  border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusDefault')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSelectBase')};
  background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageSelectUrl')},
    linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0));
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.62em auto, 100%;
  &:focus {
    outline: none !important;
  }
  &:hover {
    box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSelectBase')};
    background-clip: padding-box;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSelectHover')};
  }
  &:disabled {
    box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSelectDisabled')};
    background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageSelectUrl')};
    background-size: 0.52em auto, 100%;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSelectDisabled')};
    opacity: 0.75;
    color: ${(props) => getThemeVariantValue(props, 'colorSelectDisabled')};
    cursor: ${(props) => getThemeVariantValue(props, 'cursorSelectDisabled')};
    resize: none;
  }
  ${(props) =>
    props.params.size === 'large' &&
    css`
      padding: ${(props) => getThemeVariantValue(props, 'paddingSelectLarge')};
      font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSelectLarge')};
    `}
  ${(props) =>
    props.params.size === 'small' &&
    css`
      padding: ${(props) => getThemeVariantValue(props, 'paddingSelectSmall')};
      font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSelectSmall')};
    `}
`;

SelectStyleWarp.defaultProps = {
  defaultTheme: {
    // 大小内边距设置
    paddingSelectSmall: '3px 25px 3px 7px',
    paddingSelectDefault: '6px 25px 6px 10px',
    paddingSelectLarge: '9px 25px 9px 12px',
    // 大小字体设置
    fontSizeSelectSmall: '12px',
    fontSizeSelectDefault: '14px',
    fontSizeSelectLarge: '16px',
    // 字体颜色
    colorSelectBase: '#182026',
    colorSelectDisabled: '#a5a5a5',
    // 背景颜色
    backgroundColorSelectBase: '#f5f8fa',
    backgroundColorSelectHover: '#ebf1f5',
    backgroundColorSelectDisabled: '#dddddd',
    // 阴影
    boxShadowSelectBase: 'inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);',
    boxShadowSelectDisabled: 'none',
    // 鼠标移入
    cursorSelectDefault: 'pointer',
    cursorSelectDisabled: 'not-allowed',

    //
    borderRadiusDefault: '3px',

    backgroundImageSelectUrl: `url(${selectArrow})`,
  },
};

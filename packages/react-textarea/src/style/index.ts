import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import styled from 'styled-components';
import { TextareaProps } from '../index';

export const TextareaStyleTheme = {
  // 圆角
  borderRadiusDefault: '3px',
  // 大小设置
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',
  //字体颜色
  colorTextareaDefault: '#393e48',
  colorTextareaDark: '#fff',
  //背景色
  backgroundColorTextareaStyleWarpBase: '#f8f9fa',
  // 阴影
  boxShadowTextarea:
    '0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowTextareaFocus: '0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowTextareaHover: '0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowTextareaFocusHover:
    '0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  //禁用
  colorTextareaDisabled: '#a5a5a5',
  backgroundTextareaDisabled: '#dddddd',
};

interface TextareaStyleWarpProps extends TextareaProps, ThemeVariantValueOptions<typeof TextareaStyleTheme> {}

export const TextareaStyleWarp = styled.textarea<TextareaStyleWarpProps>`
  position: relative;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  outline: none;
  border: none;
  border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusDefault')};
  box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowTextarea')};
  padding: 5px 10px;
  vertical-align: middle;
  height: auto;
  min-height: 30px;
  color: ${(props) => getThemeVariantValue(props, 'colorTextareaDefault')};
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorTextareaStyleWarpBase')};
  font-weight: 400;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;
  &:not(:first-child) {
    padding-left: 30px;
  }
  &:focus {
    box-shadow: ${(props) => getThemeVariantValue(props, `boxShadowTextareaFocus`)};
  }
  &:hover {
    box-shadow: ${(props) => getThemeVariantValue(props, `boxShadowTextareaFocus`)};
  }
  &:focus&:hover {
    box-shadow: ${(props) => getThemeVariantValue(props, `boxShadowTextareaFocusHover`)};
  }
  &:disabled {
    box-shadow: none;
    background: ${(props) => getThemeVariantValue(props, `backgroundTextareaDisabled`)};
    opacity: 0.75;
    color: ${(props) => getThemeVariantValue(props, `colorTextareaDisabled`)};
    cursor: not-allowed;
    resize: none;
  }
`;

TextareaStyleWarp.defaultProps = {
  defaultTheme: TextareaStyleTheme,
};

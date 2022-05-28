import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { SelectProps } from 'src';

interface SelectWarp extends ThemeVariantValueOptions, Pick<SelectProps, 'size' | 'disabled'> {}

// 默认主题样式变量
export const SelectDefaultTheme = {};

export const Select = styled.select<SelectWarp>`
  ${(props) => {
    const fontColorSelectBase = getThemeVariantValue(props, `fontColorSelectBase`);

    return css`
      display: inline-flex;
      font-size: 14px;
      appearance: none;
      cursor: pointer;
      color: #182026;
      padding: 6px 25px 6px 10px;
      width: 100%;
      max-width: 100%;
      margin: 0;
      line-height: 18px;
      vertical-align: middle;
      box-sizing: border-box;
      border: none;
      box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      border-radius: 3px;
      background-color: #f5f8fa;
      background-image: url(@select-arrow), linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0));
      background-repeat: no-repeat, repeat;
      background-position: right 0.7em top 50%, 0 0;
      background-size: 0.62em auto, 100%;
      &:focus {
        outline: none !important;
      }
      &:hover {
        box-shadow: inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
        background-clip: padding-box;
        background-color: #ebf1f5;
      }
      &:disabled {
        box-shadow: none;
        background-image: url(@select-arrow);
        background-size: 0.52em auto, 100%;
        background-color: #dddddd;
        opacity: 0.75;
        color: #a5a5a5;
        cursor: not-allowed;
        resize: none;
      }
      &-large {
        padding: 9px 25px 9px 12px;
        font-size: 16px;
      }
      &-small {
        padding: 3px 25px 3px 7px;
        font-size: 12px;
      }
    `;
  }}
`;

Select.defaultProps = {
  defaultTheme: {
    fontColorSelectBase: '#182026', // Select 字体颜色
  },
};

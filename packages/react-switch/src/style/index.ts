import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { SwitchProps } from 'src';
import styled, { css } from 'styled-components';

interface SwitchStyleWrapProps extends ThemeVariantValueOptions, SwitchProps {
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
}

export const SwitchStyleWrap = styled.div<SwitchStyleWrapProps>`
  ${(props) => {
    const psd = `props.prefix-text`;
    return css`
      vertical-align: middle;
      font-size: ${getThemeVariantValue(props, 'fontSizeSmall')};
      cursor: pointer;
      input[type='checkbox'] {
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        min-width: ${getThemeVariantValue(props, 'minWidthSwitchCheckbox')};
        height: ${getThemeVariantValue(props, 'heightSwitchCheckbox')};
        margin: 0 !important;
        background-clip: border-box;
        background-color: ${getThemeVariantValue(props, 'backgroundColorSwitchCheckbox')};
        appearance: none;
        outline: 0;
        font-size: ${getThemeVariantValue(props, 'fontSizeSmall')};
        border-radius: ${getThemeVariantValue(props, 'borderRadiusSwitchCheckbox')};
        transition: all 0.3s;
        box-shadow: inset 0 1px 2px ${getThemeVariantValue(props, 'boxShadowColorSwitchCheckbox')};
        &:before,
        &:after {
          display: inline-block;
          vertical-align: middle;
        }
        &:before {
          content: attr(data-checked);
          transition: all 0.3s;
          padding: 0 21px 0 6px;
          color: ${getThemeVariantValue(props, 'colorSwitchCheckboxBefore')};
          line-height: ${getThemeVariantValue(props, 'lineHeightSwitchCheckboxBefore')};
        }
        &:checked {
          background-color: ${getThemeVariantValue(props, 'backgroundColorSwitchCheckboxChecked')};
          &:after {
            right: 2px;
            margin-right: 0;
          }
          &:before {
            content: attr(data-unchecked);
          }
        }
        &:not(:checked):before {
          padding: 0 6px 0 21px;
          color: ${getThemeVariantValue(props, 'colorSwitchCheckboxNotCheckedBefore')};
        }
        &:after {
          content: ' ';
          position: absolute;
          margin-right: -18px;
          right: 100%;
          margin-top: 2px;
          margin-left: 1px;
          height: ${getThemeVariantValue(props, 'heightSwitchCheckboxAfter')};
          width: ${getThemeVariantValue(props, 'widthSwitchCheckboxAfter')};
          border-radius: ${getThemeVariantValue(props, 'borderRadiusSwitchCheckboxAfter')};
          transition: all 0.2s;
          background-color: ${getThemeVariantValue(props, 'backgroundColorSwitchCheckboxAfter')};
          box-shadow: 0 1px 2px 0 ${getThemeVariantValue(props, 'boxShadowColorSwitchCheckboxAfter')};
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }
        &:focus {
          box-shadow: 0 0 0 2px ${getThemeVariantValue(props, 'boxShadowColorSwitchCheckboxFocus')},
            inset 0 1px 2px ${getThemeVariantValue(props, 'boxShadowColorInSwitchCheckboxFocus')};
        }
      }

      ${props?.disabled &&
      css`
        cursor: not-allowed;
      `}

      ${props?.size === 'large' &&
      css`
        input[type='checkbox'] {
          min-width: ${getThemeVariantValue(props, 'minWidthSwitchLargeCheckbox')};
          height: ${getThemeVariantValue(props, 'heightSwitchLargeCheckbox')};
          &::after {
            margin-right: -22px;
            height: ${getThemeVariantValue(props, 'heightSwitchLargeCheckboxAfter')};
            width: ${getThemeVariantValue(props, 'widthSwitchLargeCheckboxAfter')};
          }
          &:before {
            padding: 0 25px 0 8px;
            margin-top: 0;
            line-height: ${getThemeVariantValue(props, 'lineHeightSwitchLargeCheckboxBefore')};
            font-size: ${getThemeVariantValue(props, 'fontSizeLarge')};
          }
          &:not(:checked):before {
            padding: 0 8px 0 25px;
          }
        }
      `}

    ${props?.size === 'small' &&
      css`
        font-size: ${getThemeVariantValue(props, 'fontSizeSmall')};
        input[type='checkbox'] {
          min-width: ${getThemeVariantValue(props, 'minWidthSwitchSmallCheckbox')};
          height: ${getThemeVariantValue(props, 'heightSwitchSmallCheckbox')};
          &::after {
            margin-right: -14px;
            height: ${getThemeVariantValue(props, 'heightSwitchSmallCheckboxAfter')};
            width: ${getThemeVariantValue(props, 'widthSwitchSmallCheckboxAfter')};
          }
          &:before {
            padding: 0 16px 0 6px;
            line-height: ${getThemeVariantValue(props, 'lineHeightSwitchSmallCheckboxBefore')};
          }
          &:not(:checked):before {
            padding: 0 6px 0 16px;
          }
        }
      `}

    ${psd} {
        vertical-align: middle;
        display: inline-block;
        margin-left: 5px;
      }
    `;
  }}
`;

SwitchStyleWrap.defaultProps = {
  defaultTheme: {
    fontSizeSmall: '12px',
    fontSizeLarge: '16px',
    minWidthSwitchCheckbox: '35px',
    heightSwitchCheckbox: '20px',
    backgroundColorSwitchCheckbox: '#dfdfdf',
    borderRadiusSwitchCheckbox: '16px',
    boxShadowColorSwitchCheckbox: 'rgba(16, 22, 26, 0.2)',
    colorSwitchCheckboxBefore: '#fff',
    lineHeightSwitchCheckboxBefore: '20px',
    backgroundColorSwitchCheckboxChecked: '#008ef0',
    colorSwitchCheckboxNotCheckedBefore: '#393e48',
    heightSwitchCheckboxAfter: '16px',
    widthSwitchCheckboxAfter: '16px',
    borderRadiusSwitchCheckboxAfter: '50%',
    backgroundColorSwitchCheckboxAfter: '#fff',
    boxShadowColorSwitchCheckboxAfter: 'rgba(0, 35, 11, 0.2)',
    boxShadowColorSwitchCheckboxFocus: 'rgba(0, 142, 240, 0.25)',
    boxShadowColorInSwitchCheckboxFocus: 'rgba(16, 22, 26, 0.2)',
    minWidthSwitchLargeCheckbox: '38px',
    heightSwitchLargeCheckbox: '24px',
    heightSwitchLargeCheckboxAfter: '20px',
    widthSwitchLargeCheckboxAfter: '20px',
    lineHeightSwitchLargeCheckboxBefore: '24px',
    minWidthSwitchSmallCheckbox: '15px',
    heightSwitchSmallCheckbox: '16px',
    heightSwitchSmallCheckboxAfter: '12px',
    widthSwitchSmallCheckboxAfter: '12px',
    lineHeightSwitchSmallCheckboxBefore: '16px',
  },
};

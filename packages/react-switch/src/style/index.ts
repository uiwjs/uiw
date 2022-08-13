import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { SwitchProps } from 'src';
import styled, { css } from 'styled-components';

export const SwitchStyleTheme = {
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
};

type ThemeVar = ThemeVariantValueOptions<typeof SwitchStyleTheme>;

interface SwitchStyleWrapProps extends ThemeVar, SwitchProps {
  size?: 'large' | 'default' | 'small';
  disabled?: boolean;
}

export const SwitchStyleWrap = styled.div<SwitchStyleWrapProps>`
  ${(props) => {
    const psd = `props.prefix-text`;
    return css`
      vertical-align: middle;
      font-size: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'fontSizeSmall')};
      cursor: pointer;
      input[type='checkbox'] {
        vertical-align: middle;
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        min-width: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'minWidthSwitchCheckbox')};
        height: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'heightSwitchCheckbox')};
        margin: 0 !important;
        background-clip: border-box;
        background-color: ${getThemeVariantValue(
          { ...props, defaultTheme: SwitchStyleTheme },
          'backgroundColorSwitchCheckbox',
        )};
        appearance: none;
        outline: 0;
        font-size: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'fontSizeSmall')};
        border-radius: ${getThemeVariantValue(
          { ...props, defaultTheme: SwitchStyleTheme },
          'borderRadiusSwitchCheckbox',
        )};
        transition: all 0.3s;
        box-shadow: inset 0 1px 2px
          ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'boxShadowColorSwitchCheckbox')};
        &:before,
        &:after {
          display: inline-block;
          vertical-align: middle;
        }
        &:before {
          content: attr(data-checked);
          transition: all 0.3s;
          padding: 0 21px 0 6px;
          color: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'colorSwitchCheckboxBefore')};
          line-height: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'lineHeightSwitchCheckboxBefore',
          )};
        }
        &:checked {
          background-color: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'backgroundColorSwitchCheckboxChecked',
          )};
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
          color: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'colorSwitchCheckboxNotCheckedBefore',
          )};
        }
        &:after {
          content: ' ';
          position: absolute;
          margin-right: -18px;
          right: 100%;
          margin-top: 2px;
          margin-left: 1px;
          height: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'heightSwitchCheckboxAfter')};
          width: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'widthSwitchCheckboxAfter')};
          border-radius: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'borderRadiusSwitchCheckboxAfter',
          )};
          transition: all 0.2s;
          background-color: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'backgroundColorSwitchCheckboxAfter',
          )};
          box-shadow: 0 1px 2px 0
            ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'boxShadowColorSwitchCheckboxAfter')};
        }
        &:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }
        &:focus {
          box-shadow: 0 0 0 2px
              ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'boxShadowColorSwitchCheckboxFocus')},
            inset 0 1px 2px
              ${getThemeVariantValue(
                { ...props, defaultTheme: SwitchStyleTheme },
                'boxShadowColorInSwitchCheckboxFocus',
              )};
        }
      }

      ${props?.disabled &&
      css`
        cursor: not-allowed;
      `}

      ${props?.size === 'large' &&
      css`
        input[type='checkbox'] {
          min-width: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'minWidthSwitchLargeCheckbox',
          )};
          height: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'heightSwitchLargeCheckbox')};
          &::after {
            margin-right: -22px;
            height: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'heightSwitchLargeCheckboxAfter',
            )};
            width: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'widthSwitchLargeCheckboxAfter',
            )};
          }
          &:before {
            padding: 0 25px 0 8px;
            margin-top: 0;
            line-height: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'lineHeightSwitchLargeCheckboxBefore',
            )};
            font-size: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'fontSizeLarge')};
          }
          &:not(:checked):before {
            padding: 0 8px 0 25px;
          }
        }
      `}

    ${props?.size === 'small' &&
      css`
        font-size: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'fontSizeSmall')};
        input[type='checkbox'] {
          min-width: ${getThemeVariantValue(
            { ...props, defaultTheme: SwitchStyleTheme },
            'minWidthSwitchSmallCheckbox',
          )};
          height: ${getThemeVariantValue({ ...props, defaultTheme: SwitchStyleTheme }, 'heightSwitchSmallCheckbox')};
          &::after {
            margin-right: -14px;
            height: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'heightSwitchSmallCheckboxAfter',
            )};
            width: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'widthSwitchSmallCheckboxAfter',
            )};
          }
          &:before {
            padding: 0 16px 0 6px;
            line-height: ${getThemeVariantValue(
              { ...props, defaultTheme: SwitchStyleTheme },
              'lineHeightSwitchSmallCheckboxBefore',
            )};
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

// SwitchStyleWrap.defaultProps = {
//   defaultTheme: SwitchStyleTheme,
// };

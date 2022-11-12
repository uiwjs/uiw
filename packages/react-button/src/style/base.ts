import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { buttonVariant, getCommonCss, getloadingCss, getIconAndSizeCss } from './Variant';
import { ButtonType, ButtonSize } from '../';
import { ButtonStyleTheme } from './theme';
export * from './theme';

const propsTheme = {
  defaultTheme: { ...ButtonStyleTheme },
};

export interface ButtonStyleBaseProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    ThemeVariantValueOptions<typeof ButtonStyleTheme> {
  param?: {
    size: ButtonSize;
    type: ButtonType;
    basic: boolean;
    loading: boolean;
    disabled: boolean;
    active: boolean;
    block: boolean;
    focus: boolean;
  };
}
const ButtonStyleBase = styled.button<ButtonStyleBaseProps>`
  user-select: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 5px 7px;
  position: relative;
  vertical-align: middle;
  text-align: left;
  line-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  min-width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'minHeightButtonDefault')};
  min-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'minHeightButtonDefault')};
  text-align: center;
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorButtonStyleBase')};
  transition: background-color 0.5s, opacity 1s;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
  & + & {
    margin-left: 5px;
  }
  ${(props) =>
    props.param?.block &&
    css`
      & {
        display: block;
        width: 100%;
      }
      & + && {
        margin-left: 0;
      }
    `}
  ${(props) =>
    props.param?.disabled &&
    css`
      cursor: not-allowed;
    `}
  &[disabled] {
    cursor: not-allowed;
  }
`;
const ButtonStyleBasePrimary = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Primary' })}
`;
const ButtonStyleBaseSuccess = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Success' })}
`;
const ButtonStyleBaseDangers = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Error' })}
`;
const ButtonStyleBaseDark = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Dark' })}
`;
const ButtonStyleBaseLight = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => {
    const { focus, basic, active, disabled } = props.param || {};
    return css`
      box-shadow: inset 0 1px 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
        inset 1px -1px 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
        inset -1px 0px 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')};
      ${buttonVariant({ ...props, type: 'Light' })}
      ${getCommonCss(
        `
              outline: 0;
              box-shadow: inset 0 1px 0 0 ${getThemeVariantValue(
                { ...props, ...propsTheme },
                'boxShadowColorLightDefault',
              )},
                inset 1px -1px 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
                inset -1px 0px 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')},
                0 0 0 2px ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLight4')};
        `,
        '&:focus',
        focus,
      )}
        ${basic &&
      css`
        color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLightBasic')} !important;
        &:focus {
          box-shadow: inset 0 0 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')};
        }
        ${focus &&
        css`
          box-shadow: inset 0 0 0 0 ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowColorLightDefault')};
        `}
        &:hover {
          background-color: ${getThemeVariantValue(
            { ...props, ...propsTheme },
            'backgroundColorLightBasicHover',
          )} !important;
        }
        ${getCommonCss(
          `
              color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLightBasic')};
              background-color: ${getThemeVariantValue(
                { ...props, ...propsTheme },
                'backgroundColorLightBasicActive',
              )} !important;
              background-image: none;
                `,
          '&:active',
          active,
        )}
        ${getCommonCss(
          `
                background-color: transparent !important;
                color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLightBasicDisabled')};
                `,
          '&[disabled]',
          disabled,
        )}
      `}
        ${getCommonCss(
        `
          color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLightBasicDisabled')};
          z-index: 0;
          `,
        '&[disabled]',
        disabled,
      )}
      ${() => getIconAndSizeCss(props)}
      ${() => getloadingCss(props)}
    `;
  }}
`;
const ButtonStyleBaseLink = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => {
    const { disabled } = props.param || {};
    return css`
      ${buttonVariant({ ...props, type: 'Link' })};
      color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLink')} !important;
      &:hover:not([disabled]) {
        color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLinkNotDisabled')};
        text-decoration: underline;
      }
      ${getCommonCss(
        `
          color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorLinkNotDisabledActive')};
          box-shadow: none;
          text-decoration: underline;
          `,
        '&:not([disabled]):active',
        disabled,
        '&:not([disabled]) ',
      )}
      &[disabled] {
        z-index: 0;
      }
      ${disabled &&
      css`
        z-index: 0;
      `}
    `;
  }}
`;
const ButtonStyleBaseWarning = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${(props) => buttonVariant({ ...props, type: 'Warning' })}
`;

export {
  ButtonStyleBase,
  ButtonStyleBasePrimary,
  ButtonStyleBaseSuccess,
  ButtonStyleBaseDangers,
  ButtonStyleBaseDark,
  ButtonStyleBaseLight,
  ButtonStyleBaseLink,
  ButtonStyleBaseWarning,
};

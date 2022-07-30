import { getThemeVariantValue } from '@uiw/utils';
import { css } from 'styled-components';
import { ButtonStyleBaseProps } from '.';
import { IconBase } from '@uiw/react-icon';

type Options = {
  type: string;
} & ButtonStyleBaseProps;

/**
 * @description: 生成公共css
 * @param {string} style 样式
 * @param {string} attrName 属性名
 * @param {boolean} fig  直接生成
 * @param {string} lastName 生成对象
 */
export const getCommonCss = (style: string, attrName: string, fig?: boolean, lastName?: string) => {
  const com = css`
    ${attrName && `${attrName}{${style}}`}
    ${fig && lastName && `${lastName}{${style}}`}
    ${fig && !lastName && style}
  `;
  return com;
};

export const buttonVariant = (options: Options) => {
  const { type, param } = options;
  const { basic, focus, active, disabled } = param || {};

  const color = getThemeVariantValue(options, `color${type}`);
  const backgroundColor = getThemeVariantValue(options, `backgroundColor${type}`);
  const backgroundColorHover = getThemeVariantValue(options, `backgroundColor${type}Hover`);
  const boxShadowColorFocus = getThemeVariantValue(options, `boxShadowColor${type}Focus`);
  const backgroundColorActive = getThemeVariantValue(options, `backgroundColor${type}Active`);
  const backgroundColorDisabled = getThemeVariantValue(options, `backgroundColor${type}Disabled`);
  const boxShadowColorBasic = getThemeVariantValue(options, `boxShadowColor${type}Basic`);
  const backgroundColorBasicHover = getThemeVariantValue(options, `backgroundColor${type}BasicHover`);
  const colorBasicDisabled = getThemeVariantValue(options, `color${type}BasicDisabled`);
  const backgroundColorBasicActive = getThemeVariantValue(options, `backgroundColor${type}BasicActive`);

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    z-index: 1;
    &:hover {
      background-color: ${backgroundColorHover};
      z-index: 2;
    }
    ${getCommonCss(
      `
      outline: 0;
      box-shadow: 0 0 0 2px  ${boxShadowColorFocus};
        `,
      '&:focus',
      focus,
    )}
    ${getCommonCss(
      `
      color: ${color};
      background-color: ${backgroundColorActive};
      background-image: none;
  `,
      ' &:active',
      active,
    )}
    &.disabled,
    &[disabled] {
      background-color: ${backgroundColorDisabled};
      z-index: 0;
    }
    ${getCommonCss(
      `
      background-color: ${backgroundColorDisabled};
      z-index: 0;
  `,
      ' &[disabled]',
      disabled,
    )}
    ${basic &&
    css`
      & {
        background-color: transparent !important;
        box-shadow: inset 0 0 0 ${boxShadowColorBasic};
        color: ${backgroundColor};
        &:hover {
          background-color: ${backgroundColorBasicHover} !important;
        }
        ${getCommonCss(
          `
          color: ${backgroundColor};
          background-color: ${backgroundColorBasicActive} !important;
          background-image: none;
        `,
          ' &:active',
          active,
        )}
        ${getCommonCss(
          `
          background-color: transparent !important;
          color: ${colorBasicDisabled};
          `,
          '&[disabled]',
          disabled,
        )}
      }
    `}
  `;
};

export const buttonTypes = (props: ButtonStyleBaseProps) => {
  const { type, focus, basic, active, disabled } = props.param || {};
  switch (type) {
    case 'primary':
      return buttonVariant({ ...props, type: 'Primary' });
    case 'success':
      return buttonVariant({ ...props, type: 'Success' });
    case 'danger':
      return buttonVariant({ ...props, type: 'Error' });
    case 'dark':
      return buttonVariant({ ...props, type: 'Dark' });
    case 'light':
      return css`
        box-shadow: inset 0 1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
          inset 1px -1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
          inset -1px 0px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
        ${buttonVariant({ ...props, type: 'Light' })}
        ${getCommonCss(
          `
              outline: 0;
              box-shadow: inset 0 1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                inset 1px -1px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                inset -1px 0px 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')},
                0 0 0 2px ${getThemeVariantValue(props, 'boxShadowColorLight4')};
        `,
          '&:focus',
          focus,
        )}
        ${basic &&
        css`
          color: ${getThemeVariantValue(props, 'colorLightBasic')} !important;
          &:focus {
            box-shadow: inset 0 0 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
          }
          ${focus &&
          css`
            box-shadow: inset 0 0 0 0 ${getThemeVariantValue(props, 'boxShadowColorLightDefault')};
          `}
          &:hover {
            background-color: ${getThemeVariantValue(props, 'backgroundColorLightBasicHover')} !important;
          }
          ${getCommonCss(
            `
              color: ${getThemeVariantValue(props, 'colorLightBasic')};
              background-color: ${getThemeVariantValue(props, 'backgroundColorLightBasicActive')} !important;
              background-image: none;
                `,
            '&:active',
            active,
          )}
          ${getCommonCss(
            `
                background-color: transparent !important;
                color: ${getThemeVariantValue(props, 'colorLightBasicDisabled')};
                `,
            '&[disabled]',
            disabled,
          )}
        `}
        ${getCommonCss(
          `
          color: ${getThemeVariantValue(props, 'colorLightBasicDisabled')};
          z-index: 0;
          `,
          '&[disabled]',
          disabled,
        )}
      `;
    case 'link':
      return css`
        ${buttonVariant({ ...props, type: 'Link' })};
        color: ${getThemeVariantValue(props, 'colorLink')} !important;
        &:hover:not([disabled]) {
          color: ${getThemeVariantValue(props, 'colorLinkNotDisabled')};
          text-decoration: underline;
        }
        ${getCommonCss(
          `
          color: ${getThemeVariantValue(props, 'colorLinkNotDisabledActive')};
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
    case 'warning':
      return buttonVariant({ ...props, type: 'Warning' });
    default:
      return css``;
  }
};

export const getloadingCss = (props: ButtonStyleBaseProps) => {
  return css`
    ${() =>
      props.param?.loading &&
      props.param.type === 'light' &&
      css`
        &::before {
          border: 1.2px solid ${() => getThemeVariantValue(props, 'borderColorLinghtLoadingBefore')};
        }
      `}
    ${() =>
      props.param?.loading &&
      css`
        &::before {
          content: '';
          display: inline-block;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          border: 1.2px solid ${() => getThemeVariantValue(props, 'colorButtonLoadingBefore')};
          color: ${() => getThemeVariantValue(props, 'colorButtonLoadingBefore')};
          margin: 0 3px 0 0;
          clip-path: polygon(0% 0%, 100% 0, 100% 30%, 0% 30%);
          animation: rotate 0.5s linear infinite;
          @keyframes rotate {
            from {
              transform: rotateZ(0deg);
            }
            to {
              transform: rotateZ(360deg);
            }
          }
        }
      `}
  `;
};

export const buttonSize = (fontSize: string, iconSize: string, lineHeight: string | number, minHeight: string) => {
  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    min-height: ${minHeight};
    .w-icon {
      font-size: ${iconSize};
    }
  `;
};
const getSize = (props: ButtonStyleBaseProps, type: string) => {
  const fontSize = getThemeVariantValue(props, `fontSize${type}`);
  const minHeight = getThemeVariantValue(props, `minHeightButton${type}`);
  const fontSizeIcon = getThemeVariantValue(props, `fontSizeButtonIcon${type}`);
  return buttonSize(`${fontSize}`, `${fontSizeIcon}`, fontSize, `${minHeight}`);
};

export const buttonSizeCss = (props: ButtonStyleBaseProps) => {
  const { size } = props.param || {};
  switch (size) {
    case 'large':
      return getSize(props, 'Large');
    case 'small':
      return css`
        padding: 0 6px;
        min-width: ${getThemeVariantValue(props, 'minHeightButtonSmall')};
        ${getSize(props, 'Small')}
      `;
    default:
      return css``;
  }
};

export const getIconAndSizeCss = (props: ButtonStyleBaseProps) => {
  return css`
    ${IconBase} {
      font-size: ${() => getThemeVariantValue(props, 'fontSizeButtonIcontDefault')};
    }
    ${() => buttonSizeCss(props)}
    ${IconBase}:not(:last-child) {
      margin-right: 5px;
    }
  `;
};

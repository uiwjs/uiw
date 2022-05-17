import { getThemeVariantValue } from '@uiw/utils';
import { css } from 'styled-components';

type Options = {
  type: string;
  defaultTheme?: Record<string, string | number>;
  theme?: Record<string, string | number>;
};

export const buttonVariant = (options: Options) => {
  const { type } = options;
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
    &:focus,
    &.focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${boxShadowColorFocus};
    }
    &:hover {
      color: ${color};
      background-color: ${backgroundColorHover};
      z-index: 2;
    }
    &:active,
    &.active {
      color: ${color};
      background-color: ${backgroundColorActive};
      background-image: none;
    }
    &.disabled,
    &[disabled] {
      background-color: ${backgroundColorDisabled};
      z-index: 0;
    }
    &.w-btn-basic {
      background-color: transparent !important;
      box-shadow: inset 0 0 0 ${boxShadowColorBasic};
      color: ${backgroundColor};
      &:hover {
        background-color: ${backgroundColorBasicHover} !important;
      }
      &:active,
      &.active {
        color: ${backgroundColor};
        background-color: ${backgroundColorBasicActive} !important;
        background-image: none;
      }
      &.disabled,
      &[disabled] {
        background-color: transparent !important;
        color: ${colorBasicDisabled};
      }
    }
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

import { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { CardStyleTheme } from './index';
type ThemeVar = ThemeVariantValueOptions<typeof CardStyleTheme>;

export interface CardStyleWarpProps extends ThemeVar {
  bordered?: boolean;
  noHover?: boolean;
  active?: boolean;
}
const getHoverOrActive = (props: CardStyleWarpProps) => css`
  box-shadow: 0 1px 6px ${() => getThemeVariantValue(props, 'borderColorBaseActive')};
  border-color: ${() => getThemeVariantValue(props, 'borderColorBaseActive')};
`;

export const getNoHover = (props: CardStyleWarpProps) => {
  if (!props.noHover) {
    return css`
      &:hover {
        ${() => getHoverOrActive(props)}
      }
    `;
  }
  return css``;
};

export const getActive = (props: CardStyleWarpProps) => {
  if (props.active) {
    return css`
      ${getHoverOrActive(props)}
    `;
  }
  return ``;
};

import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { ListItemProps, ListProps } from 'src';

export const ListStyleTheme = {
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',
  lineHeightDefault: 1.5,

  colorListBase: '#52575c',
  backgroundColorListBase: '#fff',
  boxShadowListActive: 'rgba(0, 0, 0, 0.2)',
  borderColorListActive: 'rgba(0, 0, 0, 0.2)',
  colorListBorder: '#e9e9e9',
  backgroundColorListStriped: '#f8f8f9',
  backgroundColorListBordered: '#e8e8e8',

  colorListItemDisabled: '#a3a6a9',
  backgroundListItemActive: '#f8f8f9',
  colorListItemActive: '#007bff',
  backgroundListItemNotDisabledHover: '#f8f8f9',
};
const propsTheme = {
  defaultTheme: { ...ListStyleTheme },
};
export interface ListStyleWarp
  extends ThemeVariantValueOptions<typeof ListStyleTheme>,
    Pick<ListProps<any>, 'striped' | 'noHover' | 'active' | 'bordered' | 'size'> {}

export interface ListStyleItemWarpProps
  extends ThemeVariantValueOptions<typeof ListStyleTheme>,
    Pick<ListItemProps<any>, 'disabled' | 'active'> {}

export const ListStyleItemMain = styled.div`
  display: block;
  flex: 1;
`;
export const ListStyleItemExtra = styled.div`
  margin-left: 40px;
`;

export const ListStyleItemWarp = styled.div<ListStyleItemWarpProps>`
  ${(props) => css`
    display: flex;
    align-items: center;

    ${props.disabled &&
    css`
      cursor: not-allowed;
      text-decoration: none;
      pointer-events: none;
      color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorListItemDisabled')};
    `}

    ${props.active &&
    css`
      background: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundListItemActive')};
      color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorListItemActive')};
    `}

    ${props.disabled &&
    css`
      display: block;
      color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorListItemDisabled')} !important; //#;
    `}

    :hover {
      ${!props.disabled &&
      css`
        background: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundListItemNotDisabledHover')};
      `}
    }
  `}
`;

const active = css`
  ${(props) => css`
    box-shadow: 0 1px 6px ${getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowListActive')};
    border-color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorListActive')};
  `}
`;

export const ListStyleHeader = styled.div``;
export const ListStyleFooter = styled.div``;

export const ListStyleWarp = styled.div<ListStyleWarp>`
  ${(props) => css`
    font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
    line-height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightDefault')};
    color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorListBase')};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    background-color: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorListBase')};
    transition: all 0.3s;
    &:hover {
      ${!props.noHover && active}
    }
    ${props.active && active}

    ${props.bordered &&
    css`
      border: 1px solid ${getThemeVariantValue({ ...props, ...propsTheme }, 'colorListBorder')};
      border-radius: 4px;
    `}

  ${ListStyleItemWarp} {
      :last-child {
        ${props.bordered &&
        css`
          border-bottom: 0;
          border-radius: 0 0 14px 4px;
        `}
      }

      :nth-of-type(2n) {
        ${props.striped &&
        css`
          background: ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorListStriped')};
        `}
      }
    }

    ${ListStyleItemWarp},${ListStyleHeader} {
      ${props.bordered &&
      css`
        border-bottom: 1px solid ${getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorListBordered')};
      `}
    }

    ${ListStyleItemWarp},${ListStyleHeader},${ListStyleFooter} {
      padding: 12px 18px;
      ${props.size === 'small' &&
      css`
        padding: 18px 16px;
      `}
      ${props.size === 'large' &&
      css`
        padding: 16px 24px;
      `}
    }
  `}
`;
export default ListStyleWarp;

import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { ListItemProps, ListProps } from 'src';

interface ListWarp
  extends ThemeVariantValueOptions,
    Pick<ListProps<any>, 'striped' | 'noHover' | 'active' | 'bordered' | 'size'> {}

interface ListItemWarpProps extends ThemeVariantValueOptions, Pick<ListItemProps<any>, 'disabled' | 'active'> {}

export const ListItemMain = styled.div`
  display: block;
  flex: 1;
`;
export const ListItemExtra = styled.div`
  margin-left: 40px;
`;

export const ListItemWarp = styled.div<ListItemWarpProps>`
  ${(props) => css`
    display: flex;
    align-items: center;

    ${props.disabled &&
    css`
      cursor: not-allowed;
      text-decoration: none;
      pointer-events: none;
      color: ${getThemeVariantValue(props, 'colorListItemDisabled')};
    `}

    ${props.active &&
    css`
      background: ${getThemeVariantValue(props, 'backgroundListItemActive')};
      color: ${getThemeVariantValue(props, 'colorListItemActive')};
    `}

    ${props.disabled &&
    css`
      display: block;
      color: ${getThemeVariantValue(props, 'colorListItemDisabled')} !important; //#;
    `}

    :hover {
      ${!props.disabled &&
      css`
        background: ${getThemeVariantValue(props, 'backgroundListItemNotDisabledHover')};
      `}
    }
  `}
`;

const active = css`
  ${(props) => css`
    box-shadow: 0 1px 6px ${getThemeVariantValue(props, 'boxShadowListActive')};
    border-color: ${getThemeVariantValue(props, 'borderColorListActive')};
  `}
`;

export const ListHeader = styled.div``;
export const ListFooter = styled.div``;

const ListWarp = styled.div<ListWarp>`
  ${(props) => css`
    font-size: ${getThemeVariantValue(props, 'fontSizeDefault')};
    line-height: 1.5 ${getThemeVariantValue(props, 'lineHeightDefault')};
    color: ${getThemeVariantValue(props, 'colorListBase')};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    background-color: ${getThemeVariantValue(props, 'backgroundColorListBase')};
    transition: all 0.3s;
    &:hover {
      ${!props.noHover && active}
    }
    ${props.active && active}

    ${props.bordered &&
    css`
      border: 1px solid ${getThemeVariantValue(props, 'colorListBorder')};
      border-radius: 4px;
    `}

  ${ListItemWarp} {
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
          background: ${getThemeVariantValue(props, 'backgroundColorListStriped')};
        `}
      }
    }

    ${ListItemWarp},${ListHeader} {
      ${props.bordered &&
      css`
        border-bottom: 1px solid ${getThemeVariantValue(props, 'backgroundColorListBordered')};
      `}
    }

    ${ListItemWarp},${ListHeader},${ListFooter} {
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

ListWarp.defaultProps = {
  defaultTheme: {
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
  },
};

ListItemWarp.defaultProps = {
  defaultTheme: {
    colorListItemDisabled: '#a3a6a9',
    backgroundListItemActive: '#f8f8f9',
    colorListItemActive: '#007bff',
    backgroundListItemNotDisabledHover: '#f8f8f9',
  },
};

export default ListWarp;

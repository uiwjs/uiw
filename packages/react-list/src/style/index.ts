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
      color: #a3a6a9;
    `}

    ${props.active &&
    css`
      background: #f8f8f9;
      color: #007bff;
    `}
  `}
`;

const active = css`
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
`;

export const ListHeader = styled.div``;
export const ListFooter = styled.div``;

const ListWarp = styled.div<ListWarp>`
  ${(props) => css`
    font-size: ${getThemeVariantValue(props, 'fontSizeDefault')};
    line-height: 1.5;
    color: ${getThemeVariantValue(props, 'colorListbase')};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    background-color: ${getThemeVariantValue(props, 'backgroundColorListbase')};
    transition: all 0.3s;
    &:hover {
      ${!props.noHover && active}
    }
    ${props.active && active}

    ${props.bordered &&
    css`
      border: 1px solid #e9e9e9;
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
          background: #f8f8f9;
        `}
      }
    }

    ${ListItemWarp},${ListHeader} {
      ${props.bordered &&
      css`
        border-bottom: 1px solid #e8e8e8;
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

    colorListbase: '#52575c',
    backgroundColorListbase: '#fff',
  },
};

export default ListWarp;

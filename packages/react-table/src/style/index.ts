import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { IconStyleBase, IconStyleBaseProps } from '@uiw/react-icon';

export const TableBaseDefaultTheme = {
  borderColorTable: '#dfe2e5',
  backgroundColorTableFooter: ' #fafafa',
  borderBottomColorTableRows: '#e8e8e8',
  backgroundColorTableTr: 'transparent',
  backgroundColorTable: '#fff',
  backgroundColorTableEvenRows: '#f9f9f9', // 偶数行背景颜色
  backgroundColorTableEvenRowsHover: '#efefef', // 偶数行Hover背景颜色
  backgroundColorTableHead: '#f6f9fb', // 表头背影色
  borderRightColorFixedRows: '#f0f0f0', // 固定列
};
type ThemeVar = ThemeVariantValueOptions<typeof TableBaseDefaultTheme>;

export interface TableStyleBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVar {}

export interface TableStyleWrapBaseProps extends TableStyleBaseProps {
  params?: {
    bordered?: boolean;
  };
}

export interface TableStyleDomIconProps extends IconStyleBaseProps {}

export interface TableStyleColProps extends TableStyleBaseProps {
  params?: {
    align?: 'left' | 'center' | 'right';
    fixed?: boolean | 'left' | 'right';
    bordered?: boolean;
    first?: boolean;
  };
}

export interface TableStyleColContentProps extends TableStyleBaseProps {
  params: {
    ellipsis?: boolean;
  };
}

export interface TableStyleFooterProps extends TableStyleBaseProps {
  params?: {
    bordered?: boolean;
  };
}

export const TableStyleWrap = styled.div<TableStyleWrapBaseProps>`
  width: 100%;
  overflow: auto;
  > table {
    display: table !important;
    margin: 0 !important;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    tr > th,
    tr > td {
      border: 0;
      padding: 5px 8px;
      border-bottom: 1px solid
        ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderBottomColorTableRows')};
    }
    tr {
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTableTr')};
    }
    > caption {
      text-align: left;
      padding: 10px 8px;
    }
    > tbody > tr {
      transition: all 0.3s;
      > td {
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTable')};
        position: relative;
        z-index: 1;
      }
      &:hover,
      &:hover:nth-child(2n) {
        > td {
          background-color: ${(props) =>
            getThemeVariantValue(
              { ...props, defaultTheme: TableBaseDefaultTheme },
              'backgroundColorTableEvenRowsHover',
            )};
        }
      }
      &:nth-child(2n) {
        > td {
          background-color: ${(props) =>
            getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTableEvenRows')};
        }
      }
    }
    > thead {
      > tr > th {
        font-weight: normal;
        padding: 8px;
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTableHead')};
        position: relative;
        z-index: 1;
      }
      > tr,
      tr:nth-child(2n) {
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTableHead')};
        border: transparent;
      }
    }
  }
  ${(props) =>
    props?.params?.bordered &&
    css`
      > table {
        tr > th,
        tr > td,
        > caption {
          border: 1px solid
            ${(props) => getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderColorTable')};
        }
        > caption {
          border-bottom: 0;
        }
      }
    `}
`;
// TableStyleWrap.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TableStyleDomIcon = styled(IconStyleBase)<TableStyleDomIconProps>``;
export const TableStyleTheadWrap = styled.thead``;
export const TheadItem = styled.th``;

// 单元格
export const TableStyleCol = styled.td<TableStyleColProps>`
  text-align: ${(props) => props?.params?.align};
  ${(props) =>
    props?.params?.fixed &&
    (props?.params?.fixed === 'right'
      ? css`
          position: sticky !important;
          z-index: 2 !important;

          ${props?.params?.bordered &&
          css`
            &:before {
              content: '';
              position: absolute;
              right: -1px;
              top: 0;
              bottom: 0;
              border-right: 1px solid
                ${getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderColorTable')};
            }
          `}

          &::after {
            position: absolute;
            top: 0;
            bottom: -1px;
            left: 0;
            width: 30px;
            transform: translateX(-100%);
            transition: box-shadow 0.3s;
            content: '';
            pointer-events: none;
            border-right: 1px solid
              ${(props) =>
                getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderRightColorFixedRows')};
            /* border-right: 1px solid #f0f0f0; */
          }
          ${props?.params?.first &&
          css`
            &::after {
              box-shadow: inset -10px 0 8px -8px rgb(0 0 0 / 15%);
            }
          `}
        `
      : css`
          position: sticky !important;
          z-index: 2 !important;
          ${props?.params?.bordered &&
          css`
            &:before {
              content: '';
              position: absolute;
              left: -1px;
              top: 0;
              bottom: 0;
              border-left: 1px solid
                ${getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderColorTable')};
            }
          `}
          &:after {
            box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 15%);
            position: absolute;
            top: 0;
            right: 0;
            bottom: -1px;
            width: 30px;
            transform: translateX(100%);
            transition: box-shadow 0.3s;
            content: '';
            pointer-events: none;
          }
        `)}
`;
// TableStyleCol.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TableStyleColContent = styled.span<TableStyleColContentProps>`
  ${(props) =>
    props?.params?.ellipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: keep-all;
      display: block;
    `}
`;
// TableStyleColContent.defaultProps = { defaultTheme: TableBaseDefaultTheme };

export const TableStyleFooter = styled.div<TableStyleFooterProps>`
  background: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'backgroundColorTableFooter')};
  padding: 10px 8px;
  ${(props) =>
    props.params?.bordered &&
    css`
      & {
        border: 1px solid
          ${(props) => getThemeVariantValue({ ...props, defaultTheme: TableBaseDefaultTheme }, 'borderColorTable')};
        border-top: 0;
      }
    `}
`;
// TableStyleFooter.defaultProps = { defaultTheme: TableBaseDefaultTheme };

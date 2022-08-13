import styled, { css } from 'styled-components';
import { SelectStyleWarp } from '@uiw/react-select';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';

export const PaginationStyleTheme = {
  borderColorPaginationBase: '#d4d4d4',
  backgroundColorPaginationActive: '#ececec',
  backgroundColorPaginationHover: '#f6f6f6',
  backgroundColorPaginationTextBase: '#565656',
  backgroundPaginationTextDisabled: '#d4d4d4',
  backgroundPaginationTextHover: '#2ea3f4',
  boxShadowdisabledPaginationDisabled: 'inset 0 8px 42px -12px rgba(0, 0, 0, 0.2)',
  boxShadowdisabledPaginationActive: 'inset 0 0 0 rgba(0, 0, 0, 0)',
};
type ThemeVar = ThemeVariantValueOptions<typeof PaginationStyleTheme>;

export interface PaginationStyleBaseLIAProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    ThemeVar {
  params?: {
    type?: string;
    isArrow?: boolean;
    size?: 'default' | 'small';
    disabled?: boolean;
  };
}

export const PaginationStyleBaseLIA = styled.a<PaginationStyleBaseLIAProps>`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  transition: none;
  margin: 0 10px;
  display: block;
  ${(props) =>
    props.params?.isArrow &&
    css`
      padding: 0 3px;
      &::after,
      &::before {
        content: '';
        display: block;
        height: 8px;
        width: 2px;
        border-radius: 2px;
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPaginationTextBase')};
        transition: all 0.3s;
      }
      &::after {
        margin-top: -4px;
      }
    `}

  ${(props) => {
    const { params } = props;
    if (params?.type === 'next' && params.isArrow) {
      return css`
        &::before {
          transform: rotate(-45deg);
        }
        &::after {
          transform: rotate(45deg);
        }
      `;
    }
    if (params?.type === 'prev' && params.isArrow) {
      return css`
        &::after {
          transform: rotate(-45deg);
        }
        &::before {
          transform: rotate(45deg);
        }
      `;
    }
    return css``;
  }}

  ${(props) =>
    props.params?.size === 'small' &&
    css`
      &::after,
      &::before {
        margin-left: 6px;
      }
    `}


  ${(props) =>
    props.params?.disabled &&
    css`
      &::after,
      &::before {
        background: ${(props) => getThemeVariantValue(props, 'backgroundPaginationTextDisabled')};
      }
    `}
`;
PaginationStyleBaseLIA.defaultProps = {
  defaultTheme: PaginationStyleTheme,
};
export interface PaginationStyleBaseLIProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    ThemeVar {
  params?: {
    disabled?: boolean;
    isOptions?: boolean;
    size?: 'default' | 'small';
    isDivider?: boolean;
    active?: boolean;
  };
}

export const PaginationStyleBaseLI = styled.li<PaginationStyleBaseLIProps>`
  height: 28px;
  line-height: 28px;
  vertical-align: middle;
  text-align: center;
  position: relative;
  cursor: pointer;
  display: inline-flex !important;
  transition: background-color 0.2s ease-in, box-shadow 0.2s ease-in;
  margin: 0 !important;
  display: inline-flex;
  align-items: center;
  ${(props) =>
    props.params?.disabled &&
    css`
      & {
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.params?.size === 'small' &&
    css`
      height: 21px;
      line-height: 21px;
      border-radius: 4px;
      > ${PaginationStyleBaseLIA} {
        margin: 0 3px;
        min-width: 15px;
      }
      ${props.params.active &&
      css`
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPaginationActive')};
      `}
      ${!props.params.active &&
      css`
        &:hover ${PaginationStyleBaseLIA} {
          color: ${(props) => getThemeVariantValue(props, 'backgroundPaginationTextHover')};
        }
      `}
    `}
  ${(props) =>
    props.params?.size === 'default' &&
    css`
      border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorPaginationBase')};
      border-left: 0;
      ${!props.params.disabled &&
      !props.params.active &&
      css`
        &:hover {
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorPaginationHover')};
        }
      `}
      ${!props.params.disabled &&
      css`
        &:active {
          box-shadow: ${() => getThemeVariantValue(props, 'boxShadowdisabledPaginationDisabled')};
        }
      `}
      &:first-child {
        border-left: 1px solid ${() => getThemeVariantValue(props, 'borderColorPaginationBase')};
        border-radius: 3px 0 0 3px;
      }
      &:last-child {
        border-radius: 0 3px 3px 0;
      }
      ${props.params.active &&
      css`
        background-color: ${() => getThemeVariantValue(props, 'backgroundColorPaginationActive')};
        &:active {
          box-shadow: ${() => getThemeVariantValue(props, 'boxshadowdisabledpaginationactive')};
        }
      `}
    `}

  ${(props) =>
    props.params?.isOptions &&
    css`
      ${SelectStyleWarp} {
        border: none !important;
        padding-top: 0;
        padding-bottom: 0;
        box-shadow: none !important;
        height: 100%;
      }
    `}
`;

PaginationStyleBaseLI.defaultProps = {
  defaultTheme: PaginationStyleTheme,
};
export interface PaginationStyleBaseULProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    ThemeVar {
  params?: {
    size?: 'default' | 'small';
    isDivider?: boolean;
  };
}

export const PaginationStyleBaseUL = styled.ul<PaginationStyleBaseULProps>`
  padding: 0 !important;
  margin: 0 !important;
  position: relative;
  user-select: none;
  font-size: 12px;
  ${(props) =>
    props.params?.size === 'default' &&
    props.params.isDivider &&
    css`
      ${PaginationStyleBaseLI} + ${PaginationStyleBaseLI} {
        margin-left: 8px !important;
        border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorPaginationBase')};
      }
      ${PaginationStyleBaseLI} {
        border-radius: 4px;
      }
    `}
`;

PaginationStyleBaseUL.defaultProps = {
  defaultTheme: PaginationStyleTheme,
};

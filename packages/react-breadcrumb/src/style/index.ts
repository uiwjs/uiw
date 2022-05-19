import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps, HTMLSpanProps } from '@uiw/utils';

export interface BreadcrumbWarpProps extends ThemeVariantValueOptions, HTMLDivProps {}

export const BreadcrumbWarp = styled.div<BreadcrumbWarpProps>`
  display: inline-flex;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
`;

export interface BreadcrumbWarpItemProps extends ThemeVariantValueOptions, HTMLSpanProps {
  active?: boolean;
  noSeparator?: Boolean;
  noBefore?: boolean;
}

export const BreadcrumbWarpItem = styled.span<BreadcrumbWarpItemProps>`
  display: inline-flex;
  &::before {
    padding-right: ${(props) => getThemeVariantValue(props, 'paddingRightBreadcrumItemBefore')};
    padding-left: ${(props) => getThemeVariantValue(props, 'paddingLeftBreadcrumItemBefore')};
    color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumb')};
  }

  &:first-child::before {
    display: none;
  }

  ${(props) =>
    !props.noBefore &&
    !props.noSeparator &&
    css`
      &::before {
        display: inline-block;
        content: attr(data-separator);
      }
    `}

  ${(props) =>
    props.noSeparator &&
    css`
      & {
        margin-left: ${(props) => getThemeVariantValue(props, 'marginLeftBreadcrumItemInterval')};
      }
    `}
  ${(props) =>
    props.active &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumbActive')};
      }
    `}
`;

export const BreadcrumbSeparator = styled.span`
  padding-right: ${(props) => getThemeVariantValue(props, 'paddingRightBreadcrumItemBefore')};
  padding-left: ${(props) => getThemeVariantValue(props, 'paddingLeftBreadcrumItemBefore')};
  color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumb')};
`;
export const BreadcrumbWarpItemDefaultTheme = {
  colorBreadcrumbActive: '#6e6e6e',
  paddingLeftBreadcrumItemBefore: '8px',
  paddingRightBreadcrumItemBefore: '8px',
};
BreadcrumbWarpItem.defaultProps = {
  defaultTheme: BreadcrumbWarpItemDefaultTheme,
};
export const BreadcrumbWarpDefaultTheme = {
  fontSizeDefault: '14px',
  paddingLeftBreadcrumItemBefore: '8px',
  paddingRightBreadcrumItemBefore: '8px',
  marginLeftBreadcrumItemInterval: '6px',
};
BreadcrumbWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    paddingLeftBreadcrumItemBefore: '8px',
    paddingRightBreadcrumItemBefore: '8px',
    marginLeftBreadcrumItemInterval: '6px',
  },
};

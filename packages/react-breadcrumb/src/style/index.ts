import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
export const BreadcrumbWarp = styled.div<ThemeVariantValueOptions>`
  display: inline-flex;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
`;

export interface BreadcrumbWarpItemProps extends ThemeVariantValueOptions {
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
BreadcrumbWarpItem.defaultProps = {
  defaultTheme: {
    colorBreadcrumbActive: '#6e6e6e',
    paddingLeftBreadcrumItemBefore: '8px',
    paddingRightBreadcrumItemBefore: '8px',
  },
};

BreadcrumbWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    paddingLeftBreadcrumItemBefore: '8px',
    paddingRightBreadcrumItemBefore: '8px',
    marginLeftBreadcrumItemInterval: '6px',
  },
};

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps, HTMLSpanProps } from '@uiw/utils';

export const BreadcrumbStyleTheme = {
  colorBreadcrumbActive: '#6e6e6e',
  paddingLeftBreadcrumItemBefore: '8px',
  paddingRightBreadcrumItemBefore: '8px',
  fontSizeDefault: '14px',
  marginLeftBreadcrumItemInterval: '6px',
};

export interface BreadcrumbStyleWarpProps extends ThemeVariantValueOptions<typeof BreadcrumbStyleTheme>, HTMLDivProps {}

export const BreadcrumbStyleWarp = styled.div<BreadcrumbStyleWarpProps>`
  display: inline-flex;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
`;

export interface BreadcrumbStyleWarpItemProps
  extends ThemeVariantValueOptions<typeof BreadcrumbStyleTheme>,
    HTMLSpanProps {
  active?: boolean;
  noSeparator?: Boolean;
  noBefore?: boolean;
}

export const BreadcrumbStyleWarpItem = styled.span<BreadcrumbStyleWarpItemProps>`
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

export const BreadcrumbStyleSeparator = styled.span`
  padding-right: ${(props) => getThemeVariantValue(props, 'paddingRightBreadcrumItemBefore')};
  padding-left: ${(props) => getThemeVariantValue(props, 'paddingLeftBreadcrumItemBefore')};
  color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumb')};
`;

BreadcrumbStyleWarpItem.defaultProps = {
  defaultTheme: BreadcrumbStyleTheme,
};

BreadcrumbStyleWarp.defaultProps = {
  defaultTheme: BreadcrumbStyleTheme,
};

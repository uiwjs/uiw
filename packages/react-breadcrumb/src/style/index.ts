import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions, HTMLDivProps, HTMLSpanProps } from '@uiw/utils';

export const BreadcrumbStyleTheme = {
  colorBreadcrumbActive: '#6e6e6e',
  paddingLeftBreadcrumItemBefore: '8px',
  paddingRightBreadcrumItemBefore: '8px',
  fontSizeDefault: '14px',
  marginLeftBreadcrumItemInterval: '6px',
};

const propsTheme = {
  defaultTheme: { ...BreadcrumbStyleTheme },
};

export interface BreadcrumbStyleWarpProps extends ThemeVariantValueOptions<typeof BreadcrumbStyleTheme>, HTMLDivProps {}

export const BreadcrumbStyleWarp = styled.div<BreadcrumbStyleWarpProps>`
  display: inline-flex;
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
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
    padding-right: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'paddingRightBreadcrumItemBefore')};
    padding-left: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'paddingLeftBreadcrumItemBefore')};
    color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorBreadcrumb')};
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
        margin-left: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'marginLeftBreadcrumItemInterval')};
      }
    `}
  ${(props) =>
    props.active &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorBreadcrumbActive')};
      }
    `}
`;

export const BreadcrumbStyleSeparator = styled.span`
  padding-right: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'paddingRightBreadcrumItemBefore')};
  padding-left: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'paddingLeftBreadcrumItemBefore')};
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorBreadcrumb')};
`;

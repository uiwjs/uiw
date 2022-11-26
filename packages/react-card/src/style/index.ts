import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { CardStyleWarpProps, getActive, getNoHover } from './utils';
import { CardStyleTheme } from './theme';
export { CardStyleTheme };
const propsTheme = {
  defaultTheme: { ...CardStyleTheme },
};
type HTMLDivElements = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type ThemeVar = ThemeVariantValueOptions<typeof CardStyleTheme>;

export type { CardStyleWarpProps };
export interface CardStyleHeadProps extends HTMLDivElements, ThemeVar {}

export const CardStyleHead = styled.div<CardStyleHeadProps>`
  height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'heightCardStyleHead')};
  line-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'heightCardStyleHead')};
  padding: ${(props) => `
    ${getThemeVariantValue({ ...props, ...propsTheme }, 'paddingVerticalCardStyleHead')} ${getThemeVariantValue(
    { ...props, ...propsTheme },
    'paddingHorizontalCardStyleHead',
  )}
  `};
  border-radius: ${(props) => `
  ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadius1CardStyleHead')} ${getThemeVariantValue(
    props,
    'borderRadius2CardStyleHead',
  )} ${getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadius3CardStyleHead')} ${getThemeVariantValue(
    { ...props, ...propsTheme },
    'borderRadius4CardStyleHead',
  )}
  `};
  zoom: 1;
`;
export interface CardStyleHeadTitleProps extends HTMLDivElements, ThemeVar {}
export const CardStyleHeadTitle = styled.div<CardStyleHeadTitleProps>`
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorBase')};
  font-weight: 500;
  display: inline-block;
`;
export interface CardStyleHeadExtraProps extends HTMLDivElements, ThemeVar {}
export const CardStyleHeadExtra = styled.div<CardStyleHeadExtraProps>`
  position: absolute;
  right: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'rightCardStyleHeadExtra')};
  top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'topCardStyleHeadExtra')};
`;
export interface CardBodyProps extends HTMLDivElements, ThemeVar {}
export const CardBody = styled.div<CardBodyProps>`
  padding: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'paddingCardBody')};
  ${CardStyleHead} + & {
    border-top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderTopCardBody')};
  }
`;
export interface CardStyleFooterProps extends HTMLDivElements, ThemeVar {}

export const CardStyleFooter = styled.div<CardStyleFooterProps>`
  padding: ${(props) => `
  ${getThemeVariantValue({ ...props, ...propsTheme }, 'paddingVerticalCardStyleFooter')} ${getThemeVariantValue(
    props,
    'paddingHorizontalCardStyleFooter',
  )} 
  `};
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorCardStyleFooter')};
  a {
    color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorCardStyleFooter')};
  }
  ${CardBody} + & {
    border-top: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderTopCardStyleFooter')};
  }
`;

export const CardStyleWarp = styled.div<CardStyleWarpProps>`
  background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorBase')};
  border-radius: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadiusLarge')};
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  line-height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'lineHeightDefault')};
  position: relative;
  transition: all 0.3s;
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorBase')};
    `}
  ${(props) => getNoHover(props)}
  ${(props) => getActive(props)}
`;

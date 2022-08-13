import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { CardStyleWarpProps, getActive, getNoHover } from './utils';

export const CardStyleTheme = {
  borderRadiusLarge: '5px',
  fontSizeDefault: '14px',
  lineHeightDefault: 1.5,
  borderColorBaseActive: '#CCCCCC',
  borderColorBase: '#e9e9e9',
  backgroundColorBase: '#fff',

  heightCardStyleHead: '40px',
  paddingVerticalCardStyleHead: 0,
  paddingHorizontalCardStyleHead: '14px',
  borderRadius1CardStyleHead: '2px',
  borderRadius2CardStyleHead: '2px',
  borderRadius3CardStyleHead: 0,
  borderRadius4CardStyleHead: 0,

  colorBase: '#393e48',

  rightCardStyleHeadExtra: '16px',
  topCardStyleHeadExtra: 0,

  paddingCardBody: '14px',
  borderTopCardBody: '1px solid #e9e9e9',

  paddingVerticalCardStyleFooter: '8px',
  paddingHorizontalCardStyleFooter: '10px',
  borderTopCardStyleFooter: '1px solid #F2F2F2',
  colorCardStyleFooter: '#999999',
};
type HTMLDivElements = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type ThemeVar = ThemeVariantValueOptions<typeof CardStyleTheme>;

export type { CardStyleWarpProps };
export interface CardStyleHeadProps extends HTMLDivElements, ThemeVar {}

export const CardStyleHead = styled.div<CardStyleHeadProps>`
  height: ${(props) => getThemeVariantValue(props, 'heightCardStyleHead')};
  line-height: ${(props) => getThemeVariantValue(props, 'heightCardStyleHead')};
  padding: ${(props) => `
    ${getThemeVariantValue(props, 'paddingVerticalCardStyleHead')} ${getThemeVariantValue(
    props,
    'paddingHorizontalCardStyleHead',
  )}
  `};
  border-radius: ${(props) => `
  ${getThemeVariantValue(props, 'borderRadius1CardStyleHead')} ${getThemeVariantValue(
    props,
    'borderRadius2CardStyleHead',
  )} ${getThemeVariantValue(props, 'borderRadius3CardStyleHead')} ${getThemeVariantValue(
    props,
    'borderRadius4CardStyleHead',
  )}
  `};
  zoom: 1;
`;
export interface CardStyleHeadTitleProps extends HTMLDivElements, ThemeVar {}
export const CardStyleHeadTitle = styled.div<CardStyleHeadTitleProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => getThemeVariantValue(props, 'colorBase')};
  font-weight: 500;
  display: inline-block;
`;
export interface CardStyleHeadExtraProps extends HTMLDivElements, ThemeVar {}
export const CardStyleHeadExtra = styled.div<CardStyleHeadExtraProps>`
  position: absolute;
  right: ${(props) => getThemeVariantValue(props, 'rightCardStyleHeadExtra')};
  top: ${(props) => getThemeVariantValue(props, 'topCardStyleHeadExtra')};
`;
export interface CardBodyProps extends HTMLDivElements, ThemeVar {}
export const CardBody = styled.div<CardBodyProps>`
  padding: ${(props) => getThemeVariantValue(props, 'paddingCardBody')};
  ${CardStyleHead} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardBody')};
  }
`;
export interface CardStyleFooterProps extends HTMLDivElements, ThemeVar {}

export const CardStyleFooter = styled.div<CardStyleFooterProps>`
  padding: ${(props) => `
  ${getThemeVariantValue(props, 'paddingVerticalCardStyleFooter')} ${getThemeVariantValue(
    props,
    'paddingHorizontalCardStyleFooter',
  )} 
  `};
  color: ${(props) => getThemeVariantValue(props, 'colorCardStyleFooter')};
  a {
    color: ${(props) => getThemeVariantValue(props, 'colorCardStyleFooter')};
  }
  ${CardBody} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardStyleFooter')};
  }
`;

export const CardStyleWarp = styled.div<CardStyleWarpProps>`
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusLarge')};
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightDefault')};
  position: relative;
  transition: all 0.3s;
  ${(props) =>
    props.bordered &&
    css`
      border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorBase')};
    `}
  ${(props) => getNoHover(props)}
  ${(props) => getActive(props)}
`;

CardStyleWarp.defaultProps = { defaultTheme: CardStyleTheme };

CardStyleHead.defaultProps = { defaultTheme: CardStyleTheme };

CardStyleHeadTitle.defaultProps = { defaultTheme: CardStyleTheme };

CardStyleHeadExtra.defaultProps = { defaultTheme: CardStyleTheme };

CardBody.defaultProps = { defaultTheme: CardStyleTheme };

CardStyleFooter.defaultProps = { defaultTheme: CardStyleTheme };

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { CardWarpProps, getActive, getNoHover } from './utils';

export type { CardWarpProps };
export interface CardHeadProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    heightCardHead: string;
    paddingVerticalCardHead: number | string;
    paddingHorizontalCardHead: string;
    borderRadius1CardHead: string;
    borderRadius2CardHead: string;
    borderRadius3CardHead: number | string;
    borderRadius4CardHead: number | string;
    [x: string]: string | number;
  };
}
export const CardHead = styled.div<CardHeadProps>`
  height: ${(props) => getThemeVariantValue(props, 'heightCardHead')};
  line-height: ${(props) => getThemeVariantValue(props, 'heightCardHead')};
  padding: ${(props) => `
    ${getThemeVariantValue(props, 'paddingVerticalCardHead')} ${getThemeVariantValue(
    props,
    'paddingHorizontalCardHead',
  )}
  `};
  border-radius: ${(props) => `
  ${getThemeVariantValue(props, 'borderRadius1CardHead')} ${getThemeVariantValue(
    props,
    'borderRadius2CardHead',
  )} ${getThemeVariantValue(props, 'borderRadius3CardHead')} ${getThemeVariantValue(props, 'borderRadius4CardHead')}
  `};
  zoom: 1;
`;
export interface CardHeadTitleProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    fontSizeDefault: string;
    colorBase: string;
    [x: string]: string | number;
  };
}
export const CardHeadTitle = styled.div<CardHeadTitleProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => getThemeVariantValue(props, 'colorBase')};
  font-weight: 500;
  display: inline-block;
`;
export interface CardHeadExtraProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    rightCardHeadExtra: string;
    topCardHeadExtra: number | string;
    [x: string]: string | number;
  };
}
export const CardHeadExtra = styled.div<CardHeadExtraProps>`
  position: absolute;
  right: ${(props) => getThemeVariantValue(props, 'rightCardHeadExtra')};
  top: ${(props) => getThemeVariantValue(props, 'topCardHeadExtra')};
`;
export interface CardBodyProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    paddingCardBody: string;
    borderTopCardBody: string;
    [x: string]: string | number;
  };
}
export const CardBody = styled.div<CardBodyProps>`
  padding: ${(props) => getThemeVariantValue(props, 'paddingCardBody')};
  ${CardHead} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardBody')};
  }
`;
export interface CardFooterProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    paddingVerticalCardFooter: string;
    paddingHorizontalCardFooter: string;
    borderTopCardFooter: string;
    colorCardFooter: string;
    [x: string]: string | number;
  };
}

export const CardFooter = styled.div<CardFooterProps>`
  padding: ${(props) => `
  ${getThemeVariantValue(props, 'paddingVerticalCardFooter')} ${getThemeVariantValue(
    props,
    'paddingHorizontalCardFooter',
  )} 
  `};
  color: ${(props) => getThemeVariantValue(props, 'colorCardFooter')};
  a {
    color: ${(props) => getThemeVariantValue(props, 'colorCardFooter')};
  }
  ${CardBody} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardFooter')};
  }
`;

export const CardWarp = styled.div<CardWarpProps>`
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
export const CardWarpDefaultTheme = {
  borderRadiusLarge: '5px',
  fontSizeDefault: '14px',
  lineHeightDefault: 1.5,
  borderColorBaseActive: '#CCCCCC',
  borderColorBase: '#e9e9e9',
  backgroundColorBase: '#fff',
};
CardWarp.defaultProps = { defaultTheme: CardWarpDefaultTheme };
export const CardHeadDefaultTheme = {
  heightCardHead: '40px',
  paddingVerticalCardHead: 0,
  paddingHorizontalCardHead: '14px',
  borderRadius1CardHead: '2px',
  borderRadius2CardHead: '2px',
  borderRadius3CardHead: 0,
  borderRadius4CardHead: 0,
};
CardHead.defaultProps = { defaultTheme: CardHeadDefaultTheme };
export const CardHeadTitleDefaultTheme = {
  fontSizeDefault: '14px',
  colorBase: '#393e48',
};
CardHeadTitle.defaultProps = { defaultTheme: CardHeadTitleDefaultTheme };
export const CardHeadExtraDefaultTheme = {
  rightCardHeadExtra: '16px',
  topCardHeadExtra: 0,
};
CardHeadExtra.defaultProps = { defaultTheme: CardHeadExtraDefaultTheme };
export const CardBodyDefaultTheme = {
  paddingCardBody: '14px',
  borderTopCardBody: '1px solid #e9e9e9',
};
CardBody.defaultProps = { defaultTheme: CardBodyDefaultTheme };
export const CardFooterDefaultTheme = {
  paddingVerticalCardFooter: '8px',
  paddingHorizontalCardFooter: '10px',
  borderTopCardFooter: '1px solid #F2F2F2',
  colorCardFooter: '#999999',
};
CardFooter.defaultProps = { defaultTheme: CardFooterDefaultTheme };

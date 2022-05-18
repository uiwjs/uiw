import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { WarpProps, getActive, getNoHover } from './utils';

export interface HeadProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    heightCardHead: string;
    paddingVerticalCardHead: number | string;
    paddingHorizontalCardHead: string;
    borderRadius1CardHead: string;
    borderRadius2CardHead: string;
    borderRadius3CardHead: number | string;
    borderRadius4CardHead: number | string;
  };
}
export const Head = styled.div<HeadProps>`
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
export interface HeadTitleProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    fontSizeDefault: string;
    colorBase: string;
  };
}
export const HeadTitle = styled.div<HeadTitleProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  color: ${(props) => getThemeVariantValue(props, 'colorBase')};
  font-weight: 500;
  display: inline-block;
`;
export interface HeadExtraProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    rightCardHeadExtra: string;
    topCardHeadExtra: number | string;
  };
}
export const HeadExtra = styled.div<HeadExtraProps>`
  position: absolute;
  right: ${(props) => getThemeVariantValue(props, 'rightCardHeadExtra')};
  top: ${(props) => getThemeVariantValue(props, 'topCardHeadExtra')};
`;
export interface BodyProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    paddingCardBody: string;
    borderTopCardBody: string;
  };
}
export const Body = styled.div<BodyProps>`
  padding: ${(props) => getThemeVariantValue(props, 'paddingCardBody')};
  ${Head} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardBody')};
  }
`;
export interface FooterProps extends ThemeVariantValueOptions {
  defaultTheme?: {
    paddingVerticalCardFooter: string;
    paddingHorizontalCardFooter: string;
    borderTopCardFooter: string;
    colorCardFooter: string;
  };
}

export const Footer = styled.div<FooterProps>`
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
  ${Body} + & {
    border-top: ${(props) => getThemeVariantValue(props, 'borderTopCardFooter')};
  }
`;

const Warp = styled.div<WarpProps>`
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  border-radius: 5px;
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

Warp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    lineHeightDefault: 1.5,
    borderColorBaseActive: '#CCCCCC',
    borderColorBase: '#e9e9e9',
    backgroundColorBase: '#fff',
  },
};
Head.defaultProps = {
  defaultTheme: {
    heightCardHead: '40px',
    paddingVerticalCardHead: 0,
    paddingHorizontalCardHead: '14px',
    borderRadius1CardHead: '2px',
    borderRadius2CardHead: '2px',
    borderRadius3CardHead: 0,
    borderRadius4CardHead: 0,
  },
};
HeadTitle.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    colorBase: '#393e48',
  },
};
HeadExtra.defaultProps = {
  defaultTheme: {
    rightCardHeadExtra: '16px',
    topCardHeadExtra: 0,
  },
};
Body.defaultProps = {
  defaultTheme: {
    paddingCardBody: '14px',
    borderTopCardBody: '1px solid #e9e9e9',
  },
};
Footer.defaultProps = {
  defaultTheme: {
    paddingVerticalCardFooter: '8px',
    paddingHorizontalCardFooter: '10px',
    borderTopCardFooter: '1px solid #F2F2F2',
    colorCardFooter: '#999999',
  },
};
export default Warp;

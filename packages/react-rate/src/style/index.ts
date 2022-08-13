import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { RateProps } from 'src';

export const RateBgStyleTheme = {
  colorRateBgBase: '#e9e9e9',
  colorRateActiveBase: '#e9e9e9',
  lineHeightRateActiveDefault: '12px',
  colorRateActiveOn: '#f5a623',
  lineHeightRateDefault: '12px',
  fontSizeRateDefault: '20px',
};

type ThemeVar = ThemeVariantValueOptions<typeof RateBgStyleTheme>;

export interface RateWarpProps extends ThemeVar, Pick<RateProps, 'disabled'> {}
export interface RateActiveProps extends ThemeVar, Pick<RateProps, 'disabled'> {
  starOn: boolean;
  hoverOn: boolean;
  halfon: boolean;
}
export interface RateBgProps extends ThemeVar, Pick<RateProps, 'disabled'> {}

export const RateBg = styled.div<RateBgProps>`
  color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'colorRateBgBase')};
`;
export const RateActive = styled.div<RateActiveProps>`
  z-index: 3;
  line-height: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'lineHeightRateActiveDefault')};
  position: absolute;
  transition: color 0.3s, width 0.3s;
  color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'colorRateActiveBase')};
  display: none;

  ${(props) =>
    props.hoverOn &&
    css`
      cursor: pointer;
    `}
  ${(props) =>
    (props.starOn || props.hoverOn || props.halfon) &&
    css`
      display: inline-block;
      color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'colorRateActiveOn')};
    `}
  ${(props) =>
    props.halfon &&
    !props.hoverOn &&
    css`
      overflow: hidden;
      width: 50%;
    `}
`;

export const RateWarp = styled.div<RateWarpProps>`
  position: relative;
  line-height: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'lineHeightRateDefault')};
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: RateBgStyleTheme }, 'fontSizeRateDefault')};
  font-family: auto;
  display: inline-block;
  vertical-align: middle;
  > span + span {
    margin-left: 3px;
  }

  > span,
  ${RateBg} {
    cursor: pointer;
    position: relative;
    display: inline-block;
  }
`;

// RateBg.defaultProps = {
//   defaultTheme: RateBgStyleTheme,
// };

// RateActive.defaultProps = {
//   defaultTheme: RateBgStyleTheme,
// };

// RateWarp.defaultProps = {
//   defaultTheme: RateBgStyleTheme,
// };

export default RateWarp;

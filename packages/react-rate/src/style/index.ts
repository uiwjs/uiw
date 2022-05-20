import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { RateProps } from 'src';

interface RateWarpProps extends ThemeVariantValueOptions, Pick<RateProps, 'disabled'> {}
interface RateActiveProps extends ThemeVariantValueOptions, Pick<RateProps, 'disabled'> {
  starOn: boolean;
  hoverOn: boolean;
  halfon: boolean;
}
interface RateBgProps extends ThemeVariantValueOptions, Pick<RateProps, 'disabled'> {}

export const RateBg = styled.div<RateBgProps>`
  color: ${(props) => getThemeVariantValue(props, 'colorRateBgBase')};
`;
export const RateActive = styled.div<RateActiveProps>`
  z-index: 3;
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightRateActiveDefault')};
  position: absolute;
  transition: color 0.3s, width 0.3s;
  color: ${(props) => getThemeVariantValue(props, 'colorRateActiveBase')};
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
      color: ${(props) => getThemeVariantValue(props, 'colorRateActiveOn')};
    `}
  ${(props) =>
    props.halfon &&
    !props.hoverOn &&
    css`
      overflow: hidden;
      width: 50%;
    `}
`;

const RateWarp = styled.div<RateWarpProps>`
  position: relative;
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightRateDefault')};
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeRateDefault')};
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

RateBg.defaultProps = {
  defaultTheme: {
    colorRateBgBase: '#e9e9e9',
  },
};

RateActive.defaultProps = {
  defaultTheme: {
    colorRateActiveBase: '#e9e9e9',
    lineHeightRateActiveDefault: '12px',
    colorRateActiveOn: '#f5a623',
  },
};

RateWarp.defaultProps = {
  defaultTheme: {
    lineHeightRateDefault: '12px',
    fontSizeRateDefault: '20px',
  },
};

export default RateWarp;

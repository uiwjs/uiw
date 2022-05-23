import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import React from 'react';

export interface SliderBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}

export interface SliderWarpProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    marks?: boolean;
  };
}

export const SliderWarp = styled.div<SliderWarpProps>`
  width: stretch;
  height: 4px;
  margin: 13px 7px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSlider')};
  border-radius: 3px;
  position: relative;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  ${(props) =>
    props.params?.disabled &&
    css`
       {
        & {
          cursor: not-allowed;
        }
      }
    `}
  ${(props) =>
    props.params?.marks &&
    css`
      & {
        margin-bottom: 24px;
      }
    `}
`;

export const SliderWarpDefaultTheme = { fontSizeSmall: '12px', backgroundColorSlider: '#e4e8f1' };
SliderWarp.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

export interface SliderBarProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    vertical?: boolean;
  };
}

export const SliderBar = styled.div<SliderBarProps>`
  height: 4px;
  border-radius: 3px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderBar')};
  position: absolute;
  ${(props) =>
    props.params?.disabled &&
    css`
      & {
        background-color: #bdc2cc;
      }
    `}

  ${(props) =>
    props.params?.vertical &&
    css`
      & {
        width: 4px;
        height: initial;
      }
    `}
`;

export const SliderBarDefaultTheme = { backgroundColorSliderBar: '#008ef0' };
SliderBar.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

export interface SliderHandleProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    vertical?: boolean;
  };
}
export const SliderHandle = styled.div<SliderHandleProps>`
  ${(props) =>
    props.params?.disabled &&
    css`
      & {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderHandleDisabled')};
        box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderHandleDisabled')};
      }
    `}
  left: 0%;
  width: 14px;
  height: 14px;
  position: absolute;
  z-index: 1;
  margin-top: -5px;
  transform: translateX(-50%);
  box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderHandle')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderHandle')};
  background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageSliderHandle')};
  border-radius: 50%;
  transition: all 0.3;
  ${(props) =>
    props.params?.disabled &&
    css`
      &:active {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderHandleDisabledActive')};
        transition: all 0.3;
        box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderHandleDisabledActive')};
      }
    `}
  ${(props) =>
    props.params?.vertical &&
    css`
      & {
        margin-left: 2px;
      }
    `}
`;

export const SliderHandleDefaultTheme = {
  backgroundColorSliderHandleDisabled: '#e6e6e6',
  boxShadowSliderHandleDisabled: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 0px 0px rgba(16, 22, 26, 0.2)',
  boxShadowSliderHandleDisabledActive:
    '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2), 0px 0px 0px 2px rgba(0, 0, 0, 0.1)',
  backgroundColorSliderHandleDisabledActive: '#d8e1e8',
  boxShadowSliderHandle: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2)',
  backgroundColorSliderHandle: '#f5f8fa',
  backgroundImageSliderHandle: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.8)',
};
SliderHandle.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

export interface SliderTooltipProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    open?: boolean;
  };
}
export const SliderTooltip = styled.div<SliderTooltipProps>`
  ${(props) =>
    props.params?.disabled &&
    css`
      ${SliderHandle}:hover &,
      ${SliderHandle}:focus &,
      ${SliderHandle}:active & {
        display: inline-block;
      }
    `}
  display: none;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
  position: absolute;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderTooltip')};
  color: #fff;
  padding: 0px 4px;
  margin-top: -3px;
  border-radius: 3px;
  transform: translate(-50%, -100%);
  margin-left: 6px;
  ${(props) =>
    props.params?.open &&
    css`
      && {
        display: inline-block;
      }
    `}
`;

export const SliderTooltipDefaultTheme = {
  fontSizeSmall: '12px',
  backgroundColorSliderTooltip: 'rgba(0, 0, 0, 0.75)',
};
SliderTooltip.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

export interface SliderDotProps extends SliderBaseProps {
  params?: {
    vertical?: boolean;
  };
}
export const SliderDot = styled.div<SliderDotProps>`
  & > div {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderDot')};
    box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderDot')};
    top: 0px;
    transform: translateX(-50%);
  }
  ${(props) =>
    props.params?.vertical &&
    css`
      & > div {
        left: 2px;
      }
    `}
`;

export const SliderDotDefaultTheme = {
  boxShadowSliderDot: '0 0 0 1.6px rgba(16, 22, 26, 0.16)',
  backgroundColorSliderDot: '#fff',
};
SliderDot.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

export interface SliderMarkProps extends SliderBaseProps {
  params?: {
    vertical?: boolean;
    noMarks?: boolean;
    disabled?: boolean;
  };
}
export const SliderMark = styled.div<SliderMarkProps>`
  & > div {
    margin-bottom: -50%;
    margin-left: 3px;
    padding: 0 3px;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    transform: translate(-50%, 50%);
    color: ${(props) => getThemeVariantValue(props, 'colorSliderMark')};
  }
  ${(props) =>
    props.params?.vertical &&
    css`
      & > div {
        transform: translate(0, -50%);
        padding: 0;
        margin-left: 12px;
        margin-top: 2px;
      }
    `}
  ${(props) =>
    props.params?.noMarks &&
    css`
      & {
        display: none;
      }
    `}

  ${(props) =>
    props.params?.disabled &&
    css`
      & > div {
        cursor: not-allowed;
      }
    `}
`;
export const SliderMarkDefaultTheme = {
  colorSliderMark: 'rgba(0, 0, 0, 0.43)',
};
SliderMark.defaultProps = { defaultTheme: SliderWarpDefaultTheme };

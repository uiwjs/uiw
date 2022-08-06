import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import React from 'react';

export interface SliderBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}

export interface SliderStyleWarpProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    marks?: boolean;
    vertical?: boolean;
  };
}

export const SliderStyleWarp = styled.div<SliderStyleWarpProps>`
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
    ${(props) =>
    props.params?.vertical &&
    css`
      height: 100%;
      height: stretch;
      width: 4px;
      margin: 7px 13px;
    `}
`;
export const SliderStyleWarpDefaultTheme = { fontSizeSmall: '12px', backgroundColorSlider: '#e4e8f1' };
SliderStyleWarp.defaultProps = { defaultTheme: SliderStyleWarpDefaultTheme };

export interface SliderStyleBarProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    vertical?: boolean;
  };
}

export const SliderStyleBar = styled.div<SliderStyleBarProps>`
  height: 4px;
  border-radius: 3px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleBar')};
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

export const SliderStyleBarDefaultTheme = { backgroundColorSliderStyleBar: '#008ef0' };
SliderStyleBar.defaultProps = { defaultTheme: SliderStyleBarDefaultTheme };

export interface SliderStyleHandleProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    vertical?: boolean;
  };
}
export const SliderStyleHandle = styled.div<SliderStyleHandleProps>`
  ${(props) =>
    props.params?.disabled &&
    css`
      & {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleHandleDisabled')};
        box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderStyleHandleDisabled')};
      }
    `}
  left: 0%;
  width: 14px;
  height: 14px;
  position: absolute;
  z-index: 1;
  margin-top: -5px;
  transform: translateX(-50%);
  box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderStyleHandle')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleHandle')};
  background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageSliderStyleHandle')};
  border-radius: 50%;
  transition: all 0.3;
  ${(props) =>
    props.params?.disabled &&
    css`
      &:active {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleHandleDisabledActive')};
        transition: all 0.3;
        box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderStyleHandleDisabledActive')};
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

export const SliderStyleHandleDefaultTheme = {
  backgroundColorSliderStyleHandleDisabled: '#e6e6e6',
  boxShadowSliderStyleHandleDisabled: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 0px 0px rgba(16, 22, 26, 0.2)',
  boxShadowSliderStyleHandleDisabledActive:
    '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2), 0px 0px 0px 2px rgba(0, 0, 0, 0.1)',
  backgroundColorSliderStyleHandleDisabledActive: '#d8e1e8',
  boxShadowSliderStyleHandle: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2)',
  backgroundColorSliderStyleHandle: '#f5f8fa',
  backgroundImageSliderStyleHandle: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))',
};
SliderStyleHandle.defaultProps = { defaultTheme: SliderStyleHandleDefaultTheme };

export interface SliderStyleTooltipProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    open?: boolean;
  };
}
export const SliderStyleTooltip = styled.div<SliderStyleTooltipProps>`
  ${(props) =>
    props.params?.disabled &&
    css`
      ${SliderStyleHandle}:hover &,
      ${SliderStyleHandle}:focus &,
      ${SliderStyleHandle}:active & {
        display: inline-block;
      }
    `}
  display: none;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
  position: absolute;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleTooltip')};
  color: ${(props) => getThemeVariantValue(props, 'colorSliderStyleTooltip')};
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

export const SliderStyleTooltipDefaultTheme = {
  fontSizeSmall: '12px',
  backgroundColorSliderStyleTooltip: 'rgba(0, 0, 0, 0.75)',
  colorSliderStyleTooltip: '#fff',
};
SliderStyleTooltip.defaultProps = { defaultTheme: SliderStyleTooltipDefaultTheme };

export interface SliderStyleDotProps extends SliderBaseProps {
  params?: {
    vertical?: boolean;
  };
}
export const SliderStyleDot = styled.div<SliderStyleDotProps>`
  & > div {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorSliderStyleDot')};
    box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowSliderStyleDot')};
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
export const SliderStyleDotDefaultTheme = {
  boxShadowSliderStyleDot: '0 0 0 1.6px rgba(16, 22, 26, 0.16)',
  backgroundColorSliderStyleDot: '#fff',
};
SliderStyleDot.defaultProps = { defaultTheme: SliderStyleDotDefaultTheme };

export interface SliderStyleMarkProps extends SliderBaseProps {
  params?: {
    vertical?: boolean;
    noMarks?: boolean;
    disabled?: boolean;
  };
}
export const SliderStyleMark = styled.div<SliderStyleMarkProps>`
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
    color: ${(props) => getThemeVariantValue(props, 'colorSliderStyleMark')};
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
export const SliderStyleMarkDefaultTheme = {
  colorSliderStyleMark: 'rgba(0, 0, 0, 0.43)',
};
SliderStyleMark.defaultProps = { defaultTheme: SliderStyleMarkDefaultTheme };

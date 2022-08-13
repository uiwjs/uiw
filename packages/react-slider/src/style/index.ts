import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import React from 'react';

export const SliderStyleTheme = {
  fontSizeSmall: '12px',
  backgroundColorSlider: '#e4e8f1',
  backgroundColorSliderStyleBar: '#008ef0',
  backgroundColorSliderStyleHandleDisabled: '#e6e6e6',
  boxShadowSliderStyleHandleDisabled: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 0px 0px rgba(16, 22, 26, 0.2)',
  boxShadowSliderStyleHandleDisabledActive:
    '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2), 0px 0px 0px 2px rgba(0, 0, 0, 0.1)',
  backgroundColorSliderStyleHandleDisabledActive: '#d8e1e8',
  boxShadowSliderStyleHandle: '0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2)',
  backgroundColorSliderStyleHandle: '#f5f8fa',
  backgroundImageSliderStyleHandle: 'linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))',
  backgroundColorSliderStyleTooltip: 'rgba(0, 0, 0, 0.75)',
  colorSliderStyleTooltip: '#fff',
  colorSliderStyleMark: 'rgba(0, 0, 0, 0.43)',
  boxShadowSliderStyleDot: '0 0 0 1.6px rgba(16, 22, 26, 0.16)',
  backgroundColorSliderStyleDot: '#fff',
};
type ThemeVar = ThemeVariantValueOptions<typeof SliderStyleTheme>;

export interface SliderBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVar {}

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
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundColorSlider')};
  border-radius: 3px;
  position: relative;
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'fontSizeSmall')};
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

// SliderStyleWarp.defaultProps = { defaultTheme: SliderStyleTheme };

export interface SliderStyleBarProps extends SliderBaseProps {
  params?: {
    disabled?: boolean;
    vertical?: boolean;
  };
}

export const SliderStyleBar = styled.div<SliderStyleBarProps>`
  height: 4px;
  border-radius: 3px;
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundColorSliderStyleBar')};
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

// SliderStyleBar.defaultProps = { defaultTheme: SliderStyleTheme };

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
        background-color: ${(props) =>
          getThemeVariantValue(
            { ...props, defaultTheme: SliderStyleTheme },
            'backgroundColorSliderStyleHandleDisabled',
          )};
        box-shadow: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'boxShadowSliderStyleHandleDisabled')};
      }
    `}
  left: 0%;
  width: 14px;
  height: 14px;
  position: absolute;
  z-index: 1;
  margin-top: -5px;
  transform: translateX(-50%);
  box-shadow: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'boxShadowSliderStyleHandle')};
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundColorSliderStyleHandle')};
  background-image: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundImageSliderStyleHandle')};
  border-radius: 50%;
  transition: all 0.3;
  ${(props) =>
    props.params?.disabled &&
    css`
      &:active {
        background-color: ${(props) =>
          getThemeVariantValue(
            { ...props, defaultTheme: SliderStyleTheme },
            'backgroundColorSliderStyleHandleDisabledActive',
          )};
        transition: all 0.3;
        box-shadow: ${(props) =>
          getThemeVariantValue(
            { ...props, defaultTheme: SliderStyleTheme },
            'boxShadowSliderStyleHandleDisabledActive',
          )};
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

// SliderStyleHandle.defaultProps = { defaultTheme: SliderStyleTheme };

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
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'fontSizeSmall')};
  position: absolute;
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundColorSliderStyleTooltip')};
  color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'colorSliderStyleTooltip')};
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

// SliderStyleTooltip.defaultProps = { defaultTheme: SliderStyleTheme };

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
    background-color: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'backgroundColorSliderStyleDot')};
    box-shadow: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'boxShadowSliderStyleDot')};
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

// SliderStyleDot.defaultProps = { defaultTheme: SliderStyleTheme };

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
    color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: SliderStyleTheme }, 'colorSliderStyleMark')};
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

// SliderStyleMark.defaultProps = { defaultTheme: SliderStyleTheme };

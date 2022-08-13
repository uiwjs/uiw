import styled, { css, keyframes } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import { Status } from '..';
import React from 'react';

export const ProgressStyleTheme = {
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',

  strokeProgressStylePathSuccess: '#28a745',
  strokeProgressStylePathException: '#dc3545',
  strokeProgressStylePath: '#20a0ff',
  strokeProgressStylePathTrail: '#e5e9f2',

  colorProgresTextSuccess: '#28a745',
  colorProgresTextException: '#dc3545',
  colorProgresText: '#48576a',

  backgroundColorProgressStyleBgSuccess: '#28a745',
  backgroundColorProgressStyleBgException: '#dc3545',
  backgroundColorProgressStyleBg: '#108ee9',

  backgroundColorProgressStyleInner: '#e5e9f2',

  backgroundProgressStyleBgActiveBefore: '#fff',
  backgroundImageProgressStyleBgActive:
    'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, 0.15) 50%,rgba(255, 255, 255, 0.15) 75%,transparent 75%,transparent)',
};
type ThemeVar = ThemeVariantValueOptions<typeof ProgressStyleTheme>;

const ProgressStyleBarStripes = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 24px 0;
  }
`;

const progressActive = keyframes`
  0% {
    opacity: 0.1;
    width: 0;
  }
  20% {
    opacity: 0.5;
    width: 0;
  }
  100% {
    opacity: 0;
    width: 100%;
  }
`;

export interface ProgressStyleWarpProps extends HTMLDivProps, ThemeVar {
  isLine?: Boolean;
}

export const ProgressStyleWarp = styled.div<ProgressStyleWarpProps>`
  position: relative;
  line-height: 1;
  display: inline-block;
  ${(props) =>
    props.isLine &&
    css`
      & {
        width: 100%;
        font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
      }
    `}
`;
ProgressStyleWarp.defaultProps = { defaultTheme: ProgressStyleTheme };

export interface ProgressStyleTextProps extends HTMLSpanProps, ThemeVar {
  status?: Status;
  isCircle?: boolean;
}

export const ProgressStyleText = styled.span<ProgressStyleTextProps>`
  color: ${(props) => getThemeVariantValue(props, 'colorProgresText')};
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  line-height: 1;
  box-sizing: border-box;
  ${(props) =>
    props.status === 'exception' &&
    css`
      color: ${(props) => getThemeVariantValue(props, 'colorProgresTextException')};
    `}
  ${(props) =>
    props.status === 'success' &&
    css`
      color: ${(props) => getThemeVariantValue(props, 'colorProgresTextSuccess')};
    `}
  ${(props) =>
    props.isCircle &&
    css`
      & {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        text-align: center;
        margin: 0;
        transform: translate(0, -50%);
        font-size: ${(props) => getThemeVariantValue(props, 'fontSizeLarge')};
      }
    `}
`;

ProgressStyleText.defaultProps = { defaultTheme: ProgressStyleTheme };

export interface ProgressStyleBarProps extends HTMLDivProps, ThemeVar {
  showText?: boolean;
  style?: React.CSSProperties;
}

export const ProgressStyleBar = styled.div<ProgressStyleBarProps>`
  box-sizing: border-box;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  ${(props) =>
    props.showText &&
    css`
      & {
        margin-right: -50px;
        padding-right: 50px;
      }
    `}
`;
export interface ProgressStyleInnerProps extends HTMLDivProps, ThemeVar {}

export const ProgressStyleInner = styled.div<ProgressStyleInnerProps>`
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressStyleInner')};
  overflow: hidden;
`;
ProgressStyleInner.defaultProps = { defaultTheme: ProgressStyleTheme };

export interface ProgressStyleBgProps extends HTMLDivProps, ThemeVar {
  status?: Status;
}

export const ProgressStyleBg = styled.div<ProgressStyleBgProps>`
  height: 100%;
  border-radius: 100px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressStyleBg')};
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  position: relative;
  ${(props) =>
    props.status === 'active' &&
    css`
      & {
        background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageProgressStyleBgActive')};
        background-size: 12px 12px;
        animation: ${ProgressStyleBarStripes} 1s linear infinite;
        &:before {
          content: ' ';
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${(props) => getThemeVariantValue(props, 'backgroundProgressStyleBgActiveBefore')};
          border-radius: 10px;
          animation: ${progressActive} 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }
      }
    `}
  ${(props) =>
    props.status === 'exception' &&
    css`
      & {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressStyleBgException')};
      }
    `}
    ${(props) =>
    props.status === 'success' &&
    css`
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressStyleBgSuccess')};
    `}
`;
ProgressStyleBg.defaultProps = { defaultTheme: ProgressStyleTheme };

export interface ProgressStyleSvgProps extends React.SVGProps<SVGSVGElement>, ThemeVar {}
export const ProgressStyleSvg = styled.svg<ProgressStyleSvgProps>``;

export interface ProgressStylePathProps extends React.SVGProps<SVGPathElement>, ThemeVar {
  isTrail?: boolean;
  isStroke?: boolean;
  status?: Status;
}
export const ProgressStylePath = styled.path<ProgressStylePathProps>`
  ${(props) =>
    props.isTrail &&
    css`
      & {
        stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressStylePathtrail')};
      }
    `}
  ${(props) => {
    if (props.isStroke) {
      switch (props.status) {
        case 'success':
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressStylePathSuccess')};
            }
          `;
        case 'exception':
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressStylePathException')};
            }
          `;
        default:
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressStylePath')};
            }
          `;
      }
    }
    return css``;
  }}
`;
ProgressStylePath.defaultProps = { defaultTheme: ProgressStyleTheme };

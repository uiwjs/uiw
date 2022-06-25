import styled, { css, keyframes } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import { Status } from '..';
import React from 'react';

export const progressDefaultTheme = {
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',

  strokeProgressPathSuccess: '#28a745',
  strokeProgressPathException: '#dc3545',
  strokeProgressPath: '#20a0ff',
  strokeProgressPathTrail: '#e5e9f2',

  colorProgresTextSuccess: '#28a745',
  colorProgresTextException: '#dc3545',
  colorProgresText: '#48576a',

  backgroundColorProgressBgSuccess: '#28a745',
  backgroundColorProgressBgException: '#dc3545',
  backgroundColorProgressBg: '#108ee9',

  backgroundColorProgressInner: '#e5e9f2',

  backgroundProgressBgActiveBefore: '#fff',
  backgroundImageProgressBgActive:
    'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, 0.15) 50%,rgba(255, 255, 255, 0.15) 75%,transparent 75%,transparent)',
};

const progressBarStripes = keyframes`
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

export interface ProgressWarpProps extends HTMLDivProps, ThemeVariantValueOptions {
  isLine?: Boolean;
}

export const ProgressWarp = styled.div<ProgressWarpProps>`
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
ProgressWarp.defaultProps = { defaultTheme: progressDefaultTheme };

export interface ProgressTextProps extends HTMLSpanProps, ThemeVariantValueOptions {
  status?: Status;
  isCircle?: boolean;
}

export const ProgressText = styled.span<ProgressTextProps>`
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

ProgressText.defaultProps = { defaultTheme: progressDefaultTheme };

export interface ProgressBarProps extends HTMLDivProps, ThemeVariantValueOptions {
  showText?: boolean;
  style?: React.CSSProperties;
}

export const ProgressBar = styled.div<ProgressBarProps>`
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
export interface ProgressInnerProps extends HTMLDivProps, ThemeVariantValueOptions {}

export const ProgressInner = styled.div<ProgressInnerProps>`
  height: 100%;
  width: 100%;
  border-radius: 100px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressInner')};
  overflow: hidden;
`;
ProgressInner.defaultProps = { defaultTheme: progressDefaultTheme };

export interface ProgressBgProps extends HTMLDivProps, ThemeVariantValueOptions {
  status?: Status;
}

export const ProgressBg = styled.div<ProgressBgProps>`
  height: 100%;
  border-radius: 100px;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressBg')};
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  position: relative;
  ${(props) =>
    props.status === 'active' &&
    css`
      & {
        background-image: ${(props) => getThemeVariantValue(props, 'backgroundImageProgressBgActive')};
        background-size: 12px 12px;
        animation: ${progressBarStripes} 1s linear infinite;
        &:before {
          content: ' ';
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${(props) => getThemeVariantValue(props, 'backgroundProgressBgActiveBefore')};
          border-radius: 10px;
          animation: ${progressActive} 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }
      }
    `}
  ${(props) =>
    props.status === 'exception' &&
    css`
      & {
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressBgException')};
      }
    `}
    ${(props) =>
    props.status === 'success' &&
    css`
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorProgressBgSuccess')};
    `}
`;
ProgressBg.defaultProps = { defaultTheme: progressDefaultTheme };

export interface ProgressSvgProps extends React.SVGProps<SVGSVGElement>, ThemeVariantValueOptions {}
export const ProgressSvg = styled.svg<ProgressSvgProps>``;

export interface ProgressPathProps extends React.SVGProps<SVGPathElement>, ThemeVariantValueOptions {
  isTrail?: boolean;
  isStroke?: boolean;
  status?: Status;
}
export const ProgressPath = styled.path<ProgressPathProps>`
  ${(props) =>
    props.isTrail &&
    css`
      & {
        stroke: ${(props) => getThemeVariantValue(props, 'strokeprogresspathtrail')};
      }
    `}
  ${(props) => {
    if (props.isStroke) {
      switch (props.status) {
        case 'success':
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressPathSuccess')};
            }
          `;
        case 'exception':
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressPathException')};
            }
          `;
        default:
          return css`
            & {
              stroke: ${(props) => getThemeVariantValue(props, 'strokeProgressPath')};
            }
          `;
      }
    }
    return css``;
  }}
`;
ProgressPath.defaultProps = { defaultTheme: progressDefaultTheme };

import styled, { css, keyframes } from 'styled-components';
import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import React from 'react';

const loaderRotate = keyframes`
to {
    transform: rotate(1turn);
  }
`;

const loaderDash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }

  to {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
  }
`;

const loaderColor = keyframes`
  0%,
  to {
    stroke: currentColor;
  }
  80%,
  90% {
    stroke: currentColor;
  }
`;

export interface LoaderSvgProps extends React.SVGProps<SVGSVGElement>, ThemeVariantValueOptions {
  size?: 'small' | 'default' | 'large';
}
export const LoaderSvg = styled.svg<LoaderSvgProps>`
  height: 100%;
  width: 100%;
  animation: ${loaderRotate} 2s linear infinite;
  transform-origin: center center;
  fill: currentcolor;
  vertical-align: middle;
  circle {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${loaderDash} 1.5s ease-in-out infinite, ${loaderColor} 6s ease-in-out infinite;
    stroke-linecap: round;
  }
  ${(props) =>
    props.size === 'large' &&
    css`
      & {
        width: 30px;
        height: 30px;
        circle {
          stroke-width: 3px;
        }
      }
    `}
  ${(props) =>
    props.size === 'default' &&
    css`
      & {
        width: 20px;
        height: 20px;
      }
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      & {
        width: 14px;
        height: 14px;
      }
    `}
`;

export interface LoaderTipsProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {
  fullscreen?: boolean;
}

export const LoaderTips = styled.div<LoaderTipsProps>`
  color: #2d8cf0;
  text-align: center;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 4;
  font-weight: 400;
  &:before {
    content: ' ';
    display: inline-block;
    height: 100%;
    width: 0.1px;
    vertical-align: middle;
  }
  &:not(:last-child) {
    position: absolute;
  }
  ${(props) =>
    props.fullscreen &&
    css`
      & {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        z-index: 99999;
      }
    `}
`;

export interface LoaderTipsNestedProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}

export const LoaderTipsNested = styled.div<LoaderTipsNestedProps>`
  vertical-align: middle;
  display: inline-block;
`;

export interface LoaderTipsNestedTextProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {
  vertical?: boolean;
}

export const LoaderTipsNestedText = styled.div<LoaderTipsNestedTextProps>`
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
  ${(props) =>
    props.vertical &&
    css`
      & {
        display: block;
        margin-left: 0;
        margin-top: 5px;
      }
    `}
`;

export interface LoaderWarpProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}
export const LoaderWarp = styled.div<LoaderWarpProps>`
  position: relative;
  display: inline-block;
`;

export interface LoaderChildProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {
  load?: boolean;
}

export const LoaderChild = styled.div<LoaderChildProps>`
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${(props) =>
    props.load &&
    css`
      & {
        opacity: 0.5;
        filter: blur(0.5px);
        overflow: hidden;
      }
    `}
`;

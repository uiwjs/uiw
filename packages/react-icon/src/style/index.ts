import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const loadingCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export interface IconBaseProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  spin?: boolean;
  verticalAlign?: 'middle' | 'baseline';
  params?: {
    spin?: boolean;
    verticalAlign?: 'middle' | 'baseline';
  };
}

export const IconBase = styled.span<IconBaseProps>`
  height: 1em;
  width: 1em;
  & svg {
    height: 1em;
    width: 1em;
  }
  display: inline-flex;
  align-self: center;
  position: relative;
  transition: color 0.3s;
  box-sizing: inherit;
  ${(props) =>
    (props.verticalAlign === 'baseline' || props.params?.verticalAlign === 'baseline') &&
    css`
      top: 0.125em;
    `}
  ${(props) =>
    (props.spin || props.params?.spin) &&
    css`
      & svg {
        animation: ${loadingCircle} 1s infinite linear;
      }
    `}
`;

import { ButtonProps } from 'src';
import styled, { css, keyframes } from 'styled-components';

export interface CssType {
  cssAtt: Partial<ButtonProps>;
}

const buttonVariant = (color: string, background: string) => {
  return css`
  color: ${color};
  background-color: ${background};
  z-index: 1;

  &:hover {
    background-color: darken(${background}, 10%);
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: 0 0 0 2px fadeout(${background}, 74%);
  }

  &:hover {
    color: ${color};
    background-color: darken(${background}, 10%);
    z-index: 2;
  }

  &:active,
  &.active {
    color: ${color};
    background-color: darken(${background}, 20%);
    background-image: none;
  }

  &.disabled,
  &[disabled] {
    background-color: lighten(${background}, 20%);
    z-index: 0;
  }

  &.@{w-btn}-basic {
    background-color: transparent !important;
    box-shadow: inset 0 0 0 #000;
    color: ${background};

    &:hover {
      background-color: lighten(${background}, 42%) !important;
    }

    &:active,
    &.active {
      color: ${background};
      background-color: lighten(${background}, 32%) !important;
      background-image: none;
    }

    &.disabled,
    &[disabled] {
      background-color: transparent !important;
      color: lighten(${background}, 10%);
    }
  }
    `;
};

const buttonSize = (fontSize: string, iconSize: string, lineHeight: string, minheight: string) => {
  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    min-height: ${minheight};

    .w-icon {
      font-size: ${iconSize};
    }
  `;
};

const buttonSizeCss = (props: ButtonProps) => {
  const { size } = props;
  switch (size) {
    case 'large':
      return buttonSize('16px', '20px', '16px', '36px');
    case 'small':
      return css`
        padding: 0 6px;
        min-width: 20px;
        ${() => buttonSize('16px', '14px', '16px', '36px')}
      `;
    default:
      return css``;
  }
};

const keyframesRotate = keyframes`
from {
  transform: rotateZ(0deg);
}
to {
  transform: rotateZ(360deg);
}
`;

const Button = styled.button<CssType>`
user-select: none;
display: inline-flex;
flex-direction: row;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
border: none;
border-radius: 3px;
cursor: pointer;
padding: 5px 7px;
position: relative;
vertical-align: middle;
text-align: left;
line-height: 14px;
font-size: 14px;
min-width: 30px;
min-height: 30px;
text-align: center;
color: #fff;
transition: background-color 0.5s, opacity 1s;

> *:not(:last-child) {
  margin-right: 5px;
}

& + &:not(.block) {
  margin-left: 5px;
}

&.block {
  display: block;
  width: 100%;
}

&.disabled,
&[disabled] {
  cursor: not-allowed;
}

${(props) =>
  props.cssAtt.type === 'primary' &&
  css`
    background-color: red;
  `}
&-primary {
}

&-success {
  ${buttonVariant('#fff', '#28a745')};
}

&-warning {
  ${buttonVariant('#fff', '#ffc107')};
}

&-danger {
  ${buttonVariant('#fff', '#dc3545')};
}

&-light {
  box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
    inset -1px 0px 0 0 rgba(0, 0, 0, 0.17);
  ${buttonVariant('#393e48', '#f8f9fa')};

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
      inset -1px 0px 0 0 rgba(0, 0, 0, 0.17), 0 0 0 2px rgba(0, 0, 0, 0.1);
  }

  &.@{w-btn}-basic {
    color: #9199a7;

    &:focus,
    &.focus {
      box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.17);
    }

    &:hover {
      background-color: lighten(#9199a7, 32%) !important;
    }

    &:active,
    &.active {
      color: #9199a7;
      background-color: lighten(#9199a7, 24%) !important;
      background-image: none;
    }

    &.disabled,
    &[disabled] {
      background-color: transparent !important;
      color: lighten(#9199a7, 10%);
    }
  }

  &.disabled,
  &[disabled] {
    color: lighten(#393e48, 20%);
    z-index: 0;
  }
}

&-dark {
  ${buttonVariant('#fff', '#393e48')};
}

&-link {
  ${buttonVariant('#008ef0', 'transparent')};
  color: #008ef0 !important;

  &:hover:not([disabled]) {
    color: darken(#008ef0, 12%);
    text-decoration: underline;
  }

  &:not([disabled]):active,
  &:not([disabled]).active {
    color: darken(#008ef0, 32%);
    box-shadow: none;
    text-decoration: underline;
  }

  &.disabled,
  &[disabled] {
    z-index: 0;
  }
}

.w-icon {
  font-size: 16px;
}

${(props) => props.cssAtt.size === 'large' && buttonSize('16px', '20px', '16px', '36px')}
}

&-size-small {
  padding: 0 6px;
  min-width: 20px;
  ${buttonSize('12px', '14px', '24px', '24px')};
}

& .w-icon:not(:last-child) {
  margin-right: 5px;
}

&-loading.w-btn-light::before {
  border: 1.2px solid #666f81;
}

${(props) => {
  return (
    props.cssAtt.loading &&
    css`
      &::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        border: 1.2px solid #fff;
        color: #fff;
        margin: 0 3px 0 0;
        clip-path: polygon(0% 0%, 100% 0, 100% 30%, 0% 30%);
        animation: ${keyframesRotate} 0.5s linear infinite;
      }
      ${() =>
        props.cssAtt.type === 'light' &&
        css`
          &::before: {
            border: 1.2px solid #666f81;
          }
        `}
    `
  );
}}
}
`;

export default Button;
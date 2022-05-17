import { ButtonProps } from 'src';
import styled, { css, keyframes } from 'styled-components';

function Color(color: string, lighten: number) {
  return `${color}${(255 * lighten).toFixed(0)}`;
}

export interface ButtonsProps extends ButtonProps {
  theme: any;
  focus?: boolean;
  style: React.CSSProperties;
}

const buttonTypeCss = (props: ButtonsProps) => {
  console.log('-->', props);
  const typeColor = { primary: '#008ef0', success: '#28a745', warning: '#ffc107', danger: '#dc3545', dark: '#393e48' };
  const { type, disabled, active, focus, basic } = props;
  switch (type) {
    case 'primary':
    case 'success':
    case 'warning':
    case 'danger':
    case 'dark':
      return buttonVariant(props, '#fff', typeColor[type]);
    case 'light':
      return css`
        box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
          inset -1px 0px 0 0 rgba(0, 0, 0, 0.17);
        ${() => buttonVariant(props, '#393e48', '#f8f9fa')}
        &:focus {
          outline: 0;
          box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
            inset -1px 0px 0 0 rgba(0, 0, 0, 0.17), 0 0 0 2px rgba(0, 0, 0, 0.1);
        }
        ${() =>
          focus &&
          css`
            outline: 0;
            box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.17), inset 1px -1px 0 0 rgba(0, 0, 0, 0.17),
              inset -1px 0px 0 0 rgba(0, 0, 0, 0.17), 0 0 0 2px rgba(0, 0, 0, 0.1);
          `}
        ${() =>
          basic &&
          css`
            color: #9199a7;
            &:focus {
              box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.17);
            }
            ${() =>
              focus &&
              css`
                color: #9199a7;
                background-color: lighten(${Color('#9199a7', 0.24)}) !important;
                background-image: none;
              `}
            &:hover {
              background-color: lighten(${Color('#9199a7', 0.32)}) !important;
            }
            &:active {
              color: #9199a7;
              background-color: lighten(${Color('#9199a7', 0.24)}) !important;
              background-image: none;
            }
            ${() =>
              active &&
              css`
                color: #9199a7;
                background-color: lighten(${Color('#9199a7', 0.24)}) !important;
                background-image: none;
              `}
            &[disabled] {
              background-color: transparent !important;
              color: lighten(${Color('#9199a7', 0.1)});
            }
            ${() =>
              disabled &&
              css`
                background-color: transparent !important;
                color: lighten(${Color('#9199a7', 0.1)});
              `}
          `}

        &[disabled] {
          color: lighten(${Color('#393e48', 0.2)});
          z-index: 0;
        }
        ${() =>
          disabled &&
          css`
            color: lighten(${Color('#393e48', 0.2)});
            z-index: 0;
          `}
      `;
    case 'link':
      return css`
        ${() => buttonVariant(props, '#fff', '#008ef0')};
        color: #008ef0 !important;
        &:hover:not([disabled]) {
          color: darken(${Color('#008ef0', 0.12)});
          text-decoration: underline;
        }
        &:not([disabled]):active {
          color: darken(${Color('#008ef0', 0.32)});
          box-shadow: none;
          text-decoration: underline;
        }
        ${() =>
          active &&
          css`
            &:not([disabled]) {
              color: darken(${Color('#008ef0', 0.32)});
              box-shadow: none;
              text-decoration: underline;
            }
          `}
        &[disabled] {
          z-index: 0;
        }
        ${() =>
          disabled &&
          css`
            z-index: 0;
          `}
      `;
    default:
      return css``;
  }
};

const buttonVariant = (props: ButtonsProps, color: string, background: string) => {
  return css`
    color: ${color};
    background-color: ${background};
    z-index: 1;
    &:hover {
      background-color: darken(${Color(background, 0.1)});
    }
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px fadeout(${Color(background, 0.74)});
    }
    ${() =>
      props.focus &&
      css`
        outline: 0;
        box-shadow: 0 0 0 2px fadeout(${Color(background, 0.74)});
      `}
    &:hover {
      color: ${color};
      background-color: darken(${Color(background, 0.1)});
      z-index: 2;
    }
    &:active {
      color: ${color};
      background-color: darken(${Color(background, 0.2)});
      background-image: none;
    }
    ${() =>
      props.active &&
      css`
        color: ${color};
        background-color: darken(${Color(background, 0.2)});
        background-image: none;
      `}
    &[disabled] {
      background-color: lighten(${Color(background, 0.2)});
      z-index: 0;
    }
    ${() =>
      props.disabled &&
      css`
        background-color: lighten(${Color(background, 0.2)});
        z-index: 0;
      `}
    ${() =>
      props.basic &&
      css`
        background-color: transparent !important;
        box-shadow: inset 0 0 0 #000;
        color: ${background};
        &:hover {
          background-color: lighten('#00022e', 50%) !important;
        }
        &:active {
          color: ${background};
          background-color: lighten(${Color(background, 0.32)}) !important;
          background-image: none;
        }
        ${() =>
          props.active &&
          css`
            color: ${background};
            background-color: lighten(${Color(background, 0.32)}) !important;
            background-image: none;
          `}
        ${() =>
          props.disabled &&
          css`
            background-color: transparent !important;
            color: lighten(${Color(background, 0.1)});
          `}
    &[disabled] {
          background-color: transparent !important;
          color: lighten(${Color(background, 0.1)});
        }
      `}
  `;
};

const buttonSize = (fontSize: string, lineHeight: string, minheight: string) => {
  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    min-height: ${minheight};
  `;
};

const buttonSizeCss = (props: ButtonProps) => {
  const { size } = props;
  switch (size) {
    case 'large':
      return buttonSize('16px', '16px', '36px');
    case 'small':
      return css`
        padding: 0 6px;
        min-width: 20px;
        ${() => buttonSize('16px', '16px', '36px')}
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

const Buttons = styled.button<ButtonsProps>`
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
    & + &:not(.block) {
      margin-left: 5px;
    }
  }
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
      & + &:not(&) {
        margin-left: 5px;
      }
    `}
  &[disabled] {
    cursor: not-allowed;
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
  ${(props) => {
    return (
      props.loading &&
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

        ${props.type === 'light' &&
        css`
          &::before: {
            border: 1.2px solid #666f81;
          }
        `}
      `
    );
  }}

${buttonTypeCss}
${buttonSizeCss} /* ${(props) => props.style} */
/* ${(props) => console.log('props', props)} */
`;

export default Buttons;

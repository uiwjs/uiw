import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';
import { InputProps } from 'src';

interface InputWarp extends ThemeVariantValueOptions, Pick<InputProps, 'size' | 'addonAfter' | 'disabled'> {}

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  box-sizing: border-box;
  background: #fff;
  height: 30px;
  margin: 0 !important;
  padding: 0 10px;
  vertical-align: middle;
  line-height: 30px;
  color: #393e48;
  font-weight: 400;
  font-size: inherit;
  transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;
  &:not(:first-child) {
    padding-left: 26px;
  }
  &:focus {
    box-shadow: 0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  &:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  &:focus&:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  &:disabled {
    box-shadow: none;
    background: #dddddd;
    opacity: 0.75;
    color: #a5a5a5;
    cursor: not-allowed;
    resize: none;
  }
`;

export const InputAddonAfter = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  bottom: 3px;
  > * {
    display: flex !important;
    align-items: center;
  }
`;

const InputWarp = styled.div<InputWarp>`
  position: relative;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  line-height: '14px';
  width: 100%;

  & ${Input} {
    width: 100%;
  }

  > .w-icon {
    position: absolute;
    margin: 0 7px 0 7px;
    transform: translateY(-50%);
    top: 50%;
  }

  ${(props) => {
    if (props.size === 'large') {
      return css`
        font-size: ${(props) => getThemeVariantValue(props, 'fontSizeLarge')};
        ${Input} {
          line-height: 36px;
          height: 36px;
        }
      `;
    }
  }}

  ${(props) => {
    if (props.size === 'small') {
      return css`
        min-width: 20px;
        ${Input} {
          line-height: 24px;
          height: 24px;
          padding: 0 6px;
          &:not(:first-child) {
            padding-left: 26px;
          }
        }
        ${InputAddonAfter} {
          > * {
            line-height: 16px;
            min-height: 16px;
          }
        }
      `;
    }
  }}
`;

InputWarp.defaultProps = {
  defaultTheme: {
    fontSizeSmall: '12px',
    fontSizeDefault: '14px',
    fontSizeLarge: '16px',
  },
};

export default InputWarp;

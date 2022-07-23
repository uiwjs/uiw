import styled, { css } from 'styled-components';
import Dropdown from '@uiw/react-dropdown';
import Input, { InputBase } from '@uiw/react-input';
import Tag from '@uiw/react-tag';
import { getThemeVariantValue } from '@uiw/utils';

interface DropdownDivProps {
  defaultTheme?: Record<string, string | number>;
  size?: string;
}

export const DropdownWrap = styled(Dropdown)``;

export const DropdownDiv = styled.div<DropdownDivProps>`
  ${(props) => css`
    display: flex;
    // overflow: hidden;
    justify-content: space-between;
    outline: none;
    border: none;
    align-items: center;
    border-radius: 3px;
    box-shadow: ${getThemeVariantValue(props, 'boxShadowDropdownDiv')};
    box-sizing: border-box;
    background: #fff;
    min-height: 30px;
    margin: 0 !important;
    padding: 3px 10px 3px 10px;
    vertical-align: middle;
    line-height: 30px;
    color: #393e48;
    font-weight: 400;
    font-size: inherit;
    transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
    appearance: none;

    &:focus {
      ${getThemeVariantValue(props, 'boxShadowDropdownDivFocus')};
    }

    &:hover {
      ${getThemeVariantValue(props, 'boxShadowDropdownDivhover')};
    }

    &:focus&:hover {
      ${getThemeVariantValue(props, 'boxShadowDropdownDivFocushover')};
    }

    &:disabled {
      box-shadow: none;
      background: #dddddd;
      opacity: 0.75;
      color: #a5a5a5;
      cursor: not-allowed;
      resize: none;
    }
  `}
  ${(props) => {
    if (props.size === 'small') {
      return css`
        & ${InputBase} {
          height: 16px;
          font-size: 10px;
          padding: 0px;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.size === 'large') {
      return css`
        & ${InputBase} {
          // line-height:0px !important;
          height: 28px;
        }
      `;
    }
  }}
`;

DropdownDiv.defaultProps = {
  defaultTheme: {
    boxShadowDropdownDiv: `0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),inset 0 1px 1px rgba(16, 22, 26, 0.2)`,
    boxShadowDropdownDivFocus: `box-shadow: 0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)`,
    boxShadowDropdownDivhover: `box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2)`,
    boxShadowDropdownDivFocushover: `box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)`,
  },
};

export const DropdownDivTag = styled(Tag)``;

export const DropdownDivInput = styled(Input)`
  flex: 1;
  top: 1px;

  input {
    box-shadow: none;
    padding: 0px;
    height: 20px;
    min-width: 50px;
  }

  .w-input-inner {
    &:hover {
      box-shadow: none !important;
    }

    &:focus {
      box-shadow: none !important;
    }
  }
`;

export const DropdownDivSpan = styled.span`
  width: 14px;
  display: flex;
  align-content: center;
`;
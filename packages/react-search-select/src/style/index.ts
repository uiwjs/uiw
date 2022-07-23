import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import Input, { InputProps, InputBase } from '@uiw/react-input';
import { IconBase, IconBaseProps } from '@uiw/react-icon';

export interface SearchSelectInputContentsBaseProps extends InputProps, ThemeVariantValueOptions {}

export const SearchSelectInputContentsBase = styled(Input)`
  ${InputBase} {
    box-shadow: none;
    padding: 0px;
    // min-width: 50px;
    height: 28px;
    &:hover {
      box-shadow: none !important;
    }

    &:focus {
      box-shadow: none !important;
    }
    ${(props) =>
      props.disabled &&
      css`
        box-shadow: none;
        background: #dddddd;
        opacity: 0.75;
        color: #a5a5a5;
        cursor: not-allowed;
        resize: none;
      `}
  }
  ${(props) =>
    props.size === 'small' &&
    css`
      ${InputBase} {
        height: 16px;
        font-size: 10px;
        padding: 0px;
      }
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      ${InputBase} {
        height: 28px;
      }
    `}
`;

export interface SearchSelectTagContentsBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement | ThemeVariantValueOptions>, HTMLDivElement> {}
export const SearchSelectTagContentsBase = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
`;

export interface SearchSelectInputBaseProps extends InputProps, ThemeVariantValueOptions {
  params?: {
    showSearch?: boolean;
  };
}

export const SearchSelectInputBase = styled(Input)<SearchSelectInputBaseProps>`
  ${(props) =>
    props.params?.showSearch === false &&
    css`
      cursor: pointer;
    `}
`;

export interface SearchSelectIconBaseProps extends IconBaseProps {
  params?: {
    singe?: boolean;
    multiple?: boolean;
    spin?: boolean;
  };
}
export const SearchSelectIconBase = styled(IconBase)<SearchSelectIconBaseProps>`
  ${(props) =>
    props.params?.multiple &&
    css`
      left: 7px;
      font-size: 15px;
    `}

  ${(props) =>
    props.params?.singe &&
    css`
      font-size: 15px;
    `}
`;

export interface SearchSelectInnerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement | ThemeVariantValueOptions>, HTMLDivElement> {
  params?: {
    showSearch: boolean;
  };
}
export const SearchSelectInner = styled.div<SearchSelectInnerProps>`
  display: flex;
  justify-content: space-between;
  outline: none;
  border: none;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),
    inset 0 1px 1px rgba(16, 22, 26, 0.2);
  box-sizing: border-box;
  background: #fff;
  margin: 0 !important;
  padding: 1px 10px;
  vertical-align: middle;
  line-height: 30px;
  align-items: center;
  color: #393e48;
  font-weight: 400;
  font-size: inherit;
  transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }

  &:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }

  &:focus&:hover {
    box-shadow: 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  ${(props) =>
    props.params?.showSearch === false &&
    css`
      cursor: pointer;
    `}
`;
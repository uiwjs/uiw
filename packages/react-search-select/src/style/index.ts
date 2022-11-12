import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import Input, { InputProps, InputStyleBase } from '@uiw/react-input';
import { IconStyleBase, IconStyleBaseProps } from '@uiw/react-icon';

export const SearchSelectStyleTheme = {
  backgroundSearchSelectDisabled: '#dddddd',
  backgroundSearchSelectBase: '#fff',
  colorSearchSelectDisabled: '#a5a5a5',
  colorSearchSelectBase: '#393e48',
  boxShadowSearchSelectBase:
    ' 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowSearchSelectFocus:
    '0 0 0 1px #393e48, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowSearchSelectHover:
    ' 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
  boxShadowSearchSelectFocusHover:
    ' 0 0 0 1px #6e6e6e, 0 0 0 3px rgba(57, 62, 72, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2)',
};

export interface SearchSelectInputContentsBaseProps
  extends InputProps,
    ThemeVariantValueOptions<typeof SearchSelectStyleTheme> {}

export const SearchSelectInputContentsBase = styled(Input)<SearchSelectInputContentsBaseProps>`
  ${InputStyleBase} {
    box-shadow: none;
    padding: 0px;
    // min-width: 50px;
    height: 20px;
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
        background: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'backgroundSearchSelectDisabled')};
        opacity: 0.75;
        color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'colorSearchSelectDisabled')};
        cursor: not-allowed;
        resize: none;
      `}
  }
  ${(props) =>
    props.size === 'small' &&
    css`
      ${InputStyleBase} {
        height: 20px;
        font-size: 10px;
        padding: 0px;
      }
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      ${InputStyleBase} {
        height: 26px;
      }
    `}
`;
// SearchSelectInputContentsBase.defaultProps = {
//   defaultTheme: SearchSelectStyleTheme,
// };

export interface SearchSelectTagContentsBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement | ThemeVariantValueOptions>, HTMLDivElement> {}
export const SearchSelectTagContentsBase = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 100%;
  box-sizing: border-box;
`;

export interface SearchSelectInputStyleBaseProps extends InputProps, ThemeVariantValueOptions {
  params?: {
    showSearch?: boolean;
  };
}

export const SearchSelectInputStyleBase = styled(Input)<SearchSelectInputStyleBaseProps>`
  ${(props) =>
    props.params?.showSearch === false &&
    css`
      cursor: pointer;
    `}
`;

export interface SearchSelectIconStyleBaseProps extends IconStyleBaseProps {
  params?: {
    singe?: boolean;
    multiple?: boolean;
    spin?: boolean;
  };
}
export const SearchSelectIconStyleBase = styled(IconStyleBase)<SearchSelectIconStyleBaseProps>`
  ${(props) =>
    props.params?.multiple &&
    css`
      left: 3px;
      font-size: 14px;
      cursor: pointer;
    `}

  ${(props) =>
    props.params?.singe &&
    css`
      font-size: 14px;
      cursor: pointer;
      left: -3px;
    `}
`;

export interface SearchSelectInnerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions<typeof SearchSelectStyleTheme> {
  params?: {
    showSearch: boolean;
    size: string;
    len: number;
  };
}
export const SearchSelectInner = styled.div<SearchSelectInnerProps>`
  display: flex;
  justify-content: space-between;
  outline: none;
  border: none;
  align-items: center;
  border-radius: 3px;
  box-shadow: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'boxShadowSearchSelectBase')};
  box-sizing: border-box;
  background: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'backgroundSearchSelectBase')};
  margin: 0 !important;
  padding: 5px 10px;
  vertical-align: middle;
  line-height: 30px;
  align-items: center;
  color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'colorSearchSelectBase')};
  font-weight: 400;
  font-size: inherit;
  transition: box-shadow 0.3s cubic-bezier(0.4, 1, 0.75, 0.9);
  appearance: none;

  &:focus {
    box-shadow: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'boxShadowSearchSelectFocus')};
  }

  &:hover {
    box-shadow: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'boxShadowSearchSelectHover')};
  }

  &:focus&:hover {
    box-shadow: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: SearchSelectStyleTheme }, 'boxShadowSearchSelectFocusHover')};
  }
  ${(props) => {
    const { showSearch, size = 'default', len = 0 } = props?.params || {};
    return css`
      cursor: ${showSearch === false && 'pointer'};
      padding: ${size === 'small' && '2px 5px'};
      padding-left: ${len > 0 && returnPaddingLeft(size)};
    `;
  }}
`;

function returnPaddingLeft(size: string) {
  if (size !== 'small') {
    return '6px';
  }
  return null;
}

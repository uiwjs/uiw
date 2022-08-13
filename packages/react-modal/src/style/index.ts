import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';

export const ModalStyleTheme = {
  fontSizeLarge: '16px',
  fontSizeDefault: '14px',
  minHeightModalStyleHeader: '40px',
  backgroundColorModalStyleHeaderBase: '#fff',
  boxShadowColorModalStyleHeaderBase: 'rgba(16, 22, 26, 0.15)',
  minHeightModalStyleHeaderH4: '22px',

  backgroundColorModalStyleInnerBase: '#f9f9f9',
  minWidthModalStyleInner: '320px',
  boxShadowModalStyleInnerH: 'rgba(16, 22, 26, 0.1)',
  boxShadowModalStyleInnerV: 'rgba(16, 22, 26, 0.2)',
};
type ThemeVar = ThemeVariantValueOptions<typeof ModalStyleTheme>;

export interface ModalStyleWrapProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    ThemeVar {}

export const ModalStyleHeader = styled.div<ModalStyleWrapProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    min-height: ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'minHeightModalStyleHeader')};
    padding-left: 13px;
    padding-right: 5px;
    background-color: ${getThemeVariantValue(
      { ...props, defaultTheme: ModalStyleTheme },
      'backgroundColorModalStyleHeaderBase',
    )};
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 0
      ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'boxShadowColorModalStyleHeaderBase')};
    font-size: ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'fontSizeLarge')};
    > .w-icon {
      margin-right: 10px;
      color: #393e48;
    }
    h4 {
      margin: 0;
      padding: 0;
      flex: 1 1 auto;
      font-weight: bold;
      min-height: ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'minHeightModalStyleHeaderH4')};
    }
  `}
`;

// ModalStyleHeader.defaultProps = {
//   defaultTheme: ModalStyleTheme,
// };

export const ModalStyleBody = styled.div<ModalStyleWrapProps>`
  ${(props) => css`
    padding-top: 20px;
    font-size: ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'fontSizeDefault')};
  `}
`;

// ModalStyleBody.defaultProps = {
//   defaultTheme: ModalStyleTheme,
// };

export const ModalStyleFooter = styled.div<ModalStyleWrapProps>`
  display: flex;
  margin-top: 15px;
  flex-direction: row-reverse;
  .w-btn + .w-btn {
    margin-right: 10px;
  }
`;

export const ModalStyleContainer = styled.div<ModalStyleWrapProps>``;

export const ModalStyleInner = styled.div<ModalStyleWrapProps>`
  ${(props) => css`
    padding-bottom: 20px;
    background: ${getThemeVariantValue(
      { ...props, defaultTheme: ModalStyleTheme },
      'backgroundColorModalStyleInnerBase',
    )};
    min-width: ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'minWidthModalStyleInner')};
    border-radius: 5px;
    box-shadow: 0 0 0 1px
        ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'boxShadowModalStyleInnerH')},
      0 4px 8px ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'boxShadowModalStyleInnerV')},
      0 18px 46px 6px ${getThemeVariantValue({ ...props, defaultTheme: ModalStyleTheme }, 'boxShadowModalStyleInnerV')};
  `}
`;
// ModalStyleInner.defaultProps = {
//   defaultTheme: ModalStyleTheme,
// };

export const ModalStyleWrap = styled.div<ModalStyleWrapProps>`
  z-index: 1001;

  ${ModalStyleBody},
  ${ModalStyleFooter} {
    margin: 0 20px;
  }
`;

// ModalStyleWrap.defaultProps = {
//   defaultTheme: ModalStyleTheme,
// };

export default ModalStyleWrap;

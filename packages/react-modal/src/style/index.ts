import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';

interface ModalStyleWrapProps extends ThemeVariantValueOptions {}

export const ModalStyleHeader = styled.div<ModalStyleWrapProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    min-height: ${getThemeVariantValue(props, 'minHeightModalStyleHeader')};
    padding-left: 13px;
    padding-right: 5px;
    background-color: ${getThemeVariantValue(props, 'backgroundColorModalStyleHeaderBase')};
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 0 ${getThemeVariantValue(props, 'boxShadowColorModalStyleHeaderBase')};
    font-size: ${getThemeVariantValue(props, 'fontSizeLarge')};
    > .w-icon {
      margin-right: 10px;
      color: #393e48;
    }
    h4 {
      margin: 0;
      padding: 0;
      flex: 1 1 auto;
      font-weight: bold;
      min-height: ${getThemeVariantValue(props, 'minHeightModalStyleHeaderH4')};
    }
  `}
`;

ModalStyleHeader.defaultProps = {
  defaultTheme: {
    fontSizeLarge: '16px',

    minHeightModalStyleHeader: '40px',
    backgroundColorModalStyleHeaderBase: '#fff',
    boxShadowColorModalStyleHeaderBase: 'rgba(16, 22, 26, 0.15)',
    minHeightModalStyleHeaderH4: '22px',
  },
};

export const ModalStyleBody = styled.div<ModalStyleWrapProps>`
  ${(props) => css`
    padding-top: 20px;
    font-size: ${getThemeVariantValue(props, 'fontSizeDefault')};
  `}
`;

ModalStyleBody.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
  },
};

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
    background: ${getThemeVariantValue(props, 'backgroundColorModalStyleInnerBase')};
    min-width: ${getThemeVariantValue(props, 'minWidthModalStyleInner')};
    border-radius: 5px;
    box-shadow: 0 0 0 1px ${getThemeVariantValue(props, 'boxShadowModalStyleInnerH')},
      0 4px 8px ${getThemeVariantValue(props, 'boxShadowModalStyleInnerV')},
      0 18px 46px 6px ${getThemeVariantValue(props, 'boxShadowModalStyleInnerV')};
  `}
`;
ModalStyleInner.defaultProps = {
  defaultTheme: {
    backgroundColorModalStyleInnerBase: '#f9f9f9',
    minWidthModalStyleInner: '320px',
    boxShadowModalStyleInnerH: 'rgba(16, 22, 26, 0.1)',
    boxShadowModalStyleInnerV: 'rgba(16, 22, 26, 0.2)',
  },
};

export const ModalStyleWrap = styled.div<ModalStyleWrapProps>`
  z-index: 1001;

  ${ModalStyleBody},
  ${ModalStyleFooter} {
    margin: 0 20px;
  }
`;

ModalStyleWrap.defaultProps = {
  defaultTheme: {},
};

export default ModalStyleWrap;

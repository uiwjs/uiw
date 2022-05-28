import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, getThemeVariantValue } from '@uiw/utils';

interface ModalWrapProps extends ThemeVariantValueOptions {}

export const ModalHeader = styled.div<ModalWrapProps>`
  ${(props) => css`
    display: flex;
    align-items: center;
    min-height: ${getThemeVariantValue(props, 'minHeightModalHeader')};
    padding-left: 13px;
    padding-right: 5px;
    background-color: ${getThemeVariantValue(props, 'backgroundColorModalHeaderBase')};
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 0 ${getThemeVariantValue(props, 'boxShadowColorModalHeaderBase')};
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
      min-height: ${getThemeVariantValue(props, 'minHeightModalHeaderH4')};
    }
  `}
`;

ModalHeader.defaultProps = {
  defaultTheme: {
    fontSizeLarge: '16px',

    minHeightModalHeader: '40px',
    backgroundColorModalHeaderBase: '#fff',
    boxShadowColorModalHeaderBase: 'rgba(16, 22, 26, 0.15)',
    minHeightModalHeaderH4: '22px',
  },
};

export const ModalBody = styled.div<ModalWrapProps>`
  ${(props) => css`
    padding-top: 20px;
    font-size: ${getThemeVariantValue(props, 'fontSizeDefault')};
  `}
`;

ModalBody.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
  },
};

export const ModalFooter = styled.div<ModalWrapProps>`
  display: flex;
  margin-top: 15px;
  flex-direction: row-reverse;
  .w-btn + .w-btn {
    margin-right: 10px;
  }
`;

export const ModalContainer = styled.div<ModalWrapProps>``;

export const ModalInner = styled.div<ModalWrapProps>`
  ${(props) => css`
    padding-bottom: 20px;
    background: ${getThemeVariantValue(props, 'backgroundColorModalInnerBase')};
    min-width: ${getThemeVariantValue(props, 'minWidthModalInner')};
    border-radius: 5px;
    box-shadow: 0 0 0 1px ${getThemeVariantValue(props, 'boxShadowModalInnerH')},
      0 4px 8px ${getThemeVariantValue(props, 'boxShadowModalInnerV')},
      0 18px 46px 6px ${getThemeVariantValue(props, 'boxShadowModalInnerV')};
  `}
`;
ModalInner.defaultProps = {
  defaultTheme: {
    backgroundColorModalInnerBase: '#f9f9f9',
    minWidthModalInner: '320px',
    boxShadowModalInnerH: 'rgba(16, 22, 26, 0.1)',
    boxShadowModalInnerV: 'rgba(16, 22, 26, 0.2)',
  },
};

const ModalWrap = styled.div<ModalWrapProps>`
  z-index: 1001;

  ${ModalBody},
  ${ModalFooter} {
    margin: 0 20px;
  }
`;

ModalWrap.defaultProps = {
  defaultTheme: {},
};

export default ModalWrap;

import styled, { css } from 'styled-components';
import { IconStyleBase } from '@uiw/react-icon';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import Button, { ButtonProps } from '@uiw/react-button';

interface DivWrapProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {
  params: {
    rounded: boolean | undefined;
    type: 'success' | 'warning' | 'info' | 'error' | undefined;
    children: any;
    showIcon: boolean | undefined;
    icon: any;
    title: React.ReactNode;
  };
}

const MessageStyleWrap = styled.div`
  padding: 10px 15px;
  position: relative;
  font-size: 14px;
`;
// 最外层div
export const MessageStyleDivWrap = styled(MessageStyleWrap)<DivWrapProps>`
  margin-top: 10px;
  ${(props) => {
    if (props.params?.showIcon) {
      if (props.params?.children && props.params?.title) {
        return css`
          > .w-icon {
            font-size: 24px;
          }
        `;
      }
      if (props.params?.children) {
        return css`
          display: block;
          color: rgba(0, 0, 0, 0.65);
        `;
      }
      if (props.params?.title) {
        return css`
          display: block;
          color: rgba(0, 0, 0, 0.85);
        `;
      }
    }
  }}
  ${(props) =>
    props.params?.rounded &&
    css`
      border-radius: 5px;
    `}

  ${(props) =>
    props.params?.showIcon &&
    css`
      padding-left: 34px;
    `}

  ${(props) => {
    //
    switch (props.params.type) {
      case 'success':
        return css`
          background: ${getThemeVariantValue(props, 'backgroundMessageSuccess')};
          color: ${getThemeVariantValue(props, 'colorMessageSuccess')};
        `;
      case 'warning':
        return css`
          background: ${getThemeVariantValue(props, 'backgroundMessageWarning')};
          color: ${getThemeVariantValue(props, 'colorMessageWarning')};
        `;
      case 'info':
        return css`
          background: ${getThemeVariantValue(props, 'backgroundMessageInfo')};
          color: ${getThemeVariantValue(props, 'colorMessageInfo')};
        `;
      case 'error':
        return css`
          background: ${getThemeVariantValue(props, 'backgroundMessageError')};
          color: ${getThemeVariantValue(props, 'colorMessageError')};
        `;
      default:
        return css``;
    }
  }}
    > ${IconStyleBase} {
    top: 14px;
    left: 14px;
    position: absolute;
  }
  /* CSSTransition */
  &.w-message-enter {
    transform: scaleY(0.5);
    opacity: 0;
  }
  &.w-message-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms ease, opacity 300ms ease;
  }
  &.w-message-exit {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms ease, opacity 300ms ease;
  }
  &.w-message-exit-active {
    transform: scaleY(0.5);
    opacity: 0;
  }
`;

interface spanPeops extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  params: {
    children: React.ReactNode;
    showIcon: boolean | undefined;
    title: React.ReactNode;
  };
}
// 原始span
const MessageStyleSpanWrap = styled.span`
  display: block;
`;
// 详情description
export const MessageStyleDescriptionSpan = styled(MessageStyleSpanWrap)<spanPeops>`
  color: rgba(0, 0, 0, 0.65);
  ${(props) =>
    props.params.showIcon &&
    props.params.title &&
    props.params.children &&
    css`
      padding-left: 16px;
    `}
`;
// 标题title
export const MessageStyleTitleSpan = styled(MessageStyleDescriptionSpan)<spanPeops>`
  color: rgba(0, 0, 0, 0.85);
  ${(props) =>
    props.params.showIcon &&
    props.params.title &&
    props.params.children &&
    css`
      font-size: 16px;
    `}
`;

interface MessageIconWarpProps extends ThemeVariantValueOptions {
  params: {
    children: React.ReactNode;
    showIcon: boolean | undefined;
    title: React.ReactNode;
  };
}
// icon
const MessageStyleIconWarp = styled.span<MessageIconWarpProps>`
  ${(props) =>
    props.params?.showIcon &&
    props.params.title &&
    props.params.children &&
    css`
      font-size: 24px;
    `}
  top: 14px;
  left: 14px;
  position: absolute;
`;

interface messageButtonProps extends ButtonProps {}

export const MessageStyleButtonWarp = styled(Button)<messageButtonProps>`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 2px;
  min-width: 16px;
  min-height: 16px;
  color: rgba(0, 0, 0, 0.38);
  &:hover {
    background-color: rgba(255, 255, 255, 0.21) !important;
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }
`;

MessageStyleDivWrap.defaultProps = {
  defaultTheme: {
    backgroundMessageSuccess: '#afecbd',
    colorMessageSuccess: '#28a745',

    backgroundMessageWarning: '#fff4d3',
    colorMessageWarning: '#ffc107',

    backgroundMessageInfo: '#bde4ff',
    colorMessageInfo: '#008ef0',

    backgroundMessageError: '#fae3e5',
    colorMessageError: '#dc3545',
  },
};

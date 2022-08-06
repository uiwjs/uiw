import styled, { createGlobalStyle, css } from 'styled-components';
import Alert, { AlertProps } from '@uiw/react-alert';
import { ModalStyleInner, ModalStyleHeader, ModalStyleBody } from '@uiw/react-modal';
import { IconStyleBase } from '@uiw/react-icon';
import { ButtonStyleBase } from '@uiw/react-button';
import { ContentWrap } from '@uiw/react-overlay';
export const NotifyStyleBase = styled.div``;
export const NotifyGlobalStyle = createGlobalStyle`
  .w-notify-warpper{
    position: fixed;
    padding: 5px;
    z-index: 999;
    &.topLeft {
      top: 0;
      left: 0;
    }
    &.topRight {
      top: 0;
      right: 0;
    }
    &.bottomLeft {
      bottom: 0;
      left: 0;
    }
    &.bottomRight {
      bottom: 0;
      right: 0;
    }
  }
  `;

export interface NotifyStyleAlertBaseProps extends AlertProps {}

export const NotifyStyleAlertBase = styled(Alert)`
  position: relative !important;
  z-index: 9999;
  ${ModalStyleInner} {
    ${ModalStyleHeader} {
      > ${IconStyleBase} {
        font-size: 28px !important;
      }
      > ${ButtonStyleBase} {
        min-width: 18px;
        min-height: 18px;
        padding: 5px 5px;
      }
    }
    ${(props) =>
      props.icon &&
      !props.title &&
      css`
        ${ModalStyleHeader} {
          > button {
            top: 12px;
            right: 10px;
            position: absolute;
          }
        }
        ${ModalStyleBody} {
          padding-right: 36px;
        }
      `}
    ${(props) =>
      props.title &&
      css`
        ${ModalStyleHeader} {
          padding-top: 20px;
          > button {
            top: 5px;
            right: 5px;
            position: absolute;
          }
        }
        ${ModalStyleHeader} > h4 {
          padding-left: 40px;
          padding-right: 20px;
        }
        ${ModalStyleBody} {
          padding-left: 60px;
          opacity: 0.75;
        }
        ${!props.icon &&
        css`
          ${ModalStyleHeader} > h4 {
            padding-left: 5px;
          }
          ${ModalStyleBody} {
            padding-left: 25px;
          }
        `}
      `}
    
    ${(props) =>
      !props.title &&
      !props.icon &&
      css`
        & {
          ${ModalStyleBody} {
            padding: 16px;
          }
        }
      `}
    ${(props) =>
      !props.title &&
      css`
        &.${ModalStyleInner} {
          padding-bottom: 0;
          ${ModalStyleHeader} {
            padding-top: 16px;
            > ${IconStyleBase} {
              font-size: 20px !important;
            }
          }
        }
        ${ModalStyleBody} {
          padding: 16px 12px;
        }
      `}
  }
  ${ContentWrap} {
    margin: 5px;
  }
`;

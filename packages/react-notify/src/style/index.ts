import Alert, { AlertProps, AlertStyleWarp } from '@uiw/react-alert';
import styled, { css } from 'styled-components';

export const NotifyStyleAlertWrap = styled(Alert)`
  & .w-modal-inner {
    .w-modal-header {
      > .w-icon {
        font-size: 28px !important;
      }
      > .w-btn {
        min-width: 18px;
        min-height: 18px;
        padding: 5px 5px;
      }
    }
    &.w-modal-shown-icon:not(.w-modal-shown-title) {
      .w-modal-header {
        > button {
          top: 12px;
          right: 10px;
          position: absolute;
        }
      }
      .w-modal-body {
        padding-right: 36px;
      }
    }
    &.w-modal-shown-title {
      .w-modal-header {
        padding-top: 20px;
        > button {
          top: 5px;
          right: 5px;
          position: absolute;
        }
      }
      .w-modal-header > h4 {
        padding-left: 40px;
        padding-right: 20px;
      }
      .w-modal-body {
        padding-left: 60px;
        opacity: 0.75;
      }
      &:not(.w-modal-shown-icon) {
        .w-modal-header > h4 {
          padding-left: 5px;
        }
        .w-modal-body {
          padding-left: 25px;
        }
      }
    }
    &:not(.w-modal-shown-title):not(.w-modal-shown-icon) {
      .w-modal-body {
        padding: 16px;
      }
    }
    &:not(.w-modal-shown-title) {
      &.w-modal-inner {
        padding-bottom: 0;
        .w-modal-header {
          padding-top: 16px;
          > .w-icon {
            font-size: 20px !important;
          }
        }
      }
      .w-modal-body {
        padding: 16px 12px;
      }
    }
  }
  & .w-overlay-content {
    margin: 5px;
  }
  position: relative !important;
  z-index: 9999;
`;

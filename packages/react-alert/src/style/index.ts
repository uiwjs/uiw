import styled, { css } from 'styled-components';
import { ModalProps, ModalHeader, ModalBody, ModalInner } from '@uiw/react-modal';
import { ButtonType } from '@uiw/react-button';
import { IconStyleBase } from '@uiw/react-icon';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
export interface AlertStyleWarpProps extends ModalProps, ThemeVariantValueOptions {}

const typeVariant = (type: ButtonType, color: string | number) => {
  return css`
    ${ModalHeader} > ${IconStyleBase} {
      color: ${color};
    }
  `;
};

const typeCss = (props: AlertStyleWarpProps) => {
  const { type } = props;
  if (type === 'primary') {
    return typeVariant(type, getThemeVariantValue(props, 'colorAlertPrimary'));
  } else if (type === 'success') {
    return typeVariant(type, getThemeVariantValue(props, 'colorAlertSuccess'));
  } else if (type === 'warning') {
    return typeVariant(type, getThemeVariantValue(props, 'colorAlertWarning'));
  } else if (type === 'danger') {
    return typeVariant(type, getThemeVariantValue(props, 'colorAlertDanger'));
  }
  return typeVariant('link', getThemeVariantValue(props, 'colorAlertDefault'));
};

export const AlertStyleTheme = {
  colorAlertPrimary: '#008ef0',
  colorAlertSuccess: '#28a745',
  colorAlertWarning: '#ffc107',
  colorAlertDanger: '#dc3545',
  colorAlertDefault: '#393e48',
};

export const AlertStyleWarp = styled.div<AlertStyleWarpProps>`
  ${ModalHeader} {
    display: table-cell;
    background-color: transparent;
    padding: 20px 0 0 20px;
    box-shadow: 0 0 0 0;
    padding-right: 0;
    ${IconStyleBase} {
      font-size: 40px;
      margin-right: 0;
    }
    > button > ${IconBase} {
      font-size: 14px;
    }
  }
  ${ModalBody} {
    display: table-cell;
    padding-right: 20px;
    padding-left: 20px;
    vertical-align: top;
  }
  ${typeCss}
  ${ModalInner} ${ModalHeader} {
    > button {
      min-width: 18px;
      min-height: 18px;
      padding: 5px 5px;
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  ${(props) =>
    props.title &&
    css`
      ${ModalInner} {
        ${ModalHeader} {
          word-break: break-word;
          display: flex;
          padding-top: 15px;
          padding-right: 10px;
          > ${IconStyleBase} {
            font-size: 40px;
            position: absolute;
            top: 18px;
          }

          > button > ${IconStyleBase} {
            font-size: 14px;
          }
        }
        ${ModalBody} {
          word-break: break-word;
          padding-top: 5px;
        }
      }
    `}
  ${(props) =>
    props.icon &&
    css`
      ${ModalHeader} > h4 {
        padding-left: 60px;
      }
    `}
  ${(props) =>
    props.title &&
    props.icon &&
    css`
      ${ModalBody} {
        padding-left: 80px;
      }
    `}
`;
AlertStyleWarp.defaultProps = {
  defaultTheme: { ...AlertStyleTheme },
};

import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions, HTMLDivProps, getThemeVariantValue } from '@uiw/utils';
import { FileInputListProps } from '../';
import Input, { InputProps } from '@uiw/react-input';

export const FileInputTheme = {
  boxShadowFileInputStyleWarpAfterBase: 'inset 0 0 0 1px rgb(16 22 26 / 8%);',
  backgroundImageFileInputStyleWarpAfterBase: ' linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))',
  backgroundColorFileInputStyleWarpAfterBase: '#f5f8fa',
  colorFileInputStyleWarpAfterBase: '#182026',

  backgroundColorFileInputStyleWarpHoverAfterBase: '#ebf1f5',
  boxShadowFileInputStyleWarpHoverAfterBase: 'inset 0 0 0 1px rgb(16 22 26 / 20%), inset 0 -1px 0 rgb(16 22 26 / 10%)',

  colorFileInputStyleWarpBeforeBase: '#757575',

  backgroundFileInputStyleCardActionsWarpBase: 'rgba(0, 0, 0, 0.6)',

  backgroundColorFileInputStyleCardBoxWarpBase: '#fafafa',
  borderColorFileInputStyleCardBoxWarpBase: '#d9d9d9',
  backgroundFileInputStyleListActionsWarpBase: ' rgba(0, 0, 0, 0.6)',

  borderColorFileInputStyleListUploadTypeWarpBase: '#d9d9d9',
  backgroundFileInputStyleListUploadTypeWarpHover: '#f5f5f5',
};

const propsTheme = {
  defaultTheme: FileInputTheme,
};

type ThemeVar = ThemeVariantValueOptions<typeof FileInputTheme>;

export interface FileInputStyleWarpProps extends Omit<InputProps, 'defaultTheme'>, ThemeVar {}

// Input
export const FileInputStyleWarp = styled(Input)<FileInputStyleWarpProps>`
  input {
    &::-webkit-file-upload-button {
      background: transparent;
      border: 0;
      color: #0000;
      position: absolute;
      left: -300px;
    }
    &:hover:after {
      background-clip: padding-box;
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorFileInputStyleWarpHoverAfterBase')};
      box-shadow: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowFileInputStyleWarpHoverAfterBase')};
    }
    &:after {
      box-shadow: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'boxShadowFileInputStyleWarpAfterBase')};
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorFileInputStyleWarpAfterBase')};
      background-image: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundImageFileInputStyleWarpAfterBase')};
      color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorFileInputStyleWarpAfterBase')};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      border-radius: 3px;
      content: 'Browse';
      content: attr(data-label);
      padding: 0 10px;
      margin: 3px;
      text-align: center;
      right: 0;
      display: flex;
      align-items: center;
    }
    &::before,
    &::after {
      color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorFileInputStyleWarpBeforeBase')};
      position: absolute;
      top: 0;
      bottom: 0;
    }
  }
`;

//Card
interface FileInputCardActionsProps extends ThemeVar, HTMLDivProps {
  isAction: boolean;
}
export const FileInputStyleCardActionsWarp = styled.div<FileInputCardActionsProps>`
  ${(props) =>
    props.isAction &&
    css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s;
      opacity: 0;
      background: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundFileInputStyleCardActionsWarpBase')};
      border-radius: 2px;
    `}
`;

export interface FileInputStyleCardBoxWarpProps extends ThemeVar, HTMLDivProps {
  btn?: boolean;
}
export const FileInputStyleCardBoxWarp = styled.div<FileInputStyleCardBoxWarpProps>`
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorFileInputStyleCardBoxWarpBase')};
  border: 1px dashed
    ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorFileInputStyleCardBoxWarpBase')};
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 0.3s;
  display: inline-flex;
  position: relative;
  ${(props) =>
    props.btn &&
    css`
      align-items: center;
      justify-content: center;
    `}
  :hover ${FileInputStyleCardActionsWarp} {
    opacity: 1;
  }
`;
FileInputStyleCardBoxWarp.defaultProps = { defaultTheme: FileInputTheme };

export const FileInputStyleCardBoxInfoWarp = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const FileInputStyleCardActionsRemoveWarp = styled.span`
  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FileInputStyleCardWarp = styled.div<{
  size: FileInputListProps['size'];
  shape: FileInputListProps['shape'];
}>`
  margin-right: -8px;
  ${(props) => {
    if (props.size === 'large') {
      return css`
        ${FileInputStyleCardBoxWarp} {
          width: 110px;
          height: 110px;
        }
      `;
    }
    if (props.size === 'middle') {
      return css`
        ${FileInputStyleCardBoxWarp} {
          width: 80px;
          height: 80px;
        }
      `;
    }
    if (props.size === 'small') {
      return css`
        ${FileInputStyleCardBoxWarp} {
          width: 50px;
          height: 50px;
        }
      `;
    }
    return css``;
  }}
  ${(props) => {
    if (props.shape === 'circle') {
      return css`
        ${FileInputStyleCardBoxWarp} {
          border-radius: 50%;
        }
      `;
    }
    if (props.shape === 'round') {
      return css`
        ${FileInputStyleCardBoxWarp} {
          border-radius: 2px;
        }
      `;
    }
    return css``;
  }}
`;

export interface FileInputStyleListActionsWarpProps extends HTMLDivProps, ThemeVar {}
// list
export const FileInputStyleListActionsWarp = styled.div<FileInputStyleListActionsWarpProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  opacity: 0;
  background: ${(props) =>
    getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundFileInputStyleListActionsWarpBase')};
  border-radius: 2px;
`;

export const FileInputStyleListActionsSearchWarp = styled.span`
  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FileInputStyleListUploadInfoTypeWarp = styled.div`
  :hover ${FileInputStyleListActionsWarp} {
    opacity: 1;
  }
`;
export const FileInputStyleListUploadTextTypeWarp = styled.div``;
export const FileInputStyleListUploadIconTypeWarp = styled.div``;

export interface FileInputStyleListUploadTypeWarpProps extends ThemeVar {
  uploadType: FileInputListProps['uploadType'];
}

export const FileInputStyleListUploadTypeWarp = styled.div<FileInputStyleListUploadTypeWarpProps>`
  ${(props) => {
    if (props.uploadType === 'picture') {
      return css`
        border: 1px solid
          ${() => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorFileInputStyleListUploadTypeWarpBase')};
        display: flex;
        align-items: center;
        padding: 5px;
        margin-top: 8px;
        ${FileInputStyleListUploadInfoTypeWarp} {
          margin-right: 10px;
          position: relative;
          overflow: hidden;
          img {
            width: 48px;
            height: 48px;
            display: block;
          }
        }
        ${FileInputStyleListUploadTextTypeWarp} {
          flex: 1;
        }
        ${FileInputStyleListUploadIconTypeWarp} {
          padding: 5px;
          cursor: pointer;
        }
      `;
    }
  }}
  ${(props) => {
    if (props.uploadType === 'text') {
      return css`
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        padding: 5px;
        transition: all 0.5s;
        :hover {
          background: ${() =>
            getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundFileInputStyleListUploadTypeWarpHover')};
        }
        :first-child {
          margin-top: 8px;
        }
        ${FileInputStyleListUploadTextTypeWarp} {
          flex: 1;
        }
        ${FileInputStyleListUploadIconTypeWarp} {
          padding: 0 5px;
          cursor: pointer;
        }
      `;
    }
    return css``;
  }}
`;

export interface FileInputStyleListActionsWarpProps extends HTMLDivProps {
  size: FileInputListProps['size'];
  shape: FileInputListProps['shape'];
  uploadType: FileInputListProps['uploadType'];
}
export const FileInputStyleListWarp = styled.div<FileInputStyleListActionsWarpProps>`
  padding-bottom: 8px;
  width: 100%;
  ${(props) => {
    if (props.uploadType !== 'picture') {
      return css``;
    }
    if (props.size === 'large') {
      return css`
        ${FileInputStyleListUploadTypeWarp} {
          ${FileInputStyleListUploadInfoTypeWarp} img {
            width: 70px;
            height: 70px;
          }
        }
      `;
    }
    if (props.size === 'middle') {
      return css`
        ${FileInputStyleListUploadTypeWarp} {
          ${FileInputStyleListUploadInfoTypeWarp} img {
            width: 50px;
            height: 50px;
          }
        }
      `;
    }
    if (props.size === 'small') {
      return css`
        ${FileInputStyleListUploadTypeWarp} {
          ${FileInputStyleListUploadInfoTypeWarp} img {
            width: 50px;
            height: 50px;
          }
        }
      `;
    }
    return css``;
  }}
  ${(props) => {
    if (props.shape === 'round' && props.uploadType === 'picture') {
      return css`
        ${FileInputStyleListUploadTypeWarp} {
          ${FileInputStyleListUploadInfoTypeWarp} {
            border-radius: 2px;
          }
        }
      `;
    }
    if (props.shape === 'circle') {
      return css``;
    }
  }}
`;

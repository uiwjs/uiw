import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import { Props, FileInputListProps } from '../';
import Input, { InputProps } from '@uiw/react-input';

export interface FileInputWarpProps extends Props, ThemeVariantValueOptions {}

// Input
export const FileInputWarp = styled(Input)<InputProps>`
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
      background-color: #ebf1f5;
      box-shadow: inset 0 0 0 1px rgb(16 22 26 / 20%), inset 0 -1px 0 rgb(16 22 26 / 10%);
    }
    &:after {
      box-shadow: inset 0 0 0 1px rgb(16 22 26 / 8%);
      background-color: #f5f8fa;
      background-image: linear-gradient(180deg, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0));
      color: #182026;
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
      color: #757575;
      position: absolute;
      top: 0;
      bottom: 0;
    }
  }
`;

//Card
interface FileInputCardActionsProps {
  isAction: boolean;
}
export const FileInputCardActionsWarp = styled.div<FileInputCardActionsProps>`
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
      background: rgba(0, 0, 0, 0.6);
      border-radius: 2px;
    `}
`;
export const FileInputCardBoxWarp = styled.div<{ btn?: boolean }>`
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
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
  :hover ${FileInputCardActionsWarp} {
    opacity: 1;
  }
`;
export const FileInputCardBoxInfoWarp = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const FileInputCardActionsRemoveWarp = styled.span`
  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FileInputCardWarp = styled.div<{
  size: FileInputListProps['size'];
  shape: FileInputListProps['shape'];
}>`
  margin-right: -8px;
  ${(props) => {
    if (props.size === 'large') {
      return css`
        ${FileInputCardBoxWarp} {
          width: 110px;
          height: 110px;
        }
      `;
    }
    if (props.size === 'middle') {
      return css`
        ${FileInputCardBoxWarp} {
          width: 80px;
          height: 80px;
        }
      `;
    }
    if (props.size === 'small') {
      return css`
        ${FileInputCardBoxWarp} {
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
        ${FileInputCardBoxWarp} {
          border-radius: 50%;
        }
      `;
    }
    if (props.shape === 'round') {
      return css`
        ${FileInputCardBoxWarp} {
          border-radius: 2px;
        }
      `;
    }
    return css``;
  }}
`;

// list
export const FileInputListActionsWarp = styled.div`
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
  background: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
`;
export const FileInputListActionsSearchWarp = styled.span`
  width: 24px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const FileInputListUploadInfoTypeWarp = styled.div`
  :hover ${FileInputListActionsWarp} {
    opacity: 1;
  }
`;
export const FileInputListUploadTextTypeWarp = styled.div``;
export const FileInputListUploadIconTypeWarp = styled.div``;
export const FileInputListUploadTypeWarp = styled.div<{
  uploadType: FileInputListProps['uploadType'];
}>`
  ${(props) => {
    if (props.uploadType === 'picture') {
      return css`
        border: 1px solid #d9d9d9;
        display: flex;
        align-items: center;
        padding: 5px;
        margin-top: 8px;
        ${FileInputListUploadInfoTypeWarp} {
          margin-right: 10px;
          position: relative;
          overflow: hidden;
          img {
            width: 48px;
            height: 48px;
            display: block;
          }
        }
        ${FileInputListUploadTextTypeWarp} {
          flex: 1;
        }
        ${FileInputListUploadIconTypeWarp} {
          padding: 5px;
          cursor: pointer;
        }
      `;
    }
  }}
`;
export const FileInputListWarp = styled.div<{
  size: FileInputListProps['size'];
  shape: FileInputListProps['shape'];
  uploadType: FileInputListProps['uploadType'];
}>`
  padding-bottom: 8px;
  width: 100%;
  ${(props) => {
    if (props.uploadType !== 'picture') {
      return css``;
    }
    if (props.size === 'large') {
      return css`
        ${FileInputListUploadTypeWarp} {
          ${FileInputListUploadInfoTypeWarp} img {
            width: 70px;
            height: 70px;
          }
        }
      `;
    }
    if (props.size === 'middle') {
      return css`
        ${FileInputListUploadTypeWarp} {
          ${FileInputListUploadInfoTypeWarp} img {
            width: 50px;
            height: 50px;
          }
        }
      `;
    }
    if (props.size === 'small') {
      return css`
        ${FileInputListUploadTypeWarp} {
          ${FileInputListUploadInfoTypeWarp} img {
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
        ${FileInputListUploadTypeWarp} {
          ${FileInputListUploadInfoTypeWarp} {
            border-radius: 2px;
          }
        }
      `;
    }
    if (props.shape === 'circle') {
      return css``;
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
          background: #f5f5f5;
        }
        :first-child {
          margin-top: 8px;
        }
        ${FileInputListUploadTextTypeWarp} {
          flex: 1;
        }
        ${FileInputListUploadIconTypeWarp} {
          padding: 0 5px;
          cursor: pointer;
        }
      `;
    }
    return css``;
  }}
`;

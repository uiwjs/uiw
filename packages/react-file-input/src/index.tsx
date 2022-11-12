import React from 'react';
import Input from './Input';
import FileList from './FileList';
import { isUploadType } from './utils';
import { FileInputProps, FileInputDefaultProps, FileInputListProps } from './types';
export * from './style';
export type { FileInputProps, FileInputDefaultProps, FileInputListProps };

function Upload(props: FileInputProps) {
  const { uploadType = 'input', ...other } = props;

  if (isUploadType(uploadType)) {
    const prop = props as FileInputListProps;
    return <FileList {...prop} />;
  }
  const otherProp = other as FileInputDefaultProps;
  return <Input {...otherProp} />;
}

export default Upload;

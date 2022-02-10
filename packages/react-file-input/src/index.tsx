import React from 'react';
import Input from './Input';
import FileList from './FileList';
import { isUploadType } from './utils';
import { InputProps } from '@uiw/react-input';
import { UploadType, FileInputBaseProps, FileInputUploadProps, FileInputShowIconProps } from './types';
import './style/index.less';
export interface FileInputType {
  dataURL?: string;
  file?: File;
  name?: string;
  [key: string]: any;
}
export interface FileInputProps extends FileInputBaseProps, InputProps {
  dataLabel?: string;
}
export interface FileInputListProps extends FileInputUploadProps {
  showFileIcon?: FileInputShowIconProps;
  dataList: FileInputType[];
  onAdd?: () => void;
  onRemove?: (index: number) => void;
}

interface Props {
  uploadType?: UploadType;
  [key: string]: any;
}

function Upload(props: Props) {
  const { uploadType = 'input' } = props;

  if (uploadType === 'input') {
    return <Input {...props} />;
  }

  if (isUploadType(uploadType)) {
    return <FileList {...props} />;
  }
  return null;
}

export default Upload;

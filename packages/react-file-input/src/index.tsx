import React from 'react';
import Input from './Input';
import FileList from './FileList';
import { isUploadType } from './utils';
import { InputProps } from '@uiw/react-input';
import './style/index.less';

export type UploadType = 'input' | 'picture' | 'text' | 'card';

export interface FileType {
  dataURL?: string;
  file?: File;
  name?: string;
  [key: string]: any;
}

export type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  accept?: boolean;
  resolution?: boolean;
} | null;

export interface BaseProps {
  className?: string;
  prefixCls?: string;
  /** 上传列表的内置样式 */
  uploadType?: UploadType;
  multiple?: boolean;
}

// input
export interface FileInputProps extends BaseProps, InputProps {
  dataLabel?: string;
}

export interface showFileIconProps {
  showPreviewIcon?: boolean;
  showRemoveIcon?: boolean;
  showAddBtn?: boolean;
}

// text / card / picture
export interface FileUploadProps extends BaseProps {
  value?: FileType[];
  /** 是否是只读模式 */
  readonly?: boolean;
  /** 文件上传数量 */
  maxNumber?: number;
  children?: React.ReactNode;
  /** 文件上传成功回调 */
  onChange?: (value: FileType[]) => void;
  /** 预览 */
  onPreview?: (file: FileType) => void;
}

export interface FileListProps extends FileUploadProps {
  showFileIcon?: showFileIconProps;
  dataList: FileType[];
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

import React from 'react';
import { InputProps } from '@uiw/react-input';

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
  dataList: FileType[];
  onAdd?: () => void;
  onRemove: (index: number) => void;
}

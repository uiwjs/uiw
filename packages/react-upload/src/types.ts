import React from 'react';

export interface FileType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

export type FileListType = Array<FileType>;

export interface ReactUploadPropsType {
  value: FileListType;
  children?: (props: ChildrenInterface) => React.ReactNode;
  multiple?: boolean;
  maxNumber?: number;
  accept?: string[];
  maxFileSize?: number;
  dataURLKey?: string;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  onChange: (value: FileListType, addUpdatedIndex?: number[]) => void;
  onError?: (errors: ErrorsType, files?: FileListType) => void;
}

export interface ChildrenInterface {
  imageList: FileListType;
  onFileUpload: () => void;
  onFileRemoveAll: () => void;
  errors: ErrorsType;
  onFileUpdate: (index: number) => void;
  onFileRemove: (index: number) => void;
}

export type ErrorsType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
  accept?: boolean;
  resolution?: boolean;
} | null;

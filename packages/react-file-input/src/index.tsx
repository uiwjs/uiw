import React from 'react';
import Input from './Input';
import FileList from './FileList';
import { isUploadType } from './utils';
// import { uploadType, FileInputProps, FileUploadProps } from './types';
import './style/index.less';

function Upload(props: any) {
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

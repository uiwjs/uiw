import React from 'react';
import Input from './Input';
import FileList from './FileList';
import { isUploadType } from './utils';
import { UploadType } from './types';
import './style/index.less';

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

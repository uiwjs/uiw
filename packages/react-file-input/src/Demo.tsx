import React from 'react';
import Upload from './index';
import { FileInputProps } from './types';

const Demo = (props: FileInputProps) => {
  return (
    <Upload
      uploadType="input"
      maxNumber={3}
      // maxNumber={3}
    >
      333
    </Upload>
  );
};

export default Demo;

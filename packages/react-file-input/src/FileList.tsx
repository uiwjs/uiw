import React, { useRef, useCallback, useEffect, useState } from 'react';
import List from './List';
import Card from './Card';
import { FileInputValue, FileInputListProps } from './types';
import { openFileDialog, getListFiles } from './utils';

export const FileList = (props: FileInputListProps) => {
  const { uploadType, value = [], multiple = false, maxNumber = 3, onChange } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const inValue: FileInputValue[] = value || [];
  const [fileList, setFileList] = useState<FileInputValue[]>([]);

  useEffect(() => {
    setFileList(inValue);
  }, [value]);

  const handleClickInput = useCallback(() => openFileDialog(inputRef), [inputRef]);

  const onFileUpload = useCallback((): void => {
    if (inputRef.current) inputRef.current.value = '';
    handleClickInput();
  }, [handleClickInput]);

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const updatedFileList = await getListFiles(files, 'dataURL');
    let updatedList = [...fileList, ...updatedFileList];
    if (maxNumber < updatedList.length) {
      updatedList = updatedList.slice(0, maxNumber);
    }
    setFileList(updatedList);
    onChange?.(updatedList);
  };

  const onRemove = (index: number) => {
    const updatedList = [...fileList];
    updatedList.splice(index, 1);
    setFileList(updatedList);
    onChange?.(updatedList);
  };

  let Comp: ((props: FileInputListProps) => JSX.Element) | undefined;

  if (uploadType === 'card') {
    Comp = Card;
  }
  if (uploadType === 'picture' || uploadType === 'text') {
    Comp = List;
  }

  return (
    <React.Fragment>
      <input type="file" ref={inputRef} multiple={multiple} style={{ display: 'none' }} onChange={onInputChange} />
      {Comp && (
        <Comp {...props} maxNumber={maxNumber || 3} dataList={fileList} onAdd={onFileUpload} onRemove={onRemove} />
      )}
    </React.Fragment>
  );
};

export default FileList;

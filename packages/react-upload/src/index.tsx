import React, { useRef, useState, useCallback, useMemo } from 'react';
import { openFileDialog, getListFiles, getAcceptTypeString } from './utils';
import { getErrorValidation } from './validation';
import { FileListType, ReactUploadPropsType, ErrorsType } from './types';

const DEFAULT_NULL_INDEX = -1;

const Upload = (props: ReactUploadPropsType) => {
  const {
    value = [],
    onChange,
    onError,
    children,
    dataURLKey = 'dataURL',
    multiple = false,
    maxNumber = 2,
    accept,
    maxFileSize,
    inputProps = {},
  } = props;

  const inValue = value || [];
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyUpdate, setKeyUpdate] = useState<number>(DEFAULT_NULL_INDEX);
  const [errors, setErrors] = useState<ErrorsType>(null);

  const handleClickInput = useCallback(() => openFileDialog(inputRef), [inputRef]);

  const onFileUpload = useCallback((): void => {
    setKeyUpdate(DEFAULT_NULL_INDEX);
    handleClickInput();
  }, [handleClickInput]);

  const onFileRemoveAll = useCallback((): void => {
    onChange?.([]);
  }, [onChange]);

  const onFileRemove = (index: number | Array<number>): void => {
    const updatedList = [...inValue];
    if (Array.isArray(index)) {
      index.forEach((i) => {
        updatedList.splice(i, 1);
      });
    } else {
      updatedList.splice(index, 1);
    }
    onChange?.(updatedList);
  };

  const onFileUpdate = (index: number): void => {
    setKeyUpdate(index);
    handleClickInput();
  };

  const validate = async (fileList: FileListType): Promise<boolean> => {
    const errorsValidation = await getErrorValidation({
      fileList,
      maxFileSize,
      maxNumber,
      accept,
      keyUpdate,
      value: inValue,
    });
    if (errorsValidation) {
      setErrors(errorsValidation);
      onError?.(errorsValidation, fileList);
      return false;
    }
    errors && setErrors(null);
    return true;
  };

  const handleChange = async (files: FileList | null) => {
    if (!files) return;
    const fileList = await getListFiles(files, dataURLKey);
    if (!fileList.length) return;
    const checkValidate = await validate(fileList);
    if (!checkValidate) return;
    let updatedFileList: FileListType;
    const updatedIndexes: number[] = [];
    if (keyUpdate > DEFAULT_NULL_INDEX) {
      const [firstFile] = fileList;
      updatedFileList = [...inValue];
      updatedFileList[keyUpdate] = firstFile;
      updatedIndexes.push(keyUpdate);
    } else if (multiple) {
      updatedFileList = [...inValue, ...fileList];
      for (let i = inValue.length as number; i < updatedFileList.length; i += 1) {
        updatedIndexes.push(i);
      }
    } else {
      updatedFileList = [fileList[0]];
      updatedIndexes.push(0);
    }
    onChange?.(updatedFileList, updatedIndexes);
  };

  const onInputChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    await handleChange(e.target.files);
    keyUpdate > DEFAULT_NULL_INDEX && setKeyUpdate(DEFAULT_NULL_INDEX);
    if (inputRef.current) inputRef.current.value = '';
  };

  const acceptTypeString = useMemo(() => getAcceptTypeString(accept), [accept]);

  return (
    <React.Fragment>
      <input
        type="file"
        accept={acceptTypeString}
        ref={inputRef}
        multiple={multiple && keyUpdate === DEFAULT_NULL_INDEX}
        onChange={onInputChange}
        style={{ display: 'none' }}
        {...inputProps}
      />
      {children?.({
        imageList: inValue,
        onFileUpload,
        onFileRemoveAll,
        onFileUpdate,
        onFileRemove,
        errors,
      })}
    </React.Fragment>
  );
};

export default Upload;

import { ErrorsType } from './types';

const DEFAULT_NULL_INDEX = -1;

// 判断文件类型
export const getAcceptTypeValid = (fileType: string) => {
  if (fileType.includes('image')) {
    return true;
  }
  if (fileType.includes('pdf')) {
    return true;
  }
  // xlsx
  if (fileType.includes('vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
    return true;
  }
  return false;
};

export const isMaxFileSizeValid = (fileSize: number, maxFileSize?: number) => {
  return maxFileSize ? fileSize <= maxFileSize : true;
};

export const isAcceptTypeValid = (accept: any[], fileName: string) => {
  if (accept && accept.length > 0) {
    const type: string = fileName.split('.').pop() || '';
    if (accept.findIndex((item) => item.toLowerCase() === type.toLowerCase()) < 0) return false;
  }
  return true;
};

export const isMaxNumberValid = (totalNumber: number, maxNumber: number, keyUpdate: number) => {
  if (maxNumber !== 0 && !maxNumber) return true;
  if (keyUpdate === DEFAULT_NULL_INDEX) {
    if (totalNumber <= maxNumber) return true;
  } else if (totalNumber <= maxNumber + 1) return true;
  return false;
};

export const getErrorValidation = async ({
  fileList,
  value,
  maxNumber,
  keyUpdate,
  accept,
  maxFileSize,
}: any): Promise<ErrorsType> => {
  const newErrors: ErrorsType = {};
  if (!isMaxNumberValid(fileList.length + value.length, maxNumber, keyUpdate)) {
    newErrors.maxNumber = true;
  } else {
    for (let i = 0; i < fileList.length; i += 1) {
      const { file } = fileList[i];
      if (!file) continue;
      if (!getAcceptTypeValid(file.type)) {
        newErrors.accept = true;
        break;
      }
      if (!isAcceptTypeValid(accept, file.name)) {
        newErrors.accept = true;
        break;
      }
      if (!isMaxFileSizeValid(file.size, maxFileSize)) {
        newErrors.maxFileSize = true;
        break;
      }
    }
  }
  if (Object.values(newErrors).find(Boolean)) return newErrors;
  return null;
};

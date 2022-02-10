import { FileType } from './';

export const openFileDialog = (inputRef: any): void => {
  if (inputRef.current) inputRef.current.click();
};

export const getAcceptTypeString = (accept?: Array<string>) => {
  return accept && accept.length > 0 ? accept.map((item) => `.${item}`).join(', ') : 'image/*';
};

export const getBase64 = (file: File): Promise<string> => {
  const reader = new FileReader();
  return new Promise((resolve) => {
    reader.addEventListener('load', () => resolve(String(reader.result)));
    reader.readAsDataURL(file);
  });
};

export const getListFiles = (files: FileList, dataURLKey: string): Promise<FileType[]> => {
  const promiseFiles: Array<Promise<string>> = [];
  for (let i = 0; i < files.length; i += 1) {
    promiseFiles.push(getBase64(files[i]));
  }
  return Promise.all(promiseFiles).then((fileListBase64: Array<string>) => {
    const fileList: FileType[] = fileListBase64.map((base64, index) => ({
      [dataURLKey]: base64,
      file: files[index],
      name: files[index].name,
    }));
    return fileList;
  });
};

export const isUploadType = (type: string) => {
  return ['picture', 'text', 'card'].includes(type);
};

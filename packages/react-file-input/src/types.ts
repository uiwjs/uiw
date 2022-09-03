import { InputProps } from '@uiw/react-input';

export type UploadType = 'input' | 'picture' | 'text' | 'card' | undefined;

// type IItemGeneric<T, U> = Exclude<{
//   uploadType?: T;
// }, U>

type IItemGeneric<T, U> = {
  uploadType?: T;
} & Omit<U, 'uploadType'>;

export interface FileInputValue {
  dataURL?: string;
  file?: File;
  name?: string;
  [key: string]: any;
}
export interface FileInputShowIconProps {
  showPreviewIcon?: boolean;
  showRemoveIcon?: boolean;
  showAddBtn?: boolean;
}

export interface FileInputStyleBaseProps {
  uploadType?: UploadType;
  className?: string;
  prefixCls?: string;
  multiple?: boolean;
}

export interface FileInputUploadProps extends FileInputStyleBaseProps {
  value?: FileInputValue[];
  /** 是否是只读模式 */
  readonly?: boolean;
  /** 文件上传数量 */
  maxNumber?: number;
  children?: React.ReactNode;
  /** 文件上传成功回调 */
  onChange?: (value: FileInputValue[]) => void;
  /** 预览 */
  onPreview?: (file: FileInputValue) => void;
}

export interface FileInputDefaultProps extends FileInputStyleBaseProps, InputProps {
  dataLabel?: string;
}
export interface FileInputListProps extends FileInputUploadProps {
  shape?: 'circle' | 'round';
  size?: 'large' | 'middle' | 'small' | 'default';
  showFileIcon?: FileInputShowIconProps;
  dataList?: FileInputValue[];
  onAdd?: () => void;
  onRemove?: (index: number) => void;
}

export type FileInputProps =
  | IItemGeneric<'input' | undefined, FileInputDefaultProps>
  | IItemGeneric<'picture' | 'text' | 'card', FileInputListProps>;

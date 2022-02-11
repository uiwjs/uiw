import { FileInputValue } from './index';

export type UploadType = 'input' | 'picture' | 'text' | 'card';

export interface FileInputShowIconProps {
  showPreviewIcon?: boolean;
  showRemoveIcon?: boolean;
  showAddBtn?: boolean;
}

export interface FileInputBaseProps {
  className?: string;
  prefixCls?: string;
  /** 上传列表的内置样式 */
  uploadType?: UploadType;
  multiple?: boolean;
}

export interface FileInputUploadProps extends FileInputBaseProps {
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

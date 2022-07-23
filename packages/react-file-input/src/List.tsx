import React from 'react';
import Icon from '@uiw/react-icon';
import { FileInputListProps } from './';
import {
  FileInputListWarp,
  FileInputListActionsWarp,
  FileInputListActionsSearchWarp,
  FileInputListUploadTypeWarp,
  FileInputListUploadInfoTypeWarp,
  FileInputListUploadTextTypeWarp,
  FileInputListUploadIconTypeWarp,
} from './style';
import './style/index.less';

const Picture = (props: FileInputListProps) => {
  const {
    className,
    prefixCls = 'w-fileinput-list',
    dataList = [],
    uploadType, // 'input' | 'picture' | 'text' | 'card';
    size = 'middle',
    shape = 'round',
    readonly,
    children,
    showFileIcon = {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
    onPreview,
    onAdd,
    onRemove,
  } = props;

  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();

  return (
    <FileInputListWarp uploadType={uploadType} size={size} shape={shape} className={cls}>
      {children &&
        !readonly &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          onClick: onAdd,
        })}
      <div>
        {dataList.map((item, index) => (
          <FileInputListUploadTypeWarp className={`${prefixCls}-${uploadType}`} uploadType={uploadType} key={index}>
            {uploadType === 'picture' && (
              <FileInputListUploadInfoTypeWarp className={`${prefixCls}-info ${prefixCls}-${uploadType}-info`}>
                <img src={item['dataURL']} alt="" />
                {showFileIcon?.showPreviewIcon && (
                  <FileInputListActionsWarp className={`${prefixCls}-actions`}>
                    <FileInputListActionsSearchWarp
                      className={`${prefixCls}-actions-search`}
                      onClick={() => onPreview?.(item)}
                    >
                      <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
                    </FileInputListActionsSearchWarp>
                  </FileInputListActionsWarp>
                )}
              </FileInputListUploadInfoTypeWarp>
            )}
            <FileInputListUploadTextTypeWarp className={`${prefixCls}-${uploadType}-text`}>
              {item.name}
            </FileInputListUploadTextTypeWarp>
            {showFileIcon?.showRemoveIcon && (
              <FileInputListUploadIconTypeWarp
                className={`${prefixCls}-${uploadType}-icon`}
                onClick={() => onRemove?.(index)}
              >
                <Icon type="delete" style={{ color: '#999' }} />
              </FileInputListUploadIconTypeWarp>
            )}
          </FileInputListUploadTypeWarp>
        ))}
      </div>
    </FileInputListWarp>
  );
};

export default Picture;

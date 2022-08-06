import React from 'react';
import Icon from '@uiw/react-icon';
import { FileInputListProps } from './';
import {
  FileInputStyleListWarp,
  FileInputStyleListActionsWarp,
  FileInputStyleListActionsSearchWarp,
  FileInputStyleListUploadTypeWarp,
  FileInputStyleListUploadInfoTypeWarp,
  FileInputStyleListUploadTextTypeWarp,
  FileInputStyleListUploadIconTypeWarp,
} from './style';

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
    <FileInputStyleListWarp uploadType={uploadType} size={size} shape={shape} className={cls}>
      {children &&
        !readonly &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          onClick: onAdd,
        })}
      <div>
        {dataList.map((item, index) => (
          <FileInputStyleListUploadTypeWarp
            className={`${prefixCls}-${uploadType}`}
            uploadType={uploadType}
            key={index}
          >
            {uploadType === 'picture' && (
              <FileInputStyleListUploadInfoTypeWarp className={`${prefixCls}-info ${prefixCls}-${uploadType}-info`}>
                <img src={item['dataURL']} alt="" />
                {showFileIcon?.showPreviewIcon && (
                  <FileInputStyleListActionsWarp className={`${prefixCls}-actions`}>
                    <FileInputStyleListActionsSearchWarp
                      className={`${prefixCls}-actions-search`}
                      onClick={() => onPreview?.(item)}
                    >
                      <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
                    </FileInputStyleListActionsSearchWarp>
                  </FileInputStyleListActionsWarp>
                )}
              </FileInputStyleListUploadInfoTypeWarp>
            )}
            <FileInputStyleListUploadTextTypeWarp className={`${prefixCls}-${uploadType}-text`}>
              {item.name}
            </FileInputStyleListUploadTextTypeWarp>
            {showFileIcon?.showRemoveIcon && (
              <FileInputStyleListUploadIconTypeWarp
                className={`${prefixCls}-${uploadType}-icon`}
                onClick={() => onRemove?.(index)}
              >
                <Icon type="delete" style={{ color: '#999' }} />
              </FileInputStyleListUploadIconTypeWarp>
            )}
          </FileInputStyleListUploadTypeWarp>
        ))}
      </div>
    </FileInputStyleListWarp>
  );
};

export default Picture;

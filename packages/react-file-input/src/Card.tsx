import React from 'react';
import {
  FileInputStyleCardWarp,
  FileInputStyleCardBoxWarp,
  FileInputStyleCardActionsWarp,
  FileInputStyleCardBoxInfoWarp,
  FileInputStyleCardActionsRemoveWarp,
} from './style';
import { IconStyleBase } from '@uiw/react-icon';
import { Delete, Search } from '@uiw/icons';
import { FileInputListProps } from './';

const Card = (props: FileInputListProps) => {
  const {
    className,
    prefixCls = 'w-fileinput-card',
    dataList = [],
    maxNumber = 3,
    shape = 'round',
    size = 'middle',
    readonly,
    children,
    showFileIcon = {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
    onAdd,
    onPreview,
    onRemove,
  } = props;
  const isAction = showFileIcon.showPreviewIcon || showFileIcon.showRemoveIcon ? true : false;

  return (
    <FileInputStyleCardWarp shape={shape} size={size} className={`${prefixCls} ${className}`}>
      {dataList.map((item, index) => (
        <FileInputStyleCardBoxWarp className={`${prefixCls}-box`} key={index}>
          <FileInputStyleCardBoxInfoWarp className={`${prefixCls}-box-info`}>
            <img src={item['dataURL']} alt="" />
          </FileInputStyleCardBoxInfoWarp>

          <FileInputStyleCardActionsWarp className={isAction ? `${prefixCls}-actions` : ''} isAction={isAction}>
            {showFileIcon?.showPreviewIcon && (
              <FileInputStyleCardActionsRemoveWarp
                className={`${prefixCls}-actions-remove`}
                onClick={() => onPreview?.(item)}
              >
                <IconStyleBase style={{ color: '#fff', fontSize: 16 }}>
                  <Search />
                </IconStyleBase>
              </FileInputStyleCardActionsRemoveWarp>
            )}
            {showFileIcon?.showRemoveIcon && (
              <FileInputStyleCardActionsRemoveWarp
                className={`${prefixCls}-actions-remove`}
                onClick={() => onRemove?.(index)}
              >
                <IconStyleBase style={{ color: '#fff', fontSize: 16 }}>
                  <Delete />
                </IconStyleBase>
              </FileInputStyleCardActionsRemoveWarp>
            )}
          </FileInputStyleCardActionsWarp>
        </FileInputStyleCardBoxWarp>
      ))}
      {maxNumber > dataList.length && !readonly && (
        <FileInputStyleCardBoxWarp className={`${prefixCls}-box ${prefixCls}-btn`} btn onClick={onAdd}>
          {children}
        </FileInputStyleCardBoxWarp>
      )}
    </FileInputStyleCardWarp>
  );
};

export default Card;

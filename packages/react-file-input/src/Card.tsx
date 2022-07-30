import React from 'react';
import {
  FileInputStyleCardWarp,
  FileInputStyleCardBoxWarp,
  FileInputStyleCardActionsWarp,
  FileInputStyleCardBoxInfoWarp,
  FileInputStyleCardActionsRemoveWarp,
} from './style';
import Icon from '@uiw/react-icon';
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
                <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
              </FileInputStyleCardActionsRemoveWarp>
            )}
            {showFileIcon?.showRemoveIcon && (
              <FileInputStyleCardActionsRemoveWarp
                className={`${prefixCls}-actions-remove`}
                onClick={() => onRemove?.(index)}
              >
                <Icon type="delete" style={{ color: '#fff', fontSize: 16 }} />
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

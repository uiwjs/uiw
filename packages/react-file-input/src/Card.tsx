import React from 'react';
import {
  FileInputCardWarp,
  FileInputCardBoxWarp,
  FileInputCardActionsWarp,
  FileInputCardBoxInfoWarp,
  FileInputCardActionsRemoveWarp,
} from './style';
import Icon from '@uiw/react-icon';
import { FileInputListProps } from './';
import './style/index.less';

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
    <FileInputCardWarp shape={shape} size={size} className={`${prefixCls} ${className}`}>
      {dataList.map((item, index) => (
        <FileInputCardBoxWarp className={`${prefixCls}-box`} key={index}>
          <FileInputCardBoxInfoWarp className={`${prefixCls}-box-info`}>
            <img src={item['dataURL']} alt="" />
          </FileInputCardBoxInfoWarp>

          <FileInputCardActionsWarp className={isAction ? `${prefixCls}-actions` : ''} isAction={isAction}>
            {showFileIcon?.showPreviewIcon && (
              <FileInputCardActionsRemoveWarp
                className={`${prefixCls}-actions-remove`}
                onClick={() => onPreview?.(item)}
              >
                <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
              </FileInputCardActionsRemoveWarp>
            )}
            {showFileIcon?.showRemoveIcon && (
              <FileInputCardActionsRemoveWarp
                className={`${prefixCls}-actions-remove`}
                onClick={() => onRemove?.(index)}
              >
                <Icon type="delete" style={{ color: '#fff', fontSize: 16 }} />
              </FileInputCardActionsRemoveWarp>
            )}
          </FileInputCardActionsWarp>
        </FileInputCardBoxWarp>
      ))}
      {maxNumber > dataList.length && !readonly && (
        <FileInputCardBoxWarp className={`${prefixCls}-box ${prefixCls}-btn`} btn onClick={onAdd}>
          {children}
        </FileInputCardBoxWarp>
      )}
    </FileInputCardWarp>
  );
};

export default Card;

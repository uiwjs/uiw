import React from 'react';
import Icon from '@uiw/react-icon';
import { FileListProps } from './';
import './style/index.less';

const Card = (props: FileListProps) => {
  const {
    className,
    prefixCls = 'w-fileinput-card',
    dataList = [],
    maxNumber = 3,
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
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();

  const isAction = showFileIcon.showPreviewIcon || showFileIcon.showRemoveIcon ? true : false;

  return (
    <div className={cls}>
      {dataList.map((item, index) => (
        <div className={`${cls}_box`} key={index}>
          <div className={`${cls}_box_info`}>
            <img src={item['dataURL']} alt="" />
          </div>

          <div className={isAction ? `${cls}_actions` : ''}>
            {showFileIcon?.showPreviewIcon && (
              <span className={`${cls}_actions_remove`} onClick={() => onPreview?.(item)}>
                <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
              </span>
            )}
            {showFileIcon?.showRemoveIcon && (
              <span className={`${cls}_actions_remove`} onClick={() => onRemove?.(index)}>
                <Icon type="delete" style={{ color: '#fff', fontSize: 16 }} />
              </span>
            )}
          </div>
        </div>
      ))}
      {maxNumber > dataList.length && !readonly && (
        <div className={`${cls}_box ${cls}_btn`} onClick={onAdd}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;

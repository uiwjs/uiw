import React from 'react';
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
  const cls = [prefixCls, `${prefixCls}-size-${size}`, `${prefixCls}-shape-${shape}`, className]
    .filter(Boolean)
    .join(' ')
    .trim();

  const isAction = showFileIcon.showPreviewIcon || showFileIcon.showRemoveIcon ? true : false;

  return (
    <div className={cls}>
      {dataList.map((item, index) => (
        <div className={`${prefixCls}-box`} key={index}>
          <div className={`${prefixCls}-box-info`}>
            <img src={item['dataURL']} alt="" />
          </div>

          <div className={isAction ? `${prefixCls}-actions` : ''}>
            {showFileIcon?.showPreviewIcon && (
              <span className={`${prefixCls}-actions-remove`} onClick={() => onPreview?.(item)}>
                <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
              </span>
            )}
            {showFileIcon?.showRemoveIcon && (
              <span className={`${prefixCls}-actions-remove`} onClick={() => onRemove?.(index)}>
                <Icon type="delete" style={{ color: '#fff', fontSize: 16 }} />
              </span>
            )}
          </div>
        </div>
      ))}
      {maxNumber > dataList.length && !readonly && (
        <div className={`${prefixCls}-box ${prefixCls}-btn`} onClick={onAdd}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;

import React from 'react';
import Icon from '@uiw/react-icon';
import { FileInputListProps } from './';
import './style/index.less';

const Picture = (props: FileInputListProps) => {
  const {
    className,
    prefixCls = 'w-fileinput-list',
    dataList = [],
    uploadType,
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

  const cls = [prefixCls, `${prefixCls}-size-${size}`, `${prefixCls}-shape-${shape}`, className]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={cls}>
      {children &&
        !readonly &&
        React.isValidElement(children) &&
        React.cloneElement(children, {
          onClick: onAdd,
        })}
      <div>
        {dataList.map((item, index) => (
          <div className={`${prefixCls}-${uploadType}`} key={index}>
            {uploadType === 'picture' && (
              <div className={`${prefixCls}-info ${prefixCls}-${uploadType}-info`}>
                <img src={item['dataURL']} alt="" />
                {showFileIcon?.showPreviewIcon && (
                  <div className={`${prefixCls}-actions`}>
                    <span className={`${prefixCls}-actions-search`} onClick={() => onPreview?.(item)}>
                      <Icon type="search" style={{ color: '#fff', fontSize: 16 }} />
                    </span>
                  </div>
                )}
              </div>
            )}
            <div className={`${prefixCls}-${uploadType}-text`}>{item.name}</div>
            {showFileIcon?.showRemoveIcon && (
              <div className={`${prefixCls}-${uploadType}-icon`} onClick={() => onRemove?.(index)}>
                <Icon type="delete" style={{ color: '#999' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;

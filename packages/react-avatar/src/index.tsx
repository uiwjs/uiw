import React from 'react';
import Icon from '@uiw/react-icon';
import { HTMLSpanProps, noop } from '@uiw/utils';
import './style/index.less';
import { useState } from 'react';
import { useEffect } from 'react';

export interface AvatarProps extends HTMLSpanProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  icon?: JSX.Element | string | false | null;
  alt?: string;
  src?: string;
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
}

export default React.forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  const {
    prefixCls = 'w-avatar',
    shape = 'circle',
    size = 'default',
    className,
    src,
    alt,
    icon,
    onError = noop,
    ...resetProps
  } = props;
  let children = props.children;
  const [isImgExist, setIsImgExist] = useState(true);
  const cls = [
    prefixCls,
    className,
    size ? `${prefixCls}-${size}` : null,
    shape ? `${prefixCls}-${shape}` : null,
    src ? `${prefixCls}-image` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  useEffect(() => {
    setIsImgExist(true);
  }, [props.src]);

  if (isImgExist && src) {
    children = (
      <img
        src={src}
        alt={alt}
        onError={(evn) => {
          const errorFlag = onError ? onError(evn) : undefined;
          if (errorFlag !== false) {
            setIsImgExist(false);
          }
        }}
      />
    );
  } else if (icon && typeof icon === 'string') {
    children = <Icon type={icon} />;
  } else if (icon && React.isValidElement(icon)) {
    children = icon;
  }
  return (
    <span {...resetProps} className={cls} ref={ref}>
      {children}
    </span>
  );
});

import React from 'react';
import { HTMLDivProps, IProps } from '@uiw/utils';
// import './style/index.less';
import Warp from './style';

export interface ButtonGroupProps extends IProps, HTMLDivProps {
  vertical?: boolean;
}

export default React.forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  const { prefixCls = 'w-btn-group', vertical = false, children, className, ...resetProps } = props;

  const cls = [prefixCls, className, vertical && `${prefixCls}-vertical`].filter(Boolean).join(' ').trim();

  return (
    <Warp className={cls} {...resetProps} ref={ref}>
      {children}
    </Warp>
  );
});

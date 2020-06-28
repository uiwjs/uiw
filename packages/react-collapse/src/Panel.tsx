import React from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Icon, { IconProps } from '@uiw/react-icon';

export interface CollapsePanelProps<T> extends IProps, HTMLDivProps {
  disabled?: boolean;
  showArrow?: boolean;
  isActive?: boolean;
  header?: React.ReactNode;
  icon?: IconProps<T>['type'];
  extra?: React.ReactNode;
  onItemClick?: (evn: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Panel<T>(props: CollapsePanelProps<T> = {}) {
  const {
    prefixCls = 'w-collapse',
    className,
    icon = 'down',
    children,
    isActive,
    onItemClick,
    disabled = false,
    showArrow,
    header,
    extra,
    ...resetProps
  } = props;
  const cls = classnames([`${prefixCls}-item`], className, {
    [`${prefixCls}-active`]: isActive,
    [`${prefixCls}-disabled`]: disabled,
  });
  const iconRender = typeof icon === 'string' ? <Icon type={icon} /> : icon;

  const childStyle = (child: React.ReactElement) => {
    return Object.assign({}, child && child.props ? child.props.style : {}, {
      transitionDuration: '300ms',
    });
  };
  function getInstance(status: TransitionStatus, instance: any) {
    if (!instance) {
      return;
    }
    if (status === 'exited' || status === 'exiting') {
      instance.style.height = '1px';
    }
    if (status === 'entered' || status === 'entering') {
      instance.style.height = `${instance.scrollHeight}px`;
    }
  }
  return (
    <div className={cls} {...resetProps}>
      <div className={`${prefixCls}-header`} onClick={onItemClick}>
        {showArrow && iconRender}
        <span className={`${prefixCls}-title`}>{header}</span>
        {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      </div>
      <CSSTransition
        in={isActive}
        unmountOnExit={false}
        timeout={300}
        classNames={`${prefixCls}-panel`}
      >
        {(status: TransitionStatus) =>
          React.cloneElement(<div>{children}</div>, {
            className: `${prefixCls}-panel`,
            style: childStyle(children as React.ReactElement),
            ref: (e: any) => getInstance(status, e),
          })
        }
      </CSSTransition>
    </div>
  );
}

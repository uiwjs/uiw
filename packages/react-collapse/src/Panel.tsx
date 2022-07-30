import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Icon, { IconProps } from '@uiw/react-icon';
import {
  CollapseStyleHeader,
  CollapseStyleHeaderExtra,
  CollapseStyleHeaderTitle,
  CollapseStyleItem,
  CollapseStyleItemPanel,
} from './style';

export interface CollapsePanelProps extends IProps, HTMLDivProps {
  disabled?: boolean;
  bordered?: boolean;
  showArrow?: boolean;
  isActive?: boolean;
  header?: React.ReactNode;
  icon?: IconProps['type'];
  extra?: React.ReactNode;
  onItemClick?: (evn: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Panel(props: CollapsePanelProps) {
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
    bordered,
    extra,
    ...resetProps
  } = props;
  const cls = [
    prefixCls ? `${prefixCls}-item` : null,
    className,
    isActive ? `${prefixCls}-active` : null,
    disabled ? `${prefixCls}-disabled` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
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
    <CollapseStyleItem {...resetProps} className={cls}>
      <CollapseStyleHeader
        className={`${prefixCls}-header`}
        isActive={isActive}
        disabled={disabled}
        onClick={onItemClick}
      >
        {showArrow && iconRender}
        <CollapseStyleHeaderTitle className={`${prefixCls}-title`}>{header}</CollapseStyleHeaderTitle>
        {extra && <CollapseStyleHeaderExtra className={`${prefixCls}-extra`}>{extra}</CollapseStyleHeaderExtra>}
      </CollapseStyleHeader>
      <CollapseStyleItemPanel
        as={CSSTransition}
        bordered={bordered}
        in={isActive}
        unmountOnExit={false}
        timeout={300}
        classNames={`${prefixCls}-panel`}
      >
        {(status: TransitionStatus) =>
          React.cloneElement(
            <CollapseStyleItemPanel in={isActive} bordered={bordered}>
              {children}
            </CollapseStyleItemPanel>,
            {
              className: `${prefixCls}-panel`,
              style: childStyle(children as React.ReactElement),
              ref: (e: any) => getInstance(status, e),
            },
          )
        }
      </CollapseStyleItemPanel>
    </CollapseStyleItem>
  );
}

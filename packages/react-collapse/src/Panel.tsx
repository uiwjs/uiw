import React, { PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Icon, { IconProps, IconTagType } from '@uiw/react-icon';

export interface CollapsePanelProps extends IProps, HTMLDivProps {
  disabled?: boolean;
  showArrow?: boolean;
  isActive?: boolean;
  header?: React.ReactNode;
  icon?: IconProps<IconTagType>['type'];
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
      // instance.style.height = `${instance.scrollHeight}px`;
      instance.style.height = `${getElementHeight(instance)}px`;
    }
  }
  return (
    <div className={cls} {...resetProps}>
      <div className={`${prefixCls}-header`} onClick={onItemClick}>
        {showArrow && iconRender}
        <span className={`${prefixCls}-title`}>{header}</span>
        <Extra prefixCls={prefixCls}>{extra}</Extra>
      </div>
      <CSSTransition in={isActive} unmountOnExit={false} timeout={300} classNames={`${prefixCls}-panel`}>
        {(status: TransitionStatus) => {
          return React.cloneElement(<div>{children}</div>, {
            className: `${prefixCls}-panel`,
            style: childStyle(children as React.ReactElement),
            ref: (e: any) => getInstance(status, e),
          });
        }}
      </CSSTransition>
    </div>
  );
}

function Extra({ children, prefixCls }: PropsWithChildren<{ prefixCls: string }>) {
  if (!children) return null;
  return <div className={`${prefixCls}-extra`}>{children}</div>;
}

function getElementHeight(elm: HTMLDivElement) {
  const childNodes = elm.children;
  let totalHeight = 0;
  const beforeElmStyle = getComputedStyle(elm, '::before');
  const afterElmStyle = getComputedStyle(elm, '::after');
  const beforeHeight = parseInt(beforeElmStyle.height) || 0;
  const afterHeight = parseInt(afterElmStyle.height) || 0;
  totalHeight += beforeHeight + afterHeight;
  if (childNodes.length === 0) {
    return totalHeight;
  }
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i] as HTMLDivElement;
    const computedStyle = getComputedStyle(childNode);
    const height =
      childNode.offsetHeight +
      +parseInt(computedStyle.marginTop) +
      parseInt(computedStyle.marginBottom) +
      parseInt(computedStyle.borderTopWidth) +
      parseInt(computedStyle.borderBottomWidth);
    totalHeight += height;

    const beforeStyle = getComputedStyle(childNode, '::before');
    const afterStyle = getComputedStyle(childNode, '::after');
    const beforeHeight = parseInt(beforeStyle.height) || 0;
    const afterHeight = parseInt(afterStyle.height) || 0;
    totalHeight += beforeHeight + afterHeight;
  }
  return totalHeight;
}

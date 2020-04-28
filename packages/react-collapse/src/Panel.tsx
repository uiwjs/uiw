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
  onItemClick?: (evn: React.MouseEvent<HTMLDivElement>) => void;
}

export default class CollapsePanel<T> extends React.Component<CollapsePanelProps<T>> {
  public static defaultProps: CollapsePanelProps<{}> = {
    disabled: false,
    icon: 'down',
    prefixCls: 'w-collapse',
  }
  getInstance = (status: TransitionStatus, instance: any) => {
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
  render() {
    const { prefixCls, className, icon, children, isActive, onItemClick, disabled, showArrow, header, ...resetProps } = this.props;
    const cls = classnames([`${prefixCls}-item`], className, {
      [`${prefixCls}-active`]: isActive,
      [`${prefixCls}-disabled`]: disabled,
    });
    const iconRender = typeof (icon) === 'string' ? <Icon type={icon} /> : icon;

    const childStyle = (child: React.ReactElement) => {
      return Object.assign({}, child && child.props ? child.props.style : {}, {
        transitionDuration: '300ms',
      });
    };
    return (
      <div className={cls} {...resetProps}>
        <div
          className={`${prefixCls}-header`}
          onClick={onItemClick!.bind(this)}
        >
          {showArrow && iconRender}
          <span>{header}</span>
        </div>
        <CSSTransition
          in={isActive}
          unmountOnExit={false}
          timeout={300}
          classNames={`${prefixCls}-panel`}
        >
          {(status: TransitionStatus) => React.cloneElement(<div>{children}</div>, {
            className: `${prefixCls}-panel`,
            style: childStyle(children as React.ReactElement),
            ref: this.getInstance.bind(this, status),
          })}
        </CSSTransition>
      </div>
    );
  }
}

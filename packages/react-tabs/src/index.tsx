import React, { useEffect, useState, useRef } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Pane from './Pane';
import './style/index.less';

export * from './Pane';

Tabs.Pane = Pane;

export interface TabsProps extends IProps, HTMLDivProps {
  prefixCls?: string;
  activeKey?: string;
  type?: 'default' | 'line' | 'card';
  children?: React.ReactNode;
  onTabClick?: (key: string, item: React.ReactElement, e: React.MouseEvent) => void;
}

export default function Tabs(props: TabsProps) {
  const {
    prefixCls = 'w-tabs',
    className,
    children,
    type = 'default',
    activeKey: _,
    onTabClick,
    ...elementProps
  } = props;
  const [activeKey, setActiveKey] = useState(props.activeKey);
  const [slideStyle, setSlideStyle] = useState({ width: 0, left: 0 });
  const activeItem = useRef<HTMLDivElement | undefined>();
  const cls = [prefixCls, className, type ? `${prefixCls}-${type}` : null].filter(Boolean).join(' ').trim();

  useEffect(() => setActiveKey(props.activeKey), [props.activeKey]);
  useEffect(() => calcSlideStyle(), [activeKey]);

  function calcSlideStyle() {
    if (activeItem.current && type === 'line') {
      setSlideStyle({
        width: activeItem.current.clientWidth,
        left: activeItem.current.offsetLeft,
      });
    }
  }

  return (
    <div className={cls} {...elementProps}>
      <div className={`${prefixCls}-bar`}>
        <div className={`${prefixCls}-nav`}>
          {React.Children.map(children as React.ReactElement[], (item: React.ReactElement, key: number) => {
            if (!item) {
              return null;
            }
            const divProps: HTMLDivProps = {
              className: [
                `${prefixCls}-item`,
                item.key === activeKey ? 'active' : null,
                item.props.disabled ? 'disabled' : null,
              ]
                .filter(Boolean)
                .join(' ')
                .trim(),
              children: item.props.label,
            };
            if (!item.props.disabled) {
              divProps.onClick = (e: React.MouseEvent) => {
                setActiveKey(item.key as string);
                onTabClick && onTabClick(item.key as string, item, e);
                calcSlideStyle();
              };
            }
            return (
              <div
                key={key}
                ref={(node) => {
                  if (node && item.key === activeKey) {
                    activeItem.current = node;
                  }
                }}
                {...divProps}
              />
            );
          })}
        </div>
        <div style={slideStyle} className={`${prefixCls}-slide`} />
      </div>
      {React.Children.map(children, (item: any) => {
        if (!item || activeKey !== item.key) {
          return null;
        }
        return React.cloneElement(item, Object.assign({}, item.props, {}));
      })}
    </div>
  );
}

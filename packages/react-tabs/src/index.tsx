import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Pane from './Pane';
import './style/index.less';
import Popover from '@uiw/react-popover';

export * from './Pane';

Tabs.Pane = Pane;

export interface TabsProps extends IProps, HTMLDivProps {
  prefixCls?: string;
  activeKey?: string;
  type?: 'default' | 'line' | 'card';
  children?: React.ReactNode;
  onTabClick?: (key: string, item: React.ReactElement, e: React.MouseEvent) => void;
}

type flowNavType = {
  content: number;
  nav: Array<Record<'index' | 'width' | 'curWidth', number>>;
  flowLeft: number;
  displayStart: number;
  displayEnd: number;
};

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

  const [flowNav, flowNavSet] = useState<flowNavType>({
    content: 0,
    nav: [],
    flowLeft: -1,
    displayStart: 0,
    displayEnd: 0,
  });
  const [hiddenNav, hiddenNavSet] = useState<Array<number>>([]);
  const deviation = 15;

  const [nodes, nodesSet] = useState<any>();
  const divContentRef = useCallback((node) => {
    if (node !== null) {
      nodesSet(nodes);
      node.addEventListener('scroll', (e: any) => {
        const { clientWidth, scrollLeft } = e.target;
        flowNav.displayStart = scrollLeft;
        flowNav.displayEnd = clientWidth + scrollLeft;
        flowNavSet({ ...flowNav });
      });
      flowNav.displayEnd = node.getBoundingClientRect().width;
      flowNavSet({ ...flowNav });
    }
  }, []);

  const divNavRef = useCallback((node, key: number) => {
    if (node !== null) {
      node.addEventListener('click', (e: any) => {
        activeItem.current = node;
      });
      divNavWidthChange(node.getBoundingClientRect().width, key);
    }
  }, []);

  const divNavWidthChange = (width: number, index: number) => {
    let curWidth = 0;
    flowNav.nav.slice(0, index + 1).forEach((nav) => (curWidth += nav.width));
    flowNav.nav[index] = { width, curWidth: Math.floor(curWidth), index };
    flowNavSet(flowNav);
  };

  useEffect(() => {
    showHideenNav();
  }, [flowNav.displayEnd > flowNav.nav[flowNav.nav.length - 1]?.curWidth]);

  const showHideenNav = () => {
    const hiddenNav: Array<number> = [];
    if (flowNav.nav.length > 0) {
      flowNav.nav.forEach((item) => {
        const curWidth = item.curWidth - deviation;
        if (curWidth < flowNav.displayStart || curWidth > flowNav.displayEnd) {
          hiddenNav.push(item.index);
        }
      });
      hiddenNavSet(hiddenNav);
    }
  };

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
      <div style={{ display: 'flex' }}>
        <div className={`${prefixCls}-bar`} ref={divContentRef}>
          <div className={`${prefixCls}-nav`} style={{ width: 'max-content' }}>
            {renderNav(children)}
          </div>
        </div>
        <div style={slideStyle} className={`${prefixCls}-slide`} />
        {hiddenNav.length > 0 && (
          <Popover
            trigger="click"
            placement="bottomRight"
            visibleArrow={false}
            content={
              <div className={`${prefixCls}-nav-hidden`}>
                {renderNav(hiddenNav.map((idx) => (children as Array<React.ReactElement>)[idx]))}
              </div>
            }
          >
            <div onClick={showHideenNav} className={`${prefixCls}-flow-content`}>
              <span>…</span>
            </div>
          </Popover>
        )}
      </div>
      {React.Children.map(children, (item: any) => {
        if (!item || activeKey !== item.key) {
          return null;
        }
        return React.cloneElement(item, Object.assign({}, item.props, {}));
      })}
    </div>
  );

  function renderNav(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children as React.ReactElement[], (item: React.ReactElement, key: number) => {
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
      return <div key={key} ref={(ref) => divNavRef(ref, key)} {...divProps} />;
    });
  }
}

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Pane from './Pane';
import Popover from '@uiw/react-popover';
import * as Styled from './style';
export * from './Pane';

Tabs.Pane = Pane;

let labelWidth: number = 0;
export interface TabsProps extends IProps, HTMLDivProps {
  activeKey?: string;
  type?: 'default' | 'line' | 'card';
  children?: React.ReactNode;
  onTabClick?: (key: string, item: React.ReactElement, e: React.MouseEvent) => void;
}

type FlowNavType = {
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

  const [flowNav, flowNavSet] = useState<FlowNavType>({
    content: 0,
    nav: [],
    flowLeft: -1,
    displayStart: 0,
    displayEnd: 0,
  });
  const [hiddenNav, hiddenNavSet] = useState<Array<number>>([]);
  const deviation = 15;

  const [nodes, nodesSet] = useState<any>();
  const divContentRef = useCallback((node: HTMLDivElement | null) => {
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

  const divNavRef = useCallback((node: HTMLDivElement | null, key: number, itemKey: React.Key | null) => {
    if (node !== null) {
      node.addEventListener('click', (e: any) => {
        activeItem.current = node;
      });
      divNavWidthChange(node.getBoundingClientRect().width, key);

      if (itemKey === props.activeKey && type === 'line' && labelWidth === 0) {
        activeItem.current = node;
      }
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
      labelWidth = activeItem.current.clientWidth;
      setSlideStyle({
        width: activeItem.current.clientWidth,
        left: activeItem.current.offsetLeft,
      });
    }
  }

  return (
    <Styled.TabsStyleWarp className={[prefixCls, className].filter(Boolean).join(' ').trim()} {...elementProps}>
      <Styled.TabsDivFlex>
        <Styled.TabsDivHidden>
          <Styled.TabsDivBar className={`${prefixCls}-bar`} ref={divContentRef}>
            <Styled.TabsDivNav className={`${prefixCls}-nav`}>
              {renderNav(children)}
              <Styled.TabsDivSlide className={`${prefixCls}-slide`} style={slideStyle} />
            </Styled.TabsDivNav>
          </Styled.TabsDivBar>
        </Styled.TabsDivHidden>
        {hiddenNav.length > 0 && (
          <Popover
            trigger="click"
            placement="bottomRight"
            visibleArrow={false}
            content={
              <Styled.TabsNavHidden className={`${prefixCls}-nav-hidden`}>
                {renderNav(hiddenNav.map((idx) => (children as Array<React.ReactElement>)[idx]))}
              </Styled.TabsNavHidden>
            }
          >
            <Styled.TabsFlowContent onClick={showHideenNav} className={`${prefixCls}-flow-content`}>
              <span>…</span>
            </Styled.TabsFlowContent>
          </Popover>
        )}
      </Styled.TabsDivFlex>
      {React.Children.map(children, (item: any) => {
        if (!item || activeKey !== item.key) {
          return null;
        }
        return React.cloneElement(item, Object.assign({}, item.props, {}));
      })}
    </Styled.TabsStyleWarp>
  );

  function renderNav(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children as React.ReactElement[], (item: React.ReactElement, key: number) => {
      if (!item) {
        return null;
      }
      const divProps: HTMLDivProps = {
        className: `${prefixCls}-item`,
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
        <Styled.TabsItem
          type={type}
          disabled={item.props.disabled}
          active={item.key === activeKey}
          key={key}
          ref={(ref) => divNavRef(ref, key, item.key)}
          {...divProps}
        />
      );
    });
  }
}

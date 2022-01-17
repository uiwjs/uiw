import React, { useCallback, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import Icon, { IconProps } from '@uiw/react-icon';
import { IProps, noop } from '@uiw/utils';
import { TreeData, TreeProps, getChildKeys } from './';

interface TreeNodeIconProps {
  isOpen: boolean;
  noChild: boolean;
  openKeys: TreeNodeProps['openKeys'];
  selectedKeys: TreeNodeProps['selectedKeys'];
}

interface TreeNodeProps<T = (data: TreeData, props: TreeNodeIconProps) => IconProps['type']> extends IProps {
  data: TreeData[];
  level: number;
  parent?: TreeData;
  icon?: T;
  iconAnimation?: boolean;
  isSelected?: boolean;
  renderTitle?: TreeProps['renderTitle'];

  openKeys?: TreeData['key'][];
  selectedKeys?: TreeData['key'][];

  onItemClick?: (item: TreeData, evn: React.MouseEvent<HTMLElement>) => void;
  onItemSelected?: (item: TreeData, evn: React.MouseEvent<HTMLElement>) => void;
}

const Label = ({ label }: { label: React.ReactNode }) => useMemo(() => <span>{label}</span>, [label]);

export default function TreeNode<T>(props: TreeNodeProps<T>) {
  const {
    prefixCls,
    renderTitle,
    icon,
    iconAnimation,
    isSelected,
    openKeys,
    selectedKeys,

    data,
    level,
    parent,

    onItemClick = noop,
    onItemSelected = noop,
    ...other
  } = props;
  let isOpen = false;

  if (parent && parent.key) {
    isOpen = !!(openKeys && openKeys.indexOf(parent.key) > -1);
  }
  const onExit = useCallback((node: HTMLElement) => {
    node.style.height = `${node.scrollHeight}px`;
  }, []);
  const onExiting = useCallback((node: HTMLElement) => {
    node.style.height = '1px';
  }, []);
  const onEnter = useCallback((node: HTMLElement, isAppearing: boolean) => {
    node.style.height = '1px';
  }, []);
  const onEntering = useCallback((node: HTMLElement, isAppearing: boolean) => {
    node.style.height = `${node.scrollHeight}px`;
  }, []);
  const onEntered = useCallback((node: HTMLElement, isAppearing: boolean) => {
    node.style.height = 'initial';
  }, []);
  return (
    <CSSTransition
      classNames={prefixCls}
      in={isOpen}
      timeout={200}
      onExit={onExit}
      onExiting={onExiting}
      onEnter={onEnter}
      onEntered={onEntered}
      onEntering={onEntering}
    >
      <ul
        className={[
          level !== 1 && isOpen ? [`${prefixCls}-open`] : null,
          level !== 1 && !isOpen ? [`${prefixCls}-close`] : null,
        ]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        {data.map((item, idx: number) => {
          item.parent = parent;
          const selected = !!(selectedKeys && selectedKeys.indexOf(item.key) > -1);
          const noChild = !item.children;
          const itemIsOpen = openKeys && openKeys.indexOf(item.key) > -1 && !!item.children;
          const iconItem =
            typeof icon === 'function'
              ? icon(item, {
                  isOpen: !!itemIsOpen,
                  noChild,
                  openKeys,
                  selectedKeys,
                })
              : icon;
          const childKeys = noChild ? [] : getChildKeys(item.children);
          const checkedKeys = selectedKeys ? selectedKeys.filter((key) => childKeys.indexOf(key) > -1) : [];
          const isHalfChecked = checkedKeys.length > 0 && childKeys.length !== checkedKeys.length;
          return (
            <li key={idx}>
              <div className={`${prefixCls}-label`}>
                <span className={`${prefixCls}-switcher`} onClick={(evn) => onItemClick(item, evn)}>
                  <Icon
                    type={iconItem || 'caret-right'}
                    className={[
                      typeof icon === 'function' ? `${prefixCls}-switcher-noop` : null,
                      noChild ? 'no-child' : null,
                      !iconAnimation ? 'no-animation' : null,
                      itemIsOpen ? 'open' : null,
                    ]
                      .filter(Boolean)
                      .join(' ')
                      .trim()}
                  />
                </span>
                <div
                  onClick={(evn) => onItemSelected(item, evn)}
                  className={[
                    `${prefixCls}-title`,
                    selected && isSelected ? 'selected' : null,
                    item.disabled ? 'disabled' : null,
                  ]
                    .filter(Boolean)
                    .join(' ')
                    .trim()}
                >
                  {renderTitle ? (
                    renderTitle(item, {
                      selected,
                      noChild,
                      openKeys,
                      isHalfChecked,
                      selectedKeys,
                    })
                  ) : (
                    <Label label={item.label} />
                  )}
                </div>
              </div>
              {item.children && (
                <TreeNode
                  {...other}
                  {...{
                    prefixCls,
                    icon,
                    iconAnimation,
                    isSelected,
                    openKeys,
                    selectedKeys,
                    onItemClick,
                    onItemSelected,
                    renderTitle,
                  }}
                  prefixCls={prefixCls}
                  data={item.children}
                  level={level + 1}
                  parent={item}
                />
              )}
            </li>
          );
        })}
      </ul>
    </CSSTransition>
  );
}

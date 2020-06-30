import React, { useState, useMemo, useEffect } from 'react';
import classnames from 'classnames';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Panel from './Panel';
import './style/index.less';

export interface CollapseProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  accordion?: boolean;
  activeKey?: string | string[];
  bordered?: boolean;
  showArrow?: boolean;
  onChange?: (activeKey: string[]) => void;
}

export interface CollapseState {
  activeKey: string[];
}

function toArray(activeKey: CollapseProps['activeKey']) {
  let currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

function InternalCollapse(props: CollapseProps = {}) {
  const {
    prefixCls = 'w-collapse',
    className,
    children,
    accordion = false,
    bordered,
    showArrow = true,
    activeKey: propsActiveKey,
    onChange,
    ...resetProps
  } = props;
  const [activeKey, setActiveKey] = useState(toArray(propsActiveKey));
  const cls = classnames(prefixCls, className, {
    'w-noborder': bordered,
  });
  function onItemClick(key: string) {
    let keys = activeKey;
    if (accordion) {
      keys = keys[0] === key ? [] : [key];
    } else {
      keys = [...keys];
      const index = keys.indexOf(key);
      const isActive = index > -1;
      if (isActive) {
        keys.splice(index, 1);
      } else {
        keys.push(key);
      }
    }
    setActiveKey(keys);
  }
  useMemo(() => {
    if (propsActiveKey !== activeKey) {
      setActiveKey(toArray(propsActiveKey));
    }
  }, [propsActiveKey]);
  useMemo(() => {
    if (propsActiveKey !== activeKey) {
      onChange && onChange(activeKey);
    }
  }, [activeKey, propsActiveKey]);
  return (
    <div className={cls} {...resetProps}>
      {React.Children.map(children, (child: any, index) => {
        // 如果没有密钥提供，请使用面板顺序作为默认密钥
        const key = child.key || String(index);
        const { disabled } = child.props;
        let isActive = false;
        if (accordion) {
          // 手风琴模式下默认选择第一个
          isActive = activeKey[0] === key;
        } else {
          isActive = activeKey.indexOf(key) > -1;
        }
        const childProps = {
          prefixCls,
          isActive,
          disabled,
          showArrow,
          onItemClick: disabled ? () => {} : () => onItemClick(key),
          ...child.props,
        };
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
}

const Collapse = React.forwardRef<unknown, CollapseProps>(InternalCollapse);
type Collapse = typeof Collapse & {
  Panel: typeof Panel;
};

(Collapse as Collapse).Panel = Panel;

export default Collapse as Collapse;

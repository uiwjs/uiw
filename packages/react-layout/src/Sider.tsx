import React, {useEffect, useState, useMemo} from 'react';
import classnames from 'classnames';
import { IProps, randomid } from '@uiw/utils';
import {LayoutContext, LayoutContextProps} from './Layout';

export interface SiderProps extends IProps {
  children?: React.ReactNode;
  width?: number | string;
  collapsedWidth?: number;
  collapsed?: boolean;
}

function Sider(props = {} as SiderProps & LayoutContextProps) {
  const { prefixCls = 'w-layout-sider', className, style, children, width = 200, collapsedWidth = 80, collapsed = false, siderHook, ...other } = props;
  const [sliderId] = useState(`w-layout-${randomid()}`);
  const [rawWidth, setRawWidth] = useState(collapsed ? collapsedWidth : width);
  useEffect(() => {
    if (siderHook && !!siderHook.addSider) {
      siderHook.addSider(sliderId);
    }
    return () => {
      if (siderHook && !!siderHook.removeSider) {
        siderHook.removeSider(sliderId);
      }
    }
  }, []);
  useMemo(() => {
    setRawWidth(collapsed ? collapsedWidth : width);
  }, [collapsed])
  const divStyle = { ...style, flex: `0 0 ${rawWidth}`, maxWidth: rawWidth, minWidth: rawWidth, width: rawWidth };
  return (
    <div className={classnames(prefixCls, className)} style={divStyle} {...other}>{children}</div>
  );
}

export default (props = {} as SiderProps) => {
  return (
    <LayoutContext.Consumer>
      {(context: LayoutContextProps) => <Sider {...props} {...context} />}
    </LayoutContext.Consumer>
  )
}

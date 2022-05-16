import React from 'react';
import { HTMLDivProps } from '@uiw/utils';
import Item from './Item';
import Warp from './style';

export interface BreadcrumbProps extends HTMLDivProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  separator?: JSX.Element | string;
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>((props, ref) => {
  const { prefixCls = 'w-breadcrumb', className, separator = '/', ...other } = props;
  const cls = [prefixCls, className].filter(Boolean).join(' ').trim();
  return (
    <Warp {...{ className: cls, ...other }} ref={ref}>
      {React.Children.map(props.children, (element: any) => {
        return React.cloneElement(element, Object.assign({ separator }, element.props, {}));
      })}
    </Warp>
  );
});
type Breadcrumb = typeof Breadcrumb & {
  Item: typeof Item;
};

(Breadcrumb as Breadcrumb).Item = Item;

export default Breadcrumb as Breadcrumb;
export { Breadcrumb };

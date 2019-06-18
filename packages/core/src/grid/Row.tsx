import React from 'react';
import classnames from 'classnames';
import { IProps } from '../utils/props';
import './style/row.less';

export interface IRowProps extends IProps {
  fixed?: boolean;
  span?: number;
  grow?: number;
  gutter: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}


export default class Row extends React.Component<IRowProps> {
  static defaultProps = {
    prefixCls: 'w-row',
    gutter: 0,
    justify: null,
  }
  render() {
    const { prefixCls, className, gutter, justify, align, ...props } = this.props;
    const cls = classnames(prefixCls, className, {
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
    });
    const gutterStyl = !gutter ? {} : { paddingLeft: gutter / 2, paddingRight: gutter / 2 };
    return (
      <div {...props} className={cls}>
        {React.Children.map(this.props.children, (element: any) => {
          return React.cloneElement(element, Object.assign({}, element.props, {
            style: { ...element.props.style, ...gutterStyl },
          }));
        })}
      </div>
    );
  }
}

import React from 'react';
import classnames from 'classnames';
import { IProps } from '../utils/props';
import './style/row.less';

export interface RowProps extends IProps {
  fixed?: boolean;
  gutter: number;
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'top' | 'middle' | 'bottom' | 'baseline';
}


export default class Row extends React.Component<RowProps> {
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
        {React.Children.toArray(this.props.children).map((child) => {
          if (!React.isValidElement(child)) return child;
          return React.cloneElement(child, Object.assign({}, child.props, {
            style: { ...child.props.style, ...gutterStyl },
          }));
        })}
      </div>
    );
  }
}

import React from 'react';
import classnames from 'classnames';
import { IProps } from '../utils/props';
import { DescriptionsItemProps } from './DescriptionsItem';

export interface TdProps extends IProps {
  child: React.ReactElement<DescriptionsItemProps>;
  bordered: boolean;
  colon: boolean;
  type?: 'label' | 'content';
  layout?: 'horizontal' | 'vertical';
}

const Td: React.SFC<TdProps> = (props: TdProps) => {
  const { child, bordered, colon, type, layout, prefixCls } = props;
  const { label, className, children, span = 1 } = child.props;
  const labelProps: any = {
    className: classnames(`${prefixCls}-item-label`, className, {
      [`${prefixCls}-item-colon`]: colon,
      [`${prefixCls}-item-no-label`]: !label,
    }),
    key: 'label',
  };
  if (layout === 'vertical') {
    labelProps.colSpan = span * 2 - 1;
  }

  if (bordered) {
    if (type === 'label') {
      return <th {...labelProps}>{label}</th>;
    }
    return (
      <td
        className={classnames(`${prefixCls}-item-content`, className)}
        key="content"
        colSpan={span * 2 - 1}
      >
        {children}
      </td>
    );
  }
  if (layout === 'vertical') {
    if (type === 'content') {
      return (
        <td colSpan={span} className={classnames(`${prefixCls}-item`, className)}>
          <span className={`${prefixCls}-item-content`} key="content">
            {children}
          </span>
        </td>
      );
    }
    return (
      <td colSpan={span} className={classnames(`${prefixCls}-item`, className)}>
        <span
          className={classnames(`${prefixCls}-item-label`, { [`${prefixCls}-item-colon`]: colon })}
          key="label"
        >
          {label}
        </span>
      </td>
    );
  }
  return (
    <td colSpan={span} className={classnames(`${prefixCls}-item`, className)}>
      <span {...labelProps}>{label}</span>
      <span className={`${prefixCls}-item-content`} key="content">
        {children}
      </span>
    </td>
  );
}

export default Td;

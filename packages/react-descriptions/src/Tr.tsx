import React from 'react';
import { IProps } from '@uiw/utils';
import { DescriptionsItemProps } from './DescriptionsItem';
import Td from './Td';

export interface TrProps extends IProps {
  children: React.ReactElement<DescriptionsItemProps>[];
  bordered?: boolean;
  layout?: 'horizontal' | 'vertical';
  colon?: boolean;
  index?: number;
}

export default class Tr extends React.Component<TrProps> {
  render() {
    const { prefixCls, layout, bordered, colon, index, children } = this.props;
    const renderCol = (colItem: React.ReactElement<DescriptionsItemProps>, type: 'label' | 'content', idx: number ) => {
      return (
        <Td
          prefixCls={prefixCls}
          child={colItem}
          bordered={bordered!}
          colon={colon!}
          type={type}
          layout={layout}
          key={`${type}-${colItem.key || idx}`}
        />
      );
    };
    const cloneChildren: JSX.Element[] = [];
    const cloneContentChildren: JSX.Element[] = [];
    React.Children.map(children as React.ReactElement < DescriptionsItemProps > [], (childrenItem: React.ReactElement<DescriptionsItemProps>, idx) => {
      cloneChildren.push(renderCol(childrenItem, 'label', idx));
      if (layout === 'vertical') {
        cloneContentChildren.push(renderCol(childrenItem, 'content', idx));
      } else if (bordered) {
        cloneChildren.push(renderCol(childrenItem, 'content', idx));
      }
    });

    if (layout === 'vertical') {
      return [
        <tr className={`${prefixCls}-row`} key={`label-${index}`}>
          {cloneChildren}
        </tr>,
        <tr className={`${prefixCls}-row`} key={`content-${index}`}>
          {cloneContentChildren}
        </tr>,
      ];
    }

    return (
      <tr className={`${prefixCls}-row`} key={index}>
        {cloneChildren}
      </tr>
    );
  }
};
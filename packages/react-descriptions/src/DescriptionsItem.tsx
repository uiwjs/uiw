import React from 'react';
import { IProps } from '@uiw/utils';

export interface DescriptionsItemProps extends IProps {
  label?: React.ReactNode;
  children: React.ReactNode;
  span?: number;
}

const DescriptionsItem: React.FC<DescriptionsItemProps> = ({ children }) => children as JSX.Element;

export default DescriptionsItem;

import React from 'react';
import Icon, { IIconProps } from '../icon';

// export const IconProgress<T> = (props: { type: IIconProps<T>['type'] }) => <Icon type={props.type} />;


export function IconProgress<T>(props: {type: IIconProps<T>['type'] }): JSX.Element {
  return <Icon type={props.type} /> 
}
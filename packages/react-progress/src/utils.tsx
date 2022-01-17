import React from 'react';
import Icon, { IconProps } from '@uiw/react-icon';

export function IconProgress<T>(props: { type: IconProps<T>['type'] }): JSX.Element {
  return <Icon type={props.type} />;
}

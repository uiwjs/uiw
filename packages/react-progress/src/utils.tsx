import React from 'react';
import Icon, { IconProps, IconTagType } from '@uiw/react-icon';

export function IconProgress<T extends IconTagType>(props: { type: IconProps<T>['type'] }): JSX.Element {
  return <Icon type={props.type} />;
}

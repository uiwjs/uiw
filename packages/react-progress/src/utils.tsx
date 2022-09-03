import React from 'react';
import { IconStyleBase } from '@uiw/react-icon';
import { Close } from '@uiw/icons/lib/Close';
import { Check } from '@uiw/icons/lib/Check';
import { CircleClose } from '@uiw/icons/lib/CircleClose';
import { CircleCheck } from '@uiw/icons/lib/CircleCheck';

const Icons = {
  close: <Close />,
  check: <Check />,
  'circle-close': <CircleClose />,
  'circle-check': <CircleCheck />,
};

export type IconsType = keyof typeof Icons;

export function IconProgress<T>(props: { type: IconsType }): JSX.Element {
  const Icon = Icons[props.type];
  return <IconStyleBase>{Icon}</IconStyleBase>;
}

import React from 'react';
import { IProps } from '@uiw/utils';
import TimePanel, { TimePickerPanelProps } from './Panel';
// import './style/time-picker.less';
import { DateTimeStyleBase } from './style';

export interface TimePickerTimeProps extends IProps, TimePickerPanelProps {
  precision?: Precision;
}

export type Precision = 'hour' | 'minute' | 'second';

export function TimePickerTime(props: TimePickerTimeProps) {
  const { prefixCls = 'w-timepicker', className, precision = 'second', ...other } = props;
  return (
    <DateTimeStyleBase className={[prefixCls, className].filter(Boolean).join(' ').trim()}>
      {/^(second|minute|hour)$/.test(precision as Precision) && <TimePanel type="Hours" count={24} {...other} />}
      {/^(second|minute)$/.test(precision as Precision) && <TimePanel type="Minutes" count={60} {...other} />}
      {/^(second)$/.test(precision as Precision) && <TimePanel type="Seconds" count={60} {...other} />}
    </DateTimeStyleBase>
  );
}

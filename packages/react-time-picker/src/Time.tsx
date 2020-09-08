import React from 'react';
import { IProps } from '@uiw/utils';
import TimePanel, { TimePickerPanelProps } from './Panel';
import './style/time-picker.less';

export interface TimePickerTimeProps extends IProps, TimePickerPanelProps {
  precision?: Precision;
}

export type Precision = 'hour' | 'minute' | 'second';

export class TimePickerTime extends React.Component<TimePickerTimeProps> {
  public static defaultProps: TimePickerTimeProps = {
    prefixCls: 'w-timepicker',
    hideDisabled: false,
    precision: 'second',
  };
  render() {
    const { prefixCls, className, precision, ...other } = this.props;
    return (
      <div className={[prefixCls, className].filter(Boolean).join(' ').trim()}>
        {/^(second|minute|hour)$/.test(precision as Precision) && (
          <TimePanel type="Hours" count={24} {...other} />
        )}
        {/^(second|minute)$/.test(precision as Precision) && (
          <TimePanel type="Minutes" count={60} {...other} />
        )}
        {/^(second)$/.test(precision as Precision) && (
          <TimePanel type="Seconds" count={60} {...other} />
        )}
      </div>
    );
  }
}

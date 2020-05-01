import React from 'react';
import classnames from 'classnames';
import { IProps } from '@uiw/utils'
import TimePanel, { TimePickerPanelProps } from './Panel';
import './style/time-picker.less';

export interface TimeProps extends IProps, TimePickerPanelProps {
  precision?: Precision;
}

export type Precision = 'hour' | 'minute' | 'second';

export default class Picker extends React.Component<TimeProps> {
  public static defaultProps: TimeProps = {
    prefixCls: 'w-timepicker',
    hideDisabled: false,
    precision: 'second',
  }
  render() {
    const { prefixCls, className, precision, ...other } = this.props;
    return (
      <div className={classnames(prefixCls, className)}>
        {/^(second|minute|hour)$/.test(precision as Precision) && <TimePanel type="Hours" count={24} {...other} />}
        {/^(second|minute)$/.test(precision as Precision) && <TimePanel type="Minutes" count={60} {...other} />}
        {/^(second)$/.test(precision as Precision) && <TimePanel type="Seconds" count={60} {...other} />}
      </div>
    );
  }
}

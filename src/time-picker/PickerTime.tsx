import React from 'react';
import classnames from 'classnames';
import TimePanel, { ITimePanelProps } from './TimePanel';
import { IProps } from '../utils/props'
import './style/time-picker.less';

export interface ITimePickerPanelProps extends IProps, ITimePanelProps {
  precision?: Precision;
}

export type Precision = 'hour' | 'minute' | 'second';

export default class TimePickerPanel extends React.Component<ITimePickerPanelProps> {
  public static defaultProps: ITimePickerPanelProps = {
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

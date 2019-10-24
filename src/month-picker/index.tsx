import React from 'react';
import classnames from 'classnames';
import Input, { IInputProps } from '../input';
import Popover, { IPopoverProps } from '../popover';
import { formatter } from '../';
import Button from '../button';
import PickerMonth from '../date-picker/PickerMonth';
import PickerYear from '../date-picker/PickerYear';
import PickerCaption, { CaptionType } from '../date-picker/PickerCaption';
import './style/index.less';
import { IProps } from '../utils/props';

export interface IMonthPickerProps<T> extends IProps, Omit<IInputProps<T>, 'value' | 'onChange'> {
  popoverProps?: IPopoverProps;
  value?: Date | string;
  format?: string,
  monthLabel?: string[],
  allowClear?: boolean,
  onChange?: (date?: Date, formatDate?: string) => void,
}


export interface IMonthPickerState {
  date?: Date | string;
  panelDate?: Date;
  type?: 'setMonth' | 'setFullYear' | CaptionType;
  isOpen?: boolean;
}

export default class MonthPicker<T> extends React.Component<IMonthPickerProps<T>, IMonthPickerState> {
  public state: IMonthPickerState;
  public static defaultProps: IMonthPickerProps<{}> = {
    prefixCls: 'w-monthpicker',
    format: 'YYYY/MM',
    monthLabel: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    allowClear: true,
    onChange() { },
  }
  constructor(props: IMonthPickerProps<T>) {
    super(props);
    this.state = {
      date: props.value,
      panelDate: new Date(),
      type: 'month',
      isOpen: false,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: IMonthPickerProps<T>) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onSelectedDate(type: 'setMonth' | 'setFullYear', num: number, paging?: boolean) {
    const { format, onChange } = this.props;
    let { panelDate, date } = this.state;

    date = panelDate;
    panelDate = new Date((date as Date)[type](num));

    date = formatter(format as string, new Date(date as Date));
    const state: IMonthPickerState = { panelDate, date, isOpen: false };
    if (type === 'setFullYear') {
      delete state.isOpen;
      state.type = 'month';
    }
    if (paging) {
      delete state.type;
    }
    this.setState({ ...state }, () => {
      if (this.state.date && onChange) {
        onChange(panelDate as Date, date as string);
      }
    });
  }
  onSelected = (type: IMonthPickerState['type']) => {
    if (/^(month|year)$/.test(type as string)) {
      this.setState({ type });
    } else {
      const year = (this.state.panelDate as Date).getFullYear();
      const panelDate = (this.state.panelDate as Date).setFullYear(type === 'next' ? year + 1 : year - 1);
      this.setState({
        panelDate: new Date(panelDate),
      });
    }
  }
  handleVisibleChange(isOpen: boolean) {
    this.setState({ isOpen });
  }
  onAllowClear() {
    const { onChange } = this.props;
    this.setState({ date: undefined }, () => {
      onChange && onChange();
    });
  }
  render() {
    const { prefixCls, className, popoverProps, allowClear, format, monthLabel, ...inputProps } = this.props;
    const { date, type } = this.state;
    const value = date || '';
    inputProps.value = typeof value === 'string' ? value : formatter(format as string, value);
    if (allowClear && inputProps.value) {
      inputProps.addonAfter = <Button className={`${prefixCls}-close-btn`} icon="close" onClick={this.onAllowClear.bind(this)} size={inputProps.size} basic type="light" />;
      // inputProps.addonAfter = <Icon className={`${prefixCls}-close-btn`} onClick={this.onAllowClear.bind(this)} type="close" />;
    }
    return (
      <Popover
        trigger="focus"
        placement="bottomLeft"
        autoAdjustOverflow
        isOpen={this.state.isOpen}
        {...popoverProps}
        onVisibleChange={this.handleVisibleChange.bind(this)}
        content={
          <div className={classnames(`${prefixCls}-popover`)}>
            <PickerCaption
              panelDate={this.state.panelDate}
              monthLabel={monthLabel}
              onSelected={this.onSelected}
            />
            {type === 'month' && (
              <PickerMonth
                panelDate={this.state.panelDate}
                monthLabel={monthLabel}
                onSelected={this.onSelectedDate.bind(this, 'setMonth')}
              />
            )}
            {type === 'year' && (
              <PickerYear
                panelDate={this.state.panelDate}
                onSelected={this.onSelectedDate.bind(this, 'setFullYear')}
              />
            )}
          </div>
        }
      >
        <Input
          placeholder="请输入日期"
          readOnly
          {...(inputProps as any)}
          className={classnames(`${prefixCls}`, className)}
        />
      </Popover>
    );
  }
}

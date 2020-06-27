import React from 'react';
import classnames from 'classnames';
import Input, { InputProps } from '@uiw/react-input';
import Popover, { PopoverProps } from '@uiw/react-popover';
import { IProps } from '@uiw/utils';
import Button from '@uiw/react-button';
import formatter from '@uiw/formatter';
import {
  DatePickerMonth,
  DatePickerYear,
  DatePickerCaption,
  DatePickerCaptionType,
} from '@uiw/react-date-picker';
import './style/index.less';

export interface MonthPickerProps<T>
  extends IProps,
    Omit<InputProps<T>, 'value' | 'onChange'> {
  popoverProps?: PopoverProps;
  value?: Date | string;
  format?: string;
  monthLabel?: string[];
  allowClear?: boolean;
  onChange?: (date?: Date, formatDate?: string) => void;
}

export interface MonthPickerState {
  date?: Date | string;
  panelDate?: Date;
  type?: 'setMonth' | 'setFullYear' | DatePickerCaptionType;
  isOpen?: boolean;
}

export default class MonthPicker<T> extends React.Component<
  MonthPickerProps<T>,
  MonthPickerState
> {
  public state: MonthPickerState;
  public static defaultProps: MonthPickerProps<{}> = {
    prefixCls: 'w-monthpicker',
    format: 'YYYY/MM',
    monthLabel: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    allowClear: true,
    onChange() {},
  };
  constructor(props: MonthPickerProps<T>) {
    super(props);
    this.state = {
      date: props.value,
      panelDate: new Date(),
      type: 'month',
      isOpen: false,
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps: MonthPickerProps<T>) {
    if (nextProps.value !== this.props.value) {
      this.setState({ date: nextProps.value });
    }
  }
  onSelectedDate(
    type: 'setMonth' | 'setFullYear',
    num: number,
    paging?: boolean,
  ) {
    const { format, onChange } = this.props;
    let { panelDate, date } = this.state;

    date = panelDate;
    panelDate = new Date((date as Date)[type](num));

    date = formatter(format as string, new Date(date as Date));
    const state: MonthPickerState = { panelDate, date, isOpen: false };
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
  onSelected = (type: MonthPickerState['type']) => {
    if (/^(month|year)$/.test(type as string)) {
      this.setState({ type });
    } else {
      const year = (this.state.panelDate as Date).getFullYear();
      const panelDate = (this.state.panelDate as Date).setFullYear(
        type === 'next' ? year + 1 : year - 1,
      );
      this.setState({
        panelDate: new Date(panelDate),
      });
    }
  };
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
    const {
      prefixCls,
      className,
      popoverProps,
      allowClear,
      format,
      monthLabel,
      ...inputProps
    } = this.props;
    const { date, type } = this.state;
    const value = date || '';
    inputProps.value =
      typeof value === 'string' ? value : formatter(format as string, value);
    if (allowClear && inputProps.value) {
      inputProps.addonAfter = (
        <Button
          className={`${prefixCls}-close-btn`}
          icon="close"
          onClick={this.onAllowClear.bind(this)}
          size={inputProps.size}
          basic
          type="light"
        />
      );
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
            <DatePickerCaption
              panelDate={this.state.panelDate}
              monthLabel={monthLabel}
              onSelected={this.onSelected}
            />
            {type === 'month' && (
              <DatePickerMonth
                panelDate={this.state.panelDate}
                monthLabel={monthLabel}
                onSelected={this.onSelectedDate.bind(this, 'setMonth')}
              />
            )}
            {type === 'year' && (
              <DatePickerYear
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

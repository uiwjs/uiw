import React, { useMemo, useRef } from 'react';
import { IProps, HTMLDivProps, HTMLLiProps } from '@uiw/utils';
import './style/time-picker.less';

export interface TimePickerPanelProps extends IProps, HTMLDivProps {
  onSelected?: (
    type: TimePickerPanelProps['type'],
    num: number,
    disableds: number[],
    date: TimePickerPanelProps['date'],
  ) => void;
  count?: number;
  hideDisabled?: boolean;
  disabledHours?: (
    num: number,
    type: TimePickerPanelProps['type'],
    date: TimePickerPanelProps['date'],
  ) => boolean | undefined;
  disabledMinutes?: (
    num: number,
    type: TimePickerPanelProps['type'],
    date: TimePickerPanelProps['date'],
  ) => boolean | undefined;
  disabledSeconds?: (
    num: number,
    type: TimePickerPanelProps['type'],
    date: TimePickerPanelProps['date'],
  ) => boolean | undefined;
  type?: 'Hours' | 'Minutes' | 'Seconds';
  date?: Date;
}

export default function TimePickerPanel(props: TimePickerPanelProps) {
  const {
    prefixCls = 'w-timepicker',
    className,
    count = 24,
    date,
    type = 'Hours',
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    hideDisabled,
    onSelected,
    ...other
  } = props;
  const disableds = useRef<number[]>([]);
  function getMaybeNumber() {
    if (date && type) {
      return new Date(date)[
        `get${type}` as 'getHours' | 'getMinutes' | 'getSeconds'
      ]();
    }
    return 0;
  }
  function handleClick(num: number, e: React.MouseEvent<HTMLLIElement>) {
    if (!date) return;
    const currentDate = new Date(date);
    currentDate[`set${type}` as 'setHours' | 'setMinutes' | 'setSeconds'](num);
    onSelected && onSelected(type, num, disableds.current, currentDate);
  }
  function getDisabledItem(num: number) {
    const disabled =
      props[
        `disabled${type}` as
          | 'disabledHours'
          | 'disabledMinutes'
          | 'disabledSeconds'
      ];
    if (disabled) {
      return disabled(num, type, new Date(date!));
    }
    return false;
  }
  function getItemInstance(tag: HTMLLIElement) {
    if (tag && tag.parentNode && tag.dataset['index']) {
      const offsetTop = Number(tag.dataset['index']) * tag.clientHeight;
      if (tag.parentNode.parentNode) {
        (tag.parentNode.parentNode as HTMLDivElement).scrollTop = offsetTop;
      }
    }
  }
  const data = useMemo(() => {
    return [...Array(count)]
      .map((_, idx) => {
        const disabled = getDisabledItem(idx);
        if (disabled) disableds.current.push(idx);
        return {
          count: idx,
          disabled: getDisabledItem(idx),
        };
      })
      .filter((item) => (hideDisabled && item.disabled ? false : true));
  }, [hideDisabled]);

  return (
    <div className={`${prefixCls}-spinner`} {...other}>
      <ul>
        {data.map((item, idx) => {
          const liProps = {} as HTMLLiProps;
          if (!item.disabled) {
            liProps.onClick = (e) => handleClick(item.count, e);
          }
          const currentCount = getMaybeNumber();
          return (
            <li
              key={idx}
              data-index={currentCount === item.count ? idx : undefined}
              ref={(tag) => tag && getItemInstance(tag)}
              {...liProps}
              className={[
                item.disabled ? 'disabled' : null,
                currentCount === item.count ? 'selected' : null,
                hideDisabled && item.disabled ? 'hide' : null,
              ]
                .filter(Boolean)
                .join(' ')
                .trim()}
            >
              {item.count < 10 ? `0${item.count}` : item.count}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

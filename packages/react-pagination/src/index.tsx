import React, { useEffect, useMemo, useState } from 'react';
import { IProps, HTMLUlProps } from '@uiw/utils';
import './style/index.less';

export interface PaginationProps extends IProps, Omit<HTMLUlProps, 'onChange'> {
  prefixCls?: string;
  alignment?: 'left' | 'center' | 'right';
  size?: 'default' | 'small';
  total?: number;
  pageSize?: number;
  divider?: boolean;
  current?: number;
  onChange?: (current: number, total: number, pageSize: number) => void;
}

export interface PaginationState {
  current: number;
}

export interface PaginationItemSourceData {
  type?: string;
  disabled?: boolean;
  active?: boolean;
  label?: number | string;
  goto?: number;
}

export default function Pagination(props: PaginationProps) {
  const {
    className,
    style,
    prefixCls = 'w-pagination',
    alignment = 'left',
    size = 'default',
    total = 0,
    pageSize = 10, // The number of pages displayed.
    current: currentNumber = 1,
    onChange = () => null,
    divider,
    ...other
  } = props;

  const [current, setCurrent] = useState(currentNumber);
  useEffect(() => setCurrent(currentNumber), [currentNumber]);

  const cls = [prefixCls, className, divider ? 'divider' : null, size].filter(Boolean).join(' ').trim();

  const initPageSoure = useMemo(() => {
    const data: PaginationItemSourceData[] = [{ type: 'prev', disabled: current === 1 }];
    const count = Math.ceil(total / pageSize);
    const itemCount = count <= 5 ? count : 5;
    let num = 0;
    let basic = 0;
    if (current > 3 && count > 5) {
      data.push({ label: 1 });
    }
    if (current > 4 && count > 6) {
      data.push({ type: 'jumpPrev', label: '•••', goto: 5 });
    }
    while (num < itemCount) {
      num += 1;
      if (current > 3 && count > 5) {
        basic = current - 3;
      }
      let label = num + basic;
      if (count - current === 0 && count > 5) {
        label -= 2;
      }
      if (count - current === 1 && count > 5) {
        label -= 1;
      }
      if (label <= count) {
        data.push({ label, active: current === label });
      }
    }
    if (current + 3 < count && count > 6) {
      data.push({ type: 'jumpNext', label: '•••', goto: 5 });
    }
    if (current + 2 < count && count > 5) {
      data.push({ label: count });
    }
    data.push({ type: 'next', disabled: current === count });
    return data;
    // return [
    //   { type: 'prev', disabled: true },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { label: 1 },
    //   { label: 2, active: true },
    //   { label: 3 },
    //   { label: 4 },
    //   { type: 'jumpPrev', label: '•••', goto: 5 },
    //   { type: 'next' },
    // ];
  }, [current, total, pageSize]);

  function handleClick(item: PaginationItemSourceData) {
    if (item.active || item.disabled) {
      return;
    }
    const count = Math.ceil(total / pageSize);
    const state = {} as PaginationState;
    if (item.label) {
      state.current = item.label as number;
    }
    if (item.type === 'prev') {
      state.current = current - 1 > 0 ? current - 1 : 1;
    }
    if (item.type === 'next') {
      state.current = current + 1 <= count ? current + 1 : count;
    }
    if (/^(jumpPrev|jumpNext)/.test(item.type as string) && item.goto) {
      state.current = item.type === 'jumpPrev' ? current - item.goto : current + item.goto;
      if (state.current > count) {
        state.current = count;
      }
      if (state.current < 1) {
        state.current = 1;
      }
    }

    setCurrent(state.current);
    onChange && onChange(state.current, total as number, pageSize as number);
  }

  return (
    <ul className={cls} style={{ ...style, textAlign: alignment }} {...other}>
      {initPageSoure.map((item: PaginationItemSourceData, idx) => {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        let label = <a>{item.label}</a>;
        if (/^(prev|next)$/.test(item.type as string)) {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          label = <a className={`arrow ${item.type}`} />;
        }
        return (
          <li
            className={[item.active ? 'active' : null, item.disabled ? 'disabled' : null]
              .filter(Boolean)
              .join(' ')
              .trim()}
            onClick={() => handleClick(item)}
            key={idx}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}

import React, { useState, useMemo } from 'react';
import { IProps, HTMLDivProps, HTMLSpanProps } from '@uiw/utils';
import './style/index.less';

export interface RateProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value?: number;
  readOnly?: boolean;
  allowHalf?: boolean;
  count?: number;
  color?: string;
  disabled?: boolean;
  character?: React.ReactNode;
  onChange?: (key: number) => void;
  onHoverChange?: (key: number) => void;
}

function noop() {}

export default function Rate(props: RateProps = {}) {
  const {
    prefixCls = 'w-rate',
    count = 5,
    value: defValue = 0,
    className,
    allowHalf,
    character = '★',
    readOnly = false,
    disabled,
    onChange = noop,
    onHoverChange = noop,
    color,
    ...other
  } = props;
  const [value, setValue] = useState(defValue);
  const [hoverCount, setHoverCount] = useState(-1);
  const cls = [prefixCls, className, disabled ? 'disabled' : null]
    .filter(Boolean)
    .join(' ')
    .trim();
  const [prevValue, setPrevValue] = useState<number>();
  if (defValue !== prevValue) {
    setPrevValue(defValue);
  }

  useMemo(() => {
    if (value !== prevValue) {
      setValue(defValue);
    }
  }, [prevValue]);

  function onMouseLeave() {
    setHoverCount(-1);
  }

  function getValue(e: React.MouseEvent<HTMLElement>, key: number) {
    e.persist();
    let currentValue = key;
    const isLeft =
      e.clientX - e.currentTarget.getBoundingClientRect().left <=
      e.currentTarget.getBoundingClientRect().width / 2;
    if (allowHalf) {
      e.persist();
      currentValue = isLeft ? key + 0.5 : key + 1;
    } else {
      currentValue = key + 1;
    }
    return currentValue;
  }

  function onMouseMove(e: React.MouseEvent<HTMLElement>, key: number) {
    const currentValue = getValue(e, key);
    if (hoverCount !== currentValue) {
      setHoverCount(currentValue);
      onHoverChange(currentValue);
    }
  }
  function onClick(e: React.MouseEvent<HTMLElement>, key: number) {
    if (readOnly) return;
    const currentValue = getValue(e, key);
    setValue(currentValue);
    onChange(currentValue);
  }
  return (
    <div {...other} className={cls} onMouseLeave={() => onMouseLeave()}>
      {[...Array(count)].map((_, idx) => {
        const halfon =
          (value <= idx + 0.5 &&
            Math.ceil(value) - 1 === idx &&
            hoverCount === -1) ||
          hoverCount === idx + 0.5;
        const activeCls = [
          `${prefixCls}-hight`,
          idx + 1 <= value && hoverCount === -1 ? 'star-on' : null,
          idx + 1 <= hoverCount ? 'hover-on' : null,
          halfon ? 'half-on' : null,
        ]
          .filter(Boolean)
          .join(' ')
          .trim();
        const props: HTMLSpanProps = {};
        if (!readOnly) {
          props.onClick = (e) => onClick(e, idx);
          props.onMouseMove = (e) => onMouseMove(e, idx);
        }
        return (
          <span key={idx} {...props}>
            <span style={{ color }} className={activeCls}>
              {character}
            </span>
            <span className={`${prefixCls}-bg`}>{character}</span>
          </span>
        );
      })}
    </div>
  );
}

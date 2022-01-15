import React, { useEffect, useState } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Dots from './Dots';
import './style/index.less';

export type SliderMarks = {
  style?: React.CSSProperties;
  label?: React.ReactNode;
};

export interface SliderProps extends IProps, Omit<HTMLDivProps, 'onChange'> {
  value?: number | number[];
  min?: number;
  max?: number;
  marks?: boolean | Record<number, SliderMarks>;
  dots?: boolean;
  range?: boolean;
  vertical?: boolean;
  step?: number;
  disabled?: boolean;
  tooltip?: boolean;
  progress?: boolean | string;
  renderMarks?: (value: number) => JSX.Element;
  onChange?: (value: number | number[]) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function Slider(props: SliderProps) {
  const {
    prefixCls = 'w-slider',
    value = 0,
    min = 0,
    max = 100,
    dots = false,
    step = 1,
    disabled = false,
    progress = true,
    tooltip = false,
    className,
    marks,
    renderMarks,
    vertical,
    onChange,
    ...other
  } = props;

  const bar = React.useRef<HTMLDivElement>(null);
  const slider = React.useRef<HTMLDivElement>(null);
  const indexBar = React.useRef<number>();
  const startX = React.useRef<number>();
  const curValue = React.useRef<number | number[]>();
  const barWidth = React.useRef<number>();
  const barOffsetLeft = React.useRef<number>();
  const move = React.useRef<boolean>();
  const [arrValue, setArrValue] = useState(
    Array.isArray(value) ? value : [value],
  );

  useEffect(() => setArrValue(Array.isArray(value) ? value : [value]), [value]);

  other.onClick = (evn: React.MouseEvent<HTMLElement>) => {
    if (move.current !== undefined) {
      return;
    }
    const markOffset = slider.current!.getBoundingClientRect();
    const vals = getWidthToValue(
      evn[vertical ? 'clientY' : 'clientX'] - markOffset[vertical ? 'y' : 'x'],
    );
    const curr = getRangeValue(vals);
    handleChange(curr);
  };

  function getRangeValue(val: number | number[]) {
    if (!Array.isArray(value)) {
      return Array.isArray(val) ? val : [val];
    }
    const newData = [...arrValue];
    const val1 = newData[0];
    const val2 = newData[1];
    if ((val1 < val2 && val1 > val) || (val1 > val2 && val1 < val)) {
      newData[0] = val as number;
    }
    if ((val1 < val2 && val2 < val) || (val1 > val2 && val2 > val)) {
      newData[1] = val as number;
    }

    if (val1 > val && val2 < val) {
      const half = val2 + (val1 - val2) / 2;
      if (half >= val) {
        newData[1] = val as number;
      }
      if (half < val) {
        newData[0] = val as number;
      }
    }
    if (val2 > val && val1 < val) {
      const half = val1 + (val2 - val1) / 2;
      if (half >= val) {
        newData[0] = val as number;
      }
      if (half < val) {
        newData[1] = val as number;
      }
    }
    return newData;
  }

  function handleChange(val: number[]) {
    setArrValue([...val]);
    onChange && onChange(arrValue.length === 1 ? val[0] : val);
  }

  function getWidthToValue(width: number) {
    const equal = (max - min) / step;
    let percent = 0;
    if (slider.current) {
      percent =
        (width / slider.current[vertical ? 'clientHeight' : 'clientWidth']) *
        100;
    }

    if (percent <= 0) {
      percent = 0;
    }
    if (percent >= 100) {
      percent = 100;
    }

    const num = equal * (percent / 100) + 0.5;
    const numFloor = Math.floor(num);
    const vals = numFloor * step + min;
    return vals;
  }

  function onHandleBtnDown(idx: number, env: React.MouseEvent<HTMLElement>) {
    if (disabled) {
      return;
    }
    indexBar.current = idx;
    move.current = true;
    startX.current = env[vertical ? 'clientY' : 'clientX'];
    if (bar.current) {
      barWidth.current = bar.current[vertical ? 'clientHeight' : 'clientWidth'];
      barOffsetLeft.current =
        bar.current[vertical ? 'offsetTop' : 'offsetLeft'];
    }
    const vals = [...arrValue];
    if (Array.isArray(value)) {
      barWidth.current =
        (indexBar.current === 1 && vals[1] > vals[0]) ||
        (indexBar.current !== 1 && vals[0] > vals[1])
          ? barWidth.current! + barOffsetLeft.current!
          : barOffsetLeft.current;
    }
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('mouseup', onDragEnd);
  }
  function onDragging(
    env: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    if (!move.current) {
      return;
    }
    const vals = [...arrValue];
    const valueToWidth = getWidthToValue(
      env[vertical ? 'clientY' : 'clientX'] -
        startX.current! +
        barWidth.current!,
    );
    if (valueToWidth !== curValue.current) {
      vals[indexBar.current!] = valueToWidth;
      const barStyl = getStyle(vals);
      if (bar.current) {
        bar.current.style[vertical ? 'top' : 'left'] = barStyl.left;
        bar.current.style[vertical ? 'bottom' : 'right'] = barStyl.right;
      }
      handleChange(vals);
      curValue.current = valueToWidth;
    }
  }
  function onDragEnd() {
    move.current = undefined;
    window.removeEventListener('mousemove', onDragging, false);
    window.removeEventListener('mouseup', onDragEnd, false);
  }

  const stepArray = () => {
    const equal = (max - min) / step;
    const stepWidth = (100 * step) / (max - min);
    const result = [0];
    for (let i = 1; i < equal; i += 1) {
      result.push(i * stepWidth);
    }
    result.push(100);
    return result;
  };
  function getValueToPercent(vals: number) {
    return ((vals - min) * 100) / (max - min);
  }

  function getStyle(val?: number[]) {
    val = val || arrValue;
    const barStyl = { left: '0%', right: '100%' };
    if (!Array.isArray(value)) {
      barStyl.right = `${100 - getValueToPercent(val[0])}%`;
    } else {
      const leftValue = val[0] > val[1] ? val[1] : val[0];
      const rightValue = val[0] > val[1] ? val[0] : val[1];
      barStyl.left = `${getValueToPercent(leftValue)}%`;
      barStyl.right = `${100 - getValueToPercent(rightValue)}%`;
    }
    return barStyl;
  }

  function getLabelValue(val: number) {
    if (marks && marks !== true && marks[val] && marks[val].label) {
      return marks[val].label;
    } else if (
      marks &&
      marks !== true &&
      marks[val] &&
      typeof marks[val] === 'string'
    ) {
      return marks[val];
    } else if (
      renderMarks &&
      typeof renderMarks === 'function' &&
      renderMarks(val)
    ) {
      return renderMarks(val);
    }
    return val;
  }

  const barStyl = getStyle();
  if (disabled) {
    delete other.onClick;
  }
  return (
    <div
      ref={slider}
      className={[
        prefixCls,
        className,
        disabled ? 'disabled' : null,
        marks ? `${prefixCls}-with-marks` : null,
        vertical ? `${prefixCls}-vertical` : null,
      ]
        .filter(Boolean)
        .join(' ')
        .trim()}
      {...other}
    >
      <div
        ref={bar}
        className={`${prefixCls}-bar`}
        style={{
          [vertical ? 'top' : 'left']: barStyl.left,
          [vertical ? 'bottom' : 'right']: barStyl.right,
          ...(progress !== true
            ? { backgroundColor: progress || 'initial' }
            : {}),
        }}
      />
      {[...arrValue].map((item, idx) => {
        const lleftPostion = getValueToPercent(item);
        return (
          <div
            key={idx}
            className={`${prefixCls}-handle`}
            onMouseDown={(evn) => onHandleBtnDown(idx, evn)}
            style={{ [vertical ? 'top' : 'left']: `${lleftPostion}%` }}
          >
            {(tooltip || tooltip === false) && (
              <div
                className={[`${prefixCls}-tooltip`, tooltip ? 'open' : null]
                  .filter(Boolean)
                  .join(' ')
                  .trim()}
              >
                {getLabelValue(item)}
              </div>
            )}
          </div>
        );
      })}
      {dots && (
        <Dots
          prefixCls={prefixCls}
          min={min}
          step={step}
          marks={marks}
          vertical={!!vertical}
          data={stepArray()}
          markRender={(stepValue, mark = {}) => {
            if (!mark) {
              return <div> {getLabelValue(stepValue)} </div>;
            }
            const other = typeof mark === 'object' ? mark : {};
            delete other.label;
            return <div {...other}> {getLabelValue(stepValue)} </div>;
          }}
        />
      )}
    </div>
  );
}

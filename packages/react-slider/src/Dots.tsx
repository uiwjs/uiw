import React from 'react';
import { HTMLDivProps } from '@uiw/utils';
import { SliderProps, SliderStyleMarks } from './index';
import { SliderStyleMark, SliderStyleDot } from './style';
interface TooltipProps extends HTMLDivProps {
  prefixCls: string;
  data: number[];
  step: number;
  min: number;
  vertical: boolean;
  marks: SliderProps['marks'];
  markRender: (stepValue: number, mark?: SliderStyleMarks) => React.ReactNode;
  disabled?: boolean;
}

export default function Dots(props: TooltipProps) {
  const { prefixCls, data, step, min, vertical, marks, markRender, disabled } = props;
  return (
    <SliderStyleDot params={{ vertical }} className={`${prefixCls}-dots`}>
      {data.map((val, idx) => {
        const stepValue = idx * step + min;
        return (
          <SliderStyleMark
            key={idx}
            style={{
              [vertical ? 'top' : 'left']: `${val}%`,
            }}
            params={{ vertical, noMarks: marks && marks !== true && !marks[stepValue], disabled }}
            className={[`${prefixCls}-mark`, marks && marks !== true && !marks[stepValue] ? 'no-marks' : null]
              .filter(Boolean)
              .join(' ')
              .trim()}
          >
            {marks === true && markRender && markRender(stepValue)}
            {marks !== true && marks && marks[stepValue] && markRender && markRender(stepValue, marks[stepValue])}
          </SliderStyleMark>
        );
      })}
    </SliderStyleDot>
  );
}

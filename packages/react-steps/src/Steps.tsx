import React, { useEffect, useRef, useState } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import Step, { StepProps } from './Step';

export interface StepsProps<T> extends IProps, HTMLDivProps {
  status?: StepProps<T>['status'];
  progressDot?: StepProps<T>['progressDot'];
  direction?: 'horizontal' | 'vertical';
  /**
   * 指定当前步骤，从 `0` 开始记数。
   */
  current?: number;
}

function InternalSteps<T>(props: StepsProps<T>) {
  const {
    prefixCls = 'w-steps',
    style = {},
    className,
    children,
    current,
    status = 'process',
    progressDot = false,
    direction = 'horizontal',
    ...resetProps
  } = props;

  const warpRef = useRef<HTMLDivElement>(null);
  const [lastStepOffsetWidth, setLastStepOffsetWidth] = useState(0);
  const filteredChildren = React.Children.toArray(children).filter((c) => !!c);
  const lastIndex = filteredChildren.length - 1; // 最后一个节点的索引数字
  const classString = [
    prefixCls,
    `${prefixCls}-${direction}`,
    !!progressDot ? `${prefixCls}-dot` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  useEffect(() => calcStepOffsetWidth());

  // 计算每一步的宽度
  function calcStepOffsetWidth() {
    const domNode = warpRef.current;
    if (domNode && domNode.lastChild) {
      const width = ((domNode.lastChild as HTMLElement).offsetWidth || 0) + 1;
      if (
        width === lastStepOffsetWidth ||
        Math.abs(width - lastStepOffsetWidth) <= 3
      ) {
        return;
      }
      setLastStepOffsetWidth(width);
    }
  }

  return (
    <div className={classString} style={style} {...resetProps} ref={warpRef}>
      {React.Children.map(children, (child: any, index) => {
        const childProps = {
          stepNumber: `${index + 1}`,
          prefixCls,
          progressDot,
          ...child.props,
        };
        if (index !== lastIndex && direction !== 'vertical') {
          childProps.itemWidth = `${100 / lastIndex}%`;
          childProps.adjustMarginRight = -Math.round(
            lastStepOffsetWidth / lastIndex + 1,
          );
        }

        if (progressDot && direction !== 'vertical') {
          childProps.itemWidth = `${100 / filteredChildren.length}%`;
          childProps.adjustMarginRight = 0;
        }
        // 错误前面
        if (status === 'error' && index === (current as number) - 1) {
          childProps.className = `${prefixCls}-next-error`;
        }
        if (!child.props.status) {
          if (index === current) {
            childProps.status = status;
          } else if (index < (current as number)) {
            childProps.status = 'finish';
          } else {
            childProps.status = 'wait';
          }
        }
        return React.cloneElement(child, childProps);
      })}
    </div>
  );
}

type Steps = typeof InternalSteps & {
  Step: typeof Step;
};

(InternalSteps as Steps).Step = Step;

export default InternalSteps as Steps;

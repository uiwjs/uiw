import React, { CSSProperties } from 'react';
import Icon, { IconProps, IconsName } from '@uiw/react-icon';
import { IProps, HTMLDivProps } from '@uiw/utils';
import { Check } from '@uiw/icons/lib/Check';
import { Close } from '@uiw/icons/lib/Close';

// import './style/index.less';
import {
  StepsItem,
  StepsItemTail,
  StepsItemTailI,
  StepsItemHead,
  StepsItemHeadInner,
  StepsItemMain,
  StepsItemMainTitle,
  StepsItemMainDescription,
  StepsItemHeadInnerDot,
  StepsItemHeadInnerIcon,
  StepsItemHeadInnerSvg,
} from './style';
export interface StepProps extends IProps, Omit<HTMLDivProps, 'title'> {
  nextError?: boolean | undefined;
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  progressDot?: boolean;
  itemWidth?: number;
  stepNumber?: string;
  adjustMarginRight?: number;
  icon?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
}

export default function Step(props: StepProps) {
  const {
    prefixCls = 'w-steps',
    className,
    style,
    status,
    itemWidth,
    icon,
    adjustMarginRight,
    stepNumber,
    title,
    description,
    progressDot,
    direction,
    ...restProps
  } = props;
  const classString = [
    `${prefixCls}-item`,
    `${prefixCls}-item-${status}`,
    className,
    icon ? `${prefixCls}-custom` : null,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  const stepItemStyle: CSSProperties = { ...style };
  const stepItemDotStyle: CSSProperties = {};
  if (itemWidth) {
    stepItemStyle.width = itemWidth;
  }
  if (adjustMarginRight) {
    stepItemStyle.marginRight = adjustMarginRight;
    if (progressDot) {
      stepItemDotStyle.paddingRight = Math.abs(adjustMarginRight);
    }
  }
  let iconNode = null;
  if (progressDot) {
    iconNode = <StepsItemHeadInnerDot params={{ status }} className={`${prefixCls}-dot`} />;
  } else if (icon && typeof icon !== 'string') {
    iconNode = (
      <StepsItemHeadInnerIcon params={{ status, icon: !!icon }} className={`${prefixCls}-icon`}>
        {icon}
      </StepsItemHeadInnerIcon>
    );
  } else if (status === 'finish' || status === 'error') {
    iconNode = <StepsItemHeadInnerSvg as={status === 'finish' ? Check : Close} />;
  } else {
    iconNode = (
      <StepsItemHeadInnerIcon params={{ status, icon: !!icon }} className={`${prefixCls}-icon`}>
        {stepNumber}
      </StepsItemHeadInnerIcon>
    );
  }
  return (
    <StepsItem
      {...restProps}
      params={{
        status,
        direction,
      }}
      className={classString}
      style={stepItemStyle}
    >
      <StepsItemTail
        className={`${prefixCls}-item-tail`}
        params={{ direction, dot: !!progressDot, status: status }}
        style={stepItemDotStyle}
      >
        <StepsItemTailI
          params={{
            direction,
            dot: !!progressDot,
            status: status,
            nextError: props.nextError,
          }}
          style={{ paddingRight: '100%' }}
        />
      </StepsItemTail>
      <StepsItemHead params={{ dot: !!progressDot }} className={`${prefixCls}-item-head`}>
        <StepsItemHeadInner
          params={{
            direction,
            dot: !!progressDot,
            status: status,
            icon: !!icon,
          }}
          className={[`${prefixCls}-item-inner`, !!icon && 'is-icon'].filter(Boolean).join(' ').trim()}
        >
          {iconNode}
        </StepsItemHeadInner>
      </StepsItemHead>
      <StepsItemMain
        params={{
          direction,
          dot: !!progressDot,
        }}
        className={`${prefixCls}-item-main`}
      >
        <StepsItemMainTitle
          params={{
            dot: !!progressDot,
            status: status,
          }}
          className={`${prefixCls}-item-title`}
        >
          {title}
        </StepsItemMainTitle>
        {description && (
          <StepsItemMainDescription
            params={{
              direction,
              dot: !!progressDot,
              status: status,
            }}
            className={`${prefixCls}-item-description`}
          >
            {description}
          </StepsItemMainDescription>
        )}
      </StepsItemMain>
    </StepsItem>
  );
}

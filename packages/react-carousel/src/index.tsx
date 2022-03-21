import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IProps, HTMLDivProps } from '@uiw/utils';
import './style/index.less';

export interface CarouselProps extends IProps, HTMLDivProps {
  width?: number;
  height?: number;
  position?: number;
  palyTime?: number;
  scrollTime?: number;
  autoPlay?: boolean;
  afterChange?: (current: number) => void;
  beforeChange?: (current: number) => void;
}

export interface CarouselRef {
  gotoSlide: (slide: number, dontAnimate?: boolean) => void;
  prevSlide: () => void;
  nextSlide: () => void;
  stopPlay: () => void;
}

function Carousel(props: CarouselProps, ref: React.ForwardedRef<CarouselRef>) {
  const {
    position = 0,
    width = 400,
    height = 200,
    palyTime = 2000,
    scrollTime = 200,
    autoPlay = true,
    afterChange,
    beforeChange,

    prefixCls = 'w-carousel',
    className,
    style,
  } = props;

  const cls = useMemo(() => [prefixCls, className].filter(Boolean).join(' ').trim(), [prefixCls, className]);

  const [currentPosition, currentPositionSet] = useState(position);
  const [transitionInner, transitionInnerSet] = useState(`${scrollTime * 0.001}s ease-in-out`);
  const positionRef = useRef(currentPosition);
  const childCount = React.Children.count(props.children) + 1;
  const stopPlay = useRef({ stop: () => {}, after: afterChange, before: beforeChange });

  React.useImperativeHandle(
    ref,
    () => ({
      gotoSlide,
      prevSlide: () => gotoSlide(positionRef.current - 1),
      nextSlide: () => gotoSlide(positionRef.current + 1),
      stopPlay: () => stopPlay.current.stop(),
    }),
    [ref],
  );

  const gotoSlide = (slidNumber: number) => {
    stopPlay.current.stop();
    const maxSlid = childCount - 1;
    let slidNumberTemp = slidNumber > maxSlid ? maxSlid : slidNumber;
    slidNumberTemp = slidNumber < 0 ? 0 : slidNumberTemp;
    positionRef.current = slidNumberTemp;
    currentPositionSet(slidNumberTemp);
    play();
  };

  const play = (ms: number = palyTime) => {
    if (autoPlay) {
      const time = setInterval(() => {
        stopPlay.current.after?.(positionRef.current);
        positionRef.current++;
        if (positionRef.current >= childCount) {
          positionRef.current = 0;
        }
        currentPositionSet(positionRef.current);
        stopPlay.current.before?.(positionRef.current);
      }, ms);
      stopPlay.current.stop = () => {
        clearInterval(time);
      };
    }
  };

  useEffect(() => {
    play();
    return () => {
      stopPlay.current.stop();
    };
  }, [autoPlay]);

  useEffect(() => {
    let time: NodeJS.Timeout;
    if (childCount === currentPosition + 1) {
      time = setTimeout(() => {
        stopPlay.current.before = () => {
          transitionInnerSet(`${scrollTime * 0.001}s ease-in-out`);
          stopPlay.current.before = props.beforeChange;
        };
        transitionInnerSet('none');
        gotoSlide(0);
      }, scrollTime);
    }
    return () => {
      clearTimeout(time);
    };
  }, [currentPosition]);

  const childrens = React.Children.map(props.children, (child) => {
    return <div style={{ width, height, ...style }}>{child}</div>;
  });

  return (
    <div className={cls} style={{ width, height }}>
      <div
        className={`${cls}-content`}
        style={{
          width: width * childCount,
          transform: `translate3d(${-(currentPosition * width)}px, 0px, 0px)`,
          transition: transitionInner,
        }}
      >
        {childrens}
        <div style={{ width, height, ...style }}>{childrens?.[0]}</div>
      </div>
    </div>
  );
}

export default React.forwardRef<CarouselRef, CarouselProps>(Carousel);

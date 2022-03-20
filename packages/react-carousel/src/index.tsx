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
}

export interface CarouselRef {
  gotoSlide: (slide: number, dontAnimate?: boolean) => void;
  prevSlide: () => void;
  nextSlide: () => void;
  stopPlay: () => void;
}

function Carousel(props: CarouselProps, ref: CarouselRef) {
  const {
    position = 0,
    width = 400,
    height = 200,
    palyTime = 2000,
    scrollTime = 200,
    autoPlay = true,

    prefixCls = 'w-carousel',
    className,
    style,
  } = props;

  const cls = useMemo(() => [prefixCls, className].filter(Boolean).join(' ').trim(), [prefixCls, className]);

  const [currentPosition, currentPositionSet] = useState(position);
  const positionRef = useRef(currentPosition);
  const childCount = React.Children.count(props.children);
  const stopPlay = useRef<Function>(() => {});

  React.useImperativeHandle(
    ref,
    () => ({
      gotoSlide,
      prevSlide: () => gotoSlide(positionRef.current - 1),
      nextSlide: () => gotoSlide(positionRef.current + 1),
      stopPlay: () => stopPlay.current(),
    }),
    [ref],
  );

  const gotoSlide = (slidNumber: number) => {
    stopPlay.current();
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
        positionRef.current++;
        if (positionRef.current >= childCount) {
          positionRef.current = 0;
        }
        currentPositionSet(positionRef.current);
      }, ms);
      stopPlay.current = () => {
        clearInterval(time);
      };
    }
  };

  useEffect(() => {
    play();
    return () => {
      stopPlay.current();
    };
  }, [autoPlay]);

  return (
    <div className={cls} style={{ width, height }}>
      <div
        className={`${cls}-content`}
        style={{
          width: width * childCount,
          transform: `translate3d(${-(currentPosition * width)}px, 0px, 0px)`,
          transition: `${scrollTime * 0.001}s ease-in-out`,
        }}
      >
        {React.Children.map(props.children, (child) => {
          return <div style={{ width, height, ...style }}>{child}</div>;
        })}
      </div>
    </div>
  );
}

export default React.forwardRef<CarouselRef, CarouselProps>(Carousel);

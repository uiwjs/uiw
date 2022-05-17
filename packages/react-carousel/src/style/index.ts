import React from 'react';
import styled from 'styled-components';

interface CarouselProps {
  defaultTheme?: React.CSSProperties;
}

const Warp = styled.div<CarouselProps>`
  overflow: hidden;

  &.w-carousel-content {
    height: 200px;
    transition: 0.6s ease-in-out;
  }
`;

Warp.defaultProps = {
  defaultTheme: {},
};
export default Warp;

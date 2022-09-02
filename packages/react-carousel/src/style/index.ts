import styled from 'styled-components';

type HTMLDivElements = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface CarouselStyleProps extends HTMLDivElements {}
export interface CarouselStyleWarpContentProps extends HTMLDivElements {}

export const CarouselStyleWarp = styled.div<CarouselStyleProps>`
  overflow: hidden;
`;

export const CarouselStyleWarpContent = styled.div<CarouselStyleWarpContentProps>`
  min-height: 200px;
  transition: 0.6s ease-in-out;
`;

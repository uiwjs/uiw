import { ThemeVariantValueOptions } from '@uiw/utils';
import styled from 'styled-components';

interface CarouselStyleProps extends ThemeVariantValueOptions {}

export const CarouselStyleWarp = styled.div<CarouselStyleProps>`
  overflow: hidden;
`;

export const CarouselStyleWarpContent = styled.div`
  min-height: 200px;
  transition: 0.6s ease-in-out;
`;

CarouselStyleWarp.defaultProps = {
  defaultTheme: {},
};

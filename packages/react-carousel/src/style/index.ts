import { ThemeVariantValueOptions } from '@uiw/utils';
import styled from 'styled-components';

interface CarouselProps extends ThemeVariantValueOptions {}

const Warp = styled.div<CarouselProps>`
  overflow: hidden;
`;

export const WarpContent = styled.div`
  min-height: 200px;
  transition: 0.6s ease-in-out;
`;

Warp.defaultProps = {
  defaultTheme: {},
};
export default Warp;

import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
const Warp = styled.div<ThemeVariantValueOptions>`
  display: inline-flex;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
`;

Warp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '12px',
  },
};

export default Warp;

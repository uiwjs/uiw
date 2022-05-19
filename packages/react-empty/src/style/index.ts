import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface DividerProps {
  defaultTheme?: Record<string, string | number>;
}

const Empty = styled.div<DividerProps>`
  color: ${(props) => getThemeVariantValue(props, 'colorEmptyBase')};
  text-align: center;
`;

export const EmptyIcon = styled.div``;

export const EmptyDescription = styled.div`
  margin-top: 10px;
`;

export const EmptyFooter = styled.div`
  margin-top: 16px;
`;

Empty.defaultProps = {
  defaultTheme: {
    colorEmptyBase: '#c7c7c7',
  },
};

export default Empty;

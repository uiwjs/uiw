import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface DividerProps {
  defaultTheme?: Record<string, string | number>;
}

const Empty = styled.div<DividerProps>`
  color: ${(props) => getThemeVariantValue(props, 'colorEmptyBase')};
  text-align: center;
  .w-empty-description {
    margin-top: 10px;
  }
  .w-empty-footer {
    margin-top: 16px;
  }
`;

Empty.defaultProps = {
  defaultTheme: {
    colorEmptyBase: '#c7c7c7',
  },
};

export default Empty;

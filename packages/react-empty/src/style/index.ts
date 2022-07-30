import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface DividerProps {
  defaultTheme?: Record<string, string | number>;
}

export const EmptyStyleBase = styled.div<DividerProps>`
  color: ${(props) => getThemeVariantValue(props, 'colorEmptyBase')};
  text-align: center;
`;

export const EmptyStyleIcon = styled.div``;

export const EmptyStyleDescription = styled.div`
  margin-top: 10px;
`;

export const EmptyStyleFooter = styled.div`
  margin-top: 16px;
`;

EmptyStyleBase.defaultProps = {
  defaultTheme: {
    colorEmptyBase: '#c7c7c7',
  },
};

export default EmptyStyleBase;

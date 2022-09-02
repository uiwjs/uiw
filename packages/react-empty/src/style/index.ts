import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

export const EmptyStyleTheme = {
  colorEmptyBase: '#c7c7c7',
};
const propsTheme = {
  defaultTheme: { ...EmptyStyleTheme },
};
interface DividerProps {
  defaultTheme?: Record<string, string | number>;
}

export const EmptyStyleBase = styled.div<DividerProps>`
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorEmptyBase')};
  text-align: center;
`;

export const EmptyStyleIcon = styled.div``;

export const EmptyStyleDescription = styled.div`
  margin-top: 10px;
`;

export const EmptyStyleFooter = styled.div`
  margin-top: 16px;
`;

export default EmptyStyleBase;

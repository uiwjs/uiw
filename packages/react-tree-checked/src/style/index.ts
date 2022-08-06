import styled from 'styled-components';

interface TreeCheckedProps {
  defaultTheme?: Record<string, string | number>;
}

export const TreeCheckboxStyleBase = styled.div<TreeCheckedProps>`
  margin-right: 5px;
`;

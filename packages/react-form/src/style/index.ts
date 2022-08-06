import styled from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';

export interface FormStyleProps extends ThemeVariantValueOptions {}

export const FormStyleWarp = styled.form<FormStyleProps>``;

export const FormStyleFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border-width: 0;
`;

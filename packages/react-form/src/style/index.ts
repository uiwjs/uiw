import styled from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';

export interface FormStyleProps extends ThemeVariantValueOptions {}

export const FormWarp = styled.form<FormStyleProps>``;

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border-width: 0;
`;

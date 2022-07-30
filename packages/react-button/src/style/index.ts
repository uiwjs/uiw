import styled from 'styled-components';
import { buttonTypes, getloadingCss, getIconAndSizeCss } from './Variant';
import { ButtonStyleBaseDefaultTheme, ButtonStyleBaseProps, ButtonStyleBase } from './base';
export * from './base';

export const ButtonStyleWarp = styled(ButtonStyleBase)<ButtonStyleBaseProps>`
  ${buttonTypes}
  ${(props) => getIconAndSizeCss(props)}
  ${(props) => getloadingCss(props)}
`;
ButtonStyleWarp.defaultProps = {
  defaultTheme: { ...ButtonStyleBaseDefaultTheme },
};

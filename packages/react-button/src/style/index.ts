import styled from 'styled-components';
import { buttonTypes, getloadingCss, getIconAndSizeCss } from './Variant';
import { ButtonBaseDefaultTheme, ButtonBaseProps, ButtonBase } from './base';
export * from './base';

const ButtonWarp = styled(ButtonBase)<ButtonBaseProps>`
  ${buttonTypes}
  ${(props) => getIconAndSizeCss(props)}
  ${(props) => getloadingCss(props)}
`;
ButtonWarp.defaultProps = {
  defaultTheme: { ...ButtonBaseDefaultTheme },
};
export default ButtonWarp;

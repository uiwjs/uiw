import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { IconStyleBase, IconStyleBaseProps } from '@uiw/react-icon';

export const CascaderStyleTheme = {
  colorCascaderClose: '#393e48',
};
export interface CascaderStyleIconWarpProps
  extends IconStyleBaseProps,
    ThemeVariantValueOptions<typeof CascaderStyleTheme> {
  closebtn?: boolean;
}

export const CascaderStyleIcon = styled.div<IconStyleBaseProps>`
  height: 1em;
  width: 1em;
`;

export const CascaderStyleIconWarp = styled(IconStyleBase)<CascaderStyleIconWarpProps>`
  ${(props) =>
    props.closebtn &&
    css`
      & {
        font-size: 15px;
        margin-right: 1px;
        color: ${(props) => getThemeVariantValue(props, 'colorCascaderClose')};
      }
    `}
`;

CascaderStyleIconWarp.defaultProps = {
  defaultTheme: CascaderStyleTheme,
};

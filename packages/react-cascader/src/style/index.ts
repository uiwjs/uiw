import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { IconBase, IconBaseProps } from '@uiw/react-icon';

export interface CascaderStyleIconWarpProps extends IconBaseProps, ThemeVariantValueOptions {
  closebtn?: boolean;
}

export const CascaderStyleIcon = styled.div<IconBaseProps>`
  height: 1em;
  width: 1em;
`;

export const CascaderStyleIconWarp = styled(IconBase)<CascaderStyleIconWarpProps>`
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
  defaultTheme: {
    colorCascaderClose: '#393e48',
  },
};

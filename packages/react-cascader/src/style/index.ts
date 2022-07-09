import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import { IconBase, IconBaseProps } from '@uiw/react-icon';

export interface CascaderIconWarpProps extends IconBaseProps, ThemeVariantValueOptions {
  closebtn?: boolean;
}

export const CascaderIcon = styled.div<IconBaseProps>`
  height: 1em;
  width: 1em;
`;

export const CascaderIconWarp = styled(IconBase)<CascaderIconWarpProps>`
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

CascaderIconWarp.defaultProps = {
  defaultTheme: {
    colorCascaderClose: '#393e48',
  },
};

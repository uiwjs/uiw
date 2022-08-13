import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const AvatarStyleTheme = {
  backgroundColorAvatar: '#ccc',
  colorAvatar: '#fff',

  fontSizeAvatarMini: '12px',
  fontSizeAvatarSmall: '12px',
  fontSizeAvatarDefault: '18px',
  fontSizeAvatarLarge: '24px',

  widthAvatarMini: '18px',
  widthAvatarSmall: '24px',
  widthAvatarDefault: '30px',
  widthAvatarLarge: '40px',
  borderRadiusDefault: '3px',
};
const propsTheme = {
  defaultTheme: { ...AvatarStyleTheme },
};

export interface AvatarStyleWarpProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>,
    ThemeVariantValueOptions<typeof AvatarStyleTheme> {
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
}

export const AvatarStyleImg = styled.img``;

export const AvatarStyleWarp = styled.span<AvatarStyleWarpProps>`
  display: inline-block;
  text-align: center;
  background: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorAvatar')};
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorAvatar')};
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeAvatarDefault')};
  width: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarDefault')};
  height: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarDefault')};
  border-radius: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderRadiusDefault')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 5px;
  }
  ${(props) => {
    const { size } = props;
    switch (size) {
      case 'mini':
        return css`
          height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarMini')};
          width: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarMini')};
          font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeAvatarMini')};
        `;
      case 'small':
        return css`
          height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarSmall')};
          width: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarSmall')};
          font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeAvatarSmall')};
        `;
      case 'large':
        return css`
          height: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarLarge')};
          width: ${getThemeVariantValue({ ...props, ...propsTheme }, 'widthAvatarLarge')};
          font-size: ${getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeAvatarLarge')};
        `;
      default:
        return css``;
    }
  }}

  ${(props) =>
    props.shape === 'circle' &&
    css`
      border-radius: 50%;
    `} 
  &.w-avatar-circle {
  }
  & > ${AvatarStyleImg} {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

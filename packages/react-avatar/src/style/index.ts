import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const AvatarStyleWarpTheme = {
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

export interface AvatarStyleWarpProps extends ThemeVariantValueOptions {
  size?: 'large' | 'default' | 'small' | 'mini';
  shape?: 'square' | 'circle';
  defaultTheme?: typeof AvatarStyleWarpTheme;
}

export const AvatarStyleImg = styled.img``;

export const AvatarStyleWarp = styled.span<AvatarStyleWarpProps>`
  display: inline-block;
  text-align: center;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorAvatar')};
  color: ${(props) => getThemeVariantValue(props, 'colorAvatar')};
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeAvatarDefault')};
  width: ${(props) => getThemeVariantValue(props, 'widthAvatarDefault')};
  height: ${(props) => getThemeVariantValue(props, 'widthAvatarDefault')};
  border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusDefault')};
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
          height: ${getThemeVariantValue(props, 'widthAvatarMini')};
          width: ${getThemeVariantValue(props, 'widthAvatarMini')};
          font-size: ${getThemeVariantValue(props, 'fontSizeAvatarMini')};
        `;
      case 'small':
        return css`
          height: ${getThemeVariantValue(props, 'widthAvatarSmall')};
          width: ${getThemeVariantValue(props, 'widthAvatarSmall')};
          font-size: ${getThemeVariantValue(props, 'fontSizeAvatarSmall')};
        `;
      case 'large':
        return css`
          height: ${getThemeVariantValue(props, 'widthAvatarLarge')};
          width: ${getThemeVariantValue(props, 'widthAvatarLarge')};
          font-size: ${getThemeVariantValue(props, 'fontSizeAvatarLarge')};
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

AvatarStyleWarp.defaultProps = {
  defaultTheme: { ...AvatarStyleWarpTheme },
};

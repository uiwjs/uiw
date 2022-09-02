import styled, { css } from 'styled-components';
import Icon, { IconProps } from '@uiw/react-icon';
import OverlayTrigger, { OverlayTriggerProps } from '@uiw/react-overlay-trigger';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const MenuStyleTheme = {
  backgroundColorMenuBase: 'rgba(167, 182, 194, 0.3)',
  backgroundColorMenuActive: 'rgba(115, 134, 148, 0.3)',
  colorMenuStyleItemIconDisabled: 'rgba(92, 112, 128, 0.5)',
  colorMenuStyleItemIconDark: 'rgba(142, 142, 142, 0.79)',
  colorMenuStyleItemIconDarkActive: '#fff',

  colorMenuStyleBaseLight: '#182026',
  backgroundMenuStyleBaseLight: '#fff',
  boxShadowMenuStyleBaseBordered:
    ' 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);',
  colorMenuStyleItemBaseLightHover: '#008ef0',
  colorMenuStyleItemBaseHover: '#fff',
  borderTopColorMenuDividerBase: 'rgba(16, 22, 26, 0.15)',
  colorMenuStyleBaseDark: 'rgba(255, 255, 255, 0.65)',
  backgroundColorMenuStyleBaseDark: '#343a40',
  borderTopColorMenuDividerBaseDark: 'rgba(255, 255, 255, 0.2)',
};

type ThemeVar = ThemeVariantValueOptions<typeof MenuStyleTheme>;

export interface MenuDividerBaseProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement | ThemeVar>, HTMLLIElement> {}

export const MenuDividerBase = styled.li<MenuDividerBaseProps>``;

// export interface MenuStyleItemBaseProps extends Omit<MenuItemProps<'a'>, 'theme'>, ThemeVar {
export interface MenuStyleItemBaseProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    ThemeVar {
  params?: {
    theme?: 'dark' | 'light';
    active?: boolean;
    disabled?: boolean;
  };
}
export const MenuStyleItemIcon = styled(Icon)<IconProps>``;

export interface MenuItemStyleTextBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement | ThemeVar>, HTMLDivElement> {
  params?: {
    multiline?: boolean;
    isText?: boolean;
  };
}

export const MenuItemStyleTextBase = styled.div<MenuItemStyleTextBaseProps>`
  ${(props) =>
    props.params?.isText &&
    css`
      flex-grow: 1;
    `}
  ${(props) =>
    !props.params?.multiline &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    `}
`;

export const MenuStyleItemBase = styled.a<MenuStyleItemBaseProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 2px;
  padding: 5px 7px;
  text-decoration: none;
  line-height: 20px;
  color: inherit;
  user-select: none;
  transition: initial;
  transition: background-color 0.3s;
  ${(props) => {
    return (
      props.params?.active &&
      css`
        && {
          color: inherit;
          cursor: pointer;
          text-decoration: none;
          background-color: ${getThemeVariantValue(
            { ...props, defaultTheme: MenuStyleTheme },
            'backgroundColorMenuBase',
          )};
        }
      `
    );
  }}
  &:hover {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    background-color: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'backgroundColorMenuBase')};
  }
  &:active {
    background-color: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'backgroundColorMenuActive')};
  }

  ${(props) =>
    props.params?.disabled &&
    css`
      & {
        outline: none !important;
        background-color: inherit !important;
        cursor: not-allowed !important;
      }
      &,
      & ${MenuStyleItemIcon} {
        color: ${getThemeVariantValue(
          { ...props, defaultTheme: MenuStyleTheme },
          'colorMenuStyleItemIconDisabled',
        )} !important;
      }
    `}
  & > * {
    margin-right: 7px;
  }
  & > :last-child {
    margin-right: 0;
  }
  ${(props) =>
    props.params?.theme === 'dark' &&
    css`
      ${props.params?.active &&
      css`
        color: ${getThemeVariantValue(
          { ...props, defaultTheme: MenuStyleTheme },
          'colorMenuStyleItemIconDarkActive',
        )} !important;
      `}
      ${props.params?.disabled &&
      css`
        &,
        & ${MenuStyleItemIcon} {
          color: ${getThemeVariantValue(
            { ...props, defaultTheme: MenuStyleTheme },
            'colorMenuStyleItemIconDark',
          )} !important;
        }
      `}
    `}
`;

MenuStyleItemBase.defaultProps = {
  defaultTheme: MenuStyleTheme,
};

export interface SubItemCollapseIconProps extends IconProps {
  params?: {
    prefixCls?: string;
    collapse?: boolean;
    isOpen?: boolean;
  };
}

export const SubItemCollapseIcon = styled(Icon)<SubItemCollapseIconProps>`
  ${(props) =>
    props.params?.prefixCls &&
    css`
      transform: scale(0.79);
    `}
  ${(props) =>
    props.params?.prefixCls &&
    !props.params.collapse &&
    css`
      ${props.params.isOpen
        ? css`
            transition: rotate 0.3s all;
            transform: scale(0.79) rotate(-90deg);
          `
        : css`
            transition: rotate 0.3s all;
            transform: scale(0.79) rotate(90deg);
          `}
    `}
`;

export interface MenuStyleSubOverlayTriggerBaseProps extends OverlayTriggerProps {
  params?: {
    collapse?: boolean;
  };
}

export const MenuStyleSubOverlayTriggerBase = styled(OverlayTrigger)<MenuStyleSubOverlayTriggerBaseProps>`
  ${(props) =>
    (!props.params?.collapse &&
      css`
        & {
          transition: height 300ms;
          position: relative !important;
          top: initial !important;
          left: initial !important;
          right: initial !important;
          bottom: initial !important;
          width: auto !important;
          overflow: hidden !important;
          ul {
            min-width: 100%;
            padding-right: 0px !important;
          }
        }
      `) ||
    css`
      min-width: 180px;
    `}

  &.w-menu-subitem-enter,
  &.w-menu-subitem-enter-done,
  &.w-menu-subitem-exit {
    display: inherit;
  }
`;

export interface MenuStyleBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>,
    ThemeVar {
  params?: {
    /** 主题颜色 */
    theme?: 'light' | 'dark';
    /**
     * 垂直是否收起菜单
     * Default: `false`
     */
    inlineCollapsed?: boolean;
    bordered?: boolean;
  };
}

export const MenuStyleBase = styled.ul<MenuStyleBaseProps>`
  margin: 0 !important;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 3px;
  min-width: 100%;
  width: 100%;
  text-align: left;
  font-size: 14px;
  transition: width 0.2s, min-width 0.2s, max-width 0.2s, height 0.2s, min-height 0.2s, max-height 0.2s;
  ${(props) => {
    const { params } = props;
    if (params?.theme) {
      return css`
        && {
          padding-left: 5px;
        }
        ${params.theme !== 'dark' &&
        css`
          & {
            color: ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'colorMenuStyleBaseLight')};
            background: ${getThemeVariantValue(
              { ...props, defaultTheme: MenuStyleTheme },
              'backgroundMenuStyleBaseLight',
            )};
          }
        `}
      `;
    }
    return '';
  }}
  li {
    margin: 0 !important;
    list-style: none !important;
    position: relative;
    &:first-of-type {
      border-top: none;
    }
    a:not([href]) {
      color: inherit;
    }
  }
  ${(props) =>
    props.params?.bordered &&
    css`
      box-shadow: ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'boxShadowMenuStyleBaseBordered')};
    `} {
  }

  ${(props) =>
    props.params?.theme === 'light' &&
    css`
      & > li > ${MenuStyleItemBase}:hover {
        color: ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'colorMenuStyleItemBaseLightHover')};
      }
    `}

  ${(props) =>
    props.params?.inlineCollapsed &&
    css`
      & {
        width: 80px;
        min-width: 80px;
        > li > ${MenuStyleItemBase} {
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 18px;
          &:hover {
            background-color: transparent;
            color: ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'colorMenuStyleItemBaseHover')};
          }
          > * {
            margin-right: 0;
          }
        }
        > li > ${MenuStyleItemBase} ${MenuItemStyleTextBase} {
          width: 0;
          flex-grow: 0;
        }
        > li > ${MenuStyleItemBase} ${SubItemCollapseIcon} {
          display: none;
        }
      }
    `}
   ${MenuDividerBase} {
    display: block;
    margin: 5px !important;
    border-top: 1px solid
      ${(props) => getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'borderTopColorMenuDividerBase')};
    > strong {
      display: block;
      line-height: 17px;
    }
    &:not(:first-of-type) {
      > strong {
        margin-top: 10px;
      }
    }
  }
  ${(props) =>
    props.params?.theme === 'dark' &&
    css`
      & {
        background: ${getThemeVariantValue(
          { ...props, defaultTheme: MenuStyleTheme },
          'backgroundColorMenuStyleBaseDark',
        )};
        color: ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'colorMenuStyleBaseDark')};
      }
      ${props.params.bordered &&
      css`
        box-shadow: initial;
      `}
      ${MenuDividerBase} {
        border-top: 1px solid
          ${getThemeVariantValue({ ...props, defaultTheme: MenuStyleTheme }, 'borderTopColorMenuDividerBaseDark')};
      }
    `}
`;

// MenuStyleBase.defaultProps = {
//   defaultTheme: MenuStyleTheme,
// };

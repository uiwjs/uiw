import styled, { css } from 'styled-components';
import { MenuItemProps } from '../';
import Icon, { IconProps } from '@uiw/react-icon';
import OverlayTrigger, { OverlayTriggerProps } from '@uiw/react-overlay-trigger';

export interface MenuDividerBaseProps
  extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {}

export const MenuDividerBase = styled.li<MenuDividerBaseProps>``;

export interface MenuItemBaseProps extends MenuItemProps<'a'> {
  params?: {
    theme?: 'dark' | 'light';
    active?: boolean;
    disabled?: boolean;
  };
}
export const MenuItemIcon = styled(Icon)<IconProps>``;

export interface MenuItemTextBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  params?: {
    multiline?: boolean;
    isText?: boolean;
  };
}

export const MenuItemTextBase = styled.div<MenuItemTextBaseProps>`
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

export const MenuItemBase = styled.a<MenuItemBaseProps>`
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
          background-color: rgba(167, 182, 194, 0.3);
        }
      `
    );
  }}
  &:hover {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    background-color: rgba(167, 182, 194, 0.3);
  }
  &:active {
    background-color: rgba(115, 134, 148, 0.3);
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
      & ${MenuItemIcon} {
        color: rgba(92, 112, 128, 0.5) !important;
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
        color: #fff !important;
      `}
      ${props.params?.disabled &&
      css`
        &,
        & ${MenuItemIcon} {
          color: rgba(142, 142, 142, 0.79) !important;
        }
      `}
    `}
`;

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

export interface SubOverlayTriggerBaseProps extends OverlayTriggerProps {
  params?: {
    collapse?: boolean;
  };
}

export const SubOverlayTriggerBase = styled(OverlayTrigger)<SubOverlayTriggerBaseProps>`
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

export interface MenuBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
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

export const MenuBase = styled.ul<MenuBaseProps>`
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
            color: #182026;
            background: #fff;
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
      box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
    `} {
  }

  ${(props) =>
    props.params?.theme === 'light' &&
    css`
      & > li > ${MenuItemBase}:hover {
        color: #008ef0;
      }
    `}

  ${(props) =>
    props.params?.inlineCollapsed &&
    css`
      & {
        width: 80px;
        min-width: 80px;
        > li > ${MenuItemBase} {
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 10px;
          font-size: 18px;
          &:hover {
            background-color: transparent;
            color: #fff;
          }
          > * {
            margin-right: 0;
          }
        }
        > li > ${MenuItemBase} ${MenuItemTextBase} {
          width: 0;
          flex-grow: 0;
        }
        > li > ${MenuItemBase} ${SubItemCollapseIcon} {
          display: none;
        }
      }
    `}
   ${MenuDividerBase} {
    display: block;
    margin: 5px !important;
    border-top: 1px solid rgba(16, 22, 26, 0.15);
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
        background: #343a40;
        color: rgba(255, 255, 255, 0.65);
      }
      ${props.params.bordered &&
      css`
        box-shadow: initial;
      `}
      ${MenuDividerBase} {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
      }
    `}
`;

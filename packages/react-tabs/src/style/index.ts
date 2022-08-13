import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import { TabsProps } from '../';

export const TabsStyleTheme = {
  colorTabsItemActive: '#008ef0',
  backgroundColorTabsItemActive: '#fff',
  colorTabsItemDisabled: 'rgba(0, 0, 0, 0.25)',
  boxShadowTabsFlowContentDefault: '1px 0px 0px #d9d9d9 inset',
  backgroundColorTabsNavHiddenBase: '#d9d9d9',
  backgroundColorTabsBase: '#108ee9',
  borderBottomTabsAfter: '1px solid #d9d9d9',
  borderBottomTabsCardAfter: '1px solid #d9d9d9',
  backgroundColorTabsCardAfter: '#f9f9f9',
};
type ThemeVar = ThemeVariantValueOptions<typeof TabsStyleTheme>;

export interface TabsWrapDivProps extends HTMLDivProps, ThemeVar {}

export interface TabsStyleProps extends TabsProps, TabsWrapDivProps {}

export const TabsStyleWarp = styled.div<TabsStyleProps>`
  ${(props) => {
    if (props.type === 'line') {
      return css`
        ${TabsDivSlide} {
          background-color: ${getThemeVariantValue(props, 'backgroundColorTabsBase')};
          box-sizing: border-box;
          bottom: 0;
          position: absolute;
          height: 1px;
          left: 0;
          width: 20px;
          z-index: 1;
          transition: all 0.3s;
        }
        ${TabsDivNav}::after {
          content: '';
          position: relative;
          display: block;
          border-bottom: ${getThemeVariantValue(props, 'borderBottomTabsAfter')};
        }
      `;
    }
    if (props.type === 'card') {
      return css`
        ${TabsDivNav}::after {
          content: '';
          position: relative;
          display: block;
          border-bottom: ${getThemeVariantValue(props, 'borderBottomTabsCardAfter')};
        }
        ${TabsItem} {
          margin: 0;
          border: ${getThemeVariantValue(props, 'borderBottomTabsCardAfter')};
          border-bottom: 0;
          padding: 7px 16px;
          border-radius: 4px 4px 0 0;
          background: ${getThemeVariantValue(props, 'backgroundColorTabsCardAfter')};
          margin-right: 5px;
          bottom: -1px;
        }
      `;
    }
    return css``;
  }}
`;

export const TabsDivFlex = styled.div`
  display: flex;
`;
export const TabsDivHidden = styled.div`
  overflow: hidden;
`;
export const TabsDivBar = styled.div`
  position: relative;
  overflow-x: auto;
  height: calc(100% + 17px);
`;
export const TabsDivNav = styled.div`
  position: relative;
  width: max-content;
`;
export const TabsDivSlide = styled.div``;

export const TabsNavHidden = styled.div<TabsWrapDivProps>`
  display: flex;
  overflow-y: auto;
  padding: 5px 10px 5px 5px;
  max-height: 200px;
  flex-direction: column;
  :hover {
    background: ${(props) => getThemeVariantValue(props, 'backgroundColorTabsNavHiddenBase')};
  }
`;
TabsNavHidden.defaultProps = {
  defaultTheme: TabsStyleTheme,
};

export const TabsFlowContent = styled.div<TabsWrapDivProps>`
  margin-left: 5px;
  padding: 0px 10px 0px 10px;
  box-shadow: ${(props) => getThemeVariantValue(props, 'boxShadowTabsFlowContentDefault')};
  cursor: pointer;
`;

TabsFlowContent.defaultProps = {
  defaultTheme: TabsStyleTheme,
};

interface TabsItemProps extends TabsWrapDivProps {
  active: boolean;
  disabled: boolean;
  type: TabsProps['type'];
}

export const TabsItem = styled.div<TabsItemProps>`
  padding: 7px 10px;
  display: inline-block;
  height: 100%;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  ${(props) => {
    if (props.active) {
      return css`
        color: ${getThemeVariantValue(props, 'colorTabsItemActive')};
        ${props.type === 'card' &&
        css`
          background: ${getThemeVariantValue(props, 'backgroundColorTabsItemActive')};
          z-index: 1;
        `}
      `;
    }
    return css``;
  }}
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      color: ${getThemeVariantValue(props, 'colorTabsItemDisabled')};
    `}
`;

export const TabsPaneWarp = styled.div<TabsWrapDivProps>``;

TabsStyleWarp.defaultProps = {
  defaultTheme: TabsStyleTheme,
};

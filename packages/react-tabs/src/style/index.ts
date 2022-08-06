import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import { TabsProps } from '../';

export interface TabsStyleProps extends TabsProps, ThemeVariantValueOptions {}

export const TabsWarp = styled.div<TabsStyleProps>`
  ${(props) => {
    if (props.type === 'line') {
      return css`
        ${TabsDivSlide} {
          background-color: #108ee9;
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
          border-bottom: 1px solid #d9d9d9;
        }
      `;
    }
    if (props.type === 'card') {
      return css`
        ${TabsDivNav}::after {
          content: '';
          position: relative;
          display: block;
          border-bottom: 1px solid #d9d9d9;
        }
        ${TabsItem} {
          margin: 0;
          border: 1px solid #d9d9d9;
          border-bottom: 0;
          padding: 7px 16px;
          border-radius: 4px 4px 0 0;
          background: #f9f9f9;
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

export const TabsNavHidden = styled.div`
  display: flex;
  overflow-y: auto;
  padding: 5px 10px 5px 5px;
  max-height: 200px;
  flex-direction: column;
  :hover {
    background: #d9d9d9;
  }
`;
export const TabsFlowContent = styled.div`
  margin-left: 5px;
  padding: 0px 10px 0px 10px;
  box-shadow: 1px 0px 0px #d9d9d9 inset;
  cursor: pointer;
`;
interface TabsItemProps {
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
        color: #008ef0;
        ${props.type === 'card' &&
        css`
          background: #fff;
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
      color: rgba(0, 0, 0, 0.25);
    `}
`;

export const TabsPaneWarp = styled.div``;

TabsWarp.defaultProps = {
  defaultTheme: {},
};

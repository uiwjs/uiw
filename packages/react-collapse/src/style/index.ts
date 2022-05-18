import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface CollapseProps {
  defaultTheme?: Record<string, string | number>;
}

const CollapseWarp = styled.div<CollapseProps>`
  border-radius: 4px;
  line-height: 16px;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
  overflow: hidden;
  & > .w-collapse-item:last-child .w-collapse-header,
  & > .w-collapse-item:last-child {
    border-radius: 0 0 5px 5px;
  }
  .w-collapse-title {
    flex: 1;
  }
  .w-collapse-header {
    padding: 8px 10px;
    color: ${(props) => getThemeVariantValue(props, 'colorCollapseHeaderBase')};
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCollapseHeaderBase')};
    cursor: pointer;
    position: relative;
    transition: all 0.3s;
    z-index: 1;
    display: flex;
    & > .w-icon:first-child {
      margin-top: -2px;
      margin-right: 5px;
      transform: scale(0.85) rotate(-90deg);
      transition: transform 0.24s;
      svg {
        display: block;
      }
    }
    & > * {
      vertical-align: middle;
      display: inline-block;
    }
  }
  .w-collapse-active .w-collapse-header {
    & > .w-icon:first-child {
      transform: scale(0.85) rotate(0);
    }
  }
  .w-collapse-panel {
    overflow: hidden;
    color: ${(props) => getThemeVariantValue(props, 'colorCollapsePanelBase')};
    padding: 0 10px;
    &:before,
    &:after {
      content: '';
      height: 10px;
      display: block;
      overflow: hidden;
    }
    &:before {
      border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
      margin: 0 -10px;
      z-index: 1;
      position: relative;
    }
    &:after {
      border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
      margin: 0 -10px;
      z-index: 1;
      position: relative;
    }
  }
  & > .w-collapse-item:last-child .w-collapse-panel:after {
    border-bottom: 0 solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
  }
  & > .w-collapse-item:not(.w-collapse-active):last-child .w-collapse-panel:before {
    border-top: 0 solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
  }
  .w-collapse-disabled .w-collapse-header {
    cursor: not-allowed;
    color: ${(props) => getThemeVariantValue(props, 'colorCollapseHeaderDisabled')};
    background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCollapseHeaderDisabled')};
  }
  &.w-noborder .w-collapse-header {
    background-color: transparent;
  }
  &.w-noborder {
    border: 0;
  }
  &.w-noborder .w-collapse-item .w-collapse-panel {
    &:after,
    &:before {
      border: 0;
    }
  }
  &.w-noborder .w-collapse-item:last-child {
    border: 0;
  }
`;

CollapseWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    backgroundColorBase: '#fff',
    borderColorCollapseBase: '#d9d9d9',
    // Header
    backgroundColorCollapseHeaderBase: '#fafafa',
    colorCollapseHeaderBase: 'rgba(0, 0, 0, 0.85)',
    backgroundColorCollapseHeaderDisabled: '#f7f7f7',
    colorCollapseHeaderDisabled: 'rgba(0, 0, 0, 0.25)',
    // Panel
    colorCollapsePanelBase: 'rgba(0, 0, 0, 0.65)',
  },
};
export default CollapseWarp;

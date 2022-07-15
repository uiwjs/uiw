import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

interface CollapseWarpProps extends ThemeVariantValueOptions {
  bordered?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseItemWarpProps extends ThemeVariantValueOptions {
  isActive?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseItemPanelProps extends ThemeVariantValueOptions {
  in?: boolean;
  prefixCls?: string;
  bordered?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseHeaderProps extends ThemeVariantValueOptions {
  isActive?: boolean;
  disabled?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseHeaderTitleProps extends ThemeVariantValueOptions {
  defaultTheme?: Record<string, string | number>;
}

const CollapseWarp = styled.div<CollapseWarpProps>`
  border-radius: 4px;
  line-height: 16px;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
  overflow: hidden;

  ${(props) =>
    props.bordered &&
    css`
      border: 0;
      background-color: transparent;
      &:after,
      &:before {
        border: 0;
      }
    `}
`;

export const CollapseItem = styled.div<CollapseItemWarpProps>`
  &:last-child {
    border-radius: 0 0 5px 5px;
    border-bottom: 0 solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
    ${(props) =>
      !props.isActive &&
      css`
        border-top: 0 solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
      `}
  }
`;

export const CollapseHeader = styled.div<CollapseHeaderProps>`
  border-radius: 0 0 5px 5px;
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

  ${(props) =>
    props.isActive &&
    css`
      & > .w-icon:first-child {
        transform: scale(0.85) rotate(0);
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => getThemeVariantValue(props, 'colorCollapseHeaderDisabled')};
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCollapseHeaderDisabled')};
    `}
`;

export const CollapseItemPanel = styled.div<CollapseItemPanelProps>`
  overflow: hidden;
  color: ${(props) => getThemeVariantValue(props, 'colorCollapsePanelBase')};
  padding: 0 10px;
  &:before,
  &:after {
    content: '';
    height: 10px;
    display: block;
    overflow: hidden;
    border: 0;
  }
  &:before {
    border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
    margin: 0 -10px;
    z-index: 1;
    position: relative;

    &:last-child {
      border-top: 0 solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
    }
  }

  &:after {
    border-bottom: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorCollapseBase')};
    margin: 0 -10px;
    z-index: 1;
    position: relative;
  }

  ${(props) =>
    props.bordered &&
    css`
      border: 0;
      &:after,
      &:before {
        border: 0;
      }
    `}
  &:last-child {
    border: 0;
  }
`;

export const CollapseHeaderTitle = styled.span<CollapseHeaderTitleProps>`
  flex: 1;
`;

export const CollapseHeaderExtra = styled.div``;

CollapseWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    backgroundColorBase: '#fff',
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseItem.defaultProps = {
  defaultTheme: {
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseItemPanel.defaultProps = {
  defaultTheme: {
    colorCollapsePanelBase: 'rgba(0, 0, 0, 0.65)',
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseHeader.defaultProps = {
  defaultTheme: {
    colorCollapseHeaderBase: 'rgba(0, 0, 0, 0.85)',
    backgroundColorCollapseHeaderBase: '#fafafa',
    colorCollapseHeaderDisabled: 'rgba(0, 0, 0, 0.25)',
    backgroundColorCollapseHeaderDisabled: '#f7f7f7',
  },
};

export default CollapseWarp;

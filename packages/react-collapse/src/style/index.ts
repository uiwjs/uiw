import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

interface CollapseStyleWarpProps extends ThemeVariantValueOptions {
  bordered?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseStyleItemWarpProps extends ThemeVariantValueOptions {
  isActive?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseStyleItemPanelProps extends ThemeVariantValueOptions {
  in?: boolean;
  prefixCls?: string;
  bordered?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseStyleHeaderProps extends ThemeVariantValueOptions {
  isActive?: boolean;
  disabled?: boolean;
  defaultTheme?: Record<string, string | number>;
}

interface CollapseStyleHeaderTitleProps extends ThemeVariantValueOptions {
  defaultTheme?: Record<string, string | number>;
}

const CollapseStyleWarp = styled.div<CollapseStyleWarpProps>`
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

export const CollapseStyleItem = styled.div<CollapseStyleItemWarpProps>`
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

export const CollapseStyleHeader = styled.div<CollapseStyleHeaderProps>`
  border-radius: 0 0 5px 5px;
  padding: 8px 10px;
  color: ${(props) => getThemeVariantValue(props, 'colorCollapseStyleHeaderBase')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCollapseStyleHeaderBase')};
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
      color: ${(props) => getThemeVariantValue(props, 'colorCollapseStyleHeaderDisabled')};
      background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorCollapseStyleHeaderDisabled')};
    `}
`;

export const CollapseStyleItemPanel = styled.div<CollapseStyleItemPanelProps>`
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

export const CollapseStyleHeaderTitle = styled.span<CollapseStyleHeaderTitleProps>`
  flex: 1;
`;

export const CollapseStyleHeaderExtra = styled.div``;

CollapseStyleWarp.defaultProps = {
  defaultTheme: {
    fontSizeDefault: '14px',
    backgroundColorBase: '#fff',
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseStyleItem.defaultProps = {
  defaultTheme: {
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseStyleItemPanel.defaultProps = {
  defaultTheme: {
    colorCollapsePanelBase: 'rgba(0, 0, 0, 0.65)',
    borderColorCollapseBase: '#d9d9d9',
  },
};

CollapseStyleHeader.defaultProps = {
  defaultTheme: {
    colorCollapseStyleHeaderBase: 'rgba(0, 0, 0, 0.85)',
    backgroundColorCollapseStyleHeaderBase: '#fafafa',
    colorCollapseStyleHeaderDisabled: 'rgba(0, 0, 0, 0.25)',
    backgroundColorCollapseStyleHeaderDisabled: '#f7f7f7',
  },
};

export default CollapseStyleWarp;

import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { IconStyleBase } from '@uiw/react-icon';

export const CollapseStyleTheme = {
  fontSizeDefault: '14px',
  backgroundColorBase: '#fff',
  borderColorCollapseBase: '#d9d9d9',
  colorCollapsePanelBase: 'rgba(0, 0, 0, 0.65)',

  colorCollapseStyleHeaderBase: 'rgba(0, 0, 0, 0.85)',
  backgroundColorCollapseStyleHeaderBase: '#fafafa',
  colorCollapseStyleHeaderDisabled: 'rgba(0, 0, 0, 0.25)',
  backgroundColorCollapseStyleHeaderDisabled: '#f7f7f7',
};
const propsTheme = {
  defaultTheme: { ...CollapseStyleTheme },
};
type ThemeVar = ThemeVariantValueOptions<typeof CollapseStyleTheme>;
type HTMLDivElements = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface CollapseStyleWarpProps extends ThemeVar, HTMLDivElements {
  bordered?: boolean;
}

interface CollapseStyleItemWarpProps extends ThemeVar, HTMLDivElements {
  isActive?: boolean;
}

interface CollapseStyleItemPanelProps extends ThemeVar, HTMLDivElements {
  in?: boolean;
  prefixCls?: string;
  bordered?: boolean;
}

interface CollapseStyleHeaderProps extends ThemeVar, HTMLDivElements {
  isActive?: boolean;
  disabled?: boolean;
}

interface CollapseStyleHeaderTitleProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

export const CollapseStyleWarp = styled.div<CollapseStyleWarpProps>`
  border-radius: 4px;
  line-height: 16px;
  font-size: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'fontSizeDefault')};
  background-color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorBase')};
  border: 1px solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
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
    border-bottom: 0 solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
    ${(props) =>
      !props.isActive &&
      css`
        border-top: 0 solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
      `}
  }
`;

export const CollapseStyleHeader = styled.div<CollapseStyleHeaderProps>`
  border-radius: 0 0 5px 5px;
  padding: 8px 10px;
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorCollapseStyleHeaderBase')};
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorCollapseStyleHeaderBase')};
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  z-index: 1;
  display: flex;
  & > ${IconStyleBase}:first-child {
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
      & > ${IconStyleBase}:first-child {
        transform: scale(0.85) rotate(0);
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorCollapseStyleHeaderDisabled')};
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, ...propsTheme }, 'backgroundColorCollapseStyleHeaderDisabled')};
    `}
`;

export const CollapseStyleItemPanel = styled.div<CollapseStyleItemPanelProps>`
  overflow: hidden;
  color: ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'colorCollapsePanelBase')};
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
    border-top: 1px solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
    margin: 0 -10px;
    z-index: 1;
    position: relative;

    &:last-child {
      border-top: 0 solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
    }
  }

  &:after {
    border-bottom: 1px solid ${(props) => getThemeVariantValue({ ...props, ...propsTheme }, 'borderColorCollapseBase')};
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

export default CollapseStyleWarp;

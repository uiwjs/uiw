import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { TreeRenderTitleNode, TreeProps } from '../index';
import { IconStyleBase } from '@uiw/react-icon';

export const TreeStyleTheme = {
  borderRadiusTreeNodeDefault: '0 0 0 3px',
  borderTreeNodeDefaultAfter: '1px solid #d9d9d9',
  backgroundColorTreeNodeJudgeSelected: '#d5e8fc',
  colorTreeNodeUlLidivSpanDefault: '#2ea3f4',
  transformTreeNodeUlLidivSpanDefault: 'scale(0.79) rotate(0deg)',
  fontSizeTreeNodeStyleCSSTransitionDefault: '14px',
  transformTreeNodeUlLidivSpanIconDefault: 'scale(0.79) rotate(90deg) !important;',
};
type ThemeVar = ThemeVariantValueOptions<typeof TreeStyleTheme>;

interface TreeNodeStyleCSSTransitionProps extends TreeRenderTitleNode, ThemeVar {
  isOpen: boolean;
  level: number;
}
interface TreeNodeUlLidivProps extends ThemeVar {}

interface TreeNodeUlLidivSpanIconProps extends ThemeVar {
  isIcon?: string;
  isNoChild?: boolean;
  isIconAnimation?: boolean;
  isItemIsOpen?: boolean;
}
interface TreeNodeUlLidivSpanDivProps extends ThemeVar {
  judgeSelected?: boolean;
  judgeisSelected?: boolean;
  isDisabled?: string | null;
}
interface TreeNodeStyleWrapProps extends TreeProps, ThemeVar {}

export const TreeNodeStyleCSSTransition = styled.div<TreeNodeStyleCSSTransitionProps>`
  font-size: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'fontSizeTreeNodeStyleCSSTransitionDefault')};
`;

// TreeNodeStyleCSSTransition.defaultProps = {
//   defaultTheme: TreeStyleTheme,
// };

export const TreeNodeStyleUl = styled.ul<TreeNodeStyleCSSTransitionProps>`
  padding: 0 !important;
  transition: 0.3s all;
  overflow: hidden;
  margin: 0;
  ul {
    padding-left: 18px !important;
    margin-bottom: 0;
  }
  li {
    list-style: none !important;
    & + li {
      margin-top: 2px !important;
    }
    &:first-child {
      padding-top: 3px;
    }
  }

  ${(props) => props.level !== 1 && props.isOpen && css``}

  ${(props) =>
    props.level !== 1 &&
    !props.isOpen &&
    css`
      height: 0;
    `}
`;

export const TreeNodeStyleUlDiv = styled.div<TreeNodeUlLidivProps>`
  line-height: initial;
  & > * {
    vertical-align: middle;
  }
`;

export const TreeNodeStyleUlLidivSpan = styled.div<TreeNodeUlLidivProps>`
  cursor: pointer;
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
  text-align: center;
  &:hover {
    color: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'colorTreeNodeUlLidivSpanDefault')};
  }
  ${IconStyleBase} {
    transition: 0.3s all;
    transform: ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'transformTreeNodeUlLidivSpanDefault')};
    &.open:not(.no-animation) {
      transform: scale(0.79) rotate(90deg) !important;
    }
  }
`;

// TreeNodeStyleUlLidivSpan.defaultProps = {
//   defaultTheme: TreeStyleTheme,
// };

export const TreeNodeStyleUlLidivSpanIcon = styled.div<TreeNodeUlLidivSpanIconProps>`
  ${(props) =>
    props.isNoChild &&
    !props.isIcon &&
    css`
      display: none;
    `}

  ${(props) =>
    props.isItemIsOpen &&
    props.isIconAnimation &&
    css`
      transform: ${(props) =>
        getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'transformTreeNodeUlLidivSpanIconDefault')};
    `}
`;

// TreeNodeStyleUlLidivSpanIcon.defaultProps = {
//   defaultTheme: TreeStyleTheme,
// };

export const TreeNodeStyleUlLidivSpanDiv = styled.div<TreeNodeUlLidivSpanDivProps>`
  display: inline-block;
  padding: 2px 5px;
  cursor: pointer;

  ${(props) =>
    props.judgeSelected &&
    props.judgeisSelected &&
    css`
      background-color: ${(props) =>
        getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'backgroundColorTreeNodeJudgeSelected')};
    `}

  ${(props) =>
    props.judgeSelected &&
    css`
      cursor: not-allowed;
    `}

  > * {
    vertical-align: middle;
  }
`;

export const TreeNodeStyleWrap = styled.div<TreeNodeStyleWrapProps>`
  li {
    position: relative;
    li {
      &:before,
      &::after {
        content: ' ';
        border-left: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'borderTreeNodeDefaultAfter')};
        left: -12px;
        position: absolute;
      }
      &::after {
        height: 100%;
        top: 5px;
      }
      &:last-child::after {
        height: 16px;
        top: -18px;
      }
      &:before {
        content: ' ';
        width: 10px;
        height: 16px;
        border-bottom: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'borderTreeNodeDefaultAfter')};
        top: -2px;
      }
      &:last-child::before {
        border-radius: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: TreeStyleTheme }, 'borderRadiusTreeNodeDefault')};
      }
    }
  }
`;

// TreeNodeStyleWrap.defaultProps = {
//   defaultTheme: TreeStyleTheme,
// };

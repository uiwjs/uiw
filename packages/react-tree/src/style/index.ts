import styled, { css } from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';
import { TreeRenderTitleNode, TreeProps } from '../index';

interface CSSTransitionWarpProps extends TreeRenderTitleNode {
  defaultTheme?: Record<string, string | number>;
  isOpen: boolean;
  level: number;
}
interface TreeNodeUlLidivProps {
  defaultTheme?: Record<string, string | number>;
}

interface TreeNodeUlLidivSpanIconProps {
  defaultTheme?: Record<string, string | number>;
  isIcon?: string;
  isNoChild?: boolean;
  isIconAnimation?: boolean;
  isItemIsOpen?: boolean;
}
interface TreeNodeUlLidivSpanDivProps {
  judgeSelected?: boolean;
  judgeisSelected?: boolean;
  isDisabled?: string | null;
}
interface TreeNodeDivProps extends TreeProps {
  defaultTheme?: Record<string, string | number>;
}

export const CSSTransitionWarp = styled.div<CSSTransitionWarpProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeCSSTransitionWarpDefault')};
`;

CSSTransitionWarp.defaultProps = {
  defaultTheme: {
    fontSizeCSSTransitionWarpDefault: '14px',
  },
};

export const TreeNodeUl = styled.ul<CSSTransitionWarpProps>`
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

export const TreeNodeUlLidiv = styled.div<TreeNodeUlLidivProps>`
  line-height: initial;
  & > * {
    vertical-align: middle;
  }
`;

export const TreeNodeUlLidivSpan = styled.div<TreeNodeUlLidivProps>`
  cursor: pointer;
  position: relative;
  z-index: 1;
  width: 14px;
  height: 14px;
  line-height: 14px;
  display: inline-block;
  text-align: center;
  &:hover {
    color: ${(props) => getThemeVariantValue(props, 'colorTreeNodeUlLidivSpanDefault')};
  }
  .w-icon {
    transition: 0.3s all;
    transform: ${(props) => getThemeVariantValue(props, 'transformTreeNodeUlLidivSpanDefault')};
  }
`;

TreeNodeUlLidivSpan.defaultProps = {
  defaultTheme: {
    colorTreeNodeUlLidivSpanDefault: '#2ea3f4',
    transformTreeNodeUlLidivSpanDefault: 'scale(0.79) rotate(0deg)',
  },
};

export const TreeNodeUlLidivSpanIcon = styled.div<TreeNodeUlLidivSpanIconProps>`
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
      transform: ${(props) => getThemeVariantValue(props, 'transformTreeNodeUlLidivSpanIconDefault')};
    `}
`;

TreeNodeUlLidivSpanIcon.defaultProps = {
  defaultTheme: {
    transformTreeNodeUlLidivSpanIconDefault: 'scale(0.79) rotate(90deg) !important;',
  },
};

export const TreeNodeUlLidivSpanDiv = styled.div<TreeNodeUlLidivSpanDivProps>`
  display: inline-block;
  padding: 2px 5px;
  cursor: pointer;

  ${(props) =>
    props.judgeSelected &&
    props.judgeisSelected &&
    css`
      background-color: #d5e8fc;
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

export const TreeNodeDiv = styled.div<TreeNodeDivProps>`
  li {
    position: relative;
    li {
      &:before,
      &::after {
        content: ' ';
        border-left: 1px solid #d9d9d9;
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
        border-bottom: 1px solid #d9d9d9;
        top: -2px;
      }
      &:last-child::before {
        border-radius: ${(props) => getThemeVariantValue(props, 'borderRadiusTreeNodeDivDefault')};
      }
    }
  }
`;

TreeNodeDiv.defaultProps = {
  defaultTheme: {
    borderRadiusTreeNodeDivDefault: '0 0 0 3px',
  },
};

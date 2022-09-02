import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, ThemeVariantValueOptions } from '@uiw/utils';

export const StepsStyleTheme = {
  // 行高默认
  lineHeightDefault: 1.5,
  colorStepsError: ' #f04134',
  backgroundColorStepsError: ' #f04134',
  borderColorStepsError: ' #f04134',
  backgroundColorStepsProcess: ' #2d8cf0',
  borderColorStepsProcess: ' #2d8cf0',
  backgroundStepsStyleItemTail: '#e9e9e9',
  backgroundColorBase: '#fff',
  fontSizeDefault: '14px',
  fontSizeSmall: '12px',

  colorStepsStyleItemHeadInner: 'rgba(0, 0, 0, 0.25)',
  borderColorStepsStyleItemHeadInner: 'rgba(0, 0, 0, 0.25)',
  backgroundColorStepsStyleItemHeadInner: 'rgba(0, 0, 0, 0.25)',

  colorStepsStyleItemHeadInnerIcon: '#108ee9',

  colorStepsStyleItemMainTitle: '#999',
  colorStepsStyleItemMainProcess: ' rgba(0, 0, 0, 0.65)',
};
type ThemeVar = ThemeVariantValueOptions<typeof StepsStyleTheme>;

export interface StepsBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVar {}
export interface StepsBaseSpanProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanProps>, HTMLSpanProps>,
    ThemeVar {}
export interface StepsBaseIProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    ThemeVar {}
export interface StepsStyleWarpProps extends StepsBaseProps {}

export const StepsStyleWarp = styled.div<StepsStyleWarpProps>`
  font-size: 0;
  width: 100%;
  line-height: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'lineHeightDefault')};
`;
// StepsStyleWarp.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemProps extends StepsBaseProps {
  params?: {
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsStyleItem = styled.div<StepsStyleItemProps>`
  position: relative;
  vertical-align: top;

  ${(props) =>
    (props.params?.direction === 'vertical' &&
      css`
        & {
          display: block;
        }
      `) ||
    css`
      display: inline-block;
    `}
  ${(props) =>
    ['process', 'finish'].includes(props.params?.status || '') &&
    css`
      & {
        [class^='w-icon-'],
        [class*=' w-icon-'] {
          vertical-align: middle;
          position: relative;
          top: -1px;
        }
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & i[class^='w-icon-'] {
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsIError')};
      }
    `}
`;
// StepsStyleItem.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemTailProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsStyleItemTail = styled.div<StepsStyleItemTailProps>`
  ${StepsStyleItem}:last-child & {
    display: none;
    text-align: center;
  }
  position: absolute;
  left: 0;
  width: 100%;
  top: 13px;
  padding: 0 10px;
  height: 1px;
  ${(props) =>
    props.params?.direction === 'vertical' &&
    !props.params.dot &&
    css`
      ${StepsStyleWarp} > ${StepsStyleItem} > && {
        height: 100%;
        width: 1px;
        padding: 18px 0;
        left: 13px;
      }
    `}
  ${(props) =>
    props.params?.dot &&
    props.params.direction !== 'vertical' &&
    css`
      & {
        padding: 0;
        width: 100%;
        position: initial;
        height: 2px;
      }
      ${['error', 'process'].includes(props.params.status || '') &&
      css`
        & {
          padding-right: 50%;
          background: ${(props) =>
            getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundStepsStyleItemTail')};
        }
      `}
      ${StepsStyleItem}:first-child && {
        padding-left: 50%;
      }
      ${StepsStyleItem}:last-child && {
        display: block;
        padding-right: 50%;
      }
    `}
  ${(props) =>
    props.params?.dot &&
    props.params.direction === 'vertical' &&
    css`
      ${StepsStyleItem}:last-child & {
        display: none;
      }
      & {
        position: absolute;
        height: 100%;
        width: 1px;
        left: 3px;
        padding: 0 0 21px;
      }
      ${props.params.status === 'error' &&
      css`
        & {
          background-color: transparent;
        }
      `}
    `}
`;
// StepsStyleItemTail.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemTailIProps extends StepsBaseIProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    nextError?: boolean;
  };
}

export const StepsStyleItemTailI = styled.i<StepsStyleItemTailIProps>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundStepsStyleItemTail')};
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    width: 0;
    height: 100%;
    transition: all 0.6s;
  }
  ${(props) =>
    props.params?.nextError &&
    css`
      &:after {
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsError')};
        width: 100%;
        transition: all 0.6s;
      }
    `}
  ${(props) =>
    props.params?.nextError &&
    props.params.dot &&
    props.params.direction === 'vertical' &&
    css`
      &:after {
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsError')};
      }
    `}
  ${(props) => {
    const { params } = props;
    switch (params?.status) {
      case 'error':
        return css`
          ${params.dot &&
          css`
            &:after {
              background-color: ${(props) =>
                getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsError')};
              width: 100%;
            }
            ${params.direction === 'vertical' &&
            css`
              &:after {
                background-color: transparent;
              }
            `}
          `}
        `;
      case 'finish':
        return css`
          ${!params.nextError &&
          css`
            &:after {
              background-color: ${(props) =>
                getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsProcess')};
              width: 100%;
            }
          `}
          ${params.nextError &&
          params.direction !== 'vertical' &&
          params.dot &&
          css`
            &:after {
              background-color: ${(props) =>
                getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsProcess')};
            }
          `}
        `;
      case 'process':
        return css`
          ${params.dot &&
          css`
            &:after {
              background-color: ${(props) =>
                getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsProcess')};
              width: 100%;
            }
          `}
        `;
      case 'success':
        return css``;
      case 'wait':
        return css``;
      default:
        return css``;
    }
  }}
`;
// StepsStyleItemTailI.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemHeadProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
  };
}

export const StepsStyleItemHead = styled.div<StepsStyleItemHeadProps>`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
  background: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorBase')};
  &:not(:first-child) {
    margin-left: -10px;
  }
  ${(props) =>
    props.params?.dot &&
    css`
      &:not(:first-child) {
        margin-left: 0;
        padding-left: 0;
        text-align: center;
        display: block;
      }
      & {
        background: transparent;
        margin-top: -4px;
      }
    `}
`;
// StepsStyleItemHead.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemHeadInnerProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    icon?: boolean;
  };
}

export const StepsStyleItemHeadInner = styled.div<StepsStyleItemHeadInnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) =>
      getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'borderColorStepsStyleItemHeadInner')};
  color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemHeadInner')};
  background-color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorBase')};
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 26px;
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'fontSizeDefault')};
  margin-right: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  ${(props) =>
    ['process', 'finish'].includes(props.params?.status || '') &&
    css`
      & {
        border-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'borderColorStepsProcess')};
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsProcess')};
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorBase')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsError')};
        border-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'borderColorStepsError')};
        background-color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorBase')};
      }
    `}

    ${(props) =>
    props.params?.icon &&
    css`
      && {
        background: none;
        border: 0;
        width: 26px;
        height: 26px;
        font-size: 26px;
      }
    `}
  ${(props) =>
    props.params?.dot &&
    css`
      & {
        margin: 0 auto;
        width: 7px;
        height: 7px;
        line-height: 5px;
        border: 0;
      }
      ${props.params.status === 'error' &&
      css`
        & {
          background: ${(props) =>
            getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorStepsError')};
        }
      `}
      ${props.params.status === 'wait' &&
      css`
        & {
          border-color: ${(props) =>
            getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'borderColorStepsStyleItemHeadInner')};
          background-color: ${(props) =>
            getThemeVariantValue(
              { ...props, defaultTheme: StepsStyleTheme },
              'backgroundColorStepsStyleItemHeadInner',
            )};
        }
      `}
      ${props.params.direction === 'vertical' &&
      css`
        & {
          margin: 0;
        }
      `}
    `}
`;
// StepsStyleItemHeadInner.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemHeadInnerDotProps extends StepsBaseSpanProps {
  params?: {
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsStyleItemHeadInnerDot = styled.span<StepsStyleItemHeadInnerDotProps>`
  ${(props) =>
    props.params?.status === 'wait' &&
    css`
      & {
        background: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'borderColorStepsStyleItemHeadInner')};
      }
    `}
`;
// StepsStyleItemHeadInnerDot.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemHeadInnerIconProps extends StepsBaseSpanProps {
  params?: {
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    icon?: boolean;
  };
}

export const StepsStyleItemHeadInnerIcon = styled.span<StepsStyleItemHeadInnerIconProps>`
  ${(props) =>
    ['process', 'finish'].includes(props.params?.status || '') &&
    props.params?.icon &&
    css`
      & {
        color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemHeadInnerIcon')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsError')};
      }
    `}
`;
// StepsStyleItemHeadInnerIcon.defaultProps = { defaultTheme: StepsStyleTheme };

export const StepsStyleItemHeadInnerSvg = styled.svg`
  fill: currentcolor;
  height: 1em;
  width: 1em;
  display: inline-flex;
  align-self: center;
  position: relative;
  transition: color 0.3s;
  box-sizing: inherit;
`;

export interface StepsStyleItemMainProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
  };
}

export const StepsStyleItemMain = styled.div<StepsStyleItemMainProps>`
  position: relative;
  display: inline-block;
  vertical-align: top;
  ${(props) =>
    props.params?.dot &&
    css`
      & {
        display: block;
        text-align: center;
      }
      ${props.params.direction === 'vertical' &&
      css`
        & {
          text-align: left;
          padding-left: 20px;
          padding-bottom: 24px;
          margin-top: -21px;
        }
      `}
    `}
  ${(props) =>
    props.params?.direction === 'vertical' &&
    css`
      padding-bottom: 12px;
      overflow: hidden;
    `}
`;
// StepsStyleItemMain.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemMainTitleProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsStyleItemMainTitle = styled.div<StepsStyleItemMainTitleProps>`
  padding-right: 10px;
  line-height: 26px;
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'fontSizeDefault')};
  font-weight: 700;
  background: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'backgroundColorBase')};
  color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemMainTitle')};
  display: inline-block;
  ${(props) =>
    props.params?.status === 'process' &&
    css`
      & {
        color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemMainProcess')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsError')};
      }
    `}
  ${(props) =>
    props.params?.dot &&
    css`
      & {
        padding-top: 5px;
      }
    `}
`;
// StepsStyleItemMainTitle.defaultProps = { defaultTheme: StepsStyleTheme };

export interface StepsStyleItemMainDescriptionProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsStyleItemMainDescription = styled.div<StepsStyleItemMainDescriptionProps>`
  font-size: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'fontSizeSmall')};
  color: ${(props) =>
    getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemMainTitle')};
  max-width: 130px;
  ${(props) =>
    props.params?.status === 'process' &&
    css`
      & {
        color: ${(props) =>
          getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsStyleItemMainProcess')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue({ ...props, defaultTheme: StepsStyleTheme }, 'colorStepsError')};
      }
    `}
  ${(props) =>
    (props.params?.direction === 'vertical' || props.params?.dot) &&
    css`
      & {
        max-width: inherit;
      }
    `}
`;

// StepsStyleItemMainDescription.defaultProps = { defaultTheme: StepsStyleTheme };

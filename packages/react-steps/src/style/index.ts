import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLSpanProps, ThemeVariantValueOptions } from '@uiw/utils';

export interface StepsBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}
export interface StepsBaseSpanProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanProps>, HTMLSpanProps>,
    ThemeVariantValueOptions {}
export interface StepsBaseIProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    ThemeVariantValueOptions {}
export interface StepsWarpProps extends StepsBaseProps {}

export const StepsBaseDefaultTheme = {
  // 行高默认
  lineHeightDefault: 1.5,
  colorStepsError: ' #f04134',
  backgroundColorStepsError: ' #f04134',
  borderColorStepsError: ' #f04134',
  backgroundColorStepsProcess: ' #2d8cf0',
  borderColorStepsProcess: ' #2d8cf0',
  backgroundStepsItemTail: '#e9e9e9',
  backgroundColorBase: '#fff',
  fontSizeDefault: '14px',
  fontSizeSmall: '12px',

  colorStepsItemHeadInner: 'rgba(0, 0, 0, 0.25)',
  borderColorStepsItemHeadInner: 'rgba(0, 0, 0, 0.25)',
  backgroundColorStepsItemHeadInner: 'rgba(0, 0, 0, 0.25)',

  colorStepsItemHeadInnerIcon: '#108ee9',

  colorStepsItemMainTitle: '#999',
  colorStepsItemMainProcess: ' rgba(0, 0, 0, 0.65)',
};

export const StepsWarp = styled.div<StepsWarpProps>`
  font-size: 0;
  width: 100%;
  line-height: ${(props) => getThemeVariantValue(props, 'lineHeightDefault')};
`;
StepsWarp.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemProps extends StepsBaseProps {
  params?: {
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsItem = styled.div<StepsItemProps>`
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
        color: ${(props) => getThemeVariantValue(props, 'colorStepsIError')};
      }
    `}
`;
StepsItem.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemTailProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsItemTail = styled.div<StepsItemTailProps>`
  ${StepsItem}:last-child & {
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
      ${StepsWarp} > ${StepsItem} > && {
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
          background: ${(props) => getThemeVariantValue(props, 'backgroundStepsItemTail')};
        }
      `}
      ${StepsItem}:first-child && {
        padding-left: 50%;
      }
      ${StepsItem}:last-child && {
        display: block;
        padding-right: 50%;
      }
    `}
  ${(props) =>
    props.params?.dot &&
    props.params.direction === 'vertical' &&
    css`
      ${StepsItem}:last-child & {
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
StepsItemTail.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemTailIProps extends StepsBaseIProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    nextError?: boolean;
  };
}

export const StepsItemTailI = styled.i<StepsItemTailIProps>`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundStepsItemTail')};
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
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsError')};
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
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsError')};
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
              background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsError')};
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
              background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsProcess')};
              width: 100%;
            }
          `}
          ${params.nextError &&
          params.direction !== 'vertical' &&
          params.dot &&
          css`
            &:after {
              background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsProcess')};
            }
          `}
        `;
      case 'process':
        return css`
          ${params.dot &&
          css`
            &:after {
              background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsProcess')};
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
StepsItemTailI.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemHeadProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
  };
}

export const StepsItemHead = styled.div<StepsItemHeadProps>`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
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
StepsItemHead.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemHeadInnerProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    icon?: boolean;
  };
}

export const StepsItemHeadInner = styled.div<StepsItemHeadInnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorStepsItemHeadInner')};
  color: ${(props) => getThemeVariantValue(props, 'colorStepsItemHeadInner')};
  background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 26px;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  margin-right: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  ${(props) =>
    ['process', 'finish'].includes(props.params?.status || '') &&
    css`
      & {
        border-color: ${(props) => getThemeVariantValue(props, 'borderColorStepsProcess')};
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsProcess')};
        color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsError')};
        border-color: ${(props) => getThemeVariantValue(props, 'borderColorStepsError')};
        background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
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
          background: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsError')};
        }
      `}
      ${props.params.status === 'wait' &&
      css`
        & {
          border-color: ${(props) => getThemeVariantValue(props, 'borderColorStepsItemHeadInner')};
          background-color: ${(props) => getThemeVariantValue(props, 'backgroundColorStepsItemHeadInner')};
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
StepsItemHeadInner.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemHeadInnerDotProps extends StepsBaseSpanProps {
  params?: {
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsItemHeadInnerDot = styled.span<StepsItemHeadInnerDotProps>`
  ${(props) =>
    props.params?.status === 'wait' &&
    css`
      & {
        background: ${(props) => getThemeVariantValue(props, 'borderColorStepsItemHeadInner')};
      }
    `}
`;
StepsItemHeadInnerDot.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemHeadInnerIconProps extends StepsBaseSpanProps {
  params?: {
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
    icon?: boolean;
  };
}

export const StepsItemHeadInnerIcon = styled.span<StepsItemHeadInnerIconProps>`
  ${(props) =>
    ['process', 'finish'].includes(props.params?.status || '') &&
    props.params?.icon &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsItemHeadInnerIcon')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsError')};
      }
    `}
`;
StepsItemHeadInnerIcon.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemMainProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
  };
}

export const StepsItemMain = styled.div<StepsItemMainProps>`
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
StepsItemMain.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemMainTitleProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsItemMainTitle = styled.div<StepsItemMainTitleProps>`
  padding-right: 10px;
  line-height: 26px;
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
  font-weight: 700;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  color: ${(props) => getThemeVariantValue(props, 'colorStepsItemMainTitle')};
  display: inline-block;
  ${(props) =>
    props.params?.status === 'process' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsItemMainProcess')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsError')};
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
StepsItemMainTitle.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

export interface StepsItemMainDescriptionProps extends StepsBaseProps {
  params?: {
    dot?: boolean;
    direction?: 'horizontal' | 'vertical';
    status?: 'wait' | 'process' | 'finish' | 'error' | 'success';
  };
}

export const StepsItemMainDescription = styled.div<StepsItemMainDescriptionProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeSmall')};
  color: ${(props) => getThemeVariantValue(props, 'colorStepsItemMainTitle')};
  max-width: 130px;
  ${(props) =>
    props.params?.status === 'process' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsItemMainProcess')};
      }
    `}
  ${(props) =>
    props.params?.status === 'error' &&
    css`
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorStepsError')};
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

StepsItemMainDescription.defaultProps = { defaultTheme: StepsBaseDefaultTheme };

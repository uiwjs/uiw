import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import BackToUp, { BackToUpProps } from '@uiw/react-back-to-top';

export const BackTopStyleTheme = {
  bottomBackTop: '50px',
  rightBackTop: '50px',
};

export interface BackTopStyleWarpProps
  extends BackToUpProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions<typeof BackTopStyleTheme> {
  visible?: string;
  fixed?: string;
  offsetTop?: number;
}

export const BackTopStyleWarp = styled(BackToUp)<BackTopStyleWarpProps>`
  width: inherit !important;
  height: inherit !important;

  ${(props) => {
    return (
      props.fixed !== 'true' &&
      css`
        svg {
          width: 0;
          height: 0;
          opacity: 0;
        }
        div {
          display: inline-flex !important;
          position: static !important;
          width: auto !important;
        }
      `
    );
  }}
  ${(props) => {
    return (
      props.visible !== 'true' &&
      css`
        opacity: 0 !important;
      `
    );
  }}
`;

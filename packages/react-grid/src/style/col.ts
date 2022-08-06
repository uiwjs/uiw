import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import { ColProps } from 'src/Col';

interface ColStyleWrapProps extends ThemeVariantValueOptions, Pick<ColProps, 'fixed' | 'span' | 'grow' | 'align'> {}

const alignType = { top: 'flex-start', middle: 'center', bottom: 'flex-end', baseline: 'baseline' };

export const ColStyleWrap = styled.div<ColStyleWrapProps>`
  min-width: 0;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;

  ${(props) => {
    if (props.fixed) {
      return css`
        flex: 0 1 auto;
      `;
    }
  }}

  ${(props) => {
    if (props.align) {
      return css`
        align-self: ${alignType[props.align]};
      `;
    }
  }}

  ${(props) =>
    props.fixed &&
    props.grow &&
    css`
      flex-grow: ${Number.parseInt(props.grow.toString())}%;
    `}

  ${(props) =>
    props.span &&
    css`
      flex-basis: ${(100 / 24) * Number.parseInt(props.span.toString())}%;
      max-width: ${(100 / 24) * Number.parseInt(props.span.toString())}%;
    `}
`;

ColStyleWrap.defaultProps = {
  defaultTheme: {},
};

export default ColStyleWrap;

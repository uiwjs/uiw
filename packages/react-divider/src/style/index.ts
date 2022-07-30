import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import { DividerProps } from 'src';

interface DividerStyleBaseProps
  extends ThemeVariantValueOptions,
    Pick<DividerProps, 'dashed' | 'type' | 'align' | 'prefixCls'> {}

export const DividerStyleBase = styled.div<DividerStyleBaseProps>`
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeLarge')};
  line-height: 16px;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorDividerBase')};

  ${(props) => {
    if (props.prefixCls) {
      if (props.type === 'vertical') {
        return css`
          margin: 0 8px;
          display: inline-block;
          height: 0.9em;
          width: 1px;
          vertical-align: middle;
          position: relative;
          top: -0.06em;
        `;
      } else if (props.type === 'horizontal') {
        return css`
          height: 1px;
          width: 100%;
          margin: 16px 0;
          ${props.children &&
          css`
            display: flex;
            white-space: nowrap;
            text-align: center;
            background: transparent;
            font-weight: 500;
            color: #353535;
            height: inherit;
            margin: 16px 0;
            &:before,
            &:after {
              content: '';
              display: table-cell;
              position: relative;
              top: 50%;
              width: 50%;
              border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderTopColorDividerWithText')};
              transform: translateY(50%);
            }
          `}
        `;
      }
    }
  }}

  ${(props) => {
    if (props.prefixCls && props.children) {
      if (props.align === 'left') {
        return css`
          ::before {
            width: 5%;
          }
          ::after {
            width: 95%;
          }
        `;
      } else if (props.align === 'right') {
        return css`
          ::after {
            width: 5%;
          }
          ::before {
            width: 95%;
          }
        `;
      }
    }
  }}

  ${(props) => {
    if (props.dashed) {
      if (props.children) {
        return css`
          &::before,
          &::after {
            border-top-style: dashed;
          }
        `;
      } else {
        return css`
          background: none;
          border-top: 1px dashed ${(props) => getThemeVariantValue(props, 'borderTopColorDividerWithText')};
        `;
      }
    }
  }}
`;

export const DividerStyleInnerText = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

DividerStyleBase.defaultProps = {
  defaultTheme: {
    fontSizeLarge: '16px',
    backgroundColorDividerBase: '#e8e8e8',
    borderTopColorDividerWithText: '#e8e8e8',
  },
};

export default DividerStyleBase;

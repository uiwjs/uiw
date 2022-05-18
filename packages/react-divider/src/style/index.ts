import styled from 'styled-components';
import { getThemeVariantValue } from '@uiw/utils';

interface DividerProps {
  defaultTheme?: Record<string, string | number>;
}

const Divider = styled.div<DividerProps>`
  font-size: 16px;
  line-height: 16px;
  box-sizing: border-box;
  padding: 0;
  list-style: none;
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorDividerBase')};

  &.w-divider-vertical {
    margin: 0 8px;
    display: inline-block;
    height: 0.9em;
    width: 1px;
    vertical-align: middle;
    position: relative;
    top: -0.06em;
  }

  &.w-divider-horizontal {
    height: 1px;
    width: 100%;
    margin: 16px 0;
  }

  &.w-divider-horizontal.w-divider-with-text {
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
  }

  &.w-divider-left.w-divider-with-text::before,
  &.w-divider-right.w-divider-with-text::after {
    width: 5%;
  }

  &.w-divider-left.w-divider-with-text::after,
  &.w-divider-right.w-divider-with-text::before {
    width: 95%;
  }

  &.w-divider-dashed.w-divider-with-text {
    &::before,
    &::after {
      border-top-style: dashed;
    }
  }

  .w-divider-inner-text {
    display: inline-block;
    padding: 0 10px;
  }

  &.w-divider-dashed:not(.w-divider-with-text) {
    background: none;
    border-top: 1px dashed ${(props) => getThemeVariantValue(props, 'borderTopColorDividerWithText')};
  }
`;

Divider.defaultProps = {
  defaultTheme: {
    backgroundColorDividerBase: '#e8e8e8',
    borderTopColorDividerWithText: '#e8e8e8',
  },
};

export default Divider;

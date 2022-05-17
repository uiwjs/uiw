import styled from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

const WarpItem = styled.span<ThemeVariantValueOptions>`
  display: inline-flex;
  & + &::before,
  & + & .w-breadcrumb-separator {
    padding-right: 8px;
    padding-left: 8px;
    color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumb')};
  }
  & + &::before {
    display: inline-block;
    content: attr(data-separator);
  }
  & + &.no-before:before {
    display: none;
  }
  & + &.no-separator {
    margin-left: 6px;
  }
  & + &.no-separator:before {
    display: none;
  }
  &.active {
    color: ${(props) => getThemeVariantValue(props, 'colorBreadcrumb')};
  }
`;

WarpItem.defaultProps = {
  defaultTheme: {
    colorBreadcrumb: '#6e6e6e',
  },
};
export default WarpItem;

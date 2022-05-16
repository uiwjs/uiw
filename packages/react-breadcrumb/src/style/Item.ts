import styled from 'styled-components';

const WarpItem = styled.span`
  display: inline-flex;
  & + &::before,
  & + & .w-breadcrumb-separator {
    padding-right: 8px;
    padding-left: 8px;
    color: ${(props) => props.theme.colorBreadcrumb};
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
    color: ${(props) => props.theme.colorBreadcrumb};
  }
`;

WarpItem.defaultProps = {
  theme: {
    colorBreadcrumb: '#6e6e6e',
  },
};
export default WarpItem;

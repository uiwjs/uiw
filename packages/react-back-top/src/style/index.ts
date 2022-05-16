import styled from 'styled-components';

const Warp = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  z-index: 1006;
  transition: all 1s;
  &.no-fixed {
    cursor: auto;
    position: static;
  }
  &.w-back-top-hide {
    transition: all 1s;
    opacity: 0;
    height: 0px;
  }
  &.w-back-top-show {
    opacity: 1;
  }
`;

Warp.defaultProps = {
  theme: {},
};
export default Warp;

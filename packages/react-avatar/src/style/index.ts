import styled from 'styled-components';

const Warp = styled.span`
  display: inline-block;
  text-align: center;
  background: ${(props) => props.theme.backgroundColorAvatar};
  color: ${(props) => props.theme.colorAvatar};
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  font-size: 18px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 5px;
  }
  &.w-avatar-mini {
    height: 18px;
    width: 18px;
    font-size: 12px;
  }
  &.w-avatar-small {
    height: 24px;
    width: 24px;
    font-size: 12px;
  }
  &.w-avatar-large {
    height: 40px;
    width: 40px;
    font-size: 24px;
  }
  &.w-avatar-circle {
    border-radius: 50%;
  }
  &.w-avatar > img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
Warp.defaultProps = {
  theme: {
    backgroundColorAvatar: '#ccc',
    colorAvatar: '#fff',
  },
};
export default Warp;

import styled from 'styled-components';

const Warp = styled.div`
  display: inline-flex;
  font-size: ${(props) => props.theme.fontSizeDefault};
`;

Warp.defaultProps = {
  theme: {
    fontSizeDefault: '12px',
  },
};

export default Warp;

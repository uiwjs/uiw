import styled from 'styled-components';

const Transfer = styled.div`
  display: flex;
  justify-content: space-between;

  &.w-transfer-card {
    width: 50%;
  }

  &.w-transfer-cheked-content {
    height: 200px;
    overflow-y: auto;
  }

  &.w-transfer-arrow-content {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: space-between;
  }

  &.w-transfer-arrow {
    transition: all 0.3s;
    border-radius: 3px;

    &:hover {
      cursor: pointer;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default Transfer;

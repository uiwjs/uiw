import styled, { css } from 'styled-components';
import Input, { InputProps, InputBase } from '@uiw/react-input';

// React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const DivWrap = styled.div`
  display: flex;
`;

export const InputWrap = styled(Input)<InputProps>`
  width: 30px;
  & + & {
    margin-left: 8px;
  }
  > ${InputBase} {
    text-align: center;
    padding: 0 !important;
    font-size: 14px;
    font-weight: bold;
  }

  ${(props) =>
    props?.size === 'large' &&
    css`
      width: 36px;
      ${InputBase} {
        font-size: 16px;
      }
    `}

  ${(props) =>
    props?.size === 'small' &&
    css`
      width: 24px;
      ${InputBase} {
        font-size: 12px;
      }
    `}
`;

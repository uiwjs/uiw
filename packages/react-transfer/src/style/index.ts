import styled from 'styled-components';
import Card from '@uiw/react-card';
import { IconStyleBase } from '@uiw/react-icon';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';

export const TransferStyleTheme = {
  boxShadowColorTransferArrowPropsHover: 'rgba(0, 0, 0, 0.2)',
};

export const TransferWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TransferChekedContentWrap = styled.div`
  height: 200px;
  overflow-y: auto;
`;

interface TransferArrowProps extends ThemeVariantValueOptions<typeof TransferStyleTheme> {}

export const TransferArrow = styled(IconStyleBase)<TransferArrowProps>`
  transition: all 0.3s;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 6px
      ${(props) =>
        getThemeVariantValue({ ...props, defaultTheme: TransferStyleTheme }, 'boxShadowColorTransferArrowPropsHover')};
  }
`;

// TransferArrow.defaultProps = {
//   defaultTheme: TransferStyleTheme,
// };

export const TransferArrowContent = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
`;

export const TransferCard = styled(Card)`
  width: 50%;
`;

export default TransferWrap;

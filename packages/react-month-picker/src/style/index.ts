import styled, { css } from 'styled-components';
import { getThemeVariantValue, ThemeVariantValueOptions } from '@uiw/utils';
import Input, { InputProps } from '@uiw/react-input';
import Button, { ButtonProps } from '@uiw/react-button';

export const MonthPickerTheme = {
  fillMonthPickerStyleCloseButtonBase: '#a5a5a5',
  fillMonthPickerStyleCloseButtonHover: '#393e48',
};

export interface MonthPickerStyleCloseButtonProps extends ButtonProps {}

export const MonthPickerStyleCloseButton = styled(Button)``;

export interface MonthPickerStylePopoverBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions<typeof MonthPickerTheme> {}

export const MonthPickerStylePopoverBase = styled.div<MonthPickerStylePopoverBaseProps>`
  padding: 5px;
  min-width: 192px;
  max-width: 192px;
  font-size: 14px;
  line-height: 21px;
`;

export interface MonthPickerStyleInputStyleBaseProps
  extends InputProps,
    ThemeVariantValueOptions<typeof MonthPickerTheme> {}

export const MonthPickerStyleInputStyleBase = styled(Input)<MonthPickerStyleInputStyleBaseProps>`
  display: inline-block;
  & ${MonthPickerStyleCloseButton} {
    min-height: initial;
    fill: ${(props) => getThemeVariantValue(props, 'fillMonthPickerStyleCloseButtonBase')};
    cursor: pointer;
    &:hover {
      fill: ${(props) => getThemeVariantValue(props, 'fillMonthPickerStyleCloseButtonHover')};
    }
    &:active,
    &:hover {
      background-color: transparent !important;
    }
  }
  ${(props) =>
    props.disabled &&
    css`
      & ${MonthPickerStyleCloseButton} {
        display: none !important;
      }
    `}
`;
MonthPickerStyleInputStyleBase.defaultProps = {
  defaultTheme: MonthPickerTheme,
};

import styled, { css } from 'styled-components';
import { ThemeVariantValueOptions } from '@uiw/utils';
import Input, { InputProps } from '@uiw/react-input';
import Button, { ButtonProps } from '@uiw/react-button';

export interface MonthPickerCloseButtonProps extends ButtonProps {}

export const MonthPickerCloseButton = styled(Button)``;

export interface MonthPickerPopoverBaseProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    ThemeVariantValueOptions {}

export const MonthPickerPopoverBase = styled.div<MonthPickerPopoverBaseProps>`
  padding: 5px;
  min-width: 192px;
  max-width: 192px;
  font-size: 14px;
  line-height: 21px;
`;

export interface MonthPickerInputBase extends InputProps {}

export const MonthPickerInputBase = styled(Input)<MonthPickerInputBase>`
  display: inline-block;
  & ${MonthPickerCloseButton} {
    min-height: initial;
    fill: #a5a5a5;
    cursor: pointer;
    &:hover {
      fill: #393e48;
    }
    &:active,
    &:hover {
      background-color: transparent !important;
    }
  }
  ${(props) =>
    props.disabled &&
    css`
      & ${MonthPickerCloseButton} {
        display: none !important;
      }
    `}
`;

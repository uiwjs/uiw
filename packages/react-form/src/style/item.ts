import styled, { css } from 'styled-components';
import { HTMLInputProps, ThemeVariantValueOptions } from '@uiw/utils';
import { InputBase } from '@uiw/react-input';
import { SelectWarp } from '@uiw/react-select';
import { TextareaWarp } from '@uiw/react-textarea';

interface ParentDivProps extends HTMLInputProps, ThemeVariantValueOptions {
  hasError?: boolean;
}

export const LabelStyle = styled.label`
  line-height: 32px;
  min-height: 32px;
  font-weight: 600;
  font-size: 14px;
  padding-right: 5px;
  label {
    display: inline-block;
  }
`;

export const HelpStyle = styled.div`
  color: #c2c2c2;
  font-size: 12px;
  padding-top: 3px;
`;
export const RowStyle = styled.div`
  align-items: center;
  display: flex;
`;

export const ParentDiv = styled.div<ParentDivProps>`
  margin-bottom: 10px;
  ${(props) =>
    props.hasError &&
    css`
      ${InputBase},${SelectWarp},${TextareaWarp} {
        box-shadow: 0 0 0 1px #dc3545, 0 0 0 3px rgba(220, 53, 69, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
        &:hover {
          box-shadow: 0 0 0 1px #dc3545, 0 0 0 3px rgba(220, 53, 69, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
        }
        &:focus,
        &:hover {
          box-shadow: 0 0 0 1px #dc3545, 0 0 0 3px rgba(220, 53, 69, 0.17), inset 0 1px 1px rgba(16, 22, 26, 0.2);
        }
      }
      ${LabelStyle}, ${HelpStyle} {
        color: #dc3545;
      }
    `}
`;

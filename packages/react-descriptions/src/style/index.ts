/**
 * 最外层 bordered large  small
 *
 * **/
import styled, { css } from 'styled-components';
import { getThemeVariantValue, HTMLDivProps, ThemeVariantValueOptions } from '@uiw/utils';
import React from 'react';
import { DescriptionsProps } from '..';

/** Descriptions 主题变量**/
export const DescriptionsDefaultTheme = {
  borderColorDescriptions: '#dfe2e5',
  fontSizeSmall: '12px',
  fontSizeDefault: '14px',
  fontSizeLarge: '16px',
  backgroundColorBase: '#fff',

  borderColorDescriptionsTh: '#fafafa',
  colorDescriptionsHead: 'rgba(0, 0, 0, 0.85)',

  colorDescriptionsConent: 'rgba(0, 0, 0, 0.65)',
  colorDescriptionsColon: 'rgba(0, 0, 0, 0.95)',
};

export interface DescriptionsWarpProps extends HTMLDivProps, ThemeVariantValueOptions {
  bordered?: boolean;
}
export const DescriptionsWarp = styled.div<DescriptionsWarpProps>`
  background: ${(props) => getThemeVariantValue(props, 'backgroundColorBase')};
  ${(props) =>
    props.bordered &&
    css`
      & {
        overflow: hidden;
        border-radius: 3px;
        border: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorDescriptions')};
      }
    `}
`;
DescriptionsWarp.defaultProps = {
  defaultTheme: DescriptionsDefaultTheme,
};
export interface DescriptionsItemProps
  extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>,
    React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>,
    ThemeVariantValueOptions {
  bordered?: boolean;
  isLabel?: Boolean;
  isColon?: Boolean;
  isContent?: Boolean;
}
export const DescriptionsItem = styled.th<DescriptionsItemProps>`
  ${(props) =>
    props.isLabel &&
    css`
      & {
        font-size: 14px;
        font-weight: normal;
        &::after {
          position: relative;
          top: -0.5px;
          margin: 0 8px 0 2px;
          content: ' ';
        }
      }
    `}

  ${(props) =>
    props.isColon &&
    css`
      &::after {
        content: ':';
      }
      & {
        color: ${(props) => getThemeVariantValue(props, 'colorDescriptionsColon')};
      }
    `}
      ${(props) =>
    props.isContent &&
    css`
      & {
        font-size: ${(props) => getThemeVariantValue(props, 'fontSizeDefault')};
        color: ${(props) => getThemeVariantValue(props, 'colorDescriptionsConent')};
      }
    `}
    ${(props) =>
    props.bordered &&
    (props.isContent || props.isLabel) &&
    css`
      &&:last-child {
        border-right: none;
      }
    `}
`;
DescriptionsItem.defaultProps = { defaultTheme: DescriptionsDefaultTheme };

export interface DescriptionsTableProps
  extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
    ThemeVariantValueOptions {}
export const DescriptionsTable = styled.table<DescriptionsTableProps>`
  display: table !important;
  margin-bottom: 0 !important;
  margin: 0;
  border-spacing: 0;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
`;

export interface DescriptionsTableCaptionProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    ThemeVariantValueOptions {
  bordered?: boolean;
}
export const DescriptionsTableCaption = styled.caption<DescriptionsTableCaptionProps>`
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
  color: ${(props) => getThemeVariantValue(props, 'colorDescriptionsHead')};
  font-size: ${(props) => getThemeVariantValue(props, 'fontSizeLarge')};
  line-height: 1.5;
  ${(props) =>
    props.bordered &&
    css`
      & {
        margin-bottom: 0;
        padding: 7px 12px;
      }
    `}
`;
DescriptionsTableCaption.defaultProps = { defaultTheme: DescriptionsDefaultTheme };
export interface DescriptionsTableRowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>,
    ThemeVariantValueOptions {
  bordered?: boolean;
}
export const DescriptionsTableRow = styled.tr<DescriptionsTableRowProps>`
  &&:nth-child(2n) {
    background-color: transparent;
  }
  ${(props) =>
    props.bordered &&
    css`
      & td {
        padding: 8px 12px;
      }
    `}
  ${(props) =>
    !props.bordered &&
    css`
      & td {
        padding-bottom: 8px;
      }
    `}
`;

export interface DescriptionsTableTbodyProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>,
    ThemeVariantValueOptions {
  bordered?: boolean;
  size?: DescriptionsProps['size'];
}

export const DescriptionsTableTbody = styled.tbody<DescriptionsTableTbodyProps>`
  word-wrap: break-word;
  ${(props) =>
    props.bordered &&
    css`
      & {
        tr th {
          padding: 8px 12px;
          background-color: ${(props) => getThemeVariantValue(props, 'borderColorDescriptionsTh')};
          font-weight: normal;
        }
        tr th,
        tr td {
          border-top: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorDescriptions')};
          border-right: 1px solid ${(props) => getThemeVariantValue(props, 'borderColorDescriptions')};
        }
        &:first-child tr:first-child th,
        &:first-child tr:first-child td {
          border-top: 0;
        }
      }
    `}
  ${(props) =>
    props.size === 'small' &&
    props.bordered &&
    css`
      & ${DescriptionsTableRow} td,
      & ${DescriptionsTableRow} th {
        padding: 4px 8px;
      }
    `}
  ${(props) =>
    props.size === 'large' &&
    props.bordered &&
    css`
      & ${DescriptionsTableRow} ${DescriptionsItem} {
        padding: 14px 16px;
      }
    `}
`;

DescriptionsTableTbody.defaultProps = {
  defaultTheme: DescriptionsDefaultTheme,
};

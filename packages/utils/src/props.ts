import React from 'react';
/**
 * Alias for all valid HTML props for `<div>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
export type HTMLSpanProps = React.HTMLAttributes<HTMLSpanElement>;

/**
 * Alias for all valid HTML props for `<a>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Alias for all valid HTML props for `<input>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Alias for all valid HTML props for `<textarea>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLTextProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Alias for all valid HTML props for `<button>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLButtonProps = React.HTMLProps<HTMLButtonElement>;

/**
 * Alias for all valid HTML props for `<li>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLLiProps = React.LiHTMLAttributes<HTMLLIElement>;

/**
 * Alias for all valid HTML props for `<li>` element.
 * Does not include React's `ref` or `key`.
 */
export type HTMLUlProps = React.LiHTMLAttributes<HTMLUListElement>;
// export type HTMLUlProps = React.HTMLAttributes<HTMLUListElement>;

export type AnchorProps =
  | 'download'
  | 'href'
  | 'hrefLang'
  | 'media'
  | 'ping'
  | 'rel'
  | 'target'
  | 'type'
  | 'referrerPolicy';

export interface IProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

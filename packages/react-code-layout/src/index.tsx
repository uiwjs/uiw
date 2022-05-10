import React from 'react';
import Code from './code';
import { CodeLayoutProps } from './interface';
import './styles/index.css';
export * from './interface';

const CodeLayout = (props: CodeLayoutProps) => {
  const {
    prefixCls = 'w-code-layout',
    code,
    className = '',
    copyNodes = '',
    customButton,
    bordered = true,
    noCode = false,
    codePadding = 0,
    ...rest
  } = props;
  return (
    <div className={`${prefixCls} ${prefixCls}-body-${bordered} ${className}`}>
      <div {...rest} className={`preview preview-body-${bordered}`} />
      {!noCode && <Code codePadding={codePadding} customButton={customButton} code={code} copyNodes={copyNodes} />}
    </div>
  );
};
export default CodeLayout;

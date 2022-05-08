import React from 'react';
import Code from './code';
import { PreviewProps } from './interface';
import './styles/index.css';
export * from './interface';
const Preview = (props: PreviewProps) => {
  const {
    code,
    className = '',
    copyNodes = '',
    codePenOptions,
    codeSandboxOptions,
    previewBodyClassName,
    language = 'jsx',
    ...rest
  } = props;
  return (
    <div className={`preview-fieldset ${className}`}>
      <div {...rest} className={`preview-body ${previewBodyClassName}`} />
      <Code
        language={language}
        codePenOptions={codePenOptions}
        codeSandboxOptions={codeSandboxOptions}
        code={code}
        copyNodes={copyNodes}
      />
    </div>
  );
};
export default Preview;

import Code from './code';
import { PreviewProps } from './interface';
import './styles/index.css';
export * from './interface';

const CodeLayout = (props: PreviewProps) => {
  const {
    prefixCls = 'w-code-layout',
    code,
    className = '',
    copyNodes = '',
    previewBodyClassName = '',
    language = 'jsx',
    bordered = true,
    noCode = false,
    codePadding = 0,
    codePenOptions,
    codeSandboxOptions,
    ...rest
  } = props;
  return (
    <div className={`${prefixCls} ${prefixCls}-body-${bordered} ${className}`}>
      <div {...rest} className={`preview preview-body-${bordered} ${previewBodyClassName}`} />
      {!noCode && (
        <Code
          codePadding={codePadding}
          codePenOptions={codePenOptions}
          codeSandboxOptions={codeSandboxOptions}
          language={language}
          code={code}
          copyNodes={copyNodes}
        />
      )}
    </div>
  );
};
export default CodeLayout;

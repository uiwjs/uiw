import { Fragment, useEffect, useRef } from 'react';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, isMeta, getURLParameters, CodeBlockData } from 'markdown-react-code-preview-loader';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { CodeProps } from 'react-markdown/lib/ast-to-react';
import Footer from './Footer';

/**
 *
 * ```js
 *    ```jsx mdx:preview&bg=#fff
 * ```
 */
const CodePreview = ({ inline, node, components, data, ...props }: CodeProps & CodeBlockData) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { 'data-meta': meta, ...rest } = props as any;

  useEffect(() => {
    if ($dom.current) {
      const parentElement = $dom.current.parentElement;
      if (parentElement && parentElement.parentElement) {
        parentElement.parentElement.replaceChild($dom.current, parentElement);
      }
    }
  }, [$dom]);

  if (inline || !isMeta(meta)) {
    return <code {...props} />;
  }
  const line = node.position?.start.line;
  const metaId = getMetaId(meta) || String(line);
  const Child = components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = data[metaId].value || '';
    const param = getURLParameters(meta);
    console.log(':param:', param);
    return (
      <CodeLayout
        ref={$dom}
        background={param.bg || param.background}
        disableCode={param.nocode === 'true'}
        disableToolbar={param.toolbar === 'true'}
        style={{ marginBottom: 10 }}
        toolbar={param.title || 'Example'}
        code={<pre {...rest} />}
        text={code}
      >
        <Child />
      </CodeLayout>
    );
  }
  return <code {...rest} />;
};

interface MarkdownProps extends CodeBlockData {
  path: string;
}

export default function Markdown(props: MarkdownProps) {
  return (
    <Fragment>
      <MarkdownPreview
        style={{ paddingTop: 30 }}
        source={props.source || ''}
        disableCopy
        warpperElement={{
          'data-color-mode': 'light',
        }}
        components={{
          code: (codeProps) => {
            return <CodePreview {...codeProps} {...props} />;
          },
        }}
      />
      <Footer path={props.path} />
    </Fragment>
  );
}

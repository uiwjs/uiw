import { Fragment, useEffect, useRef } from 'react';
import CodeLayout from 'react-code-preview-layout';
import { getMetaId, getURLParameters, CodeBlockData } from 'markdown-react-code-preview-loader';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Footer from './Footer';
import { type Node } from 'unist';
import styles from './index.module.less';

const Preview = CodeLayout.Preview;
const Code = CodeLayout.Code;
const Toolbar = CodeLayout.Toolbar;

interface CodePreviewProps extends CodeBlockData {
  'data-meta'?: string;
  node?: Node;
}

/**
 *
 * ```js
 *    ```jsx mdx:preview&bg=#fff
 * ```
 */
const CodePreview = ({ node, components, data, ...props }: CodePreviewProps) => {
  const $dom = useRef<HTMLDivElement>(null);
  const { headings, headingsList, ...rest } = props as any;

  useEffect(() => {
    if ($dom.current) {
      const parentElement = $dom.current.parentElement;
      if (parentElement && parentElement.parentElement) {
        parentElement.parentElement.replaceChild($dom.current, parentElement);
      }
    }
  }, [$dom]);

  const line = node?.position?.start.line;
  const meta = (node?.data as any)?.meta as string;
  const metaId = getMetaId(meta) || String(line);
  const Child = components[`${metaId}`];
  if (metaId && typeof Child === 'function') {
    const code = data[metaId].value || '';
    const param = getURLParameters(meta || '');
    return (
      <CodeLayout ref={$dom}>
        <Preview style={{ background: param.bg || 'transparent' }}>
          <Child />
        </Preview>
        <Toolbar text={code}>{param.title || 'Example'}</Toolbar>
        <Code>
          <pre {...rest} />
        </Code>
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
        className={styles.markdownWrap}
        source={props.source || ''}
        disableCopy
        wrapperElement={{
          'data-color-mode': 'light',
        }}
        components={{
          code: (codeProps) => {
            return <CodePreview {...props} {...codeProps} />;
          },
        }}
      />
      <Footer path={props.path} />
    </Fragment>
  );
}

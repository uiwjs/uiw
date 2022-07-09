import MarkdownPreview from '@uiw/react-markdown-preview';
import pkg from 'uiw/package.json';
import Code from './Code';
import Footer from './Footer';
import styles from './index.module.less';
import useMdData from './../useMdData';
import { CodeBlockData } from 'markdown-react-code-preview-loader';
import { Loader } from 'uiw';
import { getMetaId, isMeta, getURLParameters } from 'markdown-react-code-preview-loader';
import './index.css';
export type CreatePageProps<T> = {
  dependencies?: T;
  path: string;
  renderPage?: (lang?: string) => Promise<CodeBlockData>;
};

export default function CreatePage<T>(props: CreatePageProps<T>) {
  const { renderPage, path } = props;
  const { mdData, loading } = useMdData(renderPage);
  const version = pkg.version || '2.0.0';
  // console.log(mdData);
  if (!mdData.source) {
    return null;
  }

  return (
    <div>
      <Loader style={{ width: '100%' }} loading={loading} tip="loading...">
        <div>
          <MarkdownPreview
            source={mdData.source}
            className={styles.markdown}
            components={{
              /**
               * bordered 边框
               * bgWhite 设置代码预览背景白色，否则为格子背景。
               * noCode 不显示代码编辑器。
               * noPreview 不显示代码预览效果。
               * noScroll 预览区域不显示滚动条。
               * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
               */
              code: ({ inline, node, ...props }) => {
                const {
                  'data-meta': meta,
                  noPreview,
                  noScroll,
                  bgWhite,
                  noCode,
                  codePen,
                  codeSandboxOption,
                  codeSandbox,
                  bordered,
                  ...rest
                } = props as any;
                if (inline || !isMeta(meta)) {
                  return <code {...rest} />;
                }
                const line = node.position?.start.line;
                const metaId = getMetaId(meta) || String(line);
                const Child = mdData.components[`${metaId}`];
                const parameters = getURLParameters(meta);
                if (metaId && typeof Child === 'function') {
                  const copyNodes = mdData.data[metaId].value || '';
                  return (
                    <Code
                      disableToolbar={noCode}
                      codePen={parameters.codePen}
                      codeSandbox={parameters.codeSandbox}
                      disableCheckered={!!parameters.disableCheckered}
                      // background={parameters.background}
                      version={version}
                      code={
                        <pre>
                          <code {...rest} />
                        </pre>
                      }
                      text={copyNodes}
                    >
                      <Child />
                    </Code>
                  );
                }
                return <code {...rest} />;
              },
            }}
          />
        </div>
      </Loader>
      <div className={styles.docinfo}>
        <Footer path={path} />
      </div>
    </div>
  );
}

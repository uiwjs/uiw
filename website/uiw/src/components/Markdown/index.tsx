import React, { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import rehypeAttr from 'rehype-attr';
import Code, { CodeProps } from './Code';
import Footer from './Footer';
import styles from './index.module.less';

export type CreatePageProps<T> = {
  dependencies?: T;
  path: string;
  renderPage?: () => Promise<string>;
};

const getCodeStr = (data: any[] = [], code: string = '') => {
  data.forEach((node) => {
    if (node.type === 'text') {
      code += node.value;
    } else if (node.children && Array.isArray(node.children)) {
      code += getCodeStr(node.children);
    }
  });
  return code;
};

export default function CreatePage<T>(props: CreatePageProps<T>) {
  const { renderPage, dependencies, path } = props;
  const [mdStr, setMdStr] = useState('');

  // @ts-ignore
  // eslint-disable-next-line
  const version = VERSION || '2.0.0';
  useEffect(() => {
    if (renderPage) {
      renderPage()
        .then((str) => {
          setMdStr(str);
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <MarkdownPreview
        source={mdStr}
        className={styles.markdown}
        rehypePlugins={[[rehypeAttr, { properties: 'attr' }]]}
        components={{
          /**
           * bgWhite 设置代码预览背景白色，否则为格子背景。
           * noCode 不显示代码编辑器。
           * noPreview 不显示代码预览效果。
           * noScroll 预览区域不显示滚动条。
           * codePen 显示 Codepen 按钮，要特别注意 包导入的问题，实例中的 import 主要用于 Codepen 使用。
           */
          code: ({
            inline,
            node,
            noPreview,
            noScroll,
            bgWhite,
            noCode,
            codePen,
            codeSandbox,
            ...props
          }) => {
            const conf = {
              noPreview,
              noScroll,
              bgWhite,
              noCode,
              codePen,
              codeSandbox,
            } as CodeProps;
            if (
              noPreview ||
              noScroll ||
              bgWhite ||
              noCode ||
              codePen ||
              codeSandbox
            ) {
              return (
                <Code
                  {...conf}
                  code={getCodeStr(node.children)}
                  dependencies={dependencies}
                  language={(props.className || '').replace(/^language-/, '')}
                />
              );
            }
            return <code {...props} />;
          },
        }}
      />
      <div className={styles.docinfo}>
        <Footer path={path} />
      </div>
    </div>
  );
}

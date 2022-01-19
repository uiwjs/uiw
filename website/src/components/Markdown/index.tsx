import { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import pkg from 'uiw/package.json';
import Code from './Code';
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

  const version = pkg.version || '2.0.0';
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

  if (!mdStr) {
    return null;
  }

  return (
    <div>
      <MarkdownPreview
        source={mdStr}
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
            const { noPreview, bordered, noScroll, bgWhite, noCode, codePen } = props as any;
            if (inline) {
              return <code {...props} />;
            }
            const config = {
              noPreview,
              bordered,
              noScroll,
              bgWhite,
              noCode,
              codePen,
            } as any;
            if (Object.keys(config).filter((name) => config[name] !== undefined).length === 0) {
              return <code {...props} />;
            }
            return (
              <Code
                version={version}
                code={getCodeStr(node.children)}
                dependencies={dependencies}
                {...{ noPreview, bordered, noScroll, bgWhite, noCode, codePen }}
              />
            );
          },
        }}
      />
      <div className={styles.docinfo}>
        <Footer path={path} />
      </div>
    </div>
  );
}

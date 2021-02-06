import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CodePreview from '@uiw/react-code-preview';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Heading from './Heading';
import Footer from './Footer';
import styles from './index.module.less';

export type CreatePageProps<T> = {
  dependencies?: T;
  path: string;
  renderPage?: () => Promise<string>;
};

const components = new Map();
export default function CreatePage<T>(props: CreatePageProps<T>) {
  const { renderPage, dependencies, path } = props;
  const [mdStr, setMdStr] = useState('');
  async function getMarkdown() {
    if (!renderPage || typeof renderPage !== 'function') return;
    components.clear();
    const md = await renderPage();
    const markdown = (md || '').replace(
      /<!--\s?DemoStart\s?(.*)-->([^]+?)<!--\s?End\s?-->/g,
      (match, parame, code, offset) => {
        parame = parame.replace(/(^,*)|(,*$)/g, '');
        parame = parame ? parame.split(',') : [];

        const bgWhite = parame.indexOf('bgWhite') > -1;
        const noCode = parame.indexOf('noCode') > -1;
        const noPreview = parame.indexOf('noPreview') > -1;
        const noScroll = parame.indexOf('noScroll') > -1;
        const codePen = parame.indexOf('codePen') > -1;
        const codeSandbox = parame.indexOf('codeSandbox') > -1;

        const id = offset.toString(36);
        const codeStr = code.match(/```(.*)\n([^]+)```/);

        // @ts-ignore
        // eslint-disable-next-line
        const version = VERSION || '2.0.0';
        const codePenOption = !codePen
          ? undefined
          : {
              title: `uiw${version} - demo`,
              includeModule: ['uiw'],
              js:
                codeStr[2].replace(
                  '_mount_',
                  'document.getElementById("container")',
                ) || '',
              html: '<div id="container" style="padding: 24px"></div>',
              css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
              js_external: `https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.2/index.js`,
            };
        const codeSandboxOption = !codeSandbox
          ? undefined
          : {
              files: {
                'sandbox.config.json': {
                  content: `{
                "template": "node",
                "container": {
                  "startScript": "start",
                  "node": "14"
                }
              }`,
                },
                'public/index.html': {
                  content: `<div id="container"></div>`,
                },
                'src/index.js': {
                  content: codeStr[2].replace(
                    '_mount_',
                    'document.getElementById("container")',
                  ),
                },
                '.kktrc.js': {
                  content: `import webpack from "webpack";\nimport lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};`,
                },
                'package.json': {
                  content: {
                    name: 'uiw-demo',
                    description: `uiw v${version} - demo`,
                    dependencies: {
                      react: 'latest',
                      'react-dom': 'latest',
                      uiw: 'latest',
                    },
                    devDependencies: {
                      '@kkt/less-modules': '6.0.x',
                      kkt: '6.0.11',
                      typescript: '4.1.3',
                    },
                    license: 'MIT',
                    scripts: {
                      start: 'kkt start',
                      build: 'kkt build',
                      test: 'kkt test --env=jsdom',
                    },
                    browserslist: [
                      '>0.2%',
                      'not dead',
                      'not ie <= 11',
                      'not op_mini all',
                    ],
                  },
                },
              },
            };
        components.set(
          id,
          React.createElement(
            CodePreview,
            Object.assign({
              code: codeStr[2],
              dependencies: dependencies || {},
              noPreview,
              bgWhite,
              noCode,
              noScroll,
              codePenOption,
              codeSandboxOption,
            }),
            codeStr[2],
          ),
        );
        return `<div id=${id}></div>`;
      },
    );
    await setMdStr(markdown);
    renderDOM();
  }

  function renderDOM() {
    for (const [id, component] of components) {
      const div = document.getElementById(id);
      if (div instanceof HTMLElement) {
        // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(div));
        ReactDOM.render(component, div);
      }
    }
  }
  useEffect(() => {
    getMarkdown();
    return () => {
      if (components) {
        components.clear();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <MarkdownPreview renderers={{ heading: Heading }} source={mdStr} />
      <div className={styles.docinfo}>
        <Footer path={path} />
      </div>
    </div>
  );
}

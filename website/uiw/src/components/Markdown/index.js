import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CodePreview from '@uiw/react-code-preview';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Heading from './Heading';
import Footer from './Footer';
import styles from './index.module.less';

const components = new Map();
export default function CreatePage(props = {}) {
  const { renderPage, dependencies, path } = props;
  const [mdStr, setMdStr] = useState('');
  async function getMarkdown() {
    if (!renderPage || typeof renderPage !== 'function') return;
    components.clear();
    const md = await props.renderPage();
    const markdown = md.replace(
      /<!--\s?DemoStart\s?(.*)-->([^]+?)<!--\s?End\s?-->/g,
      (match, parame, code, offset) => {
        parame = parame.replace(/(^,*)|(,*$)/g, '');
        parame = parame ? parame.split(',') : [];

        const bgWhite = parame.indexOf('bgWhite') > -1;
        const noCode = parame.indexOf('noCode') > -1;
        const noPreview = parame.indexOf('noPreview') > -1;
        const noScroll = parame.indexOf('noScroll') > -1;
        const codePen = parame.indexOf('codePen') > -1;

        const id = offset.toString(36);
        const codeStr = code.match(/```(.*)\n([^]+)```/);

        // eslint-disable-next-line
        const version = VERSION || '2.0.0';
        const codePenOption = !codePen
          ? undefined
          : {
              title: `uiw${version} - demo`,
              js:
                codeStr[2].replace(
                  '_mount_',
                  'document.getElementById("container")',
                ) || '',
              html: '<div id="container" style="padding: 24px"></div>',
              css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
              js_external: `https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.0/index.js`,
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

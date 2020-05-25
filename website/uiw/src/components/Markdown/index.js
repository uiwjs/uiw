import React from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'uiw';
import CodePreview from '@uiw/react-code-preview';
import MarkdownPreview from '@uiw/react-markdown-preview';
import Heading from './Heading';
import styles from './index.module.less';

export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
    this.components = new Map();
  }
  // eslint-disable-next-line camelcase
  async UNSAFE_componentWillMount() {
    const md = await this.renderPage();
    this.setState({ markdown: md });
  }
  componentDidUpdate() {
    this.renderDOM();
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      this.div = document.getElementById(id);
      if (this.div instanceof HTMLElement) {
        // ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.div));
        ReactDOM.render(component, this.div);
      }
    }
  }
  render() {
    let markdown = null;
    if (typeof this.state.markdown === 'string') {
      this.components.clear();
      // eslint-disable-next-line
      markdown = this.state.markdown.replace(/<!--\s?DemoStart\s?(.*)-->([^]+?)<!--\s?End\s?-->/g, (match, parame, code, offset) => {
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
        const codePenOption = !codePen ? undefined : {
          title: `uiw${version} - demo`,
          js: codeStr[2].replace('_mount_', 'document.getElementById("container")') || '',
          html: '<div id="container" style="padding: 24px"></div>',
          css_external: `https://unpkg.com/uiw@${version}/dist/uiw.min.css`,
          js_external: `https://unpkg.com/react@16.x/umd/react.development.js;https://unpkg.com/react-dom@16.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@${version}/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.0.0/index.js`,
        };
        this.components.set(id, React.createElement(CodePreview, Object.assign({
          code: codeStr[2],
          dependencies: this.dependencies || {},
          noPreview,
          bgWhite,
          noCode,
          noScroll,
          codePenOption,
        }), codeStr[2]));
        return `<div id=${id}></div>`;
      });
    }
    const url = /^http/.test(this.path) ? this.path : `https://github.com/uiwjs/uiw/blob/master/${this.path}`;
    return (
      <div>
        <MarkdownPreview renderers={{ heading: Heading }} source={markdown} />
        <div className={styles.docinfo}>
          犯了错误还是想对文件做出贡献？
          <a href={url} target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a>
          <br />
          <a href="https://github.com/uiwjs/uiw/issues" target="_blank" rel="noopener noreferrer">反馈建议</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw/issues/new">提交bug</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">Github</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt-next">kkt</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt-next-ssr">@kkt/ssr</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="http://uiw.gitee.io">国内镜像</a>
        </div>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Divider } from 'uiw';
import Preview from './Preview';
import Canvas from './Canvas';
import styles from './index.module.less';

export default class CreatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
    this.components = new Map();
  }
  async componentWillMount() {
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

        const id = offset.toString(36);
        const codeStr = code.match(/```(.*)\n([^]+)```/);
        this.components.set(id, React.createElement(Canvas, Object.assign({
          dependencies: this.dependencies || {},
          parame: { bgWhite, noCode, noPreview },
        }, this.props), codeStr[2]));
        return `<div id=${id}></div>`;
      });
    }
    return (
      <div>
        <Preview source={markdown} />
        <div className={styles.docinfo}>
          犯了错误还是想对文件做出贡献？
          <a href={`https://github.com/uiwjs/uiw/blob/master/${this.path}`} target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a>
          <br />
          <a href="https://github.com/uiwjs/uiw/issues" target="_blank" rel="noopener noreferrer">反馈建议</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw/issues/new">提交bug</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">Github</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jaywcjlove/kkt">kkt</a>
          <Divider type="vertical" />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jaywcjlove/kkt-ssr">@kkt/ssr</a>
        </div>
      </div>
    );
  }
}

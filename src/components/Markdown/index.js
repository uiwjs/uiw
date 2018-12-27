import React from 'react';
import ReactDOM from 'react-dom';
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
        ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.div));
        ReactDOM.render(component, this.div);
      }
    }
  }
  render() {
    let markdown = null;
    if (typeof this.state.markdown === 'string') {
      this.components.clear();
      // eslint-disable-next-line
      markdown = this.state.markdown.replace(/<!--\s?DemoStart\s?-->([^]+?)<!--\s?End\s?-->/g, (match, code, offset) => {
        const id = offset.toString(36);
        const codeStr = code.match(/```(.*)\n([^]+)```/);
        this.components.set(id, React.createElement(Canvas, Object.assign({
          dependencies: this.dependencies || {},
        }, this.props), codeStr[2]));
        return `<div id=${id}></div>`;
      });
    }
    return (
      <div>
        <Preview source={markdown} />
        <div className={styles.docinfo}>
          犯了错误还是想对文件做出贡献？
          <a href={`https://github.com/uiw-react/uiw/blob/master/${this.path}`} target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a>
          <br />
          <a href="https://github.com/uiw-react/uiw/issues" target="_blank" rel="noopener noreferrer">反馈建议</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw/issues/new">提交bug</a> | <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw">Github</a>
        </div>
      </div>
    );
  }
}

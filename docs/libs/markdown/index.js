import React from 'react';
import ReactDOM from 'react-dom';
import locales from '../../locales';
import prism from 'prismjs';
import marked from 'marked';
import Canvas from './canvas';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:""
    }
    this.components = new Map;
  }
  componentDidMount() {
    this.renderMarkdown(this.getLang(),this.getPageName())
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }
  renderDOM() {
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);
      if (div instanceof HTMLElement) {
        ReactDOM.unmountComponentAtNode(div);
        ReactDOM.render(component, div);
      }
    }
    prism.highlightAll();
  }
  renderMarkdown(locale, fileName){
    return import(`../../md/${locale}/${fileName}.md`).then(module => {
      this.setState({
        markdown:module
      })
    })
  }
  getLang(){
    return localStorage.getItem('WUI_LANG') || 'cn'
  }
  getPageName() {
    const routes = location.hash.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
    if (routes) {
      return routes[3] || routes[4];
    }
    return 'quick-start';
  }
  render() {
    const {markdown} = this.state;
    let prefixCls = 'w-docs'
    if (typeof markdown === 'string') {
      this.components.clear();
      const html = marked(markdown.replace(/\<\!--\s?DemoStart\s?--\>([^]+?)\<\!--\s?End\s?--\>/g, (match, p1, offset) => {
          const id = offset.toString(36);
          this.components.set(id, React.createElement(Canvas, Object.assign({
            name: this.getPageName()
          }, this.props), p1));

          return `<div id=${id}></div>`;
        }));
      return (
        <div className={`${prefixCls}-content-warpper`} dangerouslySetInnerHTML={{__html: html}} />
      )
    }else{
      return(
        <span></span>
      )

    }
  }
}


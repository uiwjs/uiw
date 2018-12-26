import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/index.module.less';
import langs from './prismLang';
// https://github.com/github/linguist/blob/master/lib/linguist/languages.yml

export default class CodeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeHtml: [],
    };
  }
  componentDidMount() {
    const { language, value } = this.props;
    let lang = language;
    if (language) {
      lang = language.toLowerCase();
    }
    // shebang(#!) 判断
    if (/^#!\/usr\/bin\/env\snode/.test(value)) lang = 'javascript';
    if (/^#!\/usr\/bin\/env\spython/.test()) lang = 'python';
    if (/^#!\s*\/bin\/(bash|sh)/.test()) lang = 'powershell';
    if (/(tex)$/.test(language)) lang = 'latex';
    if (/(h)$/.test(language)) lang = 'c';
    if (/(js)$/.test(language)) lang = 'javascript';
    if (/(tsx)$/.test(language)) lang = 'jsx';
    if (/(bat)$/.test(language)) lang = 'batch';
    if (/(py)$/.test(language)) lang = 'python';
    if (/(rb)$/.test(language)) lang = 'ruby';
    if (/(gitconfig|editorconfig|gitmodules)$/.test(language)) lang = 'ini';
    if (/(yml)$/.test(language)) lang = 'yaml';
    if (/(styl)$/.test(language)) lang = 'stylus';
    if (/(stylelintrc|postcssrc)$/.test(language)) lang = 'json';
    if (/(sh|shell|bash|bats|cgi|command|fcgi|ksh|sh.in|tmux|tool|zsh|bash_history|bash_logout|bash_profile|bashrc|cshrc|login|profile|zlogin|zlogout|zprofile|zshenv|zshrc)$/.test(language)) lang = 'bash';
    if (/(ps1|psm1)$/.test(language)) lang = 'powershell';
    if (/^(html|htm|xml|ejs)/.test(language)) {
      this.highlight('html');
      return;
    }
    if (/^(ini|toml|javascript)$/.test(lang)) {
      return import(`./prismjs/${lang}.js`).then(() => {
        this.highlight(lang);
      }).catch((err) => {
        throw (err);
      });
    }
    if (!langs.includes(lang)) {
      this.highlight(lang);
      return;
    }
    return import(`prismjs/components/prism-${lang}.min.js`).then(() => {
      this.highlight(lang);
    }).catch((err) => {
      throw (err);
    });
  }
  highlight(lang) {
    let html = this.props.value;
    if (Prism.languages[lang]) {
      html = Prism.highlight(this.props.value, Prism.languages[lang], lang);
    }
    this.setState({ html, lang });
  }
  getInstance(node) {
    if (node) this.code = node;
  }
  render() {
    const { lineHighlight, className } = this.props;
    const countLine = this.state.html ? this.state.html.split('\n') : [''];
    return (
      <pre ref={this.getInstance.bind(this)} data-line="1" className={classNames('highlight', className)}>
        <code style={{ height: countLine.length * 20 }} className={classNames(`language-${this.props.language}`)} dangerouslySetInnerHTML={{ __html: this.state.html }} />
        {lineHighlight && countLine.map((item, idx) => {
          return (
            <div key={idx} id={`L${idx + 1}`} style={{ left: 0, top: idx * 20 }} className="line-number" data-start={idx + 1} />
          );
        })}
      </pre>
    );
  }
}

CodeView.propTypes = {
  lineHighlight: PropTypes.bool,
  value: PropTypes.string,
  lang: PropTypes.string,
};

CodeView.defaultProps = {
  lineHighlight: false,
  language: 'markup',
  value: '',
};

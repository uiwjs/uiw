import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from '@uiw/react-codemirror';
import PropTypes from 'prop-types';
import { transform } from '@babel/standalone';
import styles from './index.module.less';
import 'codemirror/keymap/sublime';
import './monokai.css';

const trim = str => String.prototype.trim.call(str) || '';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.playerId = `${parseInt(Math.random() * 1e9, 10).toString(36)}`;
  }
  componentDidMount() {
    this.setState({
      code: this.props.children,
    });
    this.executeCode(this.props.children);
  }
  executeCode(codeStr) {
    try {
      const args = ['context', 'React', 'ReactDOM', 'Component'];
      const argv = [this, React, ReactDOM, Component];
      // eslint-disable-next-line
      for (const key in Element) {
        args.push(key);
        argv.push(Element[key]);
      }
      const input = `
        ${codeStr}
        ReactDOM.render(<Demo />, document.getElementById('${this.playerId}'));
      `;
      const code = transform(input, { presets: ['es2015', 'react'] }).code;
      args.push(code);
      // eslint-disable-next-line
      new Function(...args).apply(null, argv)
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        throw err;
      }
    } finally {
      // console.log('@@@');
    }
  }
  render() {
    return (
      <div className={styles.warpper}>
        <div className={styles.demo}>
          <div className={styles.background}>
            <svg width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'flex' }}>
              <pattern id="pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <rect fill="rgba(0, 0, 0, 0.06)" x="0" width="8" height="8" y="0" />
                <rect fill="rgba(0, 0, 0, 0.06)" x="8" width="8" height="8" y="8" />
              </pattern>
              <rect fill="url(#pattern)" x="0" y="0" width="100%" height="100%" />
            </svg>
          </div>
          <div className={styles.source} id={this.playerId} />
        </div>
        <div className={styles.code}>
          <CodeMirror
            value={trim(this.state.code)}
            onChange={(editor) => {
              this.executeCode(editor.getValue());
            }}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              mode: 'jsx',
            }}
          />
        </div>
      </div>
    );
  }
}

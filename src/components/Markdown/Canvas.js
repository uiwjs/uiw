import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from '@uiw/react-codemirror';
import classNames from 'classnames';
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
      height: 1,
      width: 1,
      maxHeight: 'auto',
      visible: false,
    };
    this.playerId = `${parseInt(Math.random() * 1e9, 10).toString(36)}`;
  }
  componentDidMount() {
    const { parame } = this.props;
    if (!parame.noPreview) {
      this.executeCode(this.props.children);
    }
    this.initHeight = 3;
  }
  onSwitchSource() {
    if (this.demoDom) {
      const demo = document.getElementById(this.playerId);
      if (this.initHeight === 3) {
        this.initHeight = demo.clientHeight;
      }

      const height = this.initHeight > 300 ? this.initHeight : 300;
      this.setState({
        width: this.state.width === 1 ? this.demoDom.clientWidth / 2 : 1,
        height: this.state.width === 1 ? height : this.initHeight,
        maxHeight: this.initHeight,
        visible: true,
      });
    }
  }
  executeCode(codeStr) {
    try {
      const args = ['context', 'React', 'ReactDOM', 'Component'];
      const argv = [this, React, ReactDOM, Component];
      const Elm = this.props.dependencies;
      // eslint-disable-next-line
      for (const key in Elm) {
        args.push(key);
        argv.push(Elm[key]);
      }
      const input = `
        ${codeStr}
        ReactDOM.render(<Demo />, document.getElementById('${this.playerId}'));
      `;
      const code = transform(input, { presets: ['es2015', 'react'] }).code;
      args.push(code);
      // eslint-disable-next-line
      new Function(...args).apply(null, argv);
    } catch (err) {
      if (process.env.NODE_ENV !== 'production') {
        throw err;
      }
    } finally {
      // console.log('@@@');
    }
  }
  render() {
    const { parame: { noCode, noPreview, bgWhite } } = this.props;
    return (
      <div className={styles.warpper} ref={node => this.warpperDom = node}>
        <div className={styles.demo} ref={node => this.demoDom = node}>
          {!bgWhite && (
            <div className={styles.background}>
              <svg width="100%" height="100%" preserveAspectRatio="none" style={{ display: 'block' }}>
                <pattern id="pattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                  <rect fill="rgba(0, 0, 0, 0.06)" x="0" width="8" height="8" y="0" />
                  <rect fill="rgba(0, 0, 0, 0.06)" x="8" width="8" height="8" y="8" />
                </pattern>
                <rect fill="url(#pattern)" x="0" y="0" width="100%" height="100%" />
              </svg>
            </div>
          )}
          {!noPreview && (
            <div className={styles.scroll} style={{ maxHeight: this.state.maxHeight }}>
              <div className={styles.source} id={this.playerId} />
            </div>
          )}
        </div>
        {!noCode && (
          <div
            style={{ width: this.state.width, height: this.state.height }}
            className={classNames(styles.code)}
          >
            {this.state.visible && (
              <CodeMirror
                value={trim(this.props.children)}
                onChange={(editor) => {
                  this.executeCode(editor.getValue());
                }}
                options={{
                  theme: 'monokai',
                  keyMap: 'sublime',
                  mode: 'jsx',
                  lineNumbers: false,
                }}
              />
            )}
          </div>
        )}
        {!noCode && (
          <div className={styles.controlBtn} onClick={this.onSwitchSource.bind(this)}>{this.state.width === 1 ? '显示代码' : '隐藏代码'}</div>
        )}
      </div>
    );
  }
}

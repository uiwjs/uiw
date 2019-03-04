import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Split } from 'uiw';
import CodeMirror from '@uiw/react-codemirror';
import classNames from 'classnames';
import { transform } from '@babel/standalone';
import icon from './icon';
import styles from './index.module.less';
import 'codemirror/keymap/sublime';
import './monokai.css';

const trim = str => String.prototype.trim.call(str) || '';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      height: '100%',
      width: 1,
      visible: false,
      fullScreen: false,
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
  setOutsideHeight(fullScreen) {
    const { width } = this.state;
    if (this.warpper) {
      let height = this.oldHeight < 300 ? 300 : this.oldHeight;
      if ((width === 1 && fullScreen === false)) {
        height = this.oldHeight;
      }
      this.warpper.style.height = fullScreen ? '100%' : `${height}px`;
    }
  }
  onFullScreen() {
    const { fullScreen } = this.state;
    this.setState({ fullScreen: !fullScreen }, () => {
      this.setOutsideHeight(!fullScreen);
      document.body.style.overflow = !fullScreen ? 'hidden' : 'inherit';
      if (!fullScreen && this.demoBox) {
        this.demoBox.style.maxWidth = 'inherit';
      }
    });
  }
  initOldHeight() {
    const demo = document.getElementById(this.playerId);
    if (this.initHeight === 3) {
      this.oldHeight = demo.clientHeight;
      this.initHeight = demo.clientHeight;
      const width = demo.clientWidth / 2;
      this.oldWidth = width < 300 ? demo.clientWidth : width;
    }
  }
  onSwitchSource() {
    const { fullScreen } = this.state;
    if (this.warpper) {
      this.initOldHeight();
      this.setState({
        width: this.state.width === 1 ? this.oldWidth : 1,
        visible: true,
      }, () => {
        this.editor.focus();
        this.setOutsideHeight(fullScreen);
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
  getInstance = (instance) => {
    if (instance) {
      this.codemirror = instance.codemirror;
      this.editor = instance.editor;
    }
  }
  render() {
    const { parame: { noCode, noPreview, bgWhite, noScroll } } = this.props;
    const styl = {};
    if (this.state.width === 1) {
      styl.maxWidth = 'initial';
    }
    return (
      <div
        ref={node => this.warpper = node}
        className={classNames(styles.warpper, {
          [styles.fullScreen]: this.state.fullScreen,
        })}
      >
        <Split style={{ flex: 1 }} visiable={this.state.width !== 1}>
          <div
            className={classNames(styles.demo, {
              [`${styles.noScroll}`]: noScroll,
            })}
            style={styl}
            ref={node => this.demoBox = node}
          >
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
              <div className={styles.scroll}>
                <div className={styles.source} id={this.playerId} />
              </div>
            )}
          </div>
          {!noCode && (
            <div
              style={{ maxWidth: this.state.width, height: this.state.height }}
              className={classNames(styles.code)}
            >
              {this.state.visible && (
                <CodeMirror
                  value={trim(this.props.children)}
                  ref={this.getInstance}
                  onChange={(editor) => {
                    this.executeCode(editor.getValue());
                  }}
                  options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    mode: 'jsx',
                  }}
                />
              )}
            </div>
          )}
        </Split>
        {!noCode && (
          <div className={styles.control}>
            <div className={styles.btn} onClick={this.onSwitchSource.bind(this)}>{this.state.width === 1 ? '显示代码' : '隐藏编辑器'}</div>
            <div className={styles.fullScreenBtn} onClick={this.onFullScreen.bind(this)}>
              {icon.full}
            </div>
          </div>
        )}
      </div>
    );
  }
}

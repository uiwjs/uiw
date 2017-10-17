import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import marked from 'marked';
import prism from 'prismjs';
import { transform } from 'babel-standalone';

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBlock: false
    };
  }

  componentDidMount() {
    this.renderSource();
  }

  componentDidUpdate() {
    this.renderSource();
  }
  blockControl() {
    this.setState({
      showBlock: !this.state.showBlock
    });
  }


  renderSource() {
    if (this.shouldUpdate) {
      const div = this.refs.source;
      if (div instanceof HTMLElement) {
        require(['../../../src'], Element => {
          const args = ['context', 'React'], argv = [this, React];
          for (const key in Element) {
            args.push(key);
            argv.push(Element[key]);
          }
          args.push(this.component);

          ReactDOM.unmountComponentAtNode(div);
          ReactDOM.render(new Function(...args).apply(null, argv), div);
        });
      }
    }

    delete this.shouldUpdate;
  }

  render() {
    const { prefixCls } = this.props;
    const document = this.props.children.match(/([^]*)\n?(```[^]+```)/);
    const source = document[2].match(/```(.*)\n([^]+)```/);
    const description = marked(document[1]);
    const highlight = marked(document[2]);
    const component = transform(`
      class Demo extends React.Component {
        ${source[2]}
      }
      __rtn = (function() {
        return <Demo {...context.props} />
      })();
    `, {
        presets: ['es2015', 'react']
      }).code.replace('__rtn = ', 'return ');

    this.shouldUpdate = component !== this.component || this.component === undefined;
    this.component = component;


    return (
      <div className={`${prefixCls}-demo-warpper ${prefixCls}-${this.props.name}`}>
        <div className={`${prefixCls}-demo-source`} ref="source"></div>
        <div className={`${prefixCls}-demo-meta`} style={{
          height: this.state.showBlock ? 'inherit' : 0
        }}>
          {
            description &&
            <div ref="description" className={`${prefixCls}-demo-des`} dangerouslySetInnerHTML={{ __html: description }}></div>
          }
          <div ref="highlight" className={`${prefixCls}-demo-highlight`} dangerouslySetInnerHTML={{ __html: highlight }}></div>
        </div>
        {
          this.state.showBlock ?
            <div className={`${prefixCls}-demo-control`} onClick={this.blockControl.bind(this)}>
              <span>{this.props.locale.hide}</span>
            </div>
            :
            <div className={`${prefixCls}-demo-control`} onClick={this.blockControl.bind(this)}>
              <span>{this.props.locale.show}</span>
            </div>
        }
      </div>
    )
  }
}

Canvas.propTypes = {
  locale: PropTypes.object,
  prefixCls: PropTypes.string,
};

Canvas.defaultProps = {
  locale: {},
  prefixCls: "w-docs"
};

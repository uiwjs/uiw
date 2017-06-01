import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pages from './pages';
import locales from './locales';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.addEventListener("hashchange", () => {
      window.scrollTo(0, 0);
      this.setPage();
    }, false);
  }
  componentDidMount() {
    this.setPage(() => {
      if (!this.state.locale) {
        this.setLocale(localStorage.getItem('W_LANGUAGE') || 'zh-CN');
      }
    });
  }

  getPage() {
    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);
    if (routes) {
      if (locales.hasOwnProperty(routes[1])) {
        this.setState({ locale: routes[1] }, () => {
          localStorage.setItem('W_LANGUAGE', this.state.locale);
        });
      }
      return routes[2];
    }
    return 'quick-start';
  }
  setPage(fn) {
    this.setState({ page: this.getPage() }, fn);
  }

  getLocale(key) {
    const map = locales[this.state.locale] || {};
    return key.split('.').reduce((a, b) => {
      const parent = map[a];
      if (b) {
        return (parent || {})[b];
      }
      return parent;
    });
  }

  /**
   * 设置URL
   * @param {[type]} locale [zh-CN]
   */
  setLocale(locale) {
    window.location.hash = `/${locale}/${this.state.page}`;
  }


  getComponent(page) {
    this.components = this.components || Object.assign(Object.values(pages.components).reduce((a, b) => {
      return Object.assign(a, b);
    }, {}), pages.documents);

    const result = this.components[page];
    if (result) {
      return React.createElement(result.default, {
        locale: {
          show: this.getLocale('markdown.show'),
          hide: this.getLocale('markdown.hide')
        }
      });
    }
  }

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-menu-warpper`}>
          {
            Object.keys(pages.components).map(group => {
              return (
                <div className={`${prefixCls}-menu`} key={group}>
                  <div className={`${prefixCls}-menu-title`}>{group}</div>
                  <ul className={`${prefixCls}-menu-list`}>
                    {
                      Object.keys(pages.components[group]).map(page => {
                        return (
                          <li key={page} className={`${prefixCls}-menu-item`}>
                            <a 
                              href={`#/${this.state.locale}/${page}`} 
                              className={page === this.state.page ? 'active' : ''}>
                              {this.getLocale(`page.${page}`)}
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
        <div className={`${prefixCls}-content`}>
          {this.getComponent(this.state.page)}
        </div>
      </div>
    )
  }
}


App.defaultProps = {
  prefixCls: 'w-docs',
}
App.propTypes = {
  prefixCls: PropTypes.string,
}


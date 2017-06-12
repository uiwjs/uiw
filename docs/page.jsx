import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pages from './pages';
import locales from './locales';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.renderMenuGroup = this.renderMenuGroup.bind(this);
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
        this.setLocale(localStorage.getItem('WUI_LANG') || 'cn');
      }
    });
  }

  getPage() {
    const routes = location.hash.match(/(?:\/(.+))?\/(.+)/);
    if (routes) {
      if (locales.hasOwnProperty(routes[1])) {
        this.setState({ locale: routes[1] }, () => {
          localStorage.setItem('WUI_LANG', this.state.locale);
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
   * @param {[type]} locale [cn]
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

  renderMenuItems(page){
    const {prefixCls} = this.props;
    return (
      <li key={page} className={`${prefixCls}-menu-item`}>
        <a 
          href={`#/${this.state.locale}/${page}`} 
          className={page === this.state.page ? 'active' : ''}>
          {this.getLocale(`page.${page}`)}
        </a>
      </li>
    )
  }

  renderMenuGroup(group){
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}-menu`} key={group}>
        <div className={`${prefixCls}-menu-title`}>{this.getLocale(`category.${group}`)}</div>
        <ul className={`${prefixCls}-menu-list`}>
          {Object.keys(pages.components[group]).map(page => this.renderMenuItems(page))}
        </ul>
      </div>
    )
  }

  render() {
    const {prefixCls} = this.props;
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-menu-warpper`}>
          <div className={`${prefixCls}-menu-content`}>
          <div className={`${prefixCls}-logo`}>
            <a href={`#/${this.state.locale}/quick-start`} >
              <img src={require('./assets/logo.svg')} />
              <span>uiw</span>
            </a>
          </div>
          <ul className={`${prefixCls}-menu-list`}>
            {Object.keys(pages.documents).map(group => this.renderMenuItems(group)) }
          </ul>
          {Object.keys(pages.components).map(group => this.renderMenuGroup(group)) }
          </div>
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


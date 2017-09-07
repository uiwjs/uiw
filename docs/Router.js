import { HashRouter,Route ,Switch,Redirect,withRouter,Link} from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import locales from './locales';
import Bundle from "./lazyload";

/* eslint import/no-webpack-loader-syntax: off */
import QuickStart from 'bundle-loader?lazy!./pages/quick-start';
import Theme from 'bundle-loader?lazy!./pages/theme';
import Color from 'bundle-loader?lazy!./pages/color';
import Layout from 'bundle-loader?lazy!./pages/layout';
import icon from 'bundle-loader?lazy!./pages/icon';
import button from 'bundle-loader?lazy!./pages/button';
import hotkeys from 'bundle-loader?lazy!./pages/hotkeys';
import FormCom from 'bundle-loader?lazy!./pages/form';
import radio from 'bundle-loader?lazy!./pages/radio';
import checkbox from 'bundle-loader?lazy!./pages/checkbox';
import select from 'bundle-loader?lazy!./pages/select';
import SwitchCom from 'bundle-loader?lazy!./pages/switch';
import slider from 'bundle-loader?lazy!./pages/slider';
import input from 'bundle-loader?lazy!./pages/input';
import inputNumber from 'bundle-loader?lazy!./pages/input-number';
import timePicker from 'bundle-loader?lazy!./pages/time-picker';
import datePicker from 'bundle-loader?lazy!./pages/date-picker';
import Calendar from 'bundle-loader?lazy!./pages/calendar';
import table from 'bundle-loader?lazy!./pages/table';
import tooltip from 'bundle-loader?lazy!./pages/tooltip';
import tag from 'bundle-loader?lazy!./pages/tag';
import rate from 'bundle-loader?lazy!./pages/rate';
import badge from 'bundle-loader?lazy!./pages/badge';
import menu from 'bundle-loader?lazy!./pages/menu';
import paging from 'bundle-loader?lazy!./pages/paging';
import breadcrumb from 'bundle-loader?lazy!./pages/breadcrumb';
import alert from 'bundle-loader?lazy!./pages/alert';
import modal from 'bundle-loader?lazy!./pages/modal';
import message from 'bundle-loader?lazy!./pages/message';
import notification from 'bundle-loader?lazy!./pages/notification';
import loading from 'bundle-loader?lazy!./pages/loading';
import transition from 'bundle-loader?lazy!./pages/transition';
/* eslint import/no-webpack-loader-syntax: off */

const getLang =(key) =>{
  let locale = localStorage.getItem('WUI_LANG') || 'cn';
  const map = locales[locale] || {};
  return key.split('.').reduce((a, b) => {
    const parent = map[a];
    if (b) {
      return (parent || {})[b];
    }
    return parent;
  });
}
const asyncComponent = (comp) => (props) => {
  return (
    <Bundle load={comp}>
      {(About) => {
        return <About locale={{
          show: getLang('markdown.show'),
          hide: getLang('markdown.hide')
          }} {...props} />
      }}
    </Bundle>
  )
}

const routes = {
  documents:[
    { path:"/:lang/quick-start",exact:true,component:asyncComponent(QuickStart)},
    { path:"/:lang/theme",component:asyncComponent(Theme)},
  ],
  components:{
    'Basic':[
      {path:"/:lang/color",component:asyncComponent(Color)},
      {path:"/:lang/layout",component:asyncComponent(Layout)},
      {path:"/:lang/icon",component:asyncComponent(icon)},
      {path:"/:lang/button",component:asyncComponent(button)},
      {path:"/:lang/hotkeys",component:asyncComponent(hotkeys)},
    ],
    'Form':[
      {path:"/:lang/form",component:asyncComponent(FormCom)},
      {path:"/:lang/radio",component:asyncComponent(radio)},
      {path:"/:lang/checkbox",component:asyncComponent(checkbox)},
      {path:"/:lang/select",component:asyncComponent(select)},
      {path:"/:lang/slider",component:asyncComponent(slider)},
      {path:"/:lang/switch",component:asyncComponent(SwitchCom)},
      {path:"/:lang/input",component:asyncComponent(input)},
      {path:"/:lang/input-number",component:asyncComponent(inputNumber)},
      {path:"/:lang/time-picker",component:asyncComponent(timePicker)},
      {path:"/:lang/date-picker",component:asyncComponent(datePicker)},
    ],
    'Data Display':[
      {path:"/:lang/calendar",component:asyncComponent(Calendar)},
      {path:"/:lang/table",component:asyncComponent(table)},
      {path:"/:lang/tooltip",component:asyncComponent(tooltip)},
      {path:"/:lang/tag",component:asyncComponent(tag)},
      {path:"/:lang/rate",component:asyncComponent(rate)},
      {path:"/:lang/badge",component:asyncComponent(badge)},
    ],
    'Navigation':[
      {path:"/:lang/menu",component:asyncComponent(menu)},
      {path:"/:lang/paging",component:asyncComponent(paging)},
      {path:"/:lang/breadcrumb",component:asyncComponent(breadcrumb)},
    ],
    'Feedback':[
      {path:"/:lang/alert",component:asyncComponent(alert)},
      {path:"/:lang/modal",component:asyncComponent(modal)},
      {path:"/:lang/message",component:asyncComponent(message)},
      {path:"/:lang/notification",component:asyncComponent(notification)},
      {path:"/:lang/loading",component:asyncComponent(loading)},
      {path:"/:lang/transition",component:asyncComponent(transition)},
    ]
  },
  redirect:[
    //重定向到 quick start 页面
    { path:"",redirect:"/cn/quick-start"}
  ]
}


const getComponent = (page)=>{
  if (page&&page.default) {
    return React.createElement(page.default, {
      locale: {
        show: getLang('markdown.show'),
        hide: getLang('markdown.hide')
      }
    });
  }
}
// 获取所有路由
const getRoutesTotal = (obj) => {
  let _obj = obj || routes;
  let arr = [];
  for(let a in _obj){
    if(_obj[a] instanceof Array){
      arr = arr.concat(_obj[a])
    }else{
      arr = arr.concat(getRoutesTotal(_obj[a])) 
    }
  }
  return arr
}

// 路由实例化
const getRoutes = () => {
  let routes = getRoutesTotal();
  return routes.map((item,idx)=>{
    let COM =item.component;
    if(!item.path) {
      return <Redirect key={idx} push to={{ pathname: item.redirect }} />
    }
    if(item.exact){
      return <Route exact key={idx} path={item.path} component={COM} />
    }else{
      return <Route key={idx} path={item.path} component={COM} />
    }
  })
}


const getPageName = (location) => {
  const routes = location.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
  if (routes) {
    return routes[3] || routes[4];
  }
  return 'quick-start';
}

const getLangName = () =>  localStorage.getItem('WUI_LANG') || 'cn';

const renderMenuLi = (item,idx) =>{
  if(!item.path) return null;
  if(getPageName(window.location.href) === getPageName(item.path)){
    return <li className="active" key={idx}>{getLang(`page.${getPageName(item.path)}`)}</li>
  }
  return (
    <li key={idx}>
      <Link to={`/${getLangName()}/${getPageName(item.path)}`}>
        {getLang(`page.${getPageName(item.path)}`)  }
      </Link>
    </li>
  )
}

const renderMenu = (obj) =>{
  let _obj = obj || routes;
  let html = []
  for(let a in _obj){
    if(_obj[a] instanceof Array){
      html = html.concat(_obj[a].map((item,idx) => renderMenuLi(item,idx)) )
    }else if(_obj[a] instanceof Object){
      for(let e in _obj[a]){
        if(_obj[a][e] instanceof Array){
          html = html.concat( 
            <ul>
              <li className="title">{getLang(`category.${e}`)}</li>
              {_obj[a][e].map((item) => renderMenuLi(item))}
            </ul>
          ) 
        }
      }
    }
  }
  return html
}
const RoutersContainer = withRouter(({history,location})=>{
  console.log("getPageName---:",history,getPageName(location.pathname))
  const prefixCls = 'w-docs';
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-menu-warpper`}>
        <div className={`${prefixCls}-menu-content`}>
          <div className={`${prefixCls}-logo`}>
            <img src={require('./assets/logo.svg')} />
            <span>uiw</span>
          </div>
          <ul className={`${prefixCls}-menu-list`}>
            {renderMenu()}
          </ul>
        </div>
      </div>
      <div className={`${prefixCls}-content`}>
        <Switch>
          {getRoutes()}
        </Switch>
      </div>
    </div>
  )
})

export default class Router extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.setPage(() => {
      if (!this.state.locale) {
        this.setLocale(localStorage.getItem('WUI_LANG') || 'cn');
      }
    });
  }
  componentWillMount(){
    window.addEventListener("hashchange", () => {
      this.setPage();
    }, false);
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
  setPage(fn) {
    this.setState({ page: this.getPage() }, fn);
  }
  getPage() {
    const routes = window.location.hash.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
    if (routes) {
      if (locales.hasOwnProperty(routes[1])) {
        this.setState({ locale: routes[1] }, () => {
          localStorage.setItem('WUI_LANG', this.state.locale);
        });
      }
      return routes[3] || routes[4];
    }
    return 'quick-start';
  }
  render() {
    return (
      <HashRouter>
        <RoutersContainer/>
      </HashRouter>
    )
  }
}



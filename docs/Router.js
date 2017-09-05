import { HashRouter,Route ,Switch,Redirect,withRouter,Link} from 'react-router-dom'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import locales from './locales';

import * as QuickStart from './pages/quick-start';
import * as Theme from './pages/theme';

import * as Color from './pages/color';
import * as Layout from './pages/layout';
import * as icon from './pages/icon';
import * as button from './pages/button';
import * as hotkeys from './pages/hotkeys';

import * as FormCom from './pages/form';
import * as radio from './pages/radio';
import * as checkbox from './pages/checkbox';
import * as select from './pages/select';
import * as SwitchCom from './pages/switch';
import * as slider from './pages/slider';
import * as input from './pages/input';
import * as inputNumber from './pages/input-number';
import * as timePicker from './pages/time-picker';
import * as datePicker from './pages/date-picker';

import * as Calendar from './pages/calendar';
import * as table from './pages/table';
import * as tooltip from './pages/tooltip';
import * as tag from './pages/tag';
import * as rate from './pages/rate';
import * as badge from './pages/badge';

import * as menu from './pages/menu';
import * as paging from './pages/paging';
import * as breadcrumb from './pages/breadcrumb';

import * as alert from './pages/alert';
import * as modal from './pages/modal';
import * as message from './pages/message';
import * as notification from './pages/notification';
import * as loading from './pages/loading';
import * as transition from './pages/transition';


const routes = {
  documents:[
    { path:"/:lang/quick-start",component:QuickStart},
    { path:"/:lang/theme",component:Theme},
  ],
  components:{
    'Basic':[
      {path:"/:lang/color",component:Color},
      {path:"/:lang/layout",component:Layout},
      {path:"/:lang/icon",component:icon},
      {path:"/:lang/button",component:button},
      {path:"/:lang/hotkeys",component:hotkeys},
    ],
    'Form':[
      {path:"/:lang/form",component:FormCom},
      {path:"/:lang/radio",component:radio},
      {path:"/:lang/checkbox",component:checkbox},
      {path:"/:lang/select",component:select},
      {path:"/:lang/slider",component:slider},
      {path:"/:lang/switch",component:SwitchCom},
      {path:"/:lang/input",component:input},
      {path:"/:lang/input-number",component:inputNumber},
      {path:"/:lang/time-picker",component:timePicker},
      {path:"/:lang/date-picker",component:datePicker},
    ],
    'Data Display':[
      {path:"/:lang/calendar",component:Calendar},
      {path:"/:lang/table",component:table},
      {path:"/:lang/tooltip",component:tooltip},
      {path:"/:lang/tag",component:tag},
      {path:"/:lang/rate",component:rate},
      {path:"/:lang/badge",component:badge},
    ],
    'Navigation':[
      {path:"/:lang/menu",component:menu},
      {path:"/:lang/paging",component:paging},
      {path:"/:lang/breadcrumb",component:breadcrumb},
    ]
  },
  redirect:[
    //重定向到 quick start 页面
    { path:"",redirect:"/cn/quick-start"}
  ]
}

var getLang =(key) =>{
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

const getComponent = (page)=>{
  if (page) {
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
    let COM = ({match}) => {
      return getComponent(item.component)
    };
    if(!item.path) {
      return <Redirect key={idx} push to={{ pathname: item.redirect }} />
    }
    return <Route key={idx} path={item.path} component={COM} />
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

const renderMenuLi = (item) =>{
  if(!item.path) return null;
  return (
    <li>
      <Link 
      className={getPageName(item.path)===getPageName(location.href)?'active':''}
      to={`/${getLangName()}/${getPageName(item.path)}`}>
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
      html = html.concat(_obj[a].map((item) => renderMenuLi(item)) )
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



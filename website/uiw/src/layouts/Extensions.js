import React, { PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Tooltip } from 'uiw';
import Nav from '../components/Nav';
import VersionSelect from '../components/VersionSelect';
import logo from '../components/icons/logo';
import menu from '../components/icons/menu';
import { getMenuData, getMenuCurrentData } from '../common/menu';
import styles from './index.module.less';
import version from '../version.json';

export default class UserLayout extends PureComponent {
  constructor(props) {
    super(props);
    const topmenu = localStorage.getItem('_menu');
    this.state = {
      topmenu: topmenu === 'true',
    };
  }
  componentDidMount() {
    this.props.history.listen(() => {
      window.scrollTo(0, 0);
    });
  }
  onSettingTopMenu = () => {
    localStorage.setItem('_menu', !this.state.topmenu);
    this.setState({ topmenu: !this.state.topmenu });
  };
  render() {
    const { routerData } = this.props;
    const { topmenu } = this.state;
    const menuData = getMenuData();
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (/^(\/extensions)/.test(path)) {
        RouteComponents.push(
          <Route
            exact
            key={idx + 1}
            path={path}
            render={(props) => {
              const Com = routerData[path].component;
              return (
                <Com
                  {...props}
                  pageData={getMenuCurrentData(props.location.pathname)}
                />
              );
            }}
          />,
        );
      }
    });
    return (
      <div
        className={[topmenu ? styles.topmenu : null]
          .filter(Boolean)
          .join(' ')
          .trim()}
      >
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">
              <span className={styles.svg}>{logo.dark}</span>
              {topmenu && <span className={styles.title}>uiw</span>}
            </Link>
          </div>
          <Nav
            topmenu={topmenu}
            className="nav-menu"
            menuData={menuData}
            routerData={routerData}
          />
          <div className={styles.btn}>
            <div>
              <Tooltip
                placement={topmenu ? 'bottomRight' : 'right'}
                content="国内镜像站点"
              >
                <a
                  href="http://uiw.gitee.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {menu.china}
                </a>
              </Tooltip>
            </div>
            <div onClick={this.onSettingTopMenu}>
              {topmenu ? menu.menu : menu.menutop}
            </div>
          </div>
        </div>
        <div
          className={styles.content}
          style={{
            marginLeft: topmenu ? 0 : 64,
            paddingTop: topmenu ? 90 : 20,
          }}
        >
          <div className={styles.toolbar}>
            <VersionSelect data={version} />
          </div>
          <Switch>{RouteComponents}</Switch>
        </div>
      </div>
    );
  }
}

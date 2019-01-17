import React, { PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import SiderMenu from '../components/SiderMenu';
import VersionSelect from '../components/VersionSelect';
import { getMenuData, getMenuCurrentData } from '../common/menu';
import logo from '../components/icons/logo';
import styles from './index.module.less';
import version from '../version.json';

export default class UserLayout extends PureComponent {
  render() {
    const { routerData } = this.props;
    const menuData = getMenuData();
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (/^(\/components|\/guide)/.test(path)) {
        RouteComponents.push(
          <Route
            exact
            key={idx + 1}
            path={path}
            render={(props) => {
              const Com = routerData[path].component;
              return <Com {...props} pageData={getMenuCurrentData(props.location.pathname)} />;
            }}
          />
        );
      }
    });
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/"> {logo.dark} </Link>
          </div>
          <Nav menuData={menuData} routerData={routerData} />
        </div>
        <div className={styles.sidebar}>
          <SiderMenu menuData={menuData} {...this.props} />
        </div>
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <VersionSelect data={version} />
          </div>
          <Switch>
            {RouteComponents}
          </Switch>
        </div>
      </>
    );
  }
}

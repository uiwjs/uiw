import React, { PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import SiderMenu from '../components/SiderMenu';
import logo from '../components/icons/logo';
import styles from './ComponentsLayout.module.less';

export default class UserLayout extends PureComponent {
  render() {
    const { routerData } = this.props;
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (/^(\/components|\/guide)/.test(path) && !/^(\/components|\/guide)$/.test(path)) {
        RouteComponents.push(
          <Route
            exact
            key={idx + 1}
            path={path}
            component={routerData[path].component}
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
          <Nav />
        </div>
        <div className={styles.sidebar}>
          <SiderMenu {...this.props} />
        </div>
        <div className={styles.content}>
          <Switch>
            {RouteComponents}
          </Switch>
        </div>
      </>
    );
  }
}

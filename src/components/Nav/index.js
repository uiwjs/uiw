import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../../common/menu';
import { getRouterData } from '../../routes';
import nav from '../icons/nav';
import styles from './index.module.less';

export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={styles.nav}>
        {Object.keys(menuData).map((key, idx) => {
          let icon = menuData[key].icon;
          const path = menuData[key].path;
          if (Object.keys(nav).includes(icon)) {
            icon = nav[icon];
          }
          if (/^https?:(?:\/\/)?/.test(path)) {
            return <a target="__blank" key={idx} href={path}>{icon}</a>;
          }
          const routerData = getRouterData();
          let toPath = `/${path}`;
          if (!routerData[toPath] && menuData[key].children) {
            toPath = `${toPath}/${menuData[key].children[0].path}`;
          }
          return <NavLink activeClassName={styles.selected} key={idx} to={toPath}>{icon}</NavLink>;
        })}
      </div>
    );
  }
}

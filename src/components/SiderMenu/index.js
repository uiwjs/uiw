import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';
import { menuData } from '../../common/menu';
import nav from '../icons/nav';

export default class SiderMenu extends Component {
  render() {
    const { location } = this.props;
    const navkeys = Object.keys(menuData);
    const path = location.pathname.replace(/^\//, '').split('/');
    const navName = navkeys.filter(item => item === path[0]);
    if (navName.length === 0) {
      return null;
    }
    const navData = menuData[navName[0]];
    return (
      <div className={styles.wapper}>
        <h2 className={styles.title}>{nav[navData.icon]}<span>{navData.name}</span></h2>
        <div className={styles.menu}>
          {navData.children && navData.children.map((item, idx) => {
            if (item.divider) {
              return <div key={idx} className={styles.divider}>{item.name}</div>;
            }
            const pathTo = `/${navData.path}/${item.path}`;
            return <NavLink activeClassName={styles.selected} key={idx} to={pathTo}>{item.name}</NavLink>;
          })}
        </div>
      </div>
    );
  }
}

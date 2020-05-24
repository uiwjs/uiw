import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './index.module.less';
import nav from '../icons/nav';

export default class SiderMenu extends Component {
  render() {
    const { location, topmenu } = this.props;
    const path = location.pathname.split('/')[1];
    const navData = this.props.menuData.filter(item => item.path === `/${path}`)[0];
    if (!navData) {
      return null;
    }
    return (
      <div className={classnames(styles.wapper, { [`${styles.topmenu}`]: topmenu })}>
        <h2 className={styles.title}>{nav[navData.icon]}<span>{navData.name}</span></h2>
        <div className={styles.menu}>
          {navData.children && navData.children.map((item, idx) => {
            if (item.divider) {
              return <div key={idx} className={styles.divider}>{item.name}</div>;
            }
            if (/^http(?:|s):\/\//.test(item.path)) {
              return <a key={idx} href={item.path} target="__blank">{item.name}</a>
            }
            return <NavLink activeClassName={styles.selected} key={idx} to={item.path} replace>{item.name}</NavLink>;
          })}
        </div>
      </div>
    );
  }
}

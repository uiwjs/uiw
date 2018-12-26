import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        {this.props.menuData.map((item, idx) => {
          let icon = item.icon;
          if (Object.keys(nav).includes(icon)) {
            icon = nav[icon];
          }
          if (/^https?:(?:\/\/)?/.test(item.path)) {
            return <a key={idx} target="__blank" href={item.path}>{icon}</a>;
          }
          return <NavLink activeClassName={styles.selected} key={idx} to={item.path}>{icon}</NavLink>;
        })}
      </div>
    );
  }
}

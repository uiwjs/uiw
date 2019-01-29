import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'uiw';
import nav from '../icons/nav';
import styles from './index.module.less';

export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { routerData } = this.props;
    return (
      <div className={styles.nav}>
        {this.props.menuData.map((item, idx) => {
          let icon = item.icon;
          if (Object.keys(nav).includes(icon)) {
            icon = nav[icon];
          }
          if (/^https?:(?:\/\/)?/.test(item.path)) {
            return (
              <a key={idx} target="__blank" href={item.path}>
                <Tooltip placement="right" content={item.name}>
                  {icon}
                </Tooltip>
              </a>
            );
          }
          let noPath = null;
          if (!routerData[item.path] && item.children && item.children.length > 0) {
            noPath = item.children[0].path;
          }
          return (
            <NavLink activeClassName={styles.selected} key={idx} to={noPath || item.path}>
              <Tooltip placement="right" content={item.name}>
                {icon}
              </Tooltip>
            </NavLink>
          );
        })}
      </div>
    );
  }
}

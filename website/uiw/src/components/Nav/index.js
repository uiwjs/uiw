import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { Tooltip } from 'uiw';
import nav from '../icons/nav';
import styles from './index.module.less';

export default class index extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { className, topmenu, routerData } = this.props;
    return (
      <div
        className={classnames(styles.nav, className, {
          [`${styles.topmenu}`]: topmenu,
        })}
      >
        {this.props.menuData.map((item, idx) => {
          let icon = item.icon;
          if (Object.keys(nav).includes(icon)) {
            icon = nav[icon];
          }
          if (/^https?:(?:\/\/)?/.test(item.path)) {
            if (topmenu) {
              return (
                <a
                  key={idx}
                  target="__blank"
                  href={item.path}
                  className={styles.outerUrl}
                >
                  {icon}
                </a>
              );
            }
            return (
              <Tooltip key={idx} placement="right" content={item.name}>
                <a target="__blank" href={item.path}>
                  {icon}
                </a>
              </Tooltip>
            );
          }
          let noPath = null;
          if (
            !routerData[item.path] &&
            item.children &&
            item.children.length > 0
          ) {
            noPath = item.children[0].path;
          }
          if (topmenu) {
            return (
              <NavLink
                key={idx}
                activeClassName={styles.selected}
                to={noPath || item.path}
                replace
              >
                {icon}
                <span>{item.name}</span>
              </NavLink>
            );
          }
          return (
            <Tooltip key={idx} placement="right" content={item.name}>
              <NavLink
                activeClassName={styles.selected}
                to={noPath || item.path}
                replace
              >
                {icon}
              </NavLink>
            </Tooltip>
          );
        })}
      </div>
    );
  }
}

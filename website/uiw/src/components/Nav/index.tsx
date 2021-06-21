import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'uiw';
import nav from '../icons/nav';
import styles from './index.module.less';
import { DefaultProps } from '../../';
import { MenuDataItem } from '../../common/menu';

type NavProps = DefaultProps & {
  className?: string;
  topmenu?: boolean;
  menuData?: MenuDataItem[];
  // routerData?: any;
};

export default function Nav(props: NavProps) {
  const { className, topmenu, menuData = [], routerData } = props;
  return (
    <div
      className={[styles.nav, className, topmenu ? styles.topmenu : null]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      {menuData.map((item: any, idx: number) => {
        let icon = item.icon;
        if (Object.keys(nav).includes(icon)) {
          icon = (nav as any)[icon];
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
            <Tooltip
              usePortal={false}
              key={idx}
              placement="right"
              content={
                <span style={{ whiteSpace: 'nowrap' }}>{item.name}</span>
              }
            >
              <a target="__blank" href={item.path}>
                {icon}
              </a>
            </Tooltip>
          );
        }
        let noPath = null;
        if (
          !routerData[item.path as keyof NavProps['routerData']] &&
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
          <Tooltip
            usePortal={false}
            key={idx}
            placement="right"
            content={<span style={{ whiteSpace: 'nowrap' }}>{item.name}</span>}
          >
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

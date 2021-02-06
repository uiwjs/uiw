import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';
import nav from '../icons/nav';
import { DefaultProps } from '../../';
import { MenuDataItem } from '../../common/menu';

type SiderMenuProps = DefaultProps & {
  topmenu?: boolean;
  menuData?: MenuDataItem[];
};

export default function SiderMenu(props: SiderMenuProps) {
  const { location, topmenu, menuData } = props;
  console.log('topmenu:', topmenu);
  console.log('menuData:', menuData);
  console.log('props:', props);
  const path = location.pathname.split('/')[1];
  const navData = (menuData || []).filter(
    (item: MenuDataItem) => item.path === `/${path}`,
  )[0];
  if (!navData) {
    return null;
  }
  return (
    <div
      className={[styles.wapper, topmenu ? styles.topmenu : null]
        .filter(Boolean)
        .join(' ')
        .trim()}
    >
      <h2 className={styles.title}>
        {(nav as any)[navData.icon]}
        <span>{navData.name}</span>
      </h2>
      <div className={styles.menu}>
        {navData.children &&
          navData.children.map((item, idx) => {
            if (item.divider) {
              return (
                <div key={idx} className={styles.divider}>
                  {item.name}
                </div>
              );
            }
            if (/^http(?:|s):\/\//.test(item.path)) {
              return (
                <a key={idx} href={item.path} target="__blank">
                  {item.name}
                </a>
              );
            }
            return (
              <NavLink
                activeClassName={styles.selected}
                key={idx}
                to={item.path}
                replace
              >
                {item.name}
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

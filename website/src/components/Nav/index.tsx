import { Fragment, useContext } from 'react';
import { Tooltip } from 'uiw';
import { NavLink, Link } from 'react-router-dom';
import styles from './index.module.less';
import data from '../../menu.json';
import { ThemeContext } from '../../contexts';
import nav from '../icons/nav';
import logo from '../icons/logo';
import menu from '../icons/menu';

export default function Nav() {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <Fragment>
      <div className={[styles.logo, state.layout === 'left' ? null : styles.top].filter(Boolean).join(' ').trim()}>
        <Link to="/">
          {logo.dark}
          {state.layout === 'top' && <span>UIW</span>}
        </Link>
      </div>
      <div className={[styles.nav, state.layout === 'left' ? null : styles.navTop].filter(Boolean).join(' ').trim()}>
        {data.map(({ path, name, icon }, idx) => {
          if (Object.keys(nav).includes(icon)) {
            icon = (nav as any)[icon];
          }
          if (/^https?:(?:\/\/)?/.test(path)) {
            if (state.layout === 'top') {
              return (
                <a key={idx} target="__blank" href={path} className={styles.outerUrl}>
                  {icon} <span>{name}</span>
                </a>
              );
            }
            return (
              <Tooltip
                usePortal={false}
                key={idx}
                placement={state.layout === 'left' ? 'right' : 'bottom'}
                content={<span style={{ whiteSpace: 'nowrap' }}>{name}</span>}
              >
                <a target="__blank" href={path} className={styles.outerUrl}>
                  {icon}
                </a>
              </Tooltip>
            );
          }
          let activeStyle: React.CSSProperties = {
            color: '#fff',
          };
          if (state.layout === 'top') {
            return (
              <NavLink
                to={path}
                key={idx}
                // @ts-ignore
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {icon} <span>{name}</span>
              </NavLink>
            );
          }

          return (
            <Tooltip
              usePortal={false}
              key={idx}
              placement={state.layout === 'left' ? 'right' : 'bottom'}
              content={<span style={{ whiteSpace: 'nowrap' }}>{name}</span>}
            >
              <NavLink
                to={path}
                // @ts-ignore
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {icon}
              </NavLink>
            </Tooltip>
          );
        })}
      </div>
      <div className={[styles.btn, state.layout === 'left' ? null : styles.btnTop].filter(Boolean).join(' ').trim()}>
        <Tooltip placement={state.layout === 'left' ? 'right' : 'bottom'} content="国内镜像站点">
          <a href="http://uiw.gitee.io" rel="noopener noreferrer" target="_blank">
            {menu.china}
          </a>
        </Tooltip>
        <button onClick={() => dispatch({ layout: state.layout === 'left' ? 'top' : 'left' })}>
          {state.layout === 'left' ? menu.menu : menu.menutop}
        </button>
      </div>
    </Fragment>
  );
}

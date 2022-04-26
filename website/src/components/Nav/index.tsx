import { Fragment, useState, useContext, ChangeEvent, useMemo } from 'react';
import { Col, Row, Tooltip } from 'uiw';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import styles from './index.module.less';
import { ThemeContext } from '../../contexts';
import nav from '../icons/nav';
import logo from '../icons/logo';
import menu from '../icons/menu';
import pkg from 'uiw/package.json';
import i18n from '../../react-i18next-config';
import { useTranslation } from 'react-i18next';
import { LayoutMenuType } from 'locale/menu/layoutMenuType';

export default function Nav() {
  const { state, dispatch } = useContext(ThemeContext);
  const [language, setLanguage] = useState('zh-CN');
  const { t: trans } = useTranslation();
  const data = useMemo(() => JSON.parse(trans('menu')), [language]);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    console.log('e.target.value', e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Fragment>
      <div className={[styles.logo, state.layout === 'left' ? null : styles.top].filter(Boolean).join(' ').trim()}>
        <Link to="/">
          {logo.dark}
          {state.layout === 'top' && (
            <span>
              UIW<sup>{pkg.version}</sup>
            </span>
          )}
        </Link>
      </div>
      <div className={[styles.nav, state.layout === 'left' ? null : styles.navTop].filter(Boolean).join(' ').trim()}>
        {data.map(({ path, name, icon }: LayoutMenuType, idx: number) => {
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
        <select value={language} onChange={(e) => changeLanguage(e)}>
          <option value="zh-CN">简</option>
          <option value="en-US">English</option>
        </select>

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

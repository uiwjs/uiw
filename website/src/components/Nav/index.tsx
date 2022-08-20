import { Fragment, useContext, ChangeEvent, useMemo, useState } from 'react';
import { SearchSelect, Tooltip } from 'uiw';
import { NavLink, Link } from 'react-router-dom';
import styles from './index.module.less';
import { ThemeContext } from '../../contexts';
import nav from '../icons/nav';
import logo from '../icons/logo';
import menu from '../icons/menu';
import pkg from 'uiw/package.json';
import { useTranslation } from 'react-i18next';
import data from '../../menu.json';

export default function Nav() {
  const { state, dispatch } = useContext(ThemeContext);
  const { t: trans, i18n } = useTranslation();
  const [searchText, setSearchText] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const data = useMemo(() => JSON.parse(trans('menu')), [i18n.language]);
  const menuSearchOption = useMemo(() => {
    const components = data.find((m) => m.path === '/components')?.children || [];
    const option = [];
    for (let i = 0; i < components.length; i++) {
      const com = components[i];
      const label = com.name;
      if (com.path && label.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
        const item = { label, value: com.path || '' };
        option.push(item);
      }
    }
    return option;
  }, [searchText, i18n.language]);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  const onSearchMenu = (searchText: string) => {
    setSearchText(searchText);
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
        <div style={{ display: 'flex' }}>
          {data.map(({ path, name, icon, translation }, idx: number) => {
            if (Object.keys(nav).includes(icon)) {
              icon = (nav as any)[icon];
            }
            let newName = translation ? trans(`menu.${translation}`) : trans(`menu.${path}`);
            if (/^\//.test(path)) {
              newName = trans(`menu.${path}`);
            }

            if (/^https?:(?:\/\/)?/.test(path)) {
              if (state.layout === 'top') {
                return (
                  <a key={idx} target="__blank" href={path} className={styles.outerUrl}>
                    {icon} <span>{newName}</span>
                  </a>
                );
              }
              return (
                <Tooltip
                  usePortal={false}
                  key={idx}
                  placement={state.layout === 'left' ? 'right' : 'bottom'}
                  content={<span style={{ whiteSpace: 'nowrap' }}>{newName}</span>}
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
                  {icon} <span>{newName}</span>
                </NavLink>
              );
            }

            return (
              <Tooltip
                usePortal={false}
                key={idx}
                placement={state.layout === 'left' ? 'right' : 'bottom'}
                content={<span style={{ whiteSpace: 'nowrap' }}>{newName}</span>}
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
        <SearchSelect
          size="small"
          style={{ width: 200, top: 30, display: 'flex', alignItems: 'center', marginLeft: 5 }}
          placeholder="搜索组件"
          showSearch={true}
          onSearch={onSearchMenu}
          value={searchText}
          option={menuSearchOption}
          onSelect={(value) => {
            const isHttp = new RegExp(`^http`).test(value as string);
            if (isHttp) window.open(value as string);
            else window.location.href = `/#/components/${value}`;
          }}
        />
      </div>
      <div className={[styles.btn, state.layout === 'left' ? null : styles.btnTop].filter(Boolean).join(' ').trim()}>
        <select value={i18n.language} onChange={(e) => changeLanguage(e)}>
          <option value="zh-CN">简体中文</option>
          <option value="en-US">English</option>
        </select>

        <Tooltip placement={state.layout === 'left' ? 'right' : 'bottom'} content="国内镜像站点">
          <a href="http://uiw.gitee.io" rel="noopener noreferrer" target="_blank">
            {menu.china}
          </a>
        </Tooltip>
        {/* <button onClick={() => dispatch({ ...state, layout: state.layout === 'left' ? 'top' : 'left' })}>
          {state.layout === 'left' ? menu.menu : menu.menutop}
        </button> */}
      </div>
    </Fragment>
  );
}

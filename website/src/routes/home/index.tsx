import { Link } from 'react-router-dom';
import logo from '../../components/icons/logo';
import styles from './index.module.less';

export default function Home() {
  // @ts-ignore
  // eslint-disable-next-line
  const version = VERSION;
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.Logo}>{logo.dark}</div>
        <div className={styles.Title}>
          uiw<sup>{version}</sup>
        </div>
        <div className={styles.Des}>A Component Library for React 16+.</div>
        <div>
          <Link className={styles.AppLink} to="/guide/quick-start">
            {' '}
            Getting Started{' '}
          </Link>
          <Link className={styles.AppLink} to="/components">
            {' '}
            Components{' '}
          </Link>
          <Link className={styles.AppLink} to="/extensions">
            {' '}
            Extensions{' '}
          </Link>
          <a
            className={styles.AppLink}
            href="https://github.com/uiwjs/uiw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={styles.AppLink}
            href="https://gitee.com/uiw/uiw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gitee
          </a>
        </div>
      </header>
    </div>
  );
}

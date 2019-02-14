import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/icons/logo';
import styles from './index.module.less';
import pkg from '../../../packages/core/package.json';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <div className={styles.Logo}>{logo.dark}</div>
          <div className={styles.Title}>
            uiw<sup>{pkg.version}</sup>
          </div>
          <div className={styles.Des}>
            A Component Library for React 16+.
          </div>
          <div>
            <Link className={styles.AppLink} to="/guide/quick-start"> Guide </Link>
            <Link className={styles.AppLink} to="/components"> Components </Link>
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
}

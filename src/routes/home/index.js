import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../components/icons/logo';
import styles from './index.module.less';

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
          <div className={styles.Des}>
            A high quality UI Toolkit, A Component Library for React 16+.
          </div>
          <div>
            <Link className={styles.AppLink} to="/components"> 组件库 </Link>
            <a
              className={styles.AppLink}
              href="https://github.com/jaywcjlove/kkt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </header>
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.App}>
        概览 组件
        <div className={styles.components}>
          <Link to="/components/icon">Icon 图标</Link>
          <Link to="/components/divider">Divider 分割线</Link>
        </div>
      </div>
    );
  }
}

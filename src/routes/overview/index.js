import React, { PureComponent } from 'react';
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
      </div>
    );
  }
}

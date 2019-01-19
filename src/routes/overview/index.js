import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@uiw/core';
import styles from './index.module.less';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pageData } = this.props;
    return (
      <div className={styles.App}>
        <h1>概览 组件</h1>
        {pageData.children.map((item, idx) => {
          if (item.divider) {
            return <h2 key={idx}>{item.name}</h2>;
          }
          return (
            <Link key={idx} to={`/components/${item.path}`}><Button type="light">{item.name}</Button></Link>
          );
        })}
      </div>
    );
  }
}

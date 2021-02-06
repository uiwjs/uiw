import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'uiw';
import styles from './index.module.less';
// import { DefaultProps } from '../../';

export default function Overview(props: any) {
  const { pageData } = props;
  console.log('pageData:', pageData);
  return (
    <div className={styles.App}>
      <h1>概览 组件</h1>
      {pageData.children.map((item: any, idx: number) => {
        if (item.divider) {
          return <h2 key={idx}>{item.name}</h2>;
        }
        return (
          <Link key={idx} to={`/components/${item.path}`}>
            <Button type="light">{item.name}</Button>
          </Link>
        );
      })}
    </div>
  );
}

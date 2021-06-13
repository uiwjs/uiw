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
        if (/^http(?:|s):\/\//.test(item.path)) {
          return (
            <a key={idx} href={item.path} target="__blank">
              <Button type="light">
                {item.name}
                <svg viewBox="0 0 1024 1024" width={14}>
                  <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                  <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
                </svg>
              </Button>
            </a>
          );
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

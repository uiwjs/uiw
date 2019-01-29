import React, { Component } from 'react';
import { Select } from 'uiw';
import styles from './index.module.less';

export default class VersionSelect extends Component {
  onChange(e) {
    const version = e.target.value;
    const isV1 = version.split('.')[0] === '1';
    if (isV1) {
      window.location.href = `https://unpkg.com/uiw@${version}/dist/index.html`;
    } else {
      window.location.href = `https://unpkg.com/uiw@${version}/docs/index.html`;
    }
  }
  render() {
    const { data } = this.props;
    return (
      <div className={styles.nav}>
        <Select defaultValue={data[0]} onChange={this.onChange.bind(this)}>
          {data.map((version, idx) => {
            return (
              <Select.Option key={idx} value={version}>{version}</Select.Option>
            );
          })}
        </Select>
      </div>
    );
  }
}

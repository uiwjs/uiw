import React, { useMemo } from 'react';
import { Select } from 'uiw';
import pkg from 'uiw/package.json';
import styles from './index.module.less';

type OptionsProps = {
  version?: string;
};

function Options(props = {} as OptionsProps) {
  return useMemo(() => <Select.Option value={props.version}>{props.version}</Select.Option>, [props.version]);
}

export type VersionSelectProps = {
  data: string[];
};

const VersionSelect = (props = {} as VersionSelectProps) => {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const version = e.target.value;
    const isV1 = version.split('.')[0] === '1';
    if (isV1) {
      window.location.href = `https://unpkg.com/uiw@${version}/dist/index.html`;
    } else {
      window.location.href = `https://unpkg.com/@uiw/doc@${version}/web/index.html`;
    }
  }
  // @ts-ignore
  // eslint-disable-next-line no-undef
  const currentVersion = pkg.version;
  const versionList = props.data;
  const firstVersion = versionList[0];
  if (firstVersion !== currentVersion) {
    versionList.unshift(currentVersion);
  }
  return useMemo(
    () => (
      <div className={styles.nav}>
        <Select defaultValue={versionList[0]} onChange={onChange}>
          {versionList.map((version, idx) => {
            return <Options key={idx} version={version} />;
          })}
        </Select>
      </div>
    ),
    [versionList],
  );
};

export default VersionSelect;

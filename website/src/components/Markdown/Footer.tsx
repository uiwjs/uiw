import React, { Fragment } from 'react';
import { Divider } from 'uiw';

export type FooterProps = {
  path?: string;
};

export default function (props: FooterProps = {}) {
  const { path } = props;
  const url = /^http/.test(path || '') ? path : `https://github.com/uiwjs/uiw/blob/master/${path}`;
  return (
    <Fragment>
      犯了错误还是想对文件做出贡献？
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          在Github上编辑本页！
        </a>
      )}
      <br />
      <a href="https://github.com/uiwjs/uiw/issues" target="_blank" rel="noopener noreferrer">
        反馈建议
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw/issues/new">
        提交bug
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">
        Github
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt">
        kkt
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt-ssr">
        @kkt/ssr
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="http://uiw.gitee.io">
        国内镜像
      </a>
    </Fragment>
  );
}

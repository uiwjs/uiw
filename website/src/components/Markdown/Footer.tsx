import React, { Fragment } from 'react';
import { Divider } from 'uiw';
import { useTranslation } from 'react-i18next';
import i18n, { DefLan } from 'react-i18next-config';

export type FooterProps = {
  path?: string;
};

export default function (props: FooterProps = {}) {
  const { path } = props;
  const { t: trans } = useTranslation();
  const url = /^http/.test(path || '') ? path : `https://github.com/uiwjs/uiw/blob/master/${path}`;
  console.log('path', path);
  return (
    <Fragment>
      {trans('footer.greeting')}
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {trans('footer.greetLinkText')}
        </a>
      )}
      <br />
      <a href="https://github.com/uiwjs/uiw/issues" target="_blank" rel="noopener noreferrer">
        {trans('footer.issues')}
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw/issues/new">
        {trans('footer.bug')}
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">
        {trans('footer.github')}
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt">
        {trans('footer.kkt')}
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt-ssr">
        {trans('footer.kkt_ssr')}
      </a>
      <Divider type="vertical" />
      <a target="_blank" rel="noopener noreferrer" href="http://uiw.gitee.io">
        {trans('footer.io')}
      </a>
    </Fragment>
  );
}

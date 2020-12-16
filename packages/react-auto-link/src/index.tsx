import React, { Fragment } from 'react';

const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

export type AutoLinkProps = {
  text?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default (props: AutoLinkProps = {}) => {
  const { text = '', ...other } = props;
  return (
    <Fragment>
      {text.split(delimiter).map((word) => {
        const match = word.match(delimiter);
        if (match) {
          const url = match[0];
          return (
            <a {...other} href={url.startsWith('http') ? url : `http://${url}`}>
              {url}
            </a>
          );
        }
        return word;
      })}
    </Fragment>
  );
};

import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import styles from './styles/index.module.less';
import InlineCode from './InlineCode';
import ListItem from './ListItem';
import Heading from './Heading';

export default class Markdown extends Component {
  render() {
    const { source, ...otherProps } = this.props;
    return (
      <div {...otherProps}>
        <ReactMarkdown
          className={classNames(styles.markdown, 'markdown-body')}
          source={source}
          escapeHtml={false}
          renderers={{
            code: InlineCode,
            heading: Heading,
            listItem: ListItem,
          }}
          allowNode={(node) => {
            return node;
          }}
        />
      </div>
    );
  }
}

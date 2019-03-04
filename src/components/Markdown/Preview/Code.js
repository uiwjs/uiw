import React from 'react';
import CodeView from './CodeView';

export default function Code({ language, value }) {
  return (
    <CodeView language={language} value={value.replace(/\\(`|!)/g, '$1')} />
  );
}

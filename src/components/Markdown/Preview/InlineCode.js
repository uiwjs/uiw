import React from 'react';

export default function InlineCode({ value }) {
  return <code>{value.replace(/\\(`|!)/g, '$1')}</code>;
}

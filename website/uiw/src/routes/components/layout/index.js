import { useState } from 'react';
import { Layout, Divider } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-layout/README.md';
  dependencies = { Layout, Divider, useState };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-layout/README.md');
    return md.default || md;
  }
}

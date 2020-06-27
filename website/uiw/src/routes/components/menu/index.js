import { useState, useEffect, useRef } from 'react';
import { Menu, Row, Col, Switch, Icon, Popover, Button } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-menu/README.md';
  dependencies = {
    useState,
    useEffect,
    useRef,
    Menu,
    Row,
    Col,
    Switch,
    Icon,
    Popover,
    Button,
  };
  async renderPage() {
    const md = await import('uiw/node_modules/@uiw/react-menu/README.md');
    return md.default || md;
  }
}

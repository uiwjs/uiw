import React, { PureComponent } from 'react';
import CodeView from './CodeView';

export default class Canvas extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { html: props.value || '' };
  }
  render() {
    const { language, value } = this.props;
    return (
      <CodeView language={language} value={value} />
    );
  }
}

import React from 'react';

export default class RefHolder extends React.PureComponent {
  render = () => this.props.children;
}

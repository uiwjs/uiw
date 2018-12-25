import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './routes/home';
import ComponentsLayout from './layouts/ComponentsLayout';

class RoutersController extends React.PureComponent {
  render() {
    const { resetProps } = this.props;
    return (
      <Switch>
        <Route path="/components" render={props => <ComponentsLayout {...props} {...resetProps} />} />
        <Route path="/guide" render={props => <ComponentsLayout {...props} {...resetProps} />} />
        <Route path="/" render={props => <Home {...props} {...resetProps} />} />
      </Switch>
    );
  }
}

const mapState = ({ global }) => ({
  test: global.test,
});

const mapDispatch = ({ global }) => ({
  verify: global.verify,
});

export default connect(mapState, mapDispatch)(RoutersController);

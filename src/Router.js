import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './routes/home';
import Components from './layouts/Components';

class RoutersController extends React.PureComponent {
  render() {
    const { resetProps } = this.props;
    console.log('resetProps:', resetProps);
    return (
      <Switch>
        <Route path="/components" render={props => <Components {...props} {...resetProps} />} />
        <Route path="/guide" render={props => <Components {...props} {...resetProps} />} />
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

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import Components from './layouts/Components';
import Extensions from './layouts/Extensions';
import { DefaultProps } from './';

export default function RoutersController(props: DefaultProps) {
  const { ...resetProps } = props;
  return (
    <Switch>
      <Route
        path="/components"
        render={(props) => <Components {...props} {...resetProps} />}
      />
      <Route
        path="/extensions"
        render={(props) => <Extensions {...props} {...resetProps} />}
      />
      <Route
        path="/guide"
        render={(props) => <Components {...props} {...resetProps} />}
      />
      <Route path="/" render={(props) => <Home {...props} {...resetProps} />} />
    </Switch>
  );
}

import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import Layout from './components/Layout'
import Home from './Home'
import NotFound from './NotFound'
import Wizard from './components/Wizard'

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Home}
        exact
        layout={Layout}
        path="/"
      />
      <RouteWithLayout
        component={Wizard}
        layout={Layout}
        exact
        path='/wizard'
      />
      <RouteWithLayout
        component={NotFound}
        layout={Layout}
        exact
        path='/not-found'
      />
      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;

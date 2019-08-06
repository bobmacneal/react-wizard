import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import Layout from './Layout'
import HomeView from './HomeView'
import NotFoundView from './NotFoundView'
import WizardForm from './components/WizardForm'

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={HomeView}
        exact
        layout={Layout}
        path="/"
      />
      <RouteWithLayout
        component={WizardForm}
        layout={Layout}
        exact
        path='/action-builder'
      />
      <RouteWithLayout
        component={NotFoundView}
        layout={Layout}
        exact
        path='/not-found'
      />
      <Redirect to='/not-found' />
    </Switch>
  );
};

export default Routes;

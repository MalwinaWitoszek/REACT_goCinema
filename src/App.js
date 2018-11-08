import React from "react";
import Navigation from "./components/Navigation/Navigation";
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Route, Redirect, Switch } from 'react-router-dom'
import routeConfig from './routes'
import styles from "./App.module.scss";


const App = () => {
  const routes = routeConfig.routes.map(({id, path, component, exact}) => (
    <Route
    key={id}
    path={path}
    component={component}
    exact={exact} />
  ));

  const redirect = routeConfig.redirects.map(({id, from, to, exact}) => (
    <Redirect
    key={id}
    from={from}
    to={to}
    exact={exact}
    />
  ))

  return (
    <div >
    <Navigation />
    <Switch>
      {routes}
      {redirect}
      <Route path='*' component={PageNotFound}/>
    </Switch>
  </div>

  )

};


export default App;

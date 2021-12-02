import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "pages/auth/login/login";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;

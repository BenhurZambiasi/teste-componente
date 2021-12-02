import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { isLogged } from '../auth/auth'


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    isLogged() ?
      (<Component {...props} />) :
      (<Redirect to={{ pathname: "/", state: { from: props.location } }} />)} />
)

export default ProtectedRoute
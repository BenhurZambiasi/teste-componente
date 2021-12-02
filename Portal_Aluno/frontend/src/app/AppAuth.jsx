import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "routes";

import { AuthProvider } from "components/contexts/auth";

import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

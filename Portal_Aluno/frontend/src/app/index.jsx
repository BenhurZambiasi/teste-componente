import React from "react";
import { useAuth } from "components/contexts/auth";
import AppAuth from "./AppAuth";
import App from "./App";

export default function AppContext() {
  const { signed } = useAuth();

  return signed ? <App /> : <AppAuth />;
}

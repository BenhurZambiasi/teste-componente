import React from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "components/contexts/auth";

export default function Routes(props) {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

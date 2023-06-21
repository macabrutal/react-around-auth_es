//utiliza este componente para proteger la ruta / de tal modo que los usuarios no autorizados no puedan acceder a ella.

import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
}

export default ProtectedRoute;


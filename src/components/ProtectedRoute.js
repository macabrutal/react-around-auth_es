//utiliza este componente para proteger la ruta / de tal modo que los usuarios no autorizados no puedan acceder a ella.

import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, loggedIn, ...props }) {
  return (
    <Route {...props}>
      {loggedIn ? children : <Redirect to="/signin"/>}
    </Route>
  );
}

export default ProtectedRoute;


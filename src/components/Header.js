import React from "react";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      {location.pathname ==='/signin' && (
        <Link to="/signup">
          Regístrate
        </Link>
      )}

      {location.pathname === '/signup' && (
        <Link to="/signin">
          Inicia sesión
        </Link>
      )}

      {
        location.pathname ==='/' &&
        <>
          <p>{props.email}</p>
          <button onClick={props.handleLogout}>Cerrar sesión</button>
        </>
      }
      <hr className="header__line" />
    </header>
  );
}

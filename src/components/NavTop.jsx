import React from "react";
import { NavLink } from "react-router-dom";

export const NavTop = () => {
  return (
    <header>
      <NavLink activeclass="active" to="/" className="item">
        <i className="fas fa-home"></i>
        <span className="nav-links">Accueil</span>
      </NavLink>

      <div className="item">
        <i class="fa-regular fa-user"></i>
        <span className="nav-links">Connexion</span>
      </div>
    </header>
  );
};

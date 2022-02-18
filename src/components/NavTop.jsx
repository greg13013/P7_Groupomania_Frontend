import React from "react";
import { NavLink } from "react-router-dom";

export const NavTop = () => {
  return (
    <header>
      <NavLink activeclass="active" to="/" className="item">
        <i className="fas fa-home"></i>
        <span className="nav-links">Accueil</span>
      </NavLink>

      <NavLink activeclass="active" to="/profil" className="item">
        <i className="fa-regular fa-user"></i>
        <span className="nav-links">Profil</span>
      </NavLink>
      <div className="item">
        <i className="fa-regular fa-user"></i>
        <span className="nav-links">Connexion</span>
      </div>
    </header>
  );
};

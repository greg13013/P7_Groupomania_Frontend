import React from "react";
import { NavLink } from "react-router-dom";
import { ModalConnexion } from "./ModalConnexion";

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

      <NavLink activeclass="active" to="/creerCompte" className="item">
        <i className="fa-regular fa-user"></i>
        <span className="nav-links">Créer un compte</span>
      </NavLink>

      <ModalConnexion />
    </header>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty } from "../Utils";
import { ModalConnexion } from "./ModalConnexion";

export const NavTop = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <header>
      <div className="menu">
        <div className="item">

        <NavLink activeclass="active" to="/">
          <i className="fas fa-home"></i>
          <span className="nav-links">Accueil</span>
        </NavLink>
        </div>


        {!isEmpty(user) ? (
          <div className="item">
          <NavLink activeclass="active" to="/profil">
            <i className="fa-regular fa-user"></i>
            <span className="nav-links">Profil</span>
          </NavLink></div>
        ) : (
          <div className="item">
          <NavLink activeclass="active" to="/creerCompte">
            <i className="fa-regular fa-user"></i>
            <span className="nav-links">Créer un compte</span>
          </NavLink></div>
        )}
      </div>

      <div className="menu">
        <ModalConnexion />
      </div>
    </header>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/user.actions";
import { ModalConnexion } from "./ModalConnexion";

export const NavTop = () => {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  return (
    <header>
      <div className="menu">
        <div className="item">
          <NavLink activeclass="active" to="/">
            <i className="fas fa-home"></i>
            <span className="nav-links">Accueil</span>
          </NavLink>
        </div>

        {user.isLog ? (
          <div className="item">
            <NavLink activeclass="active" to="/profil">
              <i className="fa-regular fa-user"></i>
              <span className="nav-links">Profil</span>
            </NavLink>
          </div>
        ) : (
          <div className="item">
            <NavLink activeclass="active" to="/creerCompte">
              <i className="fa-regular fa-user"></i>
              <span className="nav-links">Créer un compte</span>
            </NavLink>
          </div>
        )}
      </div>

      {user.isLog ? (
        <div className="menu">
          <div className="item" onClick={() => dispatch(logout())}>
            <i className="fa-regular fa-user"></i>
            <span className="nav-links">Déconnexion</span>
          </div>
        </div>
      ) : (
        <div className="menu">
        <ModalConnexion />
      </div>
      )}
    </header>
  );
};

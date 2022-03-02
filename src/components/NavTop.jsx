import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/user.actions";
import { DarkModeContext } from "../context/DarkModeContext";
import { ModalConnexion } from "./ModalConnexion";

export const NavTop = () => {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const {darkMode} = useContext(DarkModeContext)

  const trigger = (
    <div className="item">
      <i className="fa-regular fa-user"></i>
      <span className="nav-links">Connexion</span>
    </div>
  );

  return (
    <header className={darkMode ? "headerDarkMode" : null}>
      <div className="menu">
        <div className="item">
          <NavLink activeclass="active" className="navMobile" to="/">
            <i className="fas fa-home"></i>
            <span className="nav-links">Accueil</span>
          </NavLink>
        </div>

        {user.isLog ? (
          null
        ) : (
          <div className="item">
            <NavLink activeclass="active" className='navMobile' to="/creerCompte">
              <i className="fa-regular fa-user"></i>
              <span className="nav-links">Créer un compte</span>
            </NavLink>
          </div>
        )}
      </div>

      {user.isLog ? (
        <div className="menu">
          <div className="textNav">Bienvenue {user.username}</div>
          <div className="item navMobile" onClick={() => dispatch(logout())}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <span className="nav-links">Déconnexion</span>
          </div>
        </div>
      ) : (
        <div className="menu">
          <ModalConnexion trigger={trigger} />
        </div>
      )}
    </header>
  );
};

import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../context/DarkModeContext";
import { SwitchDarkMode } from "./SwitchDarkMode";

export const Sidebar = () => {
  const user = useSelector((state) => state.userReducer);

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <div
            className={
              darkMode ? "sideBar hide-on-med-and-down darkSideBar" : "sideBar hide-on-med-and-down"
            }
          >
            <SwitchDarkMode />

            <div className="sideBar-logo">
              {/* <img src="img/logo_groupomania.png" alt="logo groupomania" /> */}
              {darkMode ? (
                <img src="img/icon-left-font-monochrome-white.svg" alt="logo" />
              ) : (
                <img src="img/icon-left-font-monochrome-black.svg" alt="logo" />
              )}
            </div>

            {user.isLog ? (
              <div className={darkMode ? "sideBar-user row darkSideBar-user" : "sideBar-user row"}>
                <img
                  src={user.image}
                  alt="logo utilisateur"
                  className="col s9 circle responsive-img"
                />
                <div>{user.username}</div>
                <div>{user.email}</div>
              </div>
            ) : null}

            {user.admin === true && (
              <NavLink
                activeclass="active"
                to="/admin"
                className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
              >
                <i className="fa-solid fa-crown"></i>
                <span className="nav-links">Administration</span>
              </NavLink>
            )}

            {user.isLog && (
              <>
                <NavLink
                  activeclass="active"
                  to="/profil"
                  className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
                >
                  <i className="fa-regular fas fa-user"></i>
                  <span className="nav-links">Profil</span>
                </NavLink>
                <NavLink
                  activeclass="active"
                  to="/creerPost"
                  className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
                >
                  <i className="fas fa-book-open"></i>
                  <span className="nav-links">Créer un post</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>

      <ul
        className={darkMode ? "sidenav sidenav-close darkSideBar" : "sidenav sidenav-close"}
        id="mobile-demo"
      >
        <SwitchDarkMode />

        {user.isLog ? (
          <div className={darkMode ? "sideBar-user row darkSideBar-user" : "sideBar-user row"}>
            <img src={user.image} alt="logo utilisateur" className="col s9 circle responsive-img" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : null}
        {user.admin === true && (
          <NavLink
            activeclass="active"
            to="/admin"
            className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
          >
            <i className="fa-solid fa-crown"></i>
            <span className="nav-links">Administration</span>
          </NavLink>
        )}
        <NavLink
          activeclass="active"
          to="/profil"
          className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
        >
          <i className="fa-regular fas fa-user"></i>
          <span className="nav-links">Profil</span>
        </NavLink>
        <NavLink
          activeclass="active"
          to="/creerPost"
          className={darkMode ? "bloc-link darkBloc-link" : "bloc-link"}
        >
          <i className="fas fa-book-open"></i>
          <span className="nav-links">Créer un post</span>
        </NavLink>
      </ul>
    </div>
  );
};

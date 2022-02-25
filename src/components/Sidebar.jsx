import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <div className="sideBar hide-on-med-and-down">
            <div className="sideBar-logo">
              <img src="img/logo_groupomania.png" alt="logo groupomania" />
            </div>

            {user.isLog ? (
              <div className="sideBar-user row">
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
              <NavLink activeclass="active" to="/admin" className="bloc-link">
                <i className="fa-solid fa-crown"></i>
                <span className="nav-links">Administration</span>
              </NavLink>
            )}

            {user.isLog && (
              <>
                <NavLink activeclass="active" to="/profil" className="bloc-link">
                  <i className="fa-regular fas fa-user"></i>
                  <span className="nav-links">Profil</span>
                </NavLink>
                <NavLink activeclass="active" to="/creerPost" className="bloc-link">
                  <i className="fas fa-book-open"></i>
                  <span className="nav-links">Créer un post</span>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>

      <ul className="sidenav sidenav-close" id="mobile-demo">
        {user.isLog ? (
          <div className="sideBar-user row">
            <img src={user.image} alt="logo utilisateur" className="col s9 circle responsive-img" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : null}
        <NavLink activeclass="active" to="/creerPost" className="bloc-link">
          <i className="fas fa-book-open"></i>
          <span className="nav-links">Créer un post</span>
        </NavLink>
      </ul>
    </div>
  );
};

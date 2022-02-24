import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const user = useSelector((state) => state.userReducer);


  return (
    <div>
      <div className="sideBar">
        <div className="sideBar-logo">
          <img src="img/logo_groupomania.png" alt="logo groupomania" />
        </div>
        {user.isLog ? (
          <div className="sideBar-user">
            <img src={user.image} alt="logo utilisateur" className="ui circular image small" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : null}

        <div activeclass="active" className="bloc-link">
          <span className="nav-links">Créer un post</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const user = useSelector((state) => state.userReducer);


  return (
    // <div>
    //   <div className="sideBar">
    //     <div className="sideBar-logo">
    //       <img src="img/logo_groupomania.png" alt="logo groupomania" />
    //     </div>
        // {user.isLog ? (
        //   <div className="sideBar-user row">
        //     <img src={user.image} alt="logo utilisateur" className="col s9 circle responsive-img" />
        //     <div>{user.username}</div>
        //     <div>{user.email}</div>
        //   </div>
        // ) : null}

    //     <div activeclass="active" className="bloc-link">
    //       <span className="nav-links">Créer un post</span>
    //     </div>
    //   </div>
    // </div>
    <div>

      <nav>
        <div className='nav-wrapper'>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className='sideBar hide-on-med-and-down'>

            <div className='sideBar-logo'>
            <img src="img/logo_groupomania.png" alt="logo groupomania" />
            </div>

            {user.isLog ? (
          <div className="sideBar-user row">
            <img src={user.image} alt="logo utilisateur" className="col s9 circle responsive-img" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : null}

            <NavLink activeclass="active" to="/creerPost" className='bloc-link'>
              <i className="fas fa-book-open"></i>
              <span className='nav-links'>Créer un post</span>
            </NavLink>
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
      <NavLink activeclass="active" to="/creerPost" className='bloc-link'>
              <i className="fas fa-book-open"></i>
              <span className='nav-links'>Créer un post</span>
            </NavLink>
      </ul>


    </div>
  );
};
